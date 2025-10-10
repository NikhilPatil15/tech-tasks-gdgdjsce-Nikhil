import Image from "next/image";
import Button from "../Button";
import { features } from "process";

const list = [
  "ABS",
  "ABS",
  "Air Bags",
  "Air Bags",
  "Cruise Control",
  "Cruise Control",
];

const featuresList = [
  {
    index: 0,
    imageUrl: "/Images/details/feature-1.svg",
    title: "Gear Box",
    description: "Automat",
  },
  {
    index: 1,
    imageUrl: "/Images/details/feature-2.svg",
    title: "Fuel",
    description: "Petrol",
  },
  {
    index: 2,
    imageUrl: "/Images/details/feature-3.svg",
    title: "Doors",
    description: "2",
  },
  {
    index: 3,
    imageUrl: "/Images/details/feature-4.svg",
    title: "Air Conditioner",
    description: "Yes",
  },
  {
    index: 4,
    imageUrl: "/Images/details/feature-5.svg",
    title: "Seats",
    description: "5",
  },
  {
    index: 5,
    imageUrl: "/Images/details/feature-6.svg",
    title: "Distance",
    description: "500",
  },
];
export default function CarDetails() {
  return (
    <div className="grid grid-cols-2 py-16">
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-[40px] font-bold leading-[100%]">BMW</h1>
        <div className="flex items-center justify-center">
          <span className="text-[40px] font-semibold text-[#5937E0]">$25</span>
          <span className="text-[#00000099] text-[16px] leading-[100%]">
            / day
          </span>
        </div>
        <Image
          alt="bmw"
          src={"/Images/bmw.svg"}
          height={310}
          width={650}
          priority
          className="object-contain inset-0"
        />
        <div className="flex items-center justify-center gap-4">
          <Image
            alt="bmw"
            src={"/Images/Img.svg"}
            height={100}
            width={140}
            priority
            className="object-contain inset-0"
          />

          <Image
            alt="bmw"
            src={"/Images/Img-1.svg"}
            height={100}
            width={140}
            priority
            className="object-contain inset-0"
          />
          <Image
            alt="bmw"
            src={"/Images/Img-2.svg"}
            height={100}
            width={140}
            priority
            className="object-contain inset-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-10">
          <h2 className="text-[24px] font-semibold leading-[100%]">
            Technical Specification
          </h2>
          <ul className="grid  grid-cols-1 md:grid-cols-3 gap-6">
            {" "}
            {featuresList.map((item, _) => {
              return (
                <li
                  key={item.index}
                  className="flex flex-col p-6 items-start gap-4 w-[200px] bg-[#FAFAFA] rounded-xl"
                >
                  <Image
                    alt={item.title}
                    src={item.imageUrl}
                    height={24}
                    width={24}
                    priority
                    className="object-contain inset-0"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="text-[16px] font-semibold leading-[100%]">
                      {item.title}
                    </h2>
                    <span className="text-[16px] text-[#00000099] leading-[100%]">
                      {item.description}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Button text="Rent a car" color="#5937E0" width="200px" />
        <div className="flex flex-col gap-10 mt-10">
          <h1 className="text-[24px] font-semibold leading-[100%]">
            Car Equipment
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {list.map((item, index) => {
              return (
                <li className="flex gap-4 items-center" key={index}>
                  <Image
                    alt="Check"
                    src={"/Images/details/check.svg"}
                    height={24}
                    width={24}
                    priority
                    className="object-contain inset-o"
                  />
                  <span className="text-[16px]  leading-[100%] text-[#00000099]">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
