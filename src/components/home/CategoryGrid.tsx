import { Link } from "react-router-dom";

interface CategoryItem {
  name: string;
  slug: string;
  image: string;
}

interface CategoryGridProps {
  categories: CategoryItem[];
  columns?: 2 | 3 | 4;
}

const CategoryGrid = ({ categories, columns = 4 }: CategoryGridProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 lg:gap-6`}>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/category/${cat.slug}`}
          className="group relative overflow-hidden aspect-square bg-muted"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-serif text-lg lg:text-xl font-semibold text-background drop-shadow-md">
              {cat.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
