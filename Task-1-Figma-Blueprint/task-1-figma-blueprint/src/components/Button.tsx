export default function Button({
  width,
  height,
  text,
  color,
  textColor,
  textSize,
  paddingX,
  paddingY,
  fontWeight,
}: {
  width?: string;
  height?: string;
  text: string;
  color: string;
  textColor?: string;
  textSize?: string;
  paddingX?: string;
  paddingY?: string;
  fontWeight?: string;
}) {
  return (
    <button
      className={`${width ? `w-[${width}]` : "w-full"} h-[${
        height ?? height
      }] text-[${color}] ${textColor ? `text-[${textColor}]` : "text-white"}  ${
        textSize ? `text-[${textSize}]` : "text-[16px]"
      } ${paddingX ? `px-[${paddingX}]` : "px-2"}  ${
        paddingY ? `py-[${paddingY}]` : "py-2"
      } cursor-pointer ${
        fontWeight ? `font-[${fontWeight}]` : "font-semibold"
      }   rounded-xl hover:scale-105 transition-all duration-300 `}
    >
      {text}
    </button>
  );
}
