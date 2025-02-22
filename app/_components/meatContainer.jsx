import Image from "next/image";

export default function MeatContainer({ title, content, img, reverse }) {
  return (
    <div
      className={`mt-4 flex justify-center gap-8 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="flex-grow w-[200px] md:w-[250px] lg:w-[340px] xl:w-[400px] 2xl:w-[500px] flex justify-center flex-col gap-2">
        <h1 className="font-bold text-[18px] md:text-[30px] 2xl:text-[32px] text-white">
          {title}
        </h1>
        <p className="text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[28px] text-white">{content}</p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={img}
          alt="webPreview"
          width={1000}
          height={1000}
          className={`w-[200px] md:w-[250px] lg:w-[340px] xl:w-[400px]  2xl:w-[500px] drop-shadow-lg rounded-[16px] border border-[#0000FE] ${
            reverse ? "scale-x-[-1]" : ""
          }`}
        />
      </div>
    </div>
  );
}
