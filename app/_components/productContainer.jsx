"use client";
import Link from "next/link";

export default function ProductContainer({ link, productType }) {
  return (
    <Link href={link}>
      <div className="bg-white h-[170px] w-[170px] flex justify-center items-center">
        <h1 className="text-black">{productType}</h1>
      </div>
    </Link>
  );
}
