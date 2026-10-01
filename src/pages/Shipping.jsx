import { Link } from "react-router-dom";
import {
  Truck,
  MapPin,
  Clock3,
  PackageCheck,
  IndianRupee,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const shippingSteps = [
  {
    icon: PackageCheck,
    title: "Order Confirmed",
    text: "Your order is confirmed after successful checkout.",
  },
  {
    icon: Truck,
    title: "Order Dispatched",
    text: "Your grocery items are carefully packed and dispatched.",
  },
  {
    icon: MapPin,
    title: "On the Way",
    text: "Your order travels to your selected delivery address.",
  },
  {
    icon: Clock3,
    title: "Delivered",
    text: "Your order arrives at your doorstep.",
  },
];

function Shipping() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <Truck size={32} />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Shipping Information
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-green-50 sm:text-lg">
            Everything you need to know about Growcer delivery, shipping charges
            and order processing.
          </p>
        </div>
      </section>

      {/* SHIPPING CHARGE */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-green-50 p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white">
                <Truck size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                Free Shipping
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Enjoy free delivery when your order value is ₹500 or more.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-green-700 shadow-sm">
                <IndianRupee size={18} />
                Orders ₹500+
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white">
                <IndianRupee size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                Standard Delivery
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Orders below ₹500 have a standard delivery charge of ₹50.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-gray-800 shadow-sm">
                <IndianRupee size={18} />
                ₹50 Delivery Fee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-semibold text-green-600">
              Simple & Reliable
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How your order reaches you
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shippingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <div className="mt-5 text-sm font-bold text-green-600">
                    Step {index + 1}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY DETAILS */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Delivery Information
            </h2>

            <div className="mt-7 space-y-5">
              <div className="flex gap-4">
                <div className="mt-1 text-green-600">
                  <PackageCheck size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Order Processing</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Orders are processed after checkout confirmation and
                    prepared for dispatch.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-green-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Delivery Address</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Please provide a complete and accurate delivery address
                    during checkout.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-green-600">
                  <Clock3 size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Delivery Updates</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    You can check your order status and order details from your
                    Account page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-green-700 px-6 py-12 text-center text-white shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <HelpCircle size={28} />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold">
              Have questions about delivery?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-green-50">
              Visit our Help Center or contact our support team.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/help-center"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-green-700 hover:bg-green-50"
              >
                Help Center
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-bold text-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shipping;
