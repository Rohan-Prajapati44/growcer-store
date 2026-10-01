import { ArrowRight } from "lucide-react";
import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="bg-[#f8faf9] px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#39ad7a]">
              Explore Our Store
            </p>

            <h2 className="text-3xl font-bold text-[#183b2a] sm:text-4xl">
              Browse Categories
            </h2>

            <p className="mt-2 max-w-lg text-sm text-gray-500 sm:text-base">
              Explore our wide range of fresh and healthy organic products.
            </p>
          </div>

          <button className="group hidden items-center gap-2 text-sm font-semibold text-[#39ad7a] sm:flex">
            View All
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-7 flex justify-center sm:hidden">
          <button className="group flex items-center gap-2 rounded-full bg-[#39ad7a] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#269b68]">
            View All
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
    