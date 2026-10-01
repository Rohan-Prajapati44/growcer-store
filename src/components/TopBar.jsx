import { Link } from "react-router-dom";
import { MapPin, Clock3, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#0d6b3f] text-white text-xs animate-fade-down">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2">
        {/* Left Navigation */}
        <div className="flex items-center gap-5">
          <Link to="/" className="transition-all duration-300 hover:text-yellow-300 hover:-translate-y-0.5">
            Home
          </Link>

          <Link to="/shop" className="transition-all duration-300 hover:text-yellow-300 hover:-translate-y-0.5">
            Shop
          </Link>

          <Link to="/shop" className="transition-all duration-300 hover:text-yellow-300 hover:-translate-y-0.5">
            Category
          </Link>

          <Link to="/contact" className="transition-all duration-300 hover:text-yellow-300 hover:-translate-y-0.5">
            Contact
          </Link>
        </div>

        {/* Right Information */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Location */}
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            Varanasi, Uttar Pradesh
          </span>

          {/* Opening Hours */}
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            Everyday 10:00 AM - 08:00 PM
          </span>

          {/* Phone */}
          <span className="flex items-center gap-1.5">
            <Phone size={14} />
            +91 98765 43210
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
