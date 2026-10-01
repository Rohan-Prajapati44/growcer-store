import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-7xl mb-5">🥬</div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Product Not Found
          </h1>

          <p className="text-gray-500 mb-6">
            Sorry, this product is no longer available.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/checkout");
  };

  return (
    <main className="bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>

            <ChevronRight size={16} />

            <Link to="/shop" className="hover:text-green-600 transition">
              Shop
            </Link>

            <ChevronRight size={16} />

            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Image */}
            <div className="bg-white rounded-3xl p-5 shadow-sm relative">
              {/* Discount */}
              {product.discount && (
                <span className="absolute top-8 left-8 z-10 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  -{product.discount}%
                </span>
              )}

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-8 right-8 z-10 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition ${
                  isInWishlist(product.id)
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-600 hover:text-red-500"
                }`}
              >
                <Heart
                  size={21}
                  fill={isInWishlist(product.id) ? "currentColor" : "none"}
                />
              </button>

              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              {/* Category */}
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
                {product.category}
              </span>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="text-yellow-400"
                      fill={
                        star <= Math.round(product.rating)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>

                <span className="text-gray-600 text-sm">
                  {product.rating} / 5
                </span>

                <span className="text-green-600 text-sm font-medium">
                  In Stock
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl font-bold text-green-600">
                  ₹{product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </span>
                )}

                {product.oldPrice && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{product.oldPrice - product.price}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-7 mb-7">
                Enjoy fresh and high-quality {product.name.toLowerCase()}.
                Carefully selected for freshness, taste and everyday healthy
                living.
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-5 mb-7">
                <span className="font-semibold text-gray-900">Quantity:</span>

                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={decreaseQuantity}
                    className="w-11 h-11 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    className="w-11 h-11 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mb-7">
                <span className="text-gray-500">Total Price</span>

                <p className="text-2xl font-bold text-gray-900">
                  ₹{product.price * quantity}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition ${
                    added
                      ? "bg-green-700 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={20} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Add to Cart
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl font-semibold transition"
                >
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                  <Truck className="text-green-600" size={22} />
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-500">Orders ₹500+</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                  <ShieldCheck className="text-green-600" size={22} />
                  <div>
                    <p className="font-semibold text-sm">Secure Payment</p>
                    <p className="text-xs text-gray-500">100% Secure</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                  <RotateCcw className="text-green-600" size={22} />
                  <div>
                    <p className="font-semibold text-sm">Easy Return</p>
                    <p className="text-xs text-gray-500">Simple process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-green-600 font-semibold text-sm uppercase">
                  You may also like
                </span>

                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Related Products
                </h2>
              </div>

              <Link
                to="/shop"
                className="hidden sm:flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
              >
                View All
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Shop */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium transition"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
