import { useState } from "react";

import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  X,
  ChevronDown,
  Heart,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [shopDropdown, setShopDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const [mobileShopDropdown, setMobileShopDropdown] = useState(false);
  const [mobileCategoryDropdown, setMobileCategoryDropdown] =
    useState(false);

  const navigate = useNavigate();

  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  // =========================
  // SEARCH
  // =========================

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = searchText.trim();

    if (!searchValue) {
      navigate("/shop");
      return;
    }

    navigate(`/shop?search=${encodeURIComponent(searchValue)}`);

    setMobileMenu(false);
  };

  // =========================
  // CLOSE MOBILE MENU
  // =========================

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileShopDropdown(false);
    setMobileCategoryDropdown(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* =========================================
          MAIN NAVBAR
      ========================================= */}

      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-5 px-6 py-4">

        {/* =========================================
            LOGO
        ========================================= */}

        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2"
        >
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full bg-green-100 text-2xl
              transition-all duration-300
              group-hover:scale-110
              group-hover:rotate-3
            "
          >
            🛒
          </div>

          <div>
            <h1
              className="
                text-xl font-bold leading-none
                text-[#183b2a]
                transition-colors duration-300
                group-hover:text-[#39ad7a]
              "
            >
              Growcer
            </h1>

            <p className="mt-1 text-[9px] tracking-wide text-gray-500">
              ONLINE STORE
            </p>
          </div>
        </Link>

        {/* =========================================
            DESKTOP MENU
        ========================================= */}

        <nav
          className="
            hidden lg:flex
            items-center
            gap-7
            animate-fade-down
          "
        >

          {/* HOME */}

          <Link
            to="/"
            className="
              whitespace-nowrap
              text-sm font-medium text-gray-700
              transition-all duration-300
              hover:-translate-y-0.5
              hover:text-[#39ad7a]
            "
          >
            Home
          </Link>

          {/* =========================================
              SHOP DROPDOWN
          ========================================= */}

          <div
            className="relative"
            onMouseEnter={() => setShopDropdown(true)}
            onMouseLeave={() => setShopDropdown(false)}
          >
            <button
              type="button"
              onClick={() => setShopDropdown(!shopDropdown)}
              className="
                flex items-center gap-1
                whitespace-nowrap
                text-sm font-medium text-gray-700
                transition-all duration-300
                hover:-translate-y-0.5
                hover:text-[#39ad7a]
              "
            >
              Shop

              <ChevronDown
                size={15}
                className={`
                  transition-transform duration-300
                  ${shopDropdown ? "rotate-180" : ""}
                `}
              />
            </button>

            {shopDropdown && (
              <div className="absolute left-0 top-full z-50 w-52 pt-3">
                <div
                  className="
                    animate-scale
                    overflow-hidden
                    rounded-xl
                    border border-gray-100
                    bg-white
                    py-2
                    shadow-xl
                  "
                >
                  <Link
                    to="/shop"
                    onClick={() => setShopDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    All Products
                  </Link>

                  <Link
                    to="/shop?sort=rating"
                    onClick={() => setShopDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    Best Selling
                  </Link>

                  <Link
                    to="/shop?sort=discount"
                    onClick={() => setShopDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    Discount Products
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* =========================================
              CATEGORY DROPDOWN
          ========================================= */}

          <div
            className="relative"
            onMouseEnter={() => setCategoryDropdown(true)}
            onMouseLeave={() => setCategoryDropdown(false)}
          >
            <button
              type="button"
              onClick={() =>
                setCategoryDropdown(!categoryDropdown)
              }
              className="
                flex items-center gap-1
                whitespace-nowrap
                text-sm font-medium text-gray-700
                transition-all duration-300
                hover:-translate-y-0.5
                hover:text-[#39ad7a]
              "
            >
              Category

              <ChevronDown
                size={15}
                className={`
                  transition-transform duration-300
                  ${categoryDropdown ? "rotate-180" : ""}
                `}
              />
            </button>

            {categoryDropdown && (
              <div className="absolute left-0 top-full z-50 w-56 pt-3">
                <div
                  className="
                    animate-scale
                    overflow-hidden
                    rounded-xl
                    border border-gray-100
                    bg-white
                    py-2
                    shadow-xl
                  "
                >
                  <Link
                    to="/shop?category=Vegetables"
                    onClick={() => setCategoryDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    🥦 Vegetables
                  </Link>

                  <Link
                    to="/shop?category=Fruits"
                    onClick={() => setCategoryDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    🍎 Fruits
                  </Link>

                  <Link
                    to="/shop?category=Dairy"
                    onClick={() => setCategoryDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    🥛 Dairy
                  </Link>

                  <Link
                    to="/shop?category=Bakery"
                    onClick={() => setCategoryDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    🍞 Bakery
                  </Link>

                  <Link
                    to="/shop?category=Beverages"
                    onClick={() => setCategoryDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    🥤 Beverages
                  </Link>

                  <Link
                    to="/shop?category=Meat"
                    onClick={() => setCategoryDropdown(false)}
                    className="
                      block px-5 py-3 text-sm text-gray-700
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-green-50
                      hover:text-[#39ad7a]
                    "
                  >
                    🍗 Meat & Chicken
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* ABOUT */}

          <Link
            to="/about"
            className="
              whitespace-nowrap
              text-sm font-medium text-gray-700
              transition-all duration-300
              hover:-translate-y-0.5
              hover:text-[#39ad7a]
            "
          >
            About
          </Link>

          {/* CONTACT */}

          <Link
            to="/contact"
            className="
              whitespace-nowrap
              text-sm font-medium text-gray-700
              transition-all duration-300
              hover:-translate-y-0.5
              hover:text-[#39ad7a]
            "
          >
            Contact
          </Link>
        </nav>

        {/* =========================================
            DESKTOP SEARCH
        ========================================= */}

        <form
          onSubmit={handleSearch}
          className="
            hidden
            max-w-[300px]
            flex-1
            md:block
          "
        >
          <div
            className="
              flex items-center
              rounded-full
              border border-gray-200
              bg-gray-50
              px-4 py-2
              transition-all duration-300
              focus-within:border-[#39ad7a]
              focus-within:bg-white
              focus-within:shadow-md
              hover:shadow-sm
            "
          >
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search here..."
              className="
                w-full
                bg-transparent
                text-sm
                outline-none
                placeholder:text-gray-400
              "
            />

            <button
              type="submit"
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-full
                bg-[#39ad7a]
                text-white
                transition-all duration-300
                hover:scale-110
                hover:bg-[#269b68]
                hover:rotate-6
              "
              aria-label="Search"
            >
              <Search size={17} />
            </button>
          </div>
        </form>

        {/* =========================================
            DESKTOP ACTIONS
        ========================================= */}

        <div
          className="
            hidden
            items-center
            gap-5
            lg:flex
            animate-fade-right
          "
        >
          {/* Currency */}

          <button
            type="button"
            className="
              whitespace-nowrap
              text-sm text-gray-600
              transition-all duration-300
              hover:-translate-y-0.5
              hover:text-[#39ad7a]
            "
          >
            ₹ INR
          </button>

          {/* Language */}

          <button
            type="button"
            className="
              whitespace-nowrap
              text-sm text-gray-600
              transition-all duration-300
              hover:-translate-y-0.5
              hover:text-[#39ad7a]
            "
          >
            🌐 English
          </button>

          {/* Account */}

          <Link
            to="/account"
            className="
              flex items-center gap-1
              whitespace-nowrap
              text-sm text-gray-600
              transition-all duration-300
              hover:-translate-y-0.5
              hover:text-[#39ad7a]
            "
          >
            <UserRound size={18} />
            My Account
          </Link>

          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="
              relative
              text-gray-600
              transition-all duration-300
              hover:scale-110
              hover:text-red-500
            "
            aria-label="Wishlist"
          >
            <Heart
              size={21}
              fill={wishlist.length > 0 ? "currentColor" : "none"}
            />

            {wishlist.length > 0 && (
              <span
                className="
                  absolute -right-2 -top-2
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full
                  bg-red-500
                  text-[9px]
                  font-bold
                  text-white
                  animate-scale
                "
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}

          <Link
            to="/cart"
            className="
              relative
              text-gray-600
              transition-all duration-300
              hover:scale-110
              hover:text-[#39ad7a]
            "
            aria-label="Cart"
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span
                className="
                  absolute -right-2 -top-2
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full
                  bg-[#39ad7a]
                  text-[9px]
                  font-bold
                  text-white
                  animate-scale
                "
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* =========================================
            MOBILE ACTIONS
        ========================================= */}

        <div className="flex items-center gap-3 lg:hidden">

          {/* Mobile Wishlist */}

          <Link
            to="/wishlist"
            className="
              relative
              text-gray-600
              transition-all duration-300
              hover:scale-110
              hover:text-red-500
            "
          >
            <Heart
              size={21}
              fill={wishlist.length > 0 ? "currentColor" : "none"}
            />

            {wishlist.length > 0 && (
              <span
                className="
                  absolute -right-2 -top-2
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full
                  bg-red-500
                  text-[9px]
                  text-white
                "
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Mobile Cart */}

          <Link
            to="/cart"
            className="
              relative
              text-gray-600
              transition-all duration-300
              hover:scale-110
              hover:text-[#39ad7a]
            "
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span
                className="
                  absolute -right-2 -top-2
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full
                  bg-[#39ad7a]
                  text-[9px]
                  text-white
                "
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Menu Button */}

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              rounded-lg
              p-2
              text-gray-700
              transition-all duration-300
              hover:scale-105
              hover:bg-green-50
              hover:text-[#39ad7a]
            "
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      {mobileMenu && (
        <div
          className="
            border-t
            border-gray-100
            bg-white
            px-5 py-5
            shadow-lg
            animate-fade-down
            lg:hidden
          "
        >
          <nav className="flex flex-col gap-4">

            {/* HOME */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                font-medium text-gray-700
                transition-all duration-300
                hover:translate-x-1
                hover:text-[#39ad7a]
              "
            >
              Home
            </Link>

            {/* =========================================
                MOBILE SHOP
            ========================================= */}

            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileShopDropdown(!mobileShopDropdown)
                }
                className="
                  flex w-full
                  items-center justify-between
                  font-medium text-gray-700
                  transition-colors
                  hover:text-[#39ad7a]
                "
              >
                Shop

                <ChevronDown
                  size={17}
                  className={`
                    transition-transform duration-300
                    ${
                      mobileShopDropdown
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {mobileShopDropdown && (
                <div
                  className="
                    mt-3 ml-4
                    space-y-3
                    border-l-2
                    border-green-100
                    pl-4
                    animate-fade-left
                  "
                >
                  <Link
                    to="/shop"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    All Products
                  </Link>

                  <Link
                    to="/shop?sort=rating"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    Best Selling
                  </Link>

                  <Link
                    to="/shop?sort=discount"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    Discount Products
                  </Link>
                </div>
              )}
            </div>

            {/* =========================================
                MOBILE CATEGORY
            ========================================= */}

            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileCategoryDropdown(
                    !mobileCategoryDropdown
                  )
                }
                className="
                  flex w-full
                  items-center justify-between
                  font-medium text-gray-700
                  transition-colors
                  hover:text-[#39ad7a]
                "
              >
                Category

                <ChevronDown
                  size={17}
                  className={`
                    transition-transform duration-300
                    ${
                      mobileCategoryDropdown
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {mobileCategoryDropdown && (
                <div
                  className="
                    mt-3 ml-4
                    space-y-3
                    border-l-2
                    border-green-100
                    pl-4
                    animate-fade-left
                  "
                >
                  <Link
                    to="/shop?category=Vegetables"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    🥦 Vegetables
                  </Link>

                  <Link
                    to="/shop?category=Fruits"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    🍎 Fruits
                  </Link>

                  <Link
                    to="/shop?category=Dairy"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    🥛 Dairy
                  </Link>

                  <Link
                    to="/shop?category=Bakery"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    🍞 Bakery
                  </Link>

                  <Link
                    to="/shop?category=Beverages"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    🥤 Beverages
                  </Link>

                  <Link
                    to="/shop?category=Meat"
                    onClick={closeMobileMenu}
                    className="
                      block text-sm text-gray-600
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#39ad7a]
                    "
                  >
                    🍗 Meat & Chicken
                  </Link>
                </div>
              )}
            </div>

            {/* ABOUT */}

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="
                font-medium text-gray-700
                transition-all duration-300
                hover:translate-x-1
                hover:text-[#39ad7a]
              "
            >
              About
            </Link>

            {/* CONTACT */}

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="
                font-medium text-gray-700
                transition-all duration-300
                hover:translate-x-1
                hover:text-[#39ad7a]
              "
            >
              Contact
            </Link>

            {/* =========================================
                MOBILE SEARCH
            ========================================= */}

            <form
              onSubmit={handleSearch}
              className="
                mt-1
                flex items-center
                rounded-full
                border border-gray-200
                bg-gray-50
                px-4 py-2
                transition-all duration-300
                focus-within:border-[#39ad7a]
                focus-within:bg-white
                focus-within:shadow-md
              "
            >
              <input
                type="text"
                value={searchText}
                onChange={(e) =>
                  setSearchText(e.target.value)
                }
                placeholder="Search products..."
                className="
                  w-full
                  bg-transparent
                  text-sm
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  flex h-8 w-8
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#39ad7a]
                  text-white
                  transition-all duration-300
                  hover:scale-110
                "
              >
                <Search size={15} />
              </button>
            </form>

            {/* =========================================
                MOBILE ACCOUNT
            ========================================= */}

            <div
              className="
                flex flex-col gap-4
                border-t
                border-gray-100
                pt-4
                animate-fade-up
              "
            >
              <Link
                to="/account"
                onClick={closeMobileMenu}
                className="
                  flex items-center gap-3
                  text-gray-600
                  transition-all duration-300
                  hover:translate-x-1
                  hover:text-[#39ad7a]
                "
              >
                <UserRound size={18} />
                <span className="font-medium">
                  My Account
                </span>
              </Link>

              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className="
                  flex items-center gap-3
                  text-gray-600
                  transition-all duration-300
                  hover:translate-x-1
                  hover:text-red-500
                "
              >
                <Heart size={18} />

                <span className="font-medium">
                  Wishlist
                </span>

                {wishlist.length > 0 && (
                  <span
                    className="
                      rounded-full
                      bg-red-500
                      px-2 py-0.5
                      text-[10px]
                      text-white
                    "
                  >
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="
                  flex items-center gap-3
                  text-gray-600
                  transition-all duration-300
                  hover:translate-x-1
                  hover:text-[#39ad7a]
                "
              >
                <ShoppingCart size={18} />

                <span className="font-medium">
                  Cart
                </span>

                {cartCount > 0 && (
                  <span
                    className="
                      rounded-full
                      bg-[#39ad7a]
                      px-2 py-0.5
                      text-[10px]
                      text-white
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;