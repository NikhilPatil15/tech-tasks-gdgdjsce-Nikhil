import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const NavItems = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Vehicles",
      route: "/vehicles",
    },
    {
      title: "Details",
      route: "/car-details",
    },
    {
      title: "About Us",
      route: "/",
    },
    {
      title: "Contact Us",
      route: "/",
    },
  ];
  return (
    <div className="w-full h-28 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <Image
          src="/Images/Logo/Logo.svg"
          alt="Car rental logo"
          width={180}
          height={50}
          priority
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {NavItems.map(
          (item: { title: string; route: string }, index: number) => {
            return (
              <Link
                key={index}
                href={item.route}
                className={`text-center text-black  text-lg ${
                  item.title === "Vehicles" ? "font-bold" : "font-medium"
                }`}
              >
                {item.title}
              </Link>
            );
          }
        )}
      </div>
      <div className="flex items-center justify-center gap-2">
        <div>
          {" "}
          <Image
            src="/Images/call.svg"
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
