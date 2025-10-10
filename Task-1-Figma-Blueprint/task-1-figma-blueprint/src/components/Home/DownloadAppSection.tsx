import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <div className="grid grid-cols-2 gap-35 justify-between items-center px-20">
      <div className="flex flex-col gap-[60px] items-start justify-center">
        <h1 className="text-[50px] font-bold leading-tight">
          Download
          <br /> mobile app
        </h1>
        <p className="text-[16px] leading-normal text-[#00000099]">
          Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
          turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet
          cras hendrerit enim condimentum. Condimentum interdum risus bibendum
          urna
        </p>
        <div className="flex gap-4">
          <Image
            src={"/Images/AppStore.svg"}
            alt="App Store"
            height={50}
            width={180}
          />
          <Image
            src={"/Images/GooglePlay.svg"}
            alt="Play Store"
            height={50}
            width={180}
          />
        </div>
      </div>
      <div>
        <Image
          src={"/Images/mobiles.svg"}
          alt="devices"
          height={601}
          width={401}
        />
      </div>
    </div>
  );
}
