import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              We'd Love to Hear From You
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Let's Talk About
              <span className="block text-green-100">Fresh & Organic</span>
            </h1>

            <p className="mt-5 text-green-50 text-lg leading-8 max-w-2xl">
              Have a question about our products, delivery or your order? Our
              team is here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-7">
            {/* CONTACT INFO */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                  <MapPin size={23} className="text-green-600" />
                </div>

                <h3 className="font-bold text-xl text-gray-900">Visit Us</h3>

                <p className="text-gray-500 mt-2 leading-6">
                  Varanasi, Uttar Pradesh,
                  <br />
                  India
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  <Phone size={23} className="text-blue-600" />
                </div>

                <h3 className="font-bold text-xl text-gray-900">Call Us</h3>

                <p className="text-gray-500 mt-2">+91 98765 43210</p>

                <p className="text-sm text-gray-400 mt-1">
                  Mon - Sat, 9 AM - 7 PM
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                  <Mail size={23} className="text-orange-500" />
                </div>

                <h3 className="font-bold text-xl text-gray-900">Email Us</h3>

                <p className="text-gray-500 mt-2">support@growcer.com</p>

                <p className="text-sm text-gray-400 mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                  Contact Form
                </span>

                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Send Us a Message
                </h2>

                <p className="text-gray-500 mt-2">
                  Fill out the form and we'll get back to you soon.
                </p>
              </div>

              {submitted ? (
                <div className="min-h-80 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle2 size={45} className="text-green-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    Message Sent!
                  </h3>

                  <p className="text-gray-500 mt-2 max-w-md">
                    Thank you for contacting Growcer. Our team will get back to
                    you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="example@email.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>

                      <textarea
                        rows="6"
                        required
                        placeholder="Write your message..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold transition"
                  >
                    <Send size={19} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT FEATURES */}
      <section className="pb-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-green-100 flex items-center justify-center">
                <MessageCircle size={23} className="text-green-600" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Quick Support</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Fast customer assistance
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center">
                <Clock size={23} className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">24/7 Assistance</h3>

                <p className="text-sm text-gray-500 mt-1">We're here to help</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-100 flex items-center justify-center">
                <CheckCircle2 size={23} className="text-orange-500" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Trusted Service</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Customer satisfaction first
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
