import { Link } from "react-router-dom";

import { ShoppingBasket, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#102d20] text-white">
      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="border-b border-white/10 px-4 py-10 sm:py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Newsletter Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6ee7a8]">
              Stay Updated
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Get Fresh Deals in Your Inbox
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
              Subscribe to receive new products, special offers and exclusive
              discounts.
            </p>
          </div>

          {/* Newsletter Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md overflow-hidden rounded-xl bg-white p-1"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
            />

            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-[#39ad7a] px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#269b68]"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* =================================================
              BRAND
          ================================================== */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#39ad7a]">
                <ShoppingBasket size={22} />
              </div>

              <span className="text-2xl font-bold">Growcer</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Your trusted online grocery store for fresh, healthy and quality
              products delivered to your doorstep.
            </p>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}
            <div className="mt-6 flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#39ad7a]"
              >
                f
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#39ad7a]"
              >
                IG
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#39ad7a]"
              >
                X
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>
            <h3 className="text-base font-bold">Quick Links</h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/"
                className="block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-[#6ee7a8]"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-[#6ee7a8]"
              >
                Shop
              </Link>

              <Link
                to="/wishlist"
                className="block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-[#6ee7a8]"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-[#6ee7a8]"
              >
                Cart
              </Link>

              <Link
                to="/account"
                className="block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-[#6ee7a8]"
              >
                My Account
              </Link>
            </div>
          </div>

          {/* =================================================
              CUSTOMER SERVICE
          ================================================== */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Customer Service
            </h3>

            <div className="space-y-3">
              <Link
                to="/help-center"
                className="block text-sm text-white/60 transition hover:text-[#6ee7a8]"
              >
                Help Center
              </Link>

              <Link
                to="/shipping"
                className="block text-sm text-white/60 transition hover:text-[#6ee7a8]"
              >
                Shipping Information
              </Link>

              <Link
                to="/returns"
                className="block text-sm text-white/60 transition hover:text-[#6ee7a8]"
              >
                Return Policy
              </Link>

              <Link
                to="/privacy"
                className="block text-sm text-white/60 transition hover:text-[#6ee7a8]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block text-sm text-white/60 transition hover:text-[#6ee7a8]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}
          <div id="contact">
            <h3 className="text-base font-bold">Contact Us</h3>

            <div className="mt-5 space-y-5">
              {/* Location */}
              <div className="flex gap-3">
                <MapPin size={19} className="mt-1 shrink-0 text-[#6ee7a8]" />

                <p className="text-sm leading-6 text-white/60">
                  Varanasi,
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#6ee7a8]" />

                <p className="text-sm text-white/60">+91 98765 43210</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#6ee7a8]" />

                <p className="break-all text-sm text-white/60">
                  support@growcer.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM COPYRIGHT
      ====================================================== */}
      <div className="border-t border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © 2026 Growcer. All rights reserved.
          </p>

          <p className="text-xs text-white/50">Fresh • Healthy • Delivered</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
