import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { PRODUCTS } from "@/data/products";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const related = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        <nav className="flex items-center gap-2 font-sans text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to={`/category/${product.categorySlug}`} className="hover:text-foreground transition-colors capitalize">
            {product.category}
          </Link>
          <ChevronRight size={10} />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Gallery - left 3 cols */}
          <div className="lg:col-span-3">
            <div className="aspect-product bg-muted overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-foreground" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info - right 2 cols */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            {product.badge && (
              <span className="inline-block bg-sale text-primary-foreground text-[10px] font-sans font-bold px-2.5 py-1 tracking-nav uppercase mb-3">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground tracking-tight-heading mb-4">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-sans text-2xl font-bold text-foreground">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="font-sans text-base text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="font-sans text-xs font-bold text-sale">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && (
              <div className="mb-6">
                <p className="font-sans text-[11px] font-bold uppercase tracking-nav text-foreground mb-2">
                  Color
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      className={`font-sans text-xs px-4 py-2 border transition-colors ${
                        i === 0 ? "border-foreground text-foreground" : "border-border text-muted-foreground hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[11px] font-bold uppercase tracking-nav text-foreground mb-2">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="font-sans text-sm font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button className="flex-1 py-3.5 font-sans text-[11px] font-bold uppercase tracking-nav bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Add to Cart
              </button>
              <button
                className="p-3.5 border border-border hover:border-foreground transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="space-y-3 pt-6 border-t border-border">
              {[
                { icon: Truck, text: "Free shipping on orders above ₹999" },
                { icon: RotateCcw, text: "Easy returns within 48 hours" },
                { icon: Shield, text: "100% secure payments" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} strokeWidth={1.5} className="text-muted-foreground" />
                  <span className="font-sans text-xs text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16 border-t border-border">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground tracking-tight-heading text-center mb-8">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
