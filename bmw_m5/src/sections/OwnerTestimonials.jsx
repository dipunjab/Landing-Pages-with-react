import React, { useState } from "react";
import { testimonials } from "../constants";

const OwnerTestimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900">Owner Testimonials</h2>
        <p className="text-gray-600 mt-2">What BMW M5 owners have to say</p>

        <div className="relative w-full mt-10 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center w-96 transition-all duration-300 ease-in-out">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 object-cover rounded-full border-4 border-gray-300 mb-4"
            />
            <p className="text-lg italic text-gray-700">"{testimonials[index].review}"</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{testimonials[index].name}</h3>
            <p className="text-sm text-gray-500">{testimonials[index].profession}</p>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OwnerTestimonials;
