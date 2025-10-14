import Image from "next/image";

const facts = [
  {
    img: "/Images/fact1.svg",
    value: "540+",
    label: "Cars",
  },
  {
    img: "/Images/fact2.svg",
    value: "20k+",
    label: "Customers",
  },
  {
    img: "/Images/fact3.svg",
    value: "25+",
    label: "Years",
  },
  {
    img: "/Images/fact4.svg",
    value: "20m+",
    label: "Miles",
  },
];

export default function FactsSection() {
  return (
    <section className="relative bg-[#5937E0] py-12 lg:py-16 px-4 sm:px-6 lg:px-16 rounded-2xl text-center mt-12 lg:mt-20 overflow-hidden h-auto lg:h-[486px]">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
        Facts In Numbers
      </h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-8 lg:mb-10 text-sm lg:text-base px-4">
        Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
        bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
        fermentum
      </p>

      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <Image
          src="/Images/tyreMark.svg"
          alt="Grip texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-30 brightness-10">
        <Image
          src="/Images/car1.svg"
          alt="Car background"
          width={700}
          height={300}
          className="object-contain absolute inset-0 top-8 lg:top-25 mx-auto left-0 right-0 w-[90%] max-w-[600px] lg:max-w-[700px]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-center mt-12 lg:mt-20 relative z-10">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex items-center rounded-2xl bg-white shadow-md h-[80px] lg:h-[100px] w-full max-w-[280px] lg:w-[240px] mx-auto px-4"
          >
            <div className="flex items-center gap-3 lg:gap-4 w-full">
              <div className="bg-[#f9a826] h-[52px] lg:h-[68px] w-[56px] lg:w-[72px] rounded-xl flex items-center justify-center">
                <Image
                  src={fact.img}
                  alt={fact.label}
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-10 lg:h-10"
                />
              </div>
              <div className="flex flex-col gap-1 lg:gap-2 items-start justify-center">
                <h3 className="font-bold text-xl lg:text-2xl leading-5">
                  {fact.value}
                </h3>
                <p className="text-[#00000099] text-[14px] lg:text-[16px]">
                  {fact.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
