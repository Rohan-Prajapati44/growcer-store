import { useState } from "react";
import { ArrowRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const filters = ["All", "Vegetables", "Fruits", "Dairy", "Bakery"];

const BestSelling = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section className="bg-[#f8faf9] px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#39ad7a]">
              Best Selling
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#183b2a] sm:text-3xl">
              Our Best Selling Products
            </h2>

            <p className="mt-2 max-w-xl text-sm text-gray-500">
              Discover our most popular fresh and organic products.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                  activeFilter === filter
                    ? "bg-[#39ad7a] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-[#39ad7a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div
          key={activeFilter}
          className="product-filter-animation mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl bg-white py-16 text-center">
              <p className="text-gray-500">
                No products available in this category.
              </p>
            </div>
          )}
        </div>

        {/* View All */}
        <div className="mt-10 flex justify-center">
          <button className="group flex items-center gap-2 rounded-lg border border-[#39ad7a] px-6 py-3 text-sm font-semibold text-[#39ad7a] transition-all duration-300 hover:bg-[#39ad7a] hover:text-white">
            View All Products
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

export default BestSelling;
