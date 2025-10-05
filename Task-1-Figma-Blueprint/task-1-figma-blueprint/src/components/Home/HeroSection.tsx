import Image from "next/image";
import HeroForm from "./HeroForm";

export default function HeroSection() {
  return (
    <section className="w-full h-[680px] bg-[#5937E0]  rounded-4xl relative">
      <Image
        src="/images/tyrebg.svg"
        alt="Tyre background"
        width={1200}
        height={680}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
      <Image
        src="/images/car_bg.svg"
        alt="Car background"
        width={700}
        height={420}
        priority
        className="absolute bottom-0 left-[35%] -translate-x-[20%] object-contain  z-0"
      />

      <div className="relative z-10  grid grid-cols-2  h-full px-[72px] items-center">
        {" "}
        <div className="flex flex-col items-start gap-11">
          <h1 className="text-white font-bold text-6xl leading-[100%]">
            Experience the road like never before
          </h1>
          <p className="text-[16px] text-white w-[464px]">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <button className=" bg-[#FF9E0C] text-white text-[16px]  cursor-pointer font-semibold py-3 px-8 rounded-2xl hover:scale-105 transition-all duration-300 ">
            View all cars
          </button>
        </div>
        <div className="flex justify-end ">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
