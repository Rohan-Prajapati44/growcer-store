import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";

const promos = [
  {
    id: 1,
    title: "Fresh Vegetables",
    subtitle: "Get fresh & organic vegetables",
    discount: "30% OFF",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "Fresh Fruits",
    subtitle: "Healthy fruits for your family",
    discount: "25% OFF",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85",
  },
];

const PromoCards = () => {
  return (
    <section className="bg-white px-4 py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="group relative min-h-[280px] overflow-hidden rounded-2xl"
          >
            {/* Background Image */}
            <img
              src={promo.image}
              alt={promo.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[280px] flex-col justify-center p-7 sm:p-10">
              {/* Discount */}
              <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-[#39ad7a] px-4 py-2 text-xs font-bold text-white shadow-lg">
                <Tag size={14} />
                {promo.discount}
              </div>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {promo.title}
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/90">
                {promo.subtitle}
              </p>

              {/* Shop Button */}
              <Link
                to={`/shop?category=${encodeURIComponent(promo.category)}`}
                className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#183b2a] transition-all duration-300 hover:gap-3 hover:bg-[#39ad7a] hover:text-white"
              >
                Shop Now
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoCards;
