import { useParams } from "react-router-dom";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const category = CATEGORIES.find((c) => c.slug === slug);
  const categoryName = category?.name || slug?.replace(/-/g, " ") || "All Products";

  // Filter products or show all
  const filtered = slug
    ? PRODUCTS.filter(
        (p) =>
          p.categorySlug === slug ||
          p.category.toLowerCase().includes(slug.replace(/-/g, " "))
      )
    : PRODUCTS;

  const products = filtered.length > 0 ? filtered : PRODUCTS;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <div className="bg-brand-cream py-12 lg:py-16 text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight-heading capitalize">
          {categoryName}
        </h1>
        <p className="font-sans text-sm text-muted-foreground mt-2">
          {products.length} products
        </p>
      </div>

      {/* Filters bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <div className="flex gap-4">
            {["All", "Price: Low to High", "Price: High to Low", "Newest"].map((filter) => (
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

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-14">
        <ProductGrid products={products} />
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
