import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [category, setCategory] = useState(
    searchParams.get("category") || "All",
  );

  const [maxPrice, setMaxPrice] = useState(200);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");

  const [mobileFilter, setMobileFilter] = useState(false);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  /* ---------------- URL SYNC ---------------- */

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    const urlCategory = searchParams.get("category") || "All";

    setSearch(urlSearch);
    setCategory(urlCategory);
  }, [searchParams]);

  /* ---------------- FILTER PRODUCTS ---------------- */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(keyword) ||
          product.category.toLowerCase().includes(keyword),
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    // Price
    result = result.filter((product) => product.price <= maxPrice);

    // Rating
    result = result.filter((product) => product.rating >= minRating);

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "discount") {
      result.sort((a, b) => b.discount - a.discount);
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, category, maxPrice, minRating, sortBy]);

  /* ---------------- SEARCH ---------------- */

  const handleSearch = (value) => {
    setSearch(value);

    const params = {};

    if (value.trim()) {
      params.search = value;
    }

    if (category !== "All") {
      params.category = category;
    }

    setSearchParams(params);
  };

  /* ---------------- CATEGORY ---------------- */

  const handleCategory = (value) => {
    setCategory(value);

    const params = {};

    if (search.trim()) {
      params.search = search;
    }

    if (value !== "All") {
      params.category = value;
    }

    setSearchParams(params);
  };

  /* ---------------- CLEAR ---------------- */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setMaxPrice(200);
    setMinRating(0);
    setSortBy("default");
    setSearchParams({});
  };

  const activeFilters =
    category !== "All" ||
    maxPrice < 200 ||
    minRating > 0 ||
    sortBy !== "default";

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Fresh Collection
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Shop Fresh Products
          </h1>

          <p className="text-gray-500 mt-2 max-w-2xl">
            Discover fresh vegetables, fruits, dairy products and other quality
            groceries at Growcer.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* SEARCH */}
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-7">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />

                {search && (
                  <button
                    onClick={() => handleSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* SORT */}
              <div className="relative lg:w-64">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3.5 pr-10 outline-none focus:border-green-500 bg-white cursor-pointer"
                >
                  <option value="default">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="discount">Biggest Discount</option>
                  <option value="name">Name: A to Z</option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                />
              </div>

              {/* MOBILE FILTER */}
              <button
                onClick={() => setMobileFilter(true)}
                className="lg:hidden flex items-center justify-center gap-2 border border-gray-200 rounded-xl px-4 py-3.5 font-semibold text-gray-700"
              >
                <SlidersHorizontal size={19} />
                Filters
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-7">
            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Filter size={19} className="text-green-600" />

                    <h2 className="font-bold text-gray-900">Filters</h2>
                  </div>

                  {activeFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-red-500 hover:text-red-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* CATEGORY */}
                <div className="mb-7">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>

                  <div className="space-y-2">
                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleCategory(item)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition ${
                          category === item
                            ? "bg-green-50 text-green-700 font-semibold"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item}</span>

                        <span className="text-xs">
                          {item === "All"
                            ? products.length
                            : products.filter(
                                (product) => product.category === item,
                              ).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div className="mb-7">
                  <div className="flex justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">
                      Maximum Price
                    </h3>

                    <span className="text-green-600 font-semibold">
                      ₹{maxPrice}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="45"
                    max="200"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-green-600"
                  />

                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>₹45</span>
                    <span>₹200+</span>
                  </div>
                </div>

                {/* RATING */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Minimum Rating
                  </h3>

                  <div className="space-y-2">
                    {[0, 4, 4.5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setMinRating(rating)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                          minRating === rating
                            ? "bg-green-50 text-green-700 font-semibold"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {rating === 0 ? "All Ratings" : `${rating} ★ & above`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* PRODUCTS */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {search
                      ? `Search results for "${search}"`
                      : category !== "All"
                        ? category
                        : "All Products"}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {filteredProducts.length} products found
                  </p>
                </div>

                {activeFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-sm text-green-600 font-semibold"
                  >
                    <X size={16} />
                    Clear Filters
                  </button>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <div
                  key={`${search}-${category}-${maxPrice}-${minRating}-${sortBy}`}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 product-filter-animation"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-10 sm:p-16 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <Search size={35} className="text-green-600" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    No Products Found
                  </h2>

                  <p className="text-gray-500 mt-2 mb-6">
                    Try changing your search or filters.
                  </p>

                  <button
                    onClick={clearFilters}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE FILTER DRAWER */}
      {mobileFilter && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFilter(false)}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-xl font-bold">Filters</h2>

              <button
                onClick={() => setMobileFilter(false)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            {/* CATEGORY */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Categories</h3>

              <div className="space-y-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      handleCategory(item);
                      setMobileFilter(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl ${
                      category === item
                        ? "bg-green-50 text-green-700 font-semibold"
                        : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* PRICE */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Maximum Price</h3>

                <span className="text-green-600 font-semibold">
                  ₹{maxPrice}
                </span>
              </div>

              <input
                type="range"
                min="45"
                max="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-green-600"
              />
            </div>

            {/* RATING */}
            <div>
              <h3 className="font-semibold mb-4">Minimum Rating</h3>

              <div className="space-y-2">
                {[0, 4, 4.5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => {
                      setMinRating(rating);
                      setMobileFilter(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl ${
                      minRating === rating
                        ? "bg-green-50 text-green-700 font-semibold"
                        : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    {rating === 0 ? "All Ratings" : `${rating} ★ & above`}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                clearFilters();
                setMobileFilter(false);
              }}
              className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Shop;
