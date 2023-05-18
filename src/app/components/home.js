"use client";

import React from "react";

function Home() {
  return (
    <section>
      <div className="container mt-4  py-10 mx-auto text-center">
        <h1 className="text-5xl font-bold text-green-600 mb-4">
          Help End Hunger
        </h1>
        <p className="text-3xl text-white mb-8">
          Together, we can make a difference
        </p>
        <div className="flex justify-center items-center mb-8">
          <a
            href="https://donate.stripe.com/test_bIYcOE7D01Kt1Gg5kk"

            className="bg-blue-500 bg-opacity-80 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg border-white border-4    transition duration-300 ease-in-out mr-4"
          >
            Donate
          </a>
          <a
            href="#about"
            className="hover:bg-green-700 bg-opacity-80 bg-green-400 text-white font-bold py-3 px-8 rounded-full shadow-lg border-white border-4 transition duration-300 ease-in-out"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
