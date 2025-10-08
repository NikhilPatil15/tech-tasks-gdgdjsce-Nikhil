import { ArrowRight } from "lucide-react";
import { title } from "process";
import Card, { CarData } from "../Card";
import { carData } from "@/utils/data";

export default function SelectCarSection() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-end justify-between">
        <h1 className="font-bold leading-[100%] text-[50px] max-w-xl">
          Choose the car that suits you
        </h1>
        <span
          className="flex
        gap-2 text-xl font-bold items-center cursor-pointer hover:underline"
        >
          View All <ArrowRight size={24} />
        </span>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {carData.map((car: CarData, _) => {
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
