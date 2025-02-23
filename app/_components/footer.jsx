import Image from "next/image";
import NWEST from "@/public/NWEST.png";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex justify-around bg-[#1C1C1C] mt-8 p-4 ">
      <div className="w-[30%]"><Image src={NWEST} alt="N-WEST STREET DRIVE" />
        <p className="text-[10px] font-serif text-white">บางนา-ตราด กม.26 เอแบคบางนา ต.บางเสาธง อ.บางเสาธง สมุทรปราการ,  10540 <br />098 103 2459</p>
      </div>
      <div className="w-[40%] flex justify-start items-end flex-col text-white font-thin text-[12px]">
        <p className="text-[12px] font-bold">Service</p>
        <br />
        <p className="text-[10px] ">กระจกมองข้างสีฟ้าตัดเเสง</p>

      </div>
      <div className="w-[40%] flex justify-start items-end flex-col text-white font-thin text-[12px]">
        <p className="text-[12px] font-bold">Products</p>
        <br />
        <p className="text-[10px] ">TOYOTA</p>
        <p className="text-[10px] ">HONDA</p>
        <p className="text-[10px] ">TESLA</p>
        <p className="text-[10px] ">NISAN</p>
        <p className="text-[10px] ">BYD</p>
        <p className="text-[10px] ">SUZUKI</p>
      </div>

    </div>
  );
}
