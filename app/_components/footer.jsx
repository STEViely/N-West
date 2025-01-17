import Image from "next/image";
import NWEST from "@/public/NWEST.png";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full mt-4 px-10 py-5 bg-[#1C1C1C]">
      <div className="flex gap- justify-around">
        <div className="w-[25%] flex flex-col gap-4">
          <div>
            <Image src={NWEST} alt="logo" width={60} height={20} />
          </div>
          <p className="text-white font-light text-[8px]">
            intergio a beautidful digital tranformation consultrancy & solfware
            development company that provide IT solotutions.
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <p className="text-white text-[8px] font-bold">Contact</p>
          </div>
          <p className="text-white font-light text-[8px]">
            Adress: 2 7 Thachalong,
            <br /> Bangna, 10002, Thailand{" "}
          </p>
          <p className="text-white font-light text-[8px]">
            Email: nwestautopart@mail.com{" "}
          </p>
          <p className="text-white font-light text-[8px]">
            Phone: +66 12345678
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <p className="text-white text-[8px] font-bold">Contact</p>
          </div>
          <p className="text-white font-light text-[8px]">mocking up</p>
          <p className="text-white font-light text-[8px]">delivery</p>
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <p className="text-white text-[8px] font-bold">Contact</p>
          </div>
          <p className="text-white font-light text-[8px]">mirror</p>
          <p className="text-white font-light text-[8px]">sport light</p>
          <p className="text-white font-light text-[8px]">rare light</p>
          <p className="text-white font-light text-[8px]">other</p>
        </div>
      </div>
    </div>
  );
}
