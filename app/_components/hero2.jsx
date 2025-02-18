import i6 from "@/public/images/i6.jpg";
import Image from "next/image";

export default function Hero2() {
  return (
    <div className="w-full  flex justify-between mt-4 lg:my-hidden relative border-[2px] border-[#0000fe] rounded-[16px]">
      <div className=" bg-black text-white  ">
        <div className=" absolute z-40  p-4 ">
          <span className="text-[12px] lg:text-[30px] ">abcdefgh</span>
          <h1 className="font-bold text-[24px] lg:text-[58px] ">ABCDEFGH</h1>
          <p className="text-[14px] lg:text-[25px] ">
            ABCDEFGHIJ MKLNOPQRSTUVWX YZ
          </p>
          <div className=" lg:mt-[50px] lg:gap-8 hidden lg:flex justify-start gap-2">
            <button className="text-[18px] border border-[#0000fe] p-1 lg:p-4 w-[180px] rounded-[16px] hover:bg-white hover:text-[#0000fe] font-bold hover:border-[#0000fe] transition-all duration-500 ease-in-out">
              ดูสินค้าทั้งหมด
            </button>
            <button
              className="text-[18px] border border-white p-1 lg:p-4 w-[180px] rounded-[16px] 
    bg-gradient-to-b from-[#0000fe] to-[#000939] 
    hover:from-[#0000d1] hover:to-[#000626] 
    transition-all duration-500 ease-in-out"
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
