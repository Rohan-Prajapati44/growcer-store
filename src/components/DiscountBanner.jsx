import { ArrowRight, Clock3, Gift } from "lucide-react";

const DiscountBanner = () => {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="group relative overflow-hidden rounded-3xl bg-[#0d6b3f]">
          
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#39ad7a]/30" />

          <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:px-14 md:py-14">
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <Gift size={15} />
                Limited Time Offer
              </div>

              <p className="text-sm font-medium text-green-200">
                Special Deal For You
              </p>

              <h2 className="mt-2 max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Get Up To{" "}
                <span className="text-[#8ff0c3]">50% OFF</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-green-100 sm:text-base">
                Enjoy amazing discounts on fresh fruits, vegetables and
                organic products. Don't miss this special offer!
              </p>

              {/* Timer */}
              <div className="mt-6 flex items-center gap-3">
                <Clock3 size={20} className="text-[#8ff0c3]" />

                <div className="flex gap-2">
                  <div className="rounded-lg bg-white px-3 py-2 text-center">
                    <span className="block text-lg font-bold text-[#183b2a]">
                      02
                    </span>
                    <span className="text-[9px] text-gray-500">
                      DAYS
                    </span>
                  </div>

                  <div className="rounded-lg bg-white px-3 py-2 text-center">
                    <span className="block text-lg font-bold text-[#183b2a]">
                      12
                    </span>
                    <span className="text-[9px] text-gray-500">
                      HOURS
                    </span>
                  </div>

                  <div className="rounded-lg bg-white px-3 py-2 text-center">
                    <span className="block text-lg font-bold text-[#183b2a]">
                      45
                    </span>
                    <span className="text-[9px] text-gray-500">
                      MIN
                    </span>
                  </div>

                  <div className="rounded-lg bg-white px-3 py-2 text-center">
                    <span className="block text-lg font-bold text-[#183b2a]">
                      30
                    </span>
                    <span className="text-[9px] text-gray-500">
                      SEC
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="group/btn mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#0d6b3f] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#8ff0c3] hover:shadow-xl">
                Shop Now

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </button>
            </div>

            {/* Right image */}
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute h-56 w-56 rounded-full bg-white/10 blur-2xl sm:h-72 sm:w-72" />

              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85"
                alt="Fresh organic fruits"
                className="relative z-10 h-64 w-full max-w-[430px] rounded-3xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105 sm:h-80"
              />

              {/* Offer badge */}
              <div className="absolute -bottom-4 right-4 z-20 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-[#39ad7a] text-center shadow-xl transition-transform duration-500 group-hover:rotate-0 sm:right-8">
                <div>
                  <span className="block text-xl font-bold text-white">
                    50%
                  </span>
                  <span className="text-xs font-semibold text-white">
                    OFF
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;