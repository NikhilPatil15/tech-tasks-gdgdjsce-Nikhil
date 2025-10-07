import Image from "next/image";

const facts = [
  {
    img: "/images/fact1.svg",
    value: "540+",
    label: "Cars",
  },
  {
    img: "/images/fact2.svg",
    value: "20k+",
    label: "Customers",
  },
  {
    img: "/images/fact3.svg",
    value: "25+",
    label: "Years",
  },
  {
    img: "/images/fact4.svg",
    value: "20m+",
    label: "Miles",
  },
];

export default function FactsSection() {
  return (
    <section className="relative bg-[#5937E0] py-16 px-6 md:px-16 rounded-2xl text-center mt-20 overflow-hidden h-[486px]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Facts In Numbers
      </h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-10 text-sm md:text-base">
        Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
        bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
        fermentum
      </p>
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <Image
          src="/images/tyreMark.svg"
          alt="Grip texture"
          width={600}
          height={167}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-30 brightness-10">
        <Image
          src="/images/car1.svg"
          alt="Car background"
          width={700}
          height={300}
          className="object-contain absolute inset-0 top-25 mx-auto left-0 right-0"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-20">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex items-center rounded-2xl bg-white shadow-md h-[100px] w-[240px] z-10 px-4"
          >
            <div className="flex items-center gap-4 w-full">
              <div className="bg-[#f9a826] h-[68px] w-[72px] rounded-xl flex items-center justify-center">
                <Image src={fact.img} alt={fact.label} width={40} height={40} />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center">
                <h3 className="font-bold text-2xl leading-5">{fact.value}</h3>
                <p className="text-[#00000099] text-[16px]">{fact.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
