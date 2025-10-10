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
    <div className="w-full max-h-[600px] flex items-center justify-between  py-15">
      {featuresList.map((feature: Feature, _) => {
        return (
          <div
            className="flex flex-col items-center justify-center gap-6 max-w-[350px] text-center"
            key={feature.index}
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              priority
            />
            <h2 className="text-[24px] leading-[100%] font-semibold">
              {feature.title}
            </h2>
            <p className="text-[16px] leading-6  text-black">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
