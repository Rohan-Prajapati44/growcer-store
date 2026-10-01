import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  IndianRupee,
  Package,
  ShoppingBag,
  Truck,
  UserRound,
  Trash2,
  X,
} from "lucide-react";

import { useOrders } from "../context/OrderContext";

const Account = () => {
  const { orders, clearOrders } = useOrders();

  const [showClearModal, setShowClearModal] = useState(false);

  const totalSpent = orders.reduce(
    (total, order) => total + Number(order.total || 0),
    0,
  );

  // Clear all order history
  const handleClearOrders = () => {
    clearOrders();
    setShowClearModal(false);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ================= HEADER ================= */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <UserRound size={24} className="text-green-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Welcome back</p>

                  <h1 className="text-3xl font-bold text-gray-900">
                    My Account
                  </h1>
                </div>
              </div>

              <p className="text-gray-500">
                Manage your orders and shopping activity.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              <ShoppingBag size={19} />
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* TOTAL ORDERS */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Orders</p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-2">
                    {orders.length}
                  </h2>
                </div>

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Package size={24} className="text-green-600" />
                </div>
              </div>
            </div>

            {/* TOTAL SPENT */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Spent</p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-2">
                    ₹{totalSpent}
                  </h2>
                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <IndianRupee size={24} className="text-blue-600" />
                </div>
              </div>
            </div>

            {/* SHOPPING */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Shopping</p>

                  <h2 className="text-xl font-bold text-gray-900 mt-2">
                    Fresh & Organic
                  </h2>
                </div>

                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <ShoppingBag size={24} className="text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ORDERS ================= */}
      <section className="pb-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* ORDER HEADING */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                My Orders
              </h2>

              <p className="text-gray-500 mt-1">
                View your recent orders and order details.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* ORDER COUNT */}
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                {orders.length} Orders
              </span>

              {/* CLEAR BUTTON */}
              {orders.length > 0 && (
                <button
                  onClick={() => setShowClearModal(true)}
                  className="inline-flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 px-4 py-2 rounded-xl text-sm font-semibold transition"
                >
                  <Trash2 size={17} />
                  <span className="hidden sm:inline">Clear All</span>
                  <span className="sm:hidden">Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* ================= EMPTY ORDERS ================= */}
          {orders.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-sm p-10 sm:p-16 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Package size={45} className="text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No Orders Yet
              </h3>

              <p className="text-gray-500 max-w-md mx-auto mb-7">
                You haven't placed any orders yet. Explore our fresh products
                and start shopping today.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            /* ================= ORDER LIST ================= */
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  {/* ORDER HEADER */}
                  <div className="p-5 sm:p-6 border-b bg-gray-50">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                      <div className="flex flex-wrap items-center gap-5">
                        {/* ORDER ID */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Order ID
                          </p>

                          <p className="font-bold text-gray-900 mt-1">
                            {order.id}
                          </p>
                        </div>

                        {/* ORDER DATE */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Order Date
                          </p>

                          <div className="flex items-center gap-1.5 mt-1 text-gray-700">
                            <CalendarDays size={15} />

                            <span className="text-sm font-medium">
                              {order.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* STATUS */}
                      <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full w-fit">
                        <CheckCircle2 size={17} />

                        <span className="font-semibold text-sm">
                          {order.status || "Confirmed"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ORDER BODY */}
                  <div className="p-5 sm:p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* PRODUCTS */}
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-gray-900 mb-4">
                          Order Items
                        </h3>

                        <div className="space-y-4">
                          {order.items?.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 border border-gray-100 rounded-xl p-3"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover"
                              />

                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 truncate">
                                  {item.name}
                                </h4>

                                <p className="text-sm text-gray-500 mt-1">
                                  {item.category}
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                  Quantity: {item.quantity}
                                </p>
                              </div>

                              <p className="font-bold text-green-600">
                                ₹{item.price * item.quantity}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* DELIVERY */}
                      <div className="bg-green-50 rounded-2xl p-5 h-fit">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                            <Truck size={22} className="text-green-600" />
                          </div>

                          <div>
                            <h3 className="font-bold text-gray-900">
                              Delivery
                            </h3>

                            <p className="text-sm text-gray-500">
                              Order confirmed
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 text-sm">
                          <div>
                            <p className="text-gray-500">Payment Method</p>

                            <p className="font-semibold text-gray-900 mt-1 capitalize">
                              {order.paymentMethod === "cod"
                                ? "Cash on Delivery"
                                : "Credit / Debit Card"}
                            </p>
                          </div>

                          <div>
                            <p className="text-gray-500">Delivery Address</p>

                            <p className="font-medium text-gray-800 mt-1 leading-6">
                              {order.customer?.address}
                              <br />
                              {order.customer?.city}, {order.customer?.state}
                              <br />
                              {order.customer?.pincode}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="border-t mt-6 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Order Total</p>

                        <p className="text-2xl font-bold text-green-600">
                          ₹{order.total}
                        </p>
                      </div>

                      <Link
                        to="/shop"
                        className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-5 py-3 rounded-xl font-semibold transition"
                      >
                        Shop More
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= CLEAR CONFIRMATION MODAL ================= */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowClearModal(false)}
          />

          {/* MODAL */}
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            {/* CLOSE */}
            <button
              onClick={() => setShowClearModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition"
            >
              <X size={18} />
            </button>

            {/* ICON */}
            <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
              <Trash2 size={30} className="text-red-600" />
            </div>

            {/* TEXT */}
            <div className="text-center mt-5">
              <h3 className="text-2xl font-bold text-gray-900">
                Clear All Orders?
              </h3>

              <p className="text-gray-500 mt-2 leading-6">
                This will permanently remove all your order history and order
                details from this account.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-3 mt-7">
              <button
                onClick={() => setShowClearModal(false)}
                className="px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleClearOrders}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition"
              >
                <Trash2 size={17} />
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Account;
