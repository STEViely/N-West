"use client";

import Image from "next/image";
import HeroImage from "@/public/HeroImage.jpg";

export default function Hero() {
  return (
    <div className="flex justify-evenly relative mt-4 w-full  mx-auto">
      <div className="absolute bg-gradient-to-r from-black to-transparent w-full h-full z-40 text-white">
        <p className="font-light text-[10px]">We Are Give You The Best</p>
        <h1 className="font-bold text-[25px]">CAR PRODUCTS</h1>
        <p className="font-light text-[10px]">
          The Best Part Can Be Found here
        </p>
        <div className="flex gap-2 mt-6">
          <button className="w-[90px] border-[1.5px] border-white text-[12px] p-1 bg-gradient-to-b from-[#0000fe] font-light">
            OUR PRODUCTS
          </button>
          <button className="w-[90px] border-[1.5px] border-white text-[12px] p-1 font-light">
            CONTACT US
          </button>
        </div>
      </div>
      <div className="w-[50%] z-10 "></div>
      <div className="w-[50%] z-10 relative">
        <Image
          src={HeroImage}
          alt="Hero"
          width={500}
          className="w-full h-auto object-cover mask-image-gradient"
        />
      </div>
    </div>
  );
}
