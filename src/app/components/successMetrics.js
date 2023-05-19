"use client";

import React from "react";

function SuccessMetrics() {
  const mealsServed = 25000;
  const hungerRateReduction = 30;
  const individualsSupported = 5000;

  return (
    <section id="success-metrics" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-10">
        <h2 className="text-3xl inline font-bold text-black border-b-2 shadow-sm shadow-gray-500 px-2 py-1 border-gray-400 mb-10">
          Our Impact
        </h2>
        <p className="text-lg text-start md:text-center text-gray-700 mb-8 mx-auto mt-10">
          At TSP Cares, we are committed to making a positive difference in the
          fight against hunger. Here are some of our key success metrics:
        </p>
        <div className="flex flex-wrap justify-center items-center mb-8 gap-3 ">
          <div className="w-72 sm:w-1/2 md:w-1/3 lg:w-1/4  mb-4 bg-green-500 rounded-lg shadow-lg shadow-blue-700  hover:scale-105 ">
            <h3 className="text-2xl font-bold mb-2 bg-blue-500 p-2 rounded-md">
              Meals Served
            </h3>
            <p className="text-lg text-black ">{mealsServed} Meals</p>
          </div>
          <div className="w-72 sm:w-1/2 md:w-1/3 lg:w-1/4  mb-4 bg-green-500 rounded-lg shadow-lg shadow-blue-700 hover:scale-105">
            <h3 className="text-2xl font-bold mb-2 bg-blue-500 p-2 rounded-md">
              Hunger Rate Reduction
            </h3>
            <p className="text-lg text-black ">
              {hungerRateReduction}% Decrease
            </p>
          </div>
          <div className="w-72 sm:w-1/2 md:w-1/3 lg:w-1/4  mb-4 bg-green-500 rounded-lg shadow-lg shadow-blue-700 hover:scale-105">
            <h3 className="text-2xl font-bold mb-2 bg-blue-500 p-2 rounded-md">
              Individuals Supported
            </h3>
            <p className="text-lg text-black ">
              {individualsSupported} Individuals
            </p>
          </div>
        </div>
        <p className="text-lg text-start md:text-center text-gray-700 mb-8 mx-auto">
          These metrics reflect the impact of our dedicated volunteers, generous
          donors, and collaborative partnerships. Together, we are making
          strides towards ending hunger in our community.
        </p>
        <a
          href="https://rzp.io/l/bPfvWFJzpr"
          className="bg-blue-500   text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700  mt-8"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}
export default SuccessMetrics;
