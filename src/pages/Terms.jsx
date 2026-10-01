import { Link } from "react-router-dom";
import {
  FileText,
  ShoppingBag,
  CreditCard,
  UserCheck,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const terms = [
  {
    icon: UserCheck,
    title: "Use of Website",
    text: "By using Growcer, you agree to use the website responsibly and provide accurate information when placing an order.",
  },
  {
    icon: ShoppingBag,
    title: "Orders",
    text: "Orders are placed through the checkout process. Please verify your products, quantity and delivery information before confirming an order.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    text: "Available payment methods are displayed during checkout. Payment information should be entered accurately.",
  },
  {
    icon: ShieldCheck,
    title: "Account & Information",
    text: "You are responsible for keeping the information associated with your account and orders accurate.",
  },
  {
    icon: AlertCircle,
    title: "Product Information",
    text: "Product names, prices, images and availability may be updated as the website changes.",
  },
];

function Terms() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <FileText size={32} />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-green-50 sm:text-lg">
            Please read these terms before using the Growcer website.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-green-50 p-7 sm:p-10">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                <FileText size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Agreement to Terms
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  By accessing or using Growcer, you agree to follow the terms
                  described on this page. If you do not agree with these terms,
                  please do not use the website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {terms.map((term, index) => {
              const Icon = term.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg sm:p-7"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {term.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-600">
                        {term.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FRONTEND NOTICE */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Current Project Scope
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Growcer is currently a React frontend project. Cart, wishlist and
              demo order information are stored in the browser using
              localStorage. There is currently no backend database connected to
              these features.
            </p>

            <div className="mt-6 rounded-2xl bg-amber-50 p-5">
              <p className="text-sm leading-6 text-gray-600">
                <span className="font-bold text-gray-900">Note:</span> If real
                payment processing, authentication, backend services or other
                external services are added in the future, these terms should be
                updated accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-green-700 px-6 py-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-extrabold">Have a question?</h2>

            <p className="mx-auto mt-3 max-w-xl text-green-50">
              Visit our Help Center or contact the Growcer support team.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/help-center"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-green-50"
              >
                Help Center
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
        </div>
      </section>
    </main>
  );
}

export default Terms;
