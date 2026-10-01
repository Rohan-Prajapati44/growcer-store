import { ArrowRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="bg-white px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#39ad7a]">
              Our Products
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#183b2a] sm:text-3xl">
              Popular Products
            </h2>

            <p className="mt-2 max-w-lg text-sm text-gray-500">
              Fresh, healthy and organic products selected specially for you.
            </p>
          </div>

          <button className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#39ad7a] transition hover:text-[#269b68]">
            View All
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;