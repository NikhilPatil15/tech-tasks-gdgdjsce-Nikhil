import { ArrowRight } from "lucide-react";
import Card, { CarData } from "../Card";
import { carData } from "@/utils/data";

export default function CarSelection() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <h1 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-[50px] max-w-xl">
          Other Cars
        </h1>
        <span className="flex gap-2 text-lg sm:text-xl font-bold items-center cursor-pointer hover:underline">
          View All <ArrowRight size={20} />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carData.map((car: CarData) => (
          <Card
            key={car.index}
            carType={car.carType}
            title={car.title}
            imageUrl={car.imageUrl}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
}
