import Image from "next/image";
import HeroForm from "./HeroForm";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[700px] sm:min-h-[600px] lg:h-[680px] bg-[#5937E0] rounded-2xl lg:rounded-4xl relative overflow-hidden">
      <Image
        src="/Images/tyrebg.svg"
        alt="Tyre background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />

      <Image
        src="/Images/car_bg.svg"
        alt="Car background"
        width={700}
        height={420}
        priority
        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-[35%] lg:-translate-x-[20%] object-contain z-0 w-[85%] max-w-[550px] lg:max-w-[700px]"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full px-4 sm:px-6 lg:px-[72px] items-center gap-8 lg:gap-0 py-8 lg:py-0">
        <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-11 text-center lg:text-left mt-4 lg:mt-0">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[110%]">
            Experience the road like never before
          </h1>
          <p className="text-[14px] sm:text-[16px] text-white max-w-full lg:w-[464px] leading-relaxed">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <button className="bg-[#FF9E0C] text-white text-[14px] sm:text-[16px] cursor-pointer font-semibold py-3 px-6 lg:px-8 rounded-2xl hover:scale-105 transition-all duration-300 mt-2">
            View all cars
          </button>
        </div>

        <div className="flex justify-center lg:justify-end items-center w-full">
          <div className="w-full flex justify-center">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
