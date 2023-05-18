"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [mobile, setMobile] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "explore",
    },
    {
      id: 4,
      link: "services",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <header>
      <div className="flex sticky h-20 w-full items-center justify-between bg-black bg-opacity-80 pt-6 px-4 ">
        <div>
          <h1 className="text-white text-5xl font-bold">
            <span className="text-green-600">TSP</span> Cares
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ link, id }) => (
            <li key={id}>
              <Link
                href={`#${link}`}
                className="text-[#f4f4f4] px-4 font-medium hover:text-blue-500 duration-400  hover:underline  cursor-pointer capitalize hover:scale-105 duration-200"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setMobile(!mobile)}
          className="cursor-pointer z-10 text-gray-500 md:hidden"
        >
          {mobile ? (
            <FaTimes size={30} className="text-white" />
          ) : (
            <FaBars size={30} className="text-white" />
          )}
        </div>

        {mobile && (
          <div className=" transition-all ease-in-out duration-300 absolute top-20 left-0 w-full min-h-[70vh] md:hidden">
            <ul
              className={`   bg-green-300 py-5 flex flex-col items-center justify-center pr-3 min-h-[70vh] gap-7 `}
            >
              {links.map(({ link, id }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMobile(!mobile)}
                    href={`#${link}`}
                    className=" text-blue-500 font-bold border-b-2 border-blue-600 shadow-md shadow-cyan-600  px-auto text-xl cursor-pointer capitalize"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
