import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { PRODUCTS } from "@/data/products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <div className="bg-brand-cream py-12 lg:py-16 text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight-heading">
          All Products
        </h1>
        <p className="font-sans text-sm text-muted-foreground mt-2">
          {PRODUCTS.length} products
        </p>
      </div>

      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <div className="flex gap-4">
            {["All", "Home & Living", "Kitchen & Dining", "Stationery", "Eyewear"].map((filter) => (
              <button
                key={filter}
                className="font-sans text-[10px] font-bold uppercase tracking-nav text-muted-foreground hover:text-foreground transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-14">
        <ProductGrid products={PRODUCTS} />
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
