"use client";
import Image from "next/image";
import { useState } from "react";

const list = [
  {
    index: 0,
    text: "All vehicles",
    imageUrl: "/images/vehicles/",
  },
  {
    index: 1,
    text: "Sedan",
    imageUrl: "/images/vehicles/sedan.svg",
  },
  {
    index: 2,
    text: "Cabriolet",
    imageUrl: "/images/vehicles/cabriolet.svg",
  },
  {
    index: 3,
    text: "Pickup",
    imageUrl: "/images/vehicles/pickup.svg",
  },
  {
    index: 4,
    text: "Suv",
    imageUrl: "/images/vehicles/suv.svg",
  },
  {
    index: 5,
    text: "Minivan",
    imageUrl: "/images/vehicles/minivan.svg",
  },
];

export default function Page() {
  const [current, setCurrent] = useState("All vehicles");
  return (
    <div className="mt-20">
      <div className="flex flex-col w-full items-center justify-center gap-10">
        <h1 className="font-bold text-[50px] leading-[100%]">
          Select a Vehicle group
        </h1>
        <div className="flex w-full gap-12 items-center justify-center">
          {list.map((item, _) => {
            return (
              <div
                key={item.index}
                className={`${
                  item.text === current ? "bg-[#5937E0]" : "bg-[#F9F9F9]"
                } rounded-3xl cursor-pointer flex gap-2 py-2 px-6 items-center`}
                onClick={() => setCurrent(item.text)}
              >
                {item.text !== "All vehicles" && (
                  <Image
                    src={item.imageUrl}
                    alt={item.text}
                    height={24}
                    width={24}
                  />
                )}
                <span
                  className={`${
                    item.text === current ? "text-white" : "text-black"
                  }`}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
