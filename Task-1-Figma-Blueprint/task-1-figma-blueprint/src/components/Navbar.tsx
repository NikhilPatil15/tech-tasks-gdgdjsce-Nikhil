import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const NavItems = ["Home", "Vehicles", "Details", "About Us", "Contact Us"];
  return (
    <div className="w-full h-28 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <Image
          src="/images/Logo/Logo.svg"
          alt="Car rental logo"
          width={180}
          height={50}
          priority
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {NavItems.map((item: string, index: number) => {
          return (
            <Link
              key={index}
              href={
                item === "Vehicles" || "Details"
                  ? item === "Vehicles"
                    ? "/vehicles"
                    : "/car-details"
                  : "/"
              }
              className={`text-center text-black  text-lg ${
                item === "Vehicles" ? "font-bold" : "font-medium"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-2">
        <div>
          {" "}
          <Image
            src="/images/call.svg"
            alt="Car rental call "
            width={40}
            height={40}
            priority
          />
        </div>
        <div className="text-[16px] flex flex-col items-start justify-center">
          <h2 className="text-[16px]">Need help?</h2>
          <p className="font-semibold">+996 247-1680</p>
        </div>
      </div>
    </div>
  );
}
