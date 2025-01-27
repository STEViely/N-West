"use client";
import Link from "next/link";

export default function ProductContainer({ link, productType, logo }) {
  return (
    <Link href={link} className="flex justify-center">
      <div className="relative bg-white h-[150px] w-[150px] flex items-center justify-center group overflow-hidden">
        {/* โลโก้ */}
        <img
          src={logo}
          alt={`${productType} Logo`}
          width={70}
          className="relative z-10 transition-opacity duration-300 ease-in-out"
        />
        {/* พื้นหลังจาง */}
        <div className="hidden group-hover:block bg-white opacity-80 w-full h-full absolute z-0 transition-opacity duration-300"></div>
        {/* ชื่อผลิตภัณฑ์ */}
        <h1 className="hidden group-hover:block text-black absolute z-20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out text-center">
          {productType}
        </h1>
      </div>
    </Link>
  );
}
