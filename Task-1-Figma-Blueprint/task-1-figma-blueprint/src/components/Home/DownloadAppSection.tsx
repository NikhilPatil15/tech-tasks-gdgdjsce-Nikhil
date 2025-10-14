import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-35 justify-between items-center px-4 lg:px-20">
      <div className="flex flex-col gap-8 lg:gap-[60px] items-center lg:items-start justify-center text-center lg:text-left order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold leading-tight">
          Download
          <br /> mobile app
        </h1>
        <p className="text-[14px] lg:text-[16px] leading-normal text-[#00000099] max-w-2xl">
          Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
          turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet
          cras hendrerit enim condimentum. Condimentum interdum risus bibendum
          urna
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Image
            src={"/Images/AppStore.svg"}
            alt="App Store"
            height={50}
            width={180}
            className="w-40 lg:w-48"
          />
          <Image
            src={"/Images/GooglePlay.svg"}
            alt="Play Store"
            height={50}
            width={180}
            className="w-40 lg:w-48"
          />
        </div>
      </div>
      <div className="flex justify-center order-1 lg:order-2">
        <Image
          src={"/Images/mobiles.svg"}
          alt="devices"
          height={601}
          width={401}
          className="w-full max-w-[300px] lg:max-w-[401px]"
        />
      </div>
    </div>
  );
}
