import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-100/60 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl animate-pulse" />

      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="relative z-10">
            {/* Small Badge */}

            <div className="mb-5 animate-fade-left">
              <span
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-green-100
                  px-4 py-2
                  text-sm font-semibold
                  text-[#0d6b3f]
                  shadow-sm
                "
              >
                <CheckCircle2 size={16} />
                100% Fresh & Organic
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                animate-fade-left
                text-4xl
                font-extrabold
                leading-tight
                text-[#183b2a]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Fresh Groceries
              <span className="block text-[#0d6b3f]">Delivered to You</span>
            </h1>

            {/* Description */}

            <p
              className="
                animate-fade-left
                mt-6
                max-w-xl
                text-base
                leading-7
                text-gray-600
                sm:text-lg
              "
              style={{ animationDelay: "150ms" }}
            >
              Shop fresh vegetables, fruits, dairy products, bakery items and
              more. Get quality groceries delivered directly to your doorstep.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-4
                animate-fade-up
              "
              style={{ animationDelay: "300ms" }}
            >
              <Link
                to="/shop"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#0d6b3f]
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-green-900/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#09552f]
                  hover:shadow-xl
                "
              >
                <ShoppingBag size={19} />
                Shop Now
                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/about"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border-2
                  border-[#0d6b3f]
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-[#0d6b3f]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-lg
                "
              >
                Discover More
              </Link>
            </div>

            {/* Small Benefits */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                animate-fade-up
              "
              style={{ animationDelay: "450ms" }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={17} className="text-[#0d6b3f]" />
                Fresh Products
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={17} className="text-[#0d6b3f]" />
                Fast Delivery
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={17} className="text-[#0d6b3f]" />
                Secure Payment
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <div
            className="
              relative
              flex
              justify-center
              animate-fade-right
            "
          >
            {/* Main Image */}

            <div
              className="
                relative
                w-full
                max-w-[560px]
                overflow-hidden
                rounded-[2rem]
                shadow-2xl
                shadow-green-900/10
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            >
              <img
                // src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=85"
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
                alt="Fresh organic groceries"
                className="
                  hero-image
                  h-[380px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                  sm:h-[450px]
                  lg:h-[500px]
                "
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Discount Badge */}

            <div
              className="
                absolute
                -left-2
                top-8
                flex
                h-24
                w-24
                flex-col
                items-center
                justify-center
                rounded-full
                bg-[#fbbf24]
                text-center
                shadow-xl
                animate-float
                sm:-left-5
              "
            >
              <span className="text-2xl font-extrabold text-[#183b2a]">
                30%
              </span>

              <span className="text-xs font-bold text-[#183b2a]">OFF</span>
            </div>

            {/* Fresh Badge */}

            <div
              className="
                absolute
                -bottom-4
                right-4
                flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-4
                py-3
                shadow-xl
                animate-fade-up
                sm:right-8
              "
              style={{ animationDelay: "500ms" }}
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-green-100
                  text-lg
                "
              >
                🥬
              </div>

              <div>
                <p className="text-sm font-bold text-gray-800">
                  Fresh Everyday
                </p>

                <p className="text-xs text-gray-500">Quality you can trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
