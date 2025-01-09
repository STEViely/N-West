"use client";

import { useState, useEffect } from "react"; // Import useState และ useEffect
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SubNavbar({ bg }) {
  const pathname = usePathname();

  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header>
      <nav className="w-full">
        <ul className={`flex justify-center text-white text-[16px] gap-1`}>
          <li
            className={`w-[125px] bg-gradient-to-b from-[#000939] to-[#0000fe] text-center hover:underline ${
              isActive("/toyota") ? "underline" : ""
            }`}
          >
            <Link href="/toyota">TOYOTA</Link>
          </li>
          <li
            className={`w-[125px] bg-gradient-to-b from-[#000939] to-[#0000fe] text-center hover:underline ${
              isActive("/honda") ? "underline" : ""
            }`}
          >
            <Link href="/honda">HONDA</Link>
          </li>
          <li
            className={`w-[125px] bg-gradient-to-b from-[#000939] to-[#0000fe] text-center hover:underline ${
              isActive("/nissan") ? "underline" : ""
            }`}
          >
            <Link href="/nissan">NISSAN</Link>
          </li>
          <li
            className={`w-[125px] bg-gradient-to-b from-[#000939] to-[#0000fe] text-center hover:underline ${
              isActive("/aboutUs") ? "underline" : ""
            }`}
          >
            <Link href="/suzuki">SUZUKI</Link>
          </li>
          <li
            className={`w-[125px] bg-gradient-to-b from-[#000939] to-[#0000fe] text-center hover:underline ${
              isActive("/bmw") ? "underline" : ""
            }`}
          >
            <Link href="/bmw">BMW</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
