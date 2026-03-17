import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "@/data/products";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = HERO_SLIDES[current];

  return (
    <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] overflow-hidden bg-brand-cream">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 lg:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center px-4"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-background tracking-tight-heading mb-6 drop-shadow-lg">
              {slide.title}
            </h2>
            <Link
              to={slide.link}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans text-xs font-bold uppercase tracking-nav px-8 py-3.5 hover:opacity-90 transition-opacity"
            >
              {slide.cta}
              <ChevronRight size={14} strokeWidth={2} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-background w-6" : "bg-background/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
