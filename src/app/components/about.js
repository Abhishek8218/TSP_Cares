"use client";

import React, { useState } from "react";

function About() {
  const [learnClicked, setLearnClicked] = useState(false);

  return (
    <section id="about" className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl inline font-bold text-black mb-6">About Us</h2>
        <div className="px-10">
          <p className="  text-lg text-start md:text-center text-blue-500 mb-8 mt-4">
            At TSP Cares, we are dedicated to fighting hunger and provide
            support and resources to those in need, ensuring that no one goes
            hungry.
          </p>
          <p className="hidden md:block text-lg text-start md:text-center text-gray-500 mb-8">
            Our organization collaborates with local food banks, community
            organizations, and government agencies to maximize our impact.
          </p>

          <p className=" hidden md:block text-lg text-start md:text-center text-blue-500 mb-8">
            Join us in our fight against hunger. Together, we can create a
            brighter future for everyone.
          </p>
          {learnClicked ? (
            <div>
              <p className="text-lg text-start md:text-center text-gray-500 mb-8 md:hidden">
                Our organization collaborates with local food banks, community
                organizations, and government agencies to maximize our impact.
              </p>

              <p className="text-lg text-start md:text-center text-blue-500 mb-8 md:hidden">
                Join us in our fight against hunger. Together, we can create a
                brighter future for everyone.
              </p>
              <button
                onClick={() => setLearnClicked(false)}
                className=" bg-green-500 text-white font-bold mb-4 py-3 px-8 rounded-full shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out md:hidden"
              >
                Show Less
              </button>
            </div>
          ) : (
            <button
              onClick={() => setLearnClicked(true)}
              className=" bg-green-500 text-white font-bold m-4 py-3 px-8 rounded-full shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out md:hidden"
            >
              Learn More
            </button>
          )}
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abhishek-kumar-9656a3220"
              )
            }
            className=" bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-400 transition duration-300 ease-in-out "
          >
            Reach Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
