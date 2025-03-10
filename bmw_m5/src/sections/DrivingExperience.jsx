import React from "react";
import { reviews } from "../constants";

const DrivingExperience = () => {
  return (
    <section id="reviews" className="w-full py-10 bg-gray-900 p-4 rounded-4xl">
      <div className="max-container text-center">
        <h2 className="text-5xl font-bold text-white">What Experts Say</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">
          Hear from the world’s top automotive experts about the BMW M5 experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-container">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center text-white">
            <img
              src={review.img}
              alt={review.name}
              className="w-20 h-20 object-cover rounded-full mx-auto border-2 border-blue-500"
            />
            <h3 className="text-2xl font-semibold mt-4">{review.name}</h3>
            <p className="text-sm text-gray-400">{review.profession}</p>
            <p className="text-gray-300 mt-4 italic">"{review.experience}"</p>
            <span className="text-blue-400 font-semibold mt-2 block">{review.model}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrivingExperience;
