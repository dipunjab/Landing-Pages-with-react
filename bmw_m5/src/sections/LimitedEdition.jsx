import React from "react";
import m5Limited  from "../assets/images/m5ltd.jpg";

const LimitedEdition = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            BMW M5 <span className="text-blue-700">Limited Edition</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            A rare fusion of innovation and power. With enhanced aerodynamics, a handcrafted interior, 
            and only <span className="font-bold text-red-600">500 units</span> worldwide, this is your chance to own true exclusivity.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-3xl font-bold text-gray-900">650+ HP</p>
              <p className="text-sm text-gray-500">Twin-Turbo V8</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-3xl font-bold text-gray-900">2.9 sec</p>
              <p className="text-sm text-gray-500">0-60 mph</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-3xl font-bold text-gray-900">190+ mph</p>
              <p className="text-sm text-gray-500">Top Speed</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-3xl font-bold text-gray-900">500 Units</p>
              <p className="text-sm text-gray-500">Worldwide</p>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            Reserve Now 🚀
          </button>
        </div>

        <div className="lg:w-1/2">
          <img
            src={m5Limited}
            alt="BMW M5 Limited Edition"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default LimitedEdition;
