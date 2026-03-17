import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = CATEGORIES.slice(0, 6);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex flex-1 gap-6 items-center">
          {navItems.map((cat) => (
            <div
              key={cat.slug}
              className="relative"
              onMouseEnter={() => setActiveMenu(cat.slug)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to={`/category/${cat.slug}`}
                className="flex items-center gap-1 text-[11px] font-sans font-bold uppercase tracking-nav text-foreground hover:text-muted-foreground transition-colors py-6"
              >
                {cat.name}
                {cat.subcategories && <ChevronDown size={12} strokeWidth={1.5} />}
              </Link>
              {cat.subcategories && activeMenu === cat.slug && (
                <MegaMenu category={cat} onClose={() => setActiveMenu(null)} />
              )}
            </div>
          ))}
          <Link
            to="/products"
            className="text-[11px] font-sans font-bold uppercase tracking-nav text-foreground hover:text-muted-foreground transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Logo */}
        <Link to="/" className="flex-1 lg:flex-none flex justify-center">
          <h1 className="font-serif text-2xl lg:text-3xl tracking-tight-heading font-bold uppercase">
            The June Shop
          </h1>
        </Link>

        {/* Right icons */}
        <div className="flex flex-1 lg:flex-none justify-end items-center gap-4 lg:gap-6">
          <Link to="/products" aria-label="Search">
            <Search size={20} strokeWidth={1.5} className="text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />
          </Link>
          <Heart size={20} strokeWidth={1.5} className="hidden sm:block text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />
          <Link to="/cart" className="relative" aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} className="text-foreground hover:text-muted-foreground transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[8px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="block py-3 text-xs font-sans font-bold uppercase tracking-nav text-foreground border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              to="/products"
              className="block py-3 text-xs font-sans font-bold uppercase tracking-nav text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              View All Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
