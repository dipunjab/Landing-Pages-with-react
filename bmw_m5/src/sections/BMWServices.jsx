import React from "react";
import { services } from "../constants";

const BMWService = () => {
  return (
    <section id="service" className="w-full py-10 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-slate-800">BMW Premium Services</h2>
        <p className="text-lg text-gray-400 mt-4">
          Experience top-tier service with BMW-certified experts and genuine parts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{service.name}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-16 bg-gray-200 text-slate-700 p-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-semibold text-center">Why Choose BMW Service?</h3>
        <table className="w-full mt-6 text-left border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-600">
              <th className="py-2 px-4">Feature</th>
              <th className="py-2 px-4">BMW Authorized Service</th>
              <th className="py-2 px-4">Other Shops</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-3 px-4">Certified BMW Technicians</td>
              <td className="py-3 px-4 text-green-400">✔ Yes</td>
              <td className="py-3 px-4 text-red-400">✘ No</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-3 px-4">Original BMW Parts</td>
              <td className="py-3 px-4 text-green-400">✔ Yes</td>
              <td className="py-3 px-4 text-red-400">✘ No</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-3 px-4">Warranty Protection</td>
              <td className="py-3 px-4 text-green-400">✔ Yes</td>
              <td className="py-3 px-4 text-red-400">✘ No</td>
            </tr>
            <tr>
              <td className="py-3 px-4">24/7 Roadside Assistance</td>
              <td className="py-3 px-4 text-green-400">✔ Yes</td>
              <td className="py-3 px-4 text-red-400">✘ No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BMWService;
