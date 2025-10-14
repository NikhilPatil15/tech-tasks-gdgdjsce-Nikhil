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
        <MapPin className="text-white p-1.5" size={32} />
      </div>
    ),
    title: "Address",
    address: "Oxford Ave. Cary, NC 27511",
  },
  {
    icon: (
      <div className="bg-[#FF9E0C] rounded-[50%] p-1">
        <Mail className="text-white p-1.5" size={32} />
      </div>
    ),
    title: "Email",
    address: "nwiger@yahoo.com",
  },
  {
    icon: (
      <div className="bg-[#FF9E0C] rounded-[50%] p-1">
        <Phone className="text-white p-1.5" size={32} />
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
    <footer className="flex flex-col justify-center py-8 lg:py-[60px] mt-8 lg:mt-15 gap-8 lg:gap-[60px] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between items-center gap-6 lg:gap-4">
        <div className="flex items-center justify-center mb-4 lg:mb-0">
          <Image
            src="/Images/Logo/Logo.svg"
            alt="Car rental logo"
            width={160}
            height={45}
            priority
            className="w-full lg:w-40 xl:w-48"
          />
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6 w-full lg:w-auto">
          {list.map((item, index) => {
            return (
              <div
                className="flex items-center gap-3 justify-center lg:justify-start"
                key={index}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex flex-col text-[14px] lg:text-[16px] leading-5 lg:leading-[26px]">
                  <span className="text-sm lg:text-base">{item.title}</span>
                  <p className="font-semibold text-center lg:text-left text-xs lg:text-sm">
                    {item.address}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
        <div className="flex flex-col gap-4 lg:col-span-2 xl:col-span-1">
          <h1 className="text-base lg:text-lg font-semibold leading-6 lg:leading-[28px] text-center lg:text-left">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem tur
          </h1>
          <div className="flex gap-3 justify-center lg:justify-start">
            <div className="bg-black rounded-[50%] p-1 cursor-pointer hover:bg-gray-800 transition-colors">
              <Facebook size={20} className="text-white p-0.5" />
            </div>
            <div className="bg-black rounded-[50%] p-1 cursor-pointer hover:bg-gray-800 transition-colors">
              <Instagram size={20} className="text-white p-0.5" />
            </div>
            <div className="bg-black rounded-[50%] p-1 cursor-pointer hover:bg-gray-800 transition-colors">
              <X size={20} className="text-white p-0.5" />
            </div>
            <div className="bg-black rounded-[50%] p-1 cursor-pointer hover:bg-gray-800 transition-colors">
              <Youtube size={20} className="text-white p-0.5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4 items-center lg:items-start">
          <h4 className="font-semibold text-lg lg:text-[20px]">Useful Links</h4>
          <ul className="flex flex-col items-center lg:items-start gap-1 lg:gap-2">
            {links.useful.map((item, index) => {
              return (
                <div
                  className="text-[14px] lg:text-[16px] leading-5 lg:leading-[26px] cursor-pointer hover:text-[#FF9E0C] transition-colors"
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4 items-center lg:items-start">
          <h4 className="font-semibold text-lg lg:text-[20px]">Vehicles</h4>
          <ul className="flex flex-col items-center lg:items-start gap-1 lg:gap-2">
            {links.vehicles.map((item, index) => {
              return (
                <div
                  className="text-[14px] lg:text-[16px] leading-5 lg:leading-[26px] cursor-pointer hover:text-[#FF9E0C] transition-colors"
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
          <h4 className="font-semibold text-lg lg:text-[20px]">Download App</h4>
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <Image
              src={"/Images/AppStore.svg"}
              alt="App Store"
              height={40}
              width={140}
              className="cursor-pointer hover:opacity-80 transition-opacity w-32 lg:w-40"
            />
            <Image
              src={"/Images/GooglePlay.svg"}
              alt="Google Play"
              height={40}
              width={140}
              className="cursor-pointer hover:opacity-80 transition-opacity w-32 lg:w-40"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
