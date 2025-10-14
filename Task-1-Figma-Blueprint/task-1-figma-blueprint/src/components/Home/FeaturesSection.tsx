import Image from "next/image";

type Feature = {
  index: number;
  icon: string;
  title: string;
  description: string;
};

const featuresList: Feature[] = [
  {
    index: 0,
    icon: "/Images/feature1.svg",
    title: "Availability",
    description:
      "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
  },
  {
    index: 1,
    icon: "/Images/feature2.svg",
    title: "Comfort",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
  },
  {
    index: 2,
    icon: "/Images/feature3.svg",
    title: "Savings",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
  },
];

export default function FeaturesSection() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 lg:gap-0 py-8 lg:py-15">
      {featuresList.map((feature: Feature) => {
        return (
          <div
            className="flex flex-col items-center justify-center gap-4 lg:gap-6 max-w-full sm:max-w-[300px] lg:max-w-[350px] text-center px-4"
            key={feature.index}
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={56}
              height={56}
              className="w-12 h-12 lg:w-16 lg:h-16"
              priority
            />
            <h2 className="text-[20px] lg:text-[24px] leading-[100%] font-semibold">
              {feature.title}
            </h2>
            <p className="text-[14px] lg:text-[16px] leading-6 text-black">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
