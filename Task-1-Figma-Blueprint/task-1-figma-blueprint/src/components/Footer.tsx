import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const list = [
  {
    icon: (
      <div className="bg-[#FF9E0C] rounded-[50%] p-1">
        <MapPin className=" text-white p-1.5" size={40} />
      </div>
    ),
    title: "Address",
    address: "Oxford Ave. Cary, NC 27511",
  },
  {
    icon: (
      <div className="bg-[#FF9E0C] rounded-[50%] p-1">
        <Mail className=" text-white p-1.5 " size={40} />
      </div>
    ),
    title: "Email",
    address: "nwiger@yahoo.com",
  },
  {
    icon: (
      <div className="bg-[#FF9E0C] rounded-[50%] p-1">
        <Phone className="text-white p-1.5" size={40} />
      </div>
    ),
    title: "Phone",
    address: "+537 547-6401",
  },
];

const links = {
  useful: ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"],
  vehicles: ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"],
};

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center py-[60px] mt-15 gap-[60px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/Logo/Logo.svg"
            alt="Car rental logo"
            width={180}
            height={50}
            priority
          />
        </div>
        {list.map((item, _) => {
          return (
            <div className="flex items-center gap-2" key={_}>
              {item.icon}

              <div className="flex flex-col text-[16px] leading-[26px]">
                <span>{item.title}</span>
                <p className="font-semibold">{item.address}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-40">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold leading-[28px]">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem tur
          </h1>
          <div className="flex gap-4">
            <div className="bg-black rounded-[50%] p-1 cursor-pointer">
              <Facebook size={24} className="text-white p-0.5" />
            </div>
            <div className="bg-black rounded-[50%] p-1 cursor-pointer">
              <Instagram size={24} className="text-white p-0.5" />
            </div>
            <div className="bg-black rounded-[50%] p-1 cursor-pointer">
              <X size={24} className="text-white p-0.5" />
            </div>
            <div className="bg-black rounded-[50%] p-1 cursor-pointer">
              <Youtube size={24} className="text-white p-0.5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-semibold text-[20px]">Useful Links</h4>
          <ul className="flex items-start flex-col">
            {links.useful.map((item, _) => {
              return (
                <div
                  className="text-[16px] leading-[26px] cursor-pointer"
                  key={_}
                >
                  {item}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-semibold text-[20px]">Vehicles</h4>
          <ul className="flex items-start flex-col">
            {links.vehicles.map((item, _) => {
              return (
                <div
                  className="text-[16px] leading-[26px] cursor-pointer"
                  key={_}
                >
                  {item}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-6  items-start ml-10">
          <h4 className="font-semibold text-[20px]">Download App</h4>
          <Image
            src={"/images/AppStore.svg"}
            alt="App Store"
            height={50}
            width={180}
            className="cursor-pointer"
          />
          <Image
            src={"/images/GooglePlay.svg"}
            alt="App Store"
            height={50}
            width={180}
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}
