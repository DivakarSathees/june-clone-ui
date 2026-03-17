import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

const ProductGrid = ({ products, columns = 4 }: ProductGridProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 lg:gap-6`}>
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
