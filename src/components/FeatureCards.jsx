import { Truck, Headphones, ShieldCheck, RotateCcw } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free delivery on orders above ₹500",
    icon: Truck,
  },
  {
    id: 2,
    title: "Customer Support",
    description: "24/7 support whenever you need us",
    icon: Headphones,
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "100% secure and protected payment",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Money Back Guarantee",
    description: "Easy return and refund policy",
    icon: RotateCcw,
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Heading */}

        <div className="mb-8 text-center animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#39ad7a]">
            Why Choose Us
          </span>

          <h2 className="mt-2 text-2xl font-bold text-[#183b2a] sm:text-3xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500 sm:text-base">
            We make grocery shopping simple, convenient and reliable.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="
                  group
                  animate-fade-up
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  ease-in-out
                  hover:-translate-y-2
                  hover:border-green-100
                  hover:shadow-xl
                "
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Icon */}

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-50
                    text-[#0d6b3f]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                    group-hover:bg-[#0d6b3f]
                    group-hover:text-white
                  "
                >
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}

                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    text-[#183b2a]
                    transition-colors
                    duration-300
                    group-hover:text-[#0d6b3f]
                  "
                >
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

                {/* Bottom Line */}

                <div
                  className="
                    mx-auto
                    mt-5
                    h-1
                    w-8
                    rounded-full
                    bg-green-100
                    transition-all
                    duration-300
                    group-hover:w-16
                    group-hover:bg-[#39ad7a]
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
