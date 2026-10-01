import { Link } from "react-router-dom";
import {
  Leaf,
  Heart,
  ShieldCheck,
  Truck,
  Users,
  ShoppingBasket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Fresh & Quality",
    text: "We focus on providing a clean and convenient grocery shopping experience.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Shopping",
    text: "A simple and transparent shopping interface designed around customer needs.",
  },
  {
    icon: Truck,
    title: "Easy Delivery",
    text: "Simple checkout and delivery information make ordering groceries convenient.",
  },
  {
    icon: Heart,
    title: "Customer First",
    text: "Every part of Growcer is designed to make grocery shopping easier.",
  },
];

function About() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Leaf size={17} />
                About Growcer
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Fresh groceries,
                <span className="block text-green-100">simple shopping.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-green-50 sm:text-lg">
                Growcer is a modern grocery shopping experience built to make
                discovering products, managing your cart and placing orders
                simple and convenient.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-green-50"
                >
                  Start Shopping
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-bold transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
                  alt="Fresh groceries"
                  className="h-[420px] w-full rounded-2xl object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-5 text-gray-900 shadow-xl sm:left-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <ShoppingBasket size={25} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Growcer</p>
                    <p className="font-bold">Your Grocery Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="font-semibold text-green-600">Our Story</span>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Making grocery shopping easier
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Growcer is a React-based grocery store frontend created with the
                goal of delivering a clean, modern and user-friendly shopping
                experience.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                From browsing categories and products to managing your wishlist,
                cart and checkout, Growcer brings the essential shopping
                experience together in one place.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Easy product discovery",
                  "Simple cart and wishlist management",
                  "Responsive design for all devices",
                  "Smooth and modern shopping interface",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-green-600"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=85"
                  alt="Fresh vegetables"
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=700&q=85"
                  alt="Fresh fruits"
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-semibold text-green-600">What We Value</span>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Built around your shopping experience
            </h2>

            <p className="mt-4 text-gray-500">
              Simple ideas that shape the Growcer experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={29} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-3xl bg-green-50 p-7 text-center">
              <ShoppingBasket className="mx-auto text-green-600" size={32} />
              <p className="mt-4 text-3xl font-extrabold text-gray-900">200+</p>
              <p className="mt-1 text-gray-500">Products</p>
            </div>

            <div className="rounded-3xl bg-emerald-50 p-7 text-center">
              <Users className="mx-auto text-green-600" size={32} />
              <p className="mt-4 text-3xl font-extrabold text-gray-900">
                1000+
              </p>
              <p className="mt-1 text-gray-500">Happy Shoppers</p>
            </div>

            <div className="rounded-3xl bg-lime-50 p-7 text-center">
              <Heart className="mx-auto text-green-600" size={32} />
              <p className="mt-4 text-3xl font-extrabold text-gray-900">100%</p>
              <p className="mt-1 text-gray-500">Customer Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-green-700 px-6 py-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to explore Growcer?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-green-50">
              Discover fresh products and enjoy a simple grocery shopping
              experience.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-green-700 transition hover:bg-green-50"
            >
              Explore Shop
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
