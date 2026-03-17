import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  image: string;
  reversed?: boolean;
}

const PromoBanner = ({ title, subtitle, cta, link, image, reversed }: PromoBannerProps) => {
  return (
    <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} min-h-[300px] lg:min-h-[400px]`}>
      <div className="flex-1 relative overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 bg-brand-cream">
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight-heading text-center mb-3">
          {title}
        </h3>
        <p className="font-sans text-sm text-muted-foreground text-center mb-6 max-w-sm">
          {subtitle}
        </p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans text-[10px] font-bold uppercase tracking-nav px-8 py-3 hover:opacity-90 transition-opacity"
        >
          {cta}
          <ChevronRight size={12} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
