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
      } rounded-2xl p-8 shadow-xl w-[416px] h-[503px] flex flex-col items-center justify-center gap-10`}
    >
      <form className="flex flex-col w-full gap-5">
        <h2 className="text-[28px] font-semibold text-center">Book your car</h2>
        <select
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          className="w-full bg-gray-50 leading-5 border border-none rounded-xl px-4 py-2 text-[16px]  cursor-pointer"
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
          className="w-full bg-gray-50 border leading-5  text-[16px]  cursor-pointer border-none rounded-xl px-4 py-2 text-sm "
        >
          <option value="">Place of rental</option>
          <option value="mumbai">Mumbai</option>
        </select>

        <select
          name="returnPlace"
          value={formData.returnPlace}
          onChange={handleChange}
          className="w-full bg-gray-50 border text-[16px] leading-5   cursor-pointer border-none rounded-xl px-4 py-2 text-sm "
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
            className="w-full bg-gray-50 border text-[16px] leading-5 cursor-pointer border-none rounded-xl px-4 py-2 text-sm "
          />
        </div>

        <div className="relative">
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full bg-gray-50 border-none text-[16px] leading-5  cursor-pointer rounded-xl px-4 py-2 text-sm "
          />
        </div>
      </form>
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="w-full bg-[#FF9E0C] text-white text-[16px]   cursor-pointer font-semibold py-2 rounded-xl hover:scale-105 transition-all duration-300 "
      >
        Book now
      </button>
    </div>
  );
}
