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
        <ul
          className={`flex justify-center text-white text-[14px] font-light gap-0.5`}
        >
          <li
            className={`w-[120px] p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] text-center hover:underline ${
              isActive("/toyota") ? "underline" : ""
            }`}
          >
            <Link href="/toyota">TOYOTA</Link>
          </li>
          <li
            className={`w-[120px] p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] text-center hover:underline ${
              isActive("/honda") ? "underline" : ""
            }`}
          >
            <Link href="/honda">HONDA</Link>
          </li>
          <li
            className={`w-[120px] p-0.5  bg-gradient-to-b from-[#0000fe] to-[#000939] text-center hover:underline ${
              isActive("/nissan") ? "underline" : ""
            }`}
          >
            <Link href="/nissan">NISSAN</Link>
          </li>
        </ul>
        <ul
          className={`flex justify-center text-white text-[14px] font-light gap-0.5`}
        >
          <li
            className={`w-[120px]  p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] text-center hover:underline ${
              isActive("/suzuki") ? "underline" : ""
            }`}
          >
            <Link href="/suzuki">SUZUKI</Link>
          </li>
          <li
            className={`w-[120px]  p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] text-center hover:underline ${
              isActive("/byd") ? "underline" : ""
            }`}
          >
            <Link href="/byd">BYD</Link>
          </li>
          <li
            className={`w-[120px]  p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] text-center hover:underline ${
              isActive("/tesla") ? "underline" : ""
            }`}
          >
            <Link href="/tesla">TESLA</Link>
          </li>
          <li
            className={`w-[120px]  p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] text-center hover:underline ${
              isActive("/mazda") ? "underline" : ""
            }`}
          >
            <Link href="/mazda">MAZDA</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
