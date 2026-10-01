import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search, ShoppingBag } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-[75vh] bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Illustration */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse" />

          <div className="absolute inset-4 bg-white rounded-full shadow-sm flex items-center justify-center">
            <ShoppingBag size={55} className="text-green-600" />
          </div>
        </div>

        {/* 404 */}
        <p className="text-7xl sm:text-8xl font-black text-green-600">404</p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-500 max-w-lg mx-auto mt-4 leading-7">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to fresh products.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold transition"
          >
            <Home size={19} />
            Go to Home
          </Link>

          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-gray-800 border border-gray-200 hover:border-green-300 px-6 py-3.5 rounded-xl font-semibold transition"
          >
            <Search size={19} />
            Explore Shop
          </Link>
        </div>

        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-gray-500 hover:text-green-600 font-medium transition"
        >
          <ArrowLeft size={17} />
          Go Back
        </button>
      </div>
    </main>
  );
};

export default NotFound;
