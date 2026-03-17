import { Link } from "react-router-dom";
import type { Category } from "@/data/products";

interface MegaMenuProps {
  category: Category;
  onClose: () => void;
}

const MegaMenu = ({ category, onClose }: MegaMenuProps) => {
  if (!category.subcategories) return null;

  return (
    <div className="absolute top-full left-0 bg-background border border-border shadow-sm min-w-[280px] p-5 z-50">
      <div className="grid gap-3">
        {category.subcategories.map((sub) => (
          <Link
            key={sub.slug}
            to={`/category/${sub.slug}`}
            className="flex items-center gap-3 group"
            onClick={onClose}
          >
            <img
              src={sub.image}
              alt={sub.name}
              className="w-10 h-10 object-cover"
              loading="lazy"
            />
            <span className="text-xs font-sans font-medium uppercase tracking-nav text-foreground group-hover:text-muted-foreground transition-colors">
              {sub.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
