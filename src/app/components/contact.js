"use client";

import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="  bg-black py-12 bg-opacity-70 bg-cover bg-blend-darken bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://c1.wallpaperflare.com/preview/385/169/236/children-laugh-study-of-laptop.jpg')",
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl inline font-bold text-white  mb-4 ">
          Contact Us
        </h2>
        <p className="text-xl text-white mb-8">
          Have a question or want to get involved? Reach out to us today.
        </p>
        <div className="m-2 p-2 flex justify-center items-center ">
          <form
            action="https://getform.io/f/ecfc1ad1-5bb4-4ad1-b6d3-7dbc81fdc8e7"
            method="POST"
            className=" flex flex-col  w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 mx-4 bg-transparent border-2 border-black rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="m-4 p-2 bg-transparent border-2 border-black rounded-md text-white "
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 mx-4 bg-transparent border-2 border-black rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="bg-green-500 text-white font-bold py-3 px-8 my-8 mx-auto rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out">
              Let&apos;talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
