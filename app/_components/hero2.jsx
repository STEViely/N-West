import i6 from "@/public/images/i6.jpg";
import Image from "next/image";

export default function Hero2() {
  return (
    <div className="w-full  flex justify-between mt-4 my-8 lg:my-hidden relative border-[2px] border-[#0000fe]">
      <div className=" bg-black text-white lg:p-20  ">
        <div className=" absolute z-50 p-4 ">
          <span className="text-[12px] lg:text-[30px] ">abcdefgh</span>
          <h1 className="font-bold text-[24px] lg:text-[58px] ">ABCDEFGH</h1>
          <p className="text-[14px] lg:text-[25px] ">
            ABCDEFGHIJ MKLNOPQRSTUVWX YZ
          </p>
          <div className="  mt-[30px] lg:mt-[100px] lg:flex justify-start gap-2">
            <button className=" text-[14px] border border-[#0000fe] p-1 lg:p-4 w-[100px] rounded-[16px] hover:bg-white hover:text-[#0000fe] text-bold hover:border-[#0000fe]  transition-all duration-500 ease-in-out">
              ดูสินค้าทั้งหมด
            </button>
            <button
              className=" text-[14px] border border-white p-1  lg:p-4 w-[100px] rounded-[16px] 
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
        <Image src={i6} alt="Hero" className="w-full h-auto" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
