import Image from "next/image";
import Button from "../Button";

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight">
          BMW
        </h1>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-[40px] font-semibold text-[#5937E0]">
            $25
          </span>
          <span className="text-[#00000099] text-base sm:text-lg">/ day</span>
        </div>

        <div className="w-full flex justify-center">
          <Image
            alt="bmw"
            src={"/Images/bmw.svg"}
            height={310}
            width={650}
            priority
            className="object-contain w-full max-w-2xl"
          />
        </div>

        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          {["/Images/Img.svg", "/Images/Img-1.svg", "/Images/Img-2.svg"].map(
            (src, index) => (
              <Image
                key={index}
                alt="bmw"
                src={src}
                height={100}
                width={140}
                priority
                className="object-contain w-[100px] sm:w-[140px]"
              />
            )
          )}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Technical Specification</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {featuresList.map((item) => (
              <li
                key={item.index}
                className="flex flex-col p-4 sm:p-6 items-start gap-3 bg-[#FAFAFA] rounded-xl"
              >
                <Image
                  alt={item.title}
                  src={item.imageUrl}
                  height={24}
                  width={24}
                  className="object-contain"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-base sm:text-[16px] font-semibold">
                    {item.title}
                  </h2>
                  <span className="text-sm sm:text-[16px] text-[#00000099]">
                    {item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Button text="Rent a car" color="#5937E0" width="200px" />
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <h1 className="text-2xl font-semibold">Car Equipment</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {list.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  alt="Check"
                  src={"/Images/details/check.svg"}
                  height={24}
                  width={24}
                  className="object-contain"
                />
                <span className="text-sm sm:text-[16px] text-[#00000099]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
