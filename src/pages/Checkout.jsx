import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Lock,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const shipping = cartTotal >= 500 ? 0 : 50;
  const finalTotal = cartTotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = addOrder({
      customer: formData,
      items: cartItems,
      subtotal: cartTotal,
      shipping: shipping,
      total: finalTotal,
      paymentMethod: paymentMethod,
    });

    setOrderId(order.id);
    setOrderPlaced(true);

    clearCart();
  };

  /* ---------------- SUCCESS PAGE ---------------- */

  if (orderPlaced) {
    return (
      <main className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-sm p-8 sm:p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 size={48} className="text-green-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mb-7">
            Thank you for shopping with Growcer. Your order has been
            successfully confirmed.
          </p>

          <div className="bg-green-50 rounded-2xl p-5 mb-7">
            <p className="text-sm text-gray-500 mb-1">Your Order ID</p>

            <p className="text-xl font-bold text-green-700">{orderId}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/account"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold transition"
            >
              View My Orders
            </Link>

            <Link
              to="/shop"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3.5 rounded-xl font-semibold transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------- EMPTY CART ---------------- */

  if (cartItems.length === 0) {
    return (
      <main className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <ShoppingBag size={45} className="text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mb-7">
            Add some fresh products before proceeding to checkout.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            <ShoppingBag size={19} />
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-7">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition mb-4"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2">Complete your order securely.</p>
        </div>
      </section>

      {/* CHECKOUT */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT */}
              <div className="lg:col-span-2 space-y-7">
                {/* DELIVERY INFORMATION */}
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                      <MapPin size={22} className="text-green-600" />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Delivery Information
                      </h2>

                      <p className="text-sm text-gray-500">
                        Enter your delivery details
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter first name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter last name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Address
                      </label>

                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows="3"
                        placeholder="House number, street, area..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Enter city"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        placeholder="Enter state"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pincode
                      </label>

                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        placeholder="6 digit pincode"
                        maxLength="6"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>
                  </div>
                </div>

                {/* PAYMENT */}
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                      <CreditCard size={22} className="text-green-600" />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Payment Method
                      </h2>

                      <p className="text-sm text-gray-500">
                        Choose your preferred payment option
                      </p>
                    </div>
                  </div>

                  {/* COD */}
                  <label
                    className={`flex items-center gap-4 border rounded-2xl p-5 cursor-pointer transition ${
                      paymentMethod === "cod"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-green-600"
                    />

                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                      <Package size={22} className="text-green-600" />
                    </div>

                    <div>
                      <p className="font-bold text-gray-900">
                        Cash on Delivery
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>
                  </label>

                  {/* CARD */}
                  <label
                    className={`flex items-center gap-4 border rounded-2xl p-5 mt-4 cursor-pointer transition ${
                      paymentMethod === "card"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-green-600"
                    />

                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                      <CreditCard size={22} className="text-green-600" />
                    </div>

                    <div>
                      <p className="font-bold text-gray-900">
                        Credit / Debit Card
                      </p>

                      <p className="text-sm text-gray-500">
                        Secure card payment
                      </p>
                    </div>
                  </label>

                  {paymentMethod === "card" && (
                    <div className="mt-5 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-sm text-gray-500">Demo payment mode</p>

                      <p className="font-semibold text-gray-800 mt-1">
                        No real payment will be processed.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT - ORDER SUMMARY */}
              <div>
                <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
                  <div className="flex items-center gap-3 mb-6">
                    <ShoppingBag size={23} className="text-green-600" />

                    <h2 className="text-xl font-bold text-gray-900">
                      Order Summary
                    </h2>
                  </div>

                  {/* PRODUCTS */}
                  <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover"
                        />

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-gray-900 truncate">
                            {item.name}
                          </h3>

                          <p className="text-xs text-gray-500 mt-1">
                            Qty: {item.quantity}
                          </p>

                          <p className="font-semibold text-green-600 text-sm mt-1">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t my-6" />

                  {/* PRICE */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{cartTotal}</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Delivery</span>

                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600 font-semibold">
                            FREE
                          </span>
                        ) : (
                          `₹${shipping}`
                        )}
                      </span>
                    </div>

                    <div className="border-t pt-4 flex justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-green-600">
                        ₹{finalTotal}
                      </span>
                    </div>
                  </div>

                  {/* FREE SHIPPING */}
                  {shipping > 0 && (
                    <div className="mt-5 bg-green-50 rounded-xl p-4 text-sm text-green-700">
                      Add ₹{500 - cartTotal} more to get free delivery.
                    </div>
                  )}

                  {shipping === 0 && (
                    <div className="mt-5 bg-green-50 rounded-xl p-4 text-sm text-green-700 flex gap-2">
                      <Truck size={18} />
                      You got free delivery!
                    </div>
                  )}

                  {/* PLACE ORDER */}
                  <button
                    type="submit"
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition"
                  >
                    Place Order • ₹{finalTotal}
                  </button>

                  {/* SECURITY */}
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-5">
                    <Lock size={14} />
                    Secure & encrypted checkout
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
