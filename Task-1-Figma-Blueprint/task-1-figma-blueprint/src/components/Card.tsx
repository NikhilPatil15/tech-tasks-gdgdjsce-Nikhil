import Image from "next/image";
import Button from "./Button";

type CarType = "Sedan" | "SUV" | "Sport" | "Pickup" | "Van";

export type CarData = {
  index: number;
  title: string;
  imageUrl: string;
  price: number;
  carType: CarType;
};

export default function Card({
  title,
  imageUrl,
  price,
  carType,
}: {
  title: string;
  imageUrl: string;
  price: number;
  carType: CarType;
}) {
  return (
    <div className="bg-[#FAFAFA] rounded-[20px] flex flex-col px-[24px] gap-5">
      <div>
        {" "}
        <Image src={imageUrl} alt={title} height={240} width={368} priority />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex items-start justify-between w-full gap-5">
          <div className="flex flex-col items-start justify-center gap-2.5">
            <h2 className="font-semibold text-2xl leading-[100%]">{title}</h2>
            <h4 className="text-[16px] leading-[100%]">{carType}</h4>
          </div>
          <div className="flex flex-col items-end justify-center gap-2.5">
            <h2 className="text-[#5937E0] font-semibold text-2xl leading-[100%]">
              ${price}
            </h2>
            <span className="text-[16px] leading-[100%]">per day</span>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <span className="flex items-center gap-1 text-[#00000099] text-[16px] leading-[100%]">
            <Image
              src={"/images/gear-Shift.svg"}
              alt="Automatic"
              height={24}
              width={24}
            />{" "}
            Automat
          </span>
          <span className="flex items-center gap-2">
            <Image src={"/images/fuel.svg"} alt="Fuel" height={24} width={24} />{" "}
            PB 95
          </span>
          <span className="flex items-center gap-2">
            <Image src={"/images/ac.svg"} alt="AC" height={24} width={24} /> Air
            Conditioner
          </span>
        </div>
      </div>
      <Button
        text="View Details"
        color="#5937E0"
        className="mt-4 rounded-xl px-[28px] py-[13px]"
      />
    </div>
  );
}
