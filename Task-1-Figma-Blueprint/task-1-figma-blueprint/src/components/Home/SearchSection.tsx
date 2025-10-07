import Image from "next/image";
import Button from "../Button";

export default function SearchSection() {
  return (
    <section className="relative bg-[#6b32f4] rounded-2xl py-16 px-8 md:px-16 overflow-hidden mt-10 text-white">
      <div className="absolute inset-0  top-5">
        <Image
          src="/images/searchTyreMark.svg"
          alt="Grip texture"
          width={600}
          height={600}
        />
      </div>

      <div className="absolute right-40 bottom-0 hidden md:block ">
        <Image
          src="/images/searchCar.svg"
          alt="Car"
          width={380}
          height={380}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-2xl flex flex-col gap-4">
        <h1 className="text-[50px] font-bold mb-4 leading-tight">
          Enjoy every mile with <br /> adorable companionship.
        </h1>

        <p className="text-white/80 mb-8 text-sm md:text-base">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in. Diam tincidunt tincidunt erat
        </p>

        <div className="flex items-center justify-between bg-white p-1 rounded-2xl shadow-lg overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="City"
            className="border-none text-gray-700 placeholder:text-gray-400  px-4"
          />
          <Button width="111px" text="Search" color="#f9a826" />
        </div>
      </div>
    </section>
  );
}
