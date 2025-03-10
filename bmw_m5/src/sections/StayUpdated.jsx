import React from "react";

const StayUpdated = () => {
  return (
    <section id="contact-us" className="w-full bg-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Stay Updated</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to receive the latest BMW M5 news, updates, and exclusive offers.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-[0px_0px_20px_rgba(255,0,0,0.6)]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
