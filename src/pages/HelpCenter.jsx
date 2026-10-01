import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  MessageCircle,
  Truck,
  RotateCcw,
  CreditCard,
  Headphones,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "Browse products from the Shop page, add your favorite products to the cart, then proceed to checkout and enter your delivery details.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Delivery is free on orders of ₹500 or more. For orders below ₹500, a delivery charge of ₹50 is applied.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can check your order history from the My Account page. Your order status and order details will be displayed there.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "Growcer currently provides Cash on Delivery and demo card payment options during checkout.",
  },
  {
    question: "Can I cancel or return an order?",
    answer:
      "For return or cancellation assistance, please contact our support team with your order details.",
  },
  {
    question: "Can I save products for later?",
    answer:
      "Yes. Click the heart icon on any product to add it to your Wishlist. Your wishlist is saved in your browser.",
  },
];

const supportCards = [
  {
    icon: Truck,
    title: "Shipping & Delivery",
    text: "Learn about delivery charges and order delivery.",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    text: "Get help with returns and refund-related questions.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    text: "Information about available payment options.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    text: "Need help? Our support team is here for you.",
  },
];

function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            Help Center
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            How can we help you?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-green-50 sm:text-lg">
            Find answers to common questions about orders, delivery, payments,
            returns and your Growcer account.
          </p>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-semibold text-green-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Find quick answers
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Everything you need to know about shopping with Growcer.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-green-200 bg-green-50/50 shadow-sm"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-bold text-gray-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={21}
                      className={`shrink-0 text-green-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-green-100 px-5 pb-5 pt-4 text-sm leading-7 text-gray-600 sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-green-700 px-6 py-12 text-center text-white shadow-xl sm:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <MessageCircle size={30} />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold">Still need help?</h2>

            <p className="mx-auto mt-3 max-w-xl text-green-50">
              Our support team is ready to help you with your Growcer
              experience.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-green-50"
            >
              Contact Support
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HelpCenter;
