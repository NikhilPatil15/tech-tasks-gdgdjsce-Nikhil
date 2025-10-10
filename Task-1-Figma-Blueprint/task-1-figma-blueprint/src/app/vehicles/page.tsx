"use client";
import Card from "@/components/Card";
import { carDataExtended } from "@/utils/data";
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
    <div className="mt-20 flex flex-col gap-20">
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
                } rounded-3xl cursor-pointer flex gap-2 py-2 px-6 items-center transition-all duration-300  `}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {carDataExtended.map((car, _) => {
          return (
            <Card
              key={car.index}
              carType={car.carType}
              price={car.price}
              imageUrl={car.imageUrl}
              title={car.title}
            />
          );
        })}
      </div>
      <div className="w-full flex items-centern justify-center">
        <Image
          src={"/images/vehicles/Logos.svg"}
          alt={"Logos"}
          height={1000}
          width={2000}
          priority
          className="object-cover inset-0"
        />
      </div>
    </div>
  );
}
