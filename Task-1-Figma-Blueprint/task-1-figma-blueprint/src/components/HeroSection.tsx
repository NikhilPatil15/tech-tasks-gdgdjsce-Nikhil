import Image from "next/image";

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
      <div className="relative z-10  grid grid-cols-2  h-full px-[72px] items-center">
        {" "}
        <div className="flex flex-col items-start gap-11">
          <h1 className="text-white font-bold text-6xl w-2xl leading-[100%]">
            Experience the road like never before
          </h1>
          <p className="text-[16px] text-white w-[464px]">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <button className="bg-[#FF9E0C] px-3.5 py-7 rounded-2xl text-white w-40 cursor-pointer  h-10 flex items-center justify-center font-semibold text-lg">
            View all cars
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
}
