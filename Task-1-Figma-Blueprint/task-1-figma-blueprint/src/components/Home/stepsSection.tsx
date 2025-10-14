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
    icon: "/Images/step1.svg",
    title: "Erat at semper ",
    description:
      "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
  },
  {
    index: 1,
    icon: "/Images/step2.svg",
    title: "Urna nec vivamus risus duis arcu  ",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    index: 2,
    icon: "/Images/step3.svg",
    title: "Lobortis euismod imperdiet tempus ",
    description:
      "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    index: 3,
    icon: "/Images/step4.svg",
    title: "Cras nulla aliquet nam eleifend amet et",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero ",
  },
];

export default function StepsSection() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 py-8 lg:py-15">
      <div className="flex justify-center lg:justify-start">
        <Image
          src={"/Images/steps.svg"}
          alt="steps"
          width={550}
          height={550}
          priority
          className="w-full max-w-[400px] lg:max-w-[550px]"
        />
      </div>
      <div className="flex items-start flex-col gap-6 lg:gap-6 py-4 lg:py-7 px-4 lg:px-0">
        {steps.map((step: Step) => {
          return (
            <div
              key={step.index}
              className="flex items-start flex-col gap-4 lg:gap-5"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={28}
                  height={28}
                  className="w-6 h-6 lg:w-8 lg:h-8 mt-1"
                  priority
                />
                <h1 className="font-semibold text-lg lg:text-xl leading-tight">
                  {step.title}
                </h1>
              </div>
              <p className="text-[14px] lg:text-[16px] text-[#00000099] leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
