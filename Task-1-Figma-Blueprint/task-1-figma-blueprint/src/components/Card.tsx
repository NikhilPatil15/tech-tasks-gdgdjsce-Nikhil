import Image from "next/image";
import Button from "./Button";

type CarType = "Sedan" | "SUV" | "Sport" | "Pickup" | "Van";

export default function Card({
  title,
  description,
  imageUrl,
  price,
  carType,
}: {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  carType: CarType;
}) {
  return (
    <div className="bg-[#FAFAFA] rounded-[20px] flex">
      <div>
        {" "}
        <Image src={imageUrl} alt={title} height={240} width={368} priority />
      </div>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-center gap-2">
          <h2>{title}</h2>
          <h4>{carType}</h4>
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <h2 className="text-[#5937E0]">${price}</h2>
          <span>per day</span>
        </div>
      </div>
      <div className="flex items-center justify-center">{}</div>
      <Button text="View Details" color="#5937E0" />
    </div>
  );
}
