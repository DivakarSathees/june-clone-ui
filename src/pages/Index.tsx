import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import SectionHeader from "@/components/home/SectionHeader";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductGrid from "@/components/product/ProductGrid";
import PromoBanner from "@/components/home/PromoBanner";
import FeaturedIn from "@/components/home/FeaturedIn";
import { PRODUCTS, TOP_CATEGORIES, PLANNER_CATEGORIES } from "@/data/products";

const Index = () => {
  const favorites = PRODUCTS.slice(0, 4);
  const planners = PRODUCTS.filter((p) => p.categorySlug === "stationery").slice(0, 4);
  const eyewear = PRODUCTS.filter((p) => p.categorySlug === "eyewear").slice(0, 4);
  const bestSellers = PRODUCTS.slice(8, 12);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <HeroSlider />

      {/* Customer Favorites */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <SectionHeader
          title="Customer Favorites, All in One Place"
          highlight="Customer Favorites"
        />
        <ProductGrid products={favorites} />
      </section>

      {/* Planner Promo Banner */}
      <PromoBanner
        title="The Feel-Good Planner Box™"
        subtitle="Everything you need to plan happier. Curated with love."
        cta="Shop Planners"
        link="/category/stationery"
        image="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1200"
      />

      {/* 2026 Dated Planners */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <SectionHeader
          title="2026 Dated Planners"
          subtitle="Free Ultimate Sticker Book with Every Purchase"
        />
        <ProductGrid products={planners} />
      </section>

      {/* Top Categories */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <SectionHeader title="Top Categories" />
        <CategoryGrid categories={TOP_CATEGORIES} />
      </section>

      {/* Eyewear BOGO */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
          <SectionHeader
            title="BOGO Till They're Gone"
            subtitle="All eyewear, buy one get one. Just add 2 or more to cart."
          />
          <ProductGrid products={eyewear} />
        </div>
      </section>

      {/* Most Loved */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <SectionHeader
          title="Most Loved. Most Bought."
          subtitle="These flew off the shelves — and for good reason."
        />
        <ProductGrid products={bestSellers} />
      </section>

      {/* For Every Little Chapter */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <SectionHeader
          title="For Every Little Chapter"
          subtitle="For Every Moment You Want to Remember"
        />
        <CategoryGrid categories={PLANNER_CATEGORIES} />
      </section>

      {/* Lunchbox Promo */}
      <PromoBanner
        title="Lunchboxes That Look This Good!"
        subtitle="Hot Food, Zero Spills, Maximum Style"
        cta="Shop Lunchboxes"
        link="/category/kitchen-dining"
        image="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1200"
        reversed
      />

      <FeaturedIn />
      <Footer />
    </div>
  );
};

export default Index;
