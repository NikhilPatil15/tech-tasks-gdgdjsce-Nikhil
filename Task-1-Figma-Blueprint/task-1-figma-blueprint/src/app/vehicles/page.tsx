"use client";
import Card from "@/components/Card";
import { carDataExtended } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";

const list = [
  {
    index: 0,
    text: "All vehicles",
    imageUrl: "/Images/vehicles/",
  },
  {
    index: 1,
    text: "Sedan",
    imageUrl: "/Images/vehicles/sedan.svg",
  },
  {
    index: 2,
    text: "Cabriolet",
    imageUrl: "/Images/vehicles/cabriolet.svg",
  },
  {
    index: 3,
    text: "Pickup",
    imageUrl: "/Images/vehicles/pickup.svg",
  },
  {
    index: 4,
    text: "Suv",
    imageUrl: "/Images/vehicles/suv.svg",
  },
  {
    index: 5,
    text: "Minivan",
    imageUrl: "/Images/vehicles/minivan.svg",
  },
];

export default function Page() {
  const [current, setCurrent] = useState("All vehicles");

  return (
    <div className="mt-20 flex flex-col gap-16 px-4 sm:px-8 lg:px-8">
      <div className="flex flex-col w-full items-center justify-center gap-6 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-[50px] leading-tight">
          Select a Vehicle Group
        </h1>

        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-center">
          {list.map((item) => (
            <div
              key={item.index}
              className={`${
                item.text === current ? "bg-[#5937E0]" : "bg-[#F9F9F9]"
              } rounded-3xl cursor-pointer flex gap-2 py-2 px-4 sm:px-6 items-center transition-all duration-300`}
              onClick={() => setCurrent(item.text)}
            >
              {item.text !== "All vehicles" && (
                <Image
                  src={item.imageUrl}
                  alt={item.text}
                  height={24}
                  width={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              )}
              <span
                className={`text-sm sm:text-base ${
                  item.text === current ? "text-white" : "text-black"
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {carDataExtended.map((car) => (
          <Card
            key={car.index}
            carType={car.carType}
            price={car.price}
            imageUrl={car.imageUrl}
            title={car.title}
          />
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <Image
          src={"/Images/vehicles/Logos.svg"}
          alt={"Logos"}
          height={800}
          width={1600}
          priority
          className="object-cover w-full max-w-full h-auto"
        />
      </div>
    </div>
  );
}
