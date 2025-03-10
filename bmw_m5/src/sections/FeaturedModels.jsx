import React from "react";
import { featuredCars } from "../constants";

const FeaturedModels = () => {
  return (
    <section id="models" className="w-full py-10 p-4">
      <div className="max-container text-center">
        <h2 className="text-5xl font-bold text-gray-900">Featured Models</h2>
        <p className="text-lg text-slate-700 mt-4">
          Discover the most iconic BMW M5 models, engineered for performance and luxury.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-container">
        {featuredCars.map((car, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <img src={car.img} alt={car.name} className="w-full h-60 object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold mt-6">{car.name}</h3>
            <p className="text-gray-600 mt-2">{car.description}</p>
            <div className="mt-4 text-lg font-medium">
              <span className="text-blue-600">{car.power}</span> | 
              <span className="text-red-600"> {car.speed}</span>
            </div>
            <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedModels;
