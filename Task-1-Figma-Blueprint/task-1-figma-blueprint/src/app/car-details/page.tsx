import CarDetails from "@/components/car-details/CarDetails";
import CarSelection from "@/components/car-details/CarSelection";

export default function Page() {
  return (
    <div className="px-4 sm:px-8 lg:px-8 mt-16 flex flex-col gap-20">
      <CarDetails />
      <CarSelection />
    </div>
  );
}
