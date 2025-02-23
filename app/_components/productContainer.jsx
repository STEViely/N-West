"use client";
import Link from "next/link";

export default function ProductContainer({ link, productType, logo }) {
  return (
    <div className="mx-auto ">
      <Link href={link} className="flex flex-wrap">
        <div className="relative rounded-[16px] bg-white  h-[80px] w-[80px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] 2xl:h-[350px] 2xl:w-[350px] flex items-center justify-center group overflow-hidden">
          {/* โลโก้ */}
          <img
            src={logo}
            alt={`${productType} Logo`}
            width={60}
            className="relative z-10 transition-opacity duration-300 ease-in-out md:w-[100px] 2xl:w-[200px]"
          />
          {/* พื้นหลังจาง */}
          <div className="hidden group-hover:block bg-white opacity-80 w-full h-full absolute z-0 transition-opacity duration-300"></div>
          {/* ชื่อผลิตภัณฑ์ */}
          <h1 className="hidden group-hover:block text-black absolute z-20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out text-center">
            {productType}
          </h1>
        </div>
      </Link>
    </div>
  );
}
