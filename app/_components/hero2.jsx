import i6 from "@/public/images/i6.jpg";
import Image from "next/image";

export default function Hero2() {
  return (
    <div className="w-full  flex justify-between mt-4 2xl:my-hidden relative border-[2px] border-[#0000fe] rounded-[16px]">
      <div className=" bg-black text-white  ">
        <div className=" absolute z-40  p-2 md:p-4 xl:p-8 ">
          <span className="text-[12px] sm:text-[18px] md:text-[24px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] ">abcdefgh</span>
          <h1 className="font-bold text-[24px] sm:text-[38px] md:text-[48px] lg:text-[42px] xl:text-[48px] 2xl:text-[58px] ">ABCDEFGH</h1>
          <p className="text-[10px] sm:text-[14px] xl:text-[25px] 2xl:text-[25px] ">
            ABCDEFGHIJ MKLNOPQRSTUVWX YZ
          </p>
          <div className="xl:mt-[30px] 2xl:mt-[50px] xl:gap-6 2xl:gap-8 hidden sm:flex sm:mt-4  2xl:flex justify-start gap-2">
            <button className="2xl:text-[18px] sm:text-[14px] md:text-[18px] xl:text-[22px] border border-[#0000fe] p-1   2xl:p-4 sm:w-[120px] xl:w-[160px] 2xl:w-[180px] rounded-[16px] 
    bg-gradient-to-b from-[#0000fe] to-[#000939] 
    hover:from-[#0000d1] hover:to-[#000626] 
    transition-all duration-500 ease-in-out">
              ดูสินค้าทั้งหมด
            </button>
            <button
              className="2xl:text-[18px] sm:text-[14px] md:text-[18px] xl:text-[22px] border border-[#0000fe] p-1   2xl:p-4 sm:w-[120px] xl:w-[160px] 2xl:w-[180px] rounded-[16px] hover:bg-white hover:text-[#0000fe] font-bold hover:border-[#0000fe] transition-all duration-500 ease-in-out"
            >
              ติดต่อเรา
            </button>
          </div>

        </div>
      </div>

      <div className="w-[50%] relative">
        <Image src={i6} alt="Hero" className="w-full h-auto rounded-[16px]" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
