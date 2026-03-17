import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-product overflow-hidden bg-muted">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-sale text-primary-foreground text-[10px] font-sans font-bold px-2.5 py-1 tracking-nav uppercase">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          className="absolute top-3 right-3 z-10 p-1.5 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => { e.preventDefault(); }}
          aria-label="Add to wishlist"
        >
          <Heart size={14} strokeWidth={1.5} />
        </button>

        {/* Images */}
        <motion.img
          initial={false}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <motion.img
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          src={product.images[1]}
          alt={`${product.name} alternate`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            className="w-full py-2.5 text-[10px] font-sans font-bold uppercase tracking-nav bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            onClick={(e) => { e.preventDefault(); }}
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base lg:text-lg text-foreground leading-tight line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 font-sans">
          <span className="text-sm font-semibold text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-xs text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] font-bold text-sale uppercase">
                {discount}% off
              </span>
            </>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <p className="text-[10px] font-sans text-muted-foreground">
            {product.colors.join(" · ")}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
