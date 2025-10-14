import { ArrowRight } from "lucide-react";
import Card, { CarData } from "../Card";
import { carData } from "@/utils/data";

export default function SelectCarSection() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 px-4 lg:px-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <h1 className="font-bold leading-[100%] text-3xl sm:text-4xl lg:text-[50px] max-w-full lg:max-w-xl">
          Choose the car that suits you
        </h1>
        <span className="flex gap-2 text-lg lg:text-xl font-bold items-center cursor-pointer hover:underline">
          View All <ArrowRight size={20} className="lg:w-6 lg:h-6" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {carData.map((car: CarData) => {
          return (
            <Card
              key={car.index}
              carType={car.carType}
              title={car.title}
              imageUrl={car.imageUrl}
              price={car.price}
            />
          );
        })}
      </div>
    </div>
  );
}
