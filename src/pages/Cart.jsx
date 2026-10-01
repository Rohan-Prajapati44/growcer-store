import { Minus, Plus, ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#f8faf9] px-4">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-[#39ad7a]">
            <ShoppingCart size={40} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-[#183b2a]">
            Your Cart is Empty
          </h1>

          <p className="mt-2 text-gray-500">
            Add some fresh products to your cart.
          </p>
            <br></br>
          <Link
            to="/"
            className="mt-6 rounded-lg bg-[#39ad7a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#269b68]"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f8faf9] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#39ad7a]">
            Shopping Cart
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#183b2a]">Your Cart</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          {/* Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-full rounded-xl object-cover sm:h-24 sm:w-24"
                />

                <div className="flex-1">
                  <p className="text-xs text-[#39ad7a]">{item.category}</p>

                  <h3 className="mt-1 font-bold text-[#183b2a]">{item.name}</h3>

                  <p className="mt-1 font-bold text-[#39ad7a]">₹{item.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-green-50"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="w-6 text-center font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-green-50"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Item total */}
                <div className="min-w-[80px] text-right">
                  <p className="font-bold text-[#183b2a]">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-red-500 transition hover:bg-red-50"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#183b2a]">Order Summary</h2>

            <div className="mt-5 space-y-3 border-b pb-5 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="font-medium text-[#39ad7a]">Free</span>
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              <span className="font-bold text-[#183b2a]">Total</span>

              <span className="text-xl font-bold text-[#39ad7a]">
                ₹{cartTotal}
              </span>
            </div>

            <Link
              to="/checkout"
              className="flex w-full items-center justify-center rounded-lg bg-[#39ad7a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#269b68]"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
