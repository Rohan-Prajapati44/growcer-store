import { Link } from "react-router-dom";
import {
  RotateCcw,
  PackageCheck,
  ShieldCheck,
  Clock3,
  AlertCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const returnPoints = [
  {
    icon: PackageCheck,
    title: "Product Condition",
    text: "Products should be unused and returned in their original condition whenever applicable.",
  },
  {
    icon: Clock3,
    title: "Request Support",
    text: "Contact our support team as soon as possible if there is an issue with your order.",
  },
  {
    icon: ShieldCheck,
    title: "Order Verification",
    text: "Please keep your order details available so our support team can verify the request.",
  },
];

function Returns() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <RotateCcw size={32} />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Return & Refund Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-green-50 sm:text-lg">
            Learn about our return, replacement and refund support process.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <ShieldCheck size={25} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Our Return Promise
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  At Growcer, we want you to have a smooth shopping experience.
                  If your order has a problem, please contact our support team
                  with your order information so we can review the issue and
                  assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RETURN CONDITIONS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-semibold text-green-600">
              Return Guidelines
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Important information
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {returnPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POLICY DETAILS */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900">
                <PackageCheck className="text-green-600" size={23} />
                Damaged or Incorrect Product
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                If you receive a damaged, incorrect or unsuitable product,
                contact Growcer support with your order details. Our team will
                review the request and guide you through the available
                resolution.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900">
                <RotateCcw className="text-green-600" size={23} />
                Refund Process
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Refund requests are reviewed based on the order and the issue
                reported. Once approved, the applicable refund process will be
                communicated by our support team.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900">
                <AlertCircle className="text-amber-600" size={23} />
                Important
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Because grocery products can include fresh and perishable items,
                return eligibility can depend on the product and the specific
                issue. Please contact support before sending anything back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-green-700 px-6 py-12 text-center text-white shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <MessageCircle size={28} />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold">
              Need help with an order?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-green-50">
              Contact our support team and share your order details.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-green-50"
              >
                Contact Support
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/help-center"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-bold transition hover:bg-white/10"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Returns;
