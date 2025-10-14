"use client";

import { useState } from "react";

type HeroFormProps = {
  bgColor?: string;
};

export default function HeroForm({ bgColor }: HeroFormProps) {
  const [formData, setFormData] = useState({
    carType: "",
    rentalPlace: "",
    returnPlace: "",
    rentalDate: "",
    returnDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div
      className={`${
        bgColor ? "bg-[#5937E0]" : "bg-white"
      } rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl w-full max-w-[350px] sm:max-w-[400px] lg:w-[416px] h-auto sm:h-[450px] lg:h-[503px] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10`}
    >
      <form className="flex flex-col w-full gap-4 sm:gap-5">
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-center">
          Book your car
        </h2>

        <select
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-none rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-[16px] leading-5 cursor-pointer"
        >
          <option value="">Car type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
        </select>

        <select
          name="rentalPlace"
          value={formData.rentalPlace}
          onChange={handleChange}
          className="w-full bg-gray-50 border leading-5 text-sm sm:text-[16px] cursor-pointer border-none rounded-xl px-3 sm:px-4 py-2"
        >
          <option value="">Place of rental</option>
          <option value="mumbai">Mumbai</option>
        </select>

        <select
          name="returnPlace"
          value={formData.returnPlace}
          onChange={handleChange}
          className="w-full bg-gray-50 border text-sm sm:text-[16px] leading-5 cursor-pointer border-none rounded-xl px-3 sm:px-4 py-2"
        >
          <option value="">Place of return</option>
          <option value="mumbai">Mumbai</option>
        </select>

        <div className="relative">
          <input
            type="date"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleChange}
            className="w-full bg-gray-50 border text-sm sm:text-[16px] leading-5 cursor-pointer border-none rounded-xl px-3 sm:px-4 py-2"
          />
        </div>

        <div className="relative">
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full bg-gray-50 border-none text-sm sm:text-[16px] leading-5 cursor-pointer rounded-xl px-3 sm:px-4 py-2"
          />
        </div>
      </form>

      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="w-full bg-[#FF9E0C] text-white text-sm sm:text-[16px] cursor-pointer font-semibold py-2 sm:py-3 rounded-xl hover:scale-105 transition-all duration-300"
      >
        Book now
      </button>
    </div>
  );
}
