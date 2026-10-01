import { useState } from "react";
import { Heart, ShoppingCart, Star, Check, Eye, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const [quickView, setQuickView] = useState(false);

  const { addToCart, cartItems } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const inCart = cartItems.some((item) => item.id === product.id);
  const liked = isInWishlist(product.id);

  return (
    <>
      {/* ================= PRODUCT CARD ================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        {/* Discount */}
        <div className="absolute left-3 top-3 z-10 rounded-full bg-[#39ad7a] px-3 py-1.5 text-xs font-bold text-white">
          -{product.discount}%
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className={`absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${
            liked
              ? "text-red-500"
              : "text-gray-500 hover:bg-[#39ad7a] hover:text-white"
          }`}
          aria-label="Wishlist"
        >
          <Heart size={17} fill={liked ? "currentColor" : "none"} />
        </button>

        {/* Image */}
        <div className="relative overflow-hidden bg-gray-50">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-60"
            />
          </Link>

          {/* Quick View */}
          <button
            type="button"
            onClick={() => setQuickView(true)}
            className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-14 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#183b2a] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#39ad7a] hover:text-white"
          >
            <Eye size={15} />
            Quick View
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs font-medium text-[#39ad7a]">
            {product.category}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="mt-1 block line-clamp-1 text-base font-bold text-[#183b2a] transition hover:text-[#39ad7a]"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} fill="currentColor" />
              ))}
            </div>

            <span className="ml-1 text-xs text-gray-500">
              ({product.rating})
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xl font-bold text-[#183b2a]">
              ₹{product.price}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          </div>

          {/* Add Cart */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all duration-300 ${
              inCart
                ? "bg-[#0d6b3f] hover:bg-[#09552f]"
                : "bg-[#39ad7a] hover:bg-[#269b68]"
            }`}
          >
            {inCart ? (
              <>
                <Check size={17} />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={17} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* ================= QUICK VIEW MODAL ================= */}

      {quickView && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() => setQuickView(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setQuickView(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-red-500 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full min-h-[300px] w-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#39ad7a]">
                  {product.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#183b2a]">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <span className="text-sm text-gray-500">
                    {product.rating} / 5
                  </span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#183b2a]">
                    ₹{product.price}
                  </span>

                  <span className="text-base text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </span>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-[#39ad7a]">
                    {product.discount}% OFF
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-gray-600">
                  Fresh and high-quality {product.name.toLowerCase()}. Perfect
                  for your everyday healthy lifestyle.
                </p>

                {/* Buttons */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product);
                      setQuickView(false);
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#39ad7a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#269b68]"
                  >
                    <ShoppingCart size={17} />
                    {inCart ? "Added to Cart" : "Add to Cart"}
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setQuickView(false)}
                    className="flex flex-1 items-center justify-center rounded-lg border border-[#39ad7a] px-5 py-3 text-sm font-bold text-[#39ad7a] transition hover:bg-[#39ad7a] hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
