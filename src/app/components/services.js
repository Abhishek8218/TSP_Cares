import React from "react";

function Services() {
  return (
    <section id="services" className="bg-gray-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl inline font-bold text-black mb-4 border-b-4  border-gray-500">
          Our Services
        </h2>
        <p className="text-2xl text-black mb-8 mt-8">
          We offer a range of services to combat hunger in our community:
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <ul className="text-left mb-8 flex flex-col md:flex-row    list-disc list-inside ">
            <li className="text-blue-500 text-xl mt-4  md:ml-4">
              Food Distribution Programs
            </li>
            <li className="text-blue-500 text-xl mt-4  md:ml-4">
              Community Meal Initiatives
            </li>
            <li className="text-blue-500 text-xl mt-4  md:ml-4">
              Educational Workshops
            </li>
            <li className="text-blue-500 text-xl mt-4 md:ml-4">
              Volunteer Opportunities
            </li>
          </ul>
        </div>
        <a
          href="#contact"
          className="bg-green-500 m-2 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
}

export default Services;
