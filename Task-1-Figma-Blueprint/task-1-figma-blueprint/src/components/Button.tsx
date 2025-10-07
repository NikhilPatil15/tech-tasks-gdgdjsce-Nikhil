export default function Button({
  width,
  height,
  text,
  color,
  textColor,
  textSize,
  fontWeight,
  className,
}: {
  width?: string;
  height?: string;
  text: string;
  color: string;
  textColor?: string;
  textSize?: string;
  fontWeight?: string;
  className?: string;
}) {
  return (
    <button
      className={`${width ? `w-[${width}]` : "w-full"} ${
        height ? `h-[${height}]` : ""
      } bg-[${color}] ${textColor ? `text-[${textColor}]` : "text-white"}  ${
        textSize ? `text-[${textSize}]` : "text-[16px]"
      }  px-2
        py-2
       cursor-pointer ${
         fontWeight ? `font-[${fontWeight}]` : "font-semibold"
       }   rounded-xl hover:scale-105 transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
}
