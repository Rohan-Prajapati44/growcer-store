import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  if (!category) return null;

  const categoryMap = {
    "Fresh Vegetables": "Vegetables",
    "Fresh Fruits": "Fruits",
    "Dairy Products": "Dairy",
    "Meat & Chicken": "Meat",
    Seafood: "Seafood",
    Bakery: "Bakery",
    "Nuts & Seeds": "Nuts",
    Beverages: "Beverages",
  };

  const shopCategory =
    categoryMap[category.name] || category.name;

  return (
    <Link
      to={`/shop?category=${encodeURIComponent(shopCategory)}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

        {/* Image */}
        <div className="relative overflow-hidden bg-gray-50">
          <img
            src={category.image}
            alt={category.name}
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
            <span className="translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#39ad7a] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Shop Now
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-center">

          <h3 className="font-bold text-[#183b2a] transition-colors duration-300 group-hover:text-[#39ad7a]">
            {category.name}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {category.count} Products
          </p>

        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;