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
      <nav className="w-full flex justify-center">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-1 text-white text-[14px] lg:text-[20px] font-light lg:flex lg:justify-center justify-items-center">
          {[
            { name: "TOYOTA", href: "/toyota" },
            { name: "HONDA", href: "/honda" },
            { name: "NISSAN", href: "/nissan" },
            { name: "SUZUKI", href: "/suzuki" },
            { name: "BYD", href: "/byd" },
            { name: "TESLA", href: "/tesla" },
            { name: "MAZDA", href: "/mazda" },
            { name: "ALL", href: "/all" },
          ].map((item, index) => (
            <li
              key={index}
              className={`w-[120px] lg:w-[180px] lg:h-[40px] p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] text-center flex items-center justify-center hover:underline ${
                isActive(item.href) ? "underline" : ""
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
