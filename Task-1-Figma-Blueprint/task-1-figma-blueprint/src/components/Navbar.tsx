"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Vehicles",
      route: "/vehicles",
    },
    {
      title: "Details",
      route: "/car-details",
    },
    {
      title: "About Us",
      route: "/",
    },
    {
      title: "Contact Us",
      route: "/",
    },
  ];

  return (
    <nav className="w-full h-28 flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center z-50">
        <Image
          src="/Images/Logo/Logo.svg"
          alt="Car rental logo"
          width={180}
          height={50}
          priority
          className="w-32 sm:w-40 lg:w-48"
        />
      </div>

      <div className="hidden lg:flex items-center justify-center gap-8">
        {NavItems.map(
          (item: { title: string; route: string }, index: number) => {
            return (
              <Link
                key={index}
                href={item.route}
                className={`text-center text-black text-lg ${
                  item.title === "Vehicles" ? "font-bold" : "font-medium"
                } hover:text-gray-700 transition-colors`}
              >
                {item.title}
              </Link>
            );
          }
        )}
      </div>

      <div className="hidden lg:flex items-center justify-center gap-2">
        <div>
          <Image
            src="/Images/call.svg"
            alt="Car rental call"
            width={40}
            height={40}
            priority
            className="w-8 h-8 lg:w-10 lg:h-10"
          />
        </div>
        <div className="text-[16px] flex flex-col items-start justify-center ">
          <h2 className="text-[16px]">Need help?</h2>
          <p className="font-semibold">+996 247-1680</p>
        </div>
      </div>

      <button
        className="lg:hidden flex flex-col items-center justify-center w-8 h-8 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
          }`}
        ></span>
      </button>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NavItems.map(
            (item: { title: string; route: string }, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.route}
                  className={`text-center text-black text-2xl ${
                    item.title === "Vehicles" ? "font-bold" : "font-medium"
                  } hover:text-gray-700 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
}
