import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  UserRound,
  Database,
  Cookie,
  Eye,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    text: "When you use Growcer, information such as your name, email address, phone number, delivery address and order details may be entered during checkout.",
  },
  {
    icon: UserRound,
    title: "How We Use Information",
    text: "The information provided through the website is used to process orders, provide customer support and improve the shopping experience.",
  },
  {
    icon: Lock,
    title: "Data Security",
    text: "We take reasonable steps to protect information submitted through the website and avoid unauthorized access.",
  },
  {
    icon: Cookie,
    title: "Cookies & Local Storage",
    text: "Growcer uses browser storage for features such as cart items, wishlist items and order history in this frontend demo.",
  },
  {
    icon: Eye,
    title: "Your Choices",
    text: "You can remove locally stored cart, wishlist and order information by clearing the website data from your browser.",
  },
];

function Privacy() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <ShieldCheck size={32} />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-green-50 sm:text-lg">
            Learn how information is handled while using the Growcer website.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-green-50 p-7 sm:p-10">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                <Lock size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Your Privacy Matters
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  Growcer is designed to provide a simple and secure shopping
                  experience. This page explains the type of information that
                  may be provided while using the website and how it is used
                  within this frontend application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY SECTIONS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {sections.map((section, index) => {
              const Icon = section.icon;

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
                        {section.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-600">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FRONTEND STORAGE NOTICE */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-extrabold text-gray-900">
              About This Demo
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Growcer is currently a React frontend project. Cart, wishlist and
              demo order information are stored locally in the browser using
              localStorage. No backend database is connected to these frontend
              features.
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm leading-6 text-gray-600">
                <span className="font-bold text-gray-900">Important:</span> This
                privacy page is intended for the current frontend demo. If a
                real backend, payment gateway, analytics service or
                authentication system is added later, this policy should be
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
            <h2 className="text-3xl font-extrabold">
              Have a privacy question?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-green-50">
              Contact the Growcer support team if you have any questions.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-green-50"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Privacy;
