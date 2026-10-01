import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Star,
  Check,
} from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const { addToCart, cartItems } = useCart();

  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);

    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#f8faf9]">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="bg-[#e8faf2] px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-red-500 shadow-sm">
            <Heart size={30} fill="currentColor" />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#183b2a] sm:text-4xl">
            My Wishlist
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Save your favorite products and shop them anytime.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-[1200px]">
          {/* =================================================
              EMPTY WISHLIST
          ================================================== */}
          {wishlist.length === 0 ? (
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-50 text-[#39ad7a]">
                <Heart size={42} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#183b2a]">
                Your Wishlist is Empty
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                You haven't added any products to your wishlist yet. Explore our
                fresh products and save your favorites.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#39ad7a] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#269b68] hover:shadow-lg"
              >
                <ShoppingBag size={17} />
                Explore Products
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              {/* =============================================
                  TOP INFO
              ============================================== */}
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#39ad7a]">
                    Saved Products
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-[#183b2a]">
                    {wishlist.length}{" "}
                    {wishlist.length === 1 ? "Product" : "Products"}
                  </h2>
                </div>

                <Link
                  to="/shop"
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#39ad7a] px-5 py-2.5 text-sm font-semibold text-[#39ad7a] transition hover:bg-[#39ad7a] hover:text-white"
                >
                  Continue Shopping
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* =============================================
                  WISHLIST GRID
              ============================================== */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {wishlist.map((product) => {
                  const inCart = cartItems.some(
                    (item) => item.id === product.id,
                  );

                  const isAdded = addedId === product.id;

                  return (
                    <div
                      key={product.id}
                      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                    >
                      {/* ===================================
                          REMOVE BUTTON
                      ==================================== */}
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(product.id)}
                        aria-label="Remove from wishlist"
                        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 size={16} />
                      </button>

                      {/* ===================================
                          DISCOUNT
                      ==================================== */}
                      <div className="absolute left-3 top-3 z-10 rounded-full bg-[#39ad7a] px-3 py-1.5 text-xs font-bold text-white">
                        -{product.discount}%
                      </div>

                      {/* ===================================
                          IMAGE
                      ==================================== */}
                      <Link
                        to={`/product/${product.id}`}
                        className="block overflow-hidden bg-gray-50"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </Link>

                      {/* ===================================
                          PRODUCT INFO
                      ==================================== */}
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

                        {/* Add to Cart */}
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all duration-300 ${
                            isAdded || inCart
                              ? "bg-[#0d6b3f]"
                              : "bg-[#39ad7a] hover:bg-[#269b68]"
                          }`}
                        >
                          {isAdded || inCart ? (
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
                  );
                })}
              </div>

              {/* =============================================
                  BOTTOM BANNER
              ============================================== */}
              <div className="mt-10 overflow-hidden rounded-2xl bg-[#183b2a] p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6ee7a8]">
                      Growcer
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                      Looking for more fresh products?
                    </h3>

                    <p className="mt-2 text-sm text-white/60">
                      Discover fresh fruits, vegetables and daily grocery
                      essentials.
                    </p>
                  </div>

                  <Link
                    to="/shop"
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#39ad7a] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#269b68]"
                  >
                    Shop Now
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
