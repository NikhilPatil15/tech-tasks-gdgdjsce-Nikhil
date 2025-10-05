import Image from "next/image";

type Step = {
  index: number;
  icon: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    index: 0,
    icon: "/images/step1.svg",
    title: "Erat at semper ",
    description:
      "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
  },
  {
    index: 1,
    icon: "/images/step2.svg",
    title: "Urna nec vivamus risus duis arcu  ",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    index: 2,
    icon: "/images/step3.svg",
    title: "Lobortis euismod imperdiet tempus ",
    description:
      "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    index: 3,
    icon: "/images/step4.svg",
    title: "Cras nulla aliquet nam eleifend amet et",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero ",
  },
];

export default function StepsSection() {
  return (
    <div className="w-full grid grid-cols-2 gap-5 py-15">
      <div>
        <Image
          src={"/images/steps.svg"}
          alt="steps"
          width={550}
          height={550}
          priority
        />
      </div>
      <div className="flex items-start flex-col gap-6 py-7">
        {steps.map((step: Step, _) => {
          return (
            <div key={step.index} className="flex items-start flex-col gap-5">
              <div className="flex items-start gap-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                  priority
                />

                <h1 className="font-semibold text-xl">{step.title}</h1>
              </div>
              <p className="text-[16px] text-[#00000099]">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
