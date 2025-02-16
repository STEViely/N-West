import i6 from "@/public/images/i6.jpg";
import Image from "next/image";

export default function Hero2() {
  return (
    <div className="w-full flex mt-4 relative border-[2px] border-[#0000fe]">
      <div className="w-[50%] bg-black text-white p-20 ">
        <span className="text-[30px]">abcdefgh</span>
        <h1 className="font-bold text-[58px]">ABCDEFGH</h1>
        <p className="text-[25px]">ABCDEFGHIJ MKLNOPQRSTUVWX YZ</p>
        <div className="mt-[100px] flex justify-around items-center">
          <button className="border border-white p-4 w-[180px] rounded-[16px] hover:bg-white hover:text-[#0000fe] text-bold hover:border-[#0000fe]  transition-all duration-500 ease-in-out">
            ดูสินค้าทั้งหมด
          </button>
          <button
            className="border border-white p-4 w-[180px] rounded-[16px] 
                   bg-gradient-to-b from-[#0000fe] to-[#000939] 
                   hover:from-[#0000d1] hover:to-[#000626] 
                   transition-all duration-500 ease-in-out"
          >
            ติดต่อเรา
          </button>
        </div>
      </div>

      <div className="w-[50%] relative">
        <Image src={i6} alt="Hero" className="w-full h-auto" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
