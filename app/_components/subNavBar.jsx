"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNavbar({ bg }) {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    console.log("Current Pathname:", pathname); // ดูว่า pathname มีค่าอะไร
    setActivePath(pathname);

    // ตรวจสอบค่าของ menuItems
    menuItems.forEach((item) => {
      if (!item.path || typeof item.path !== "string") {
        console.error("Invalid path for", item.label, ":", item.path);
      }
    });
  }, [pathname]);

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const menuItems = [
    { label: "TOYOTA", path: "/toyota" },
    { label: "HONDA", path: "/honda" },
    { label: "NISSAN", path: "/nissan" },
    { label: "SUZUKI", path: "/suzuki" },
    { label: "BYD", path: "/byd" },
    { label: "TESLA", path: "/tesla" },
    { label: "MAZDA", path: "/mazda" },
  ];

  return (
    <header>
      <nav className="w-full">
        <ul className="flex justify-center text-white text-[14px] font-light gap-0.5">
          {menuItems.map(({ label, path }) => {
            // ถ้า path มีค่าเป็น string และไม่ใช่ undefined
            if (path && typeof path === "string") {
              return (
                <li
                  key={path}
                  className={`w-[120px] p-0.5 bg-gradient-to-b from-[#0000fe] to-[#000939] 
                              text-center hover:underline ${
                                isActive(path) ? "underline" : ""
                              }`}
                >
                  <Link href={path}>{label}</Link>
                </li>
              );
            } else {
              console.error(`Invalid path for ${label}:`, path); // log หากพบว่า path ไม่ถูกต้อง
              return null; // ถ้า path ไม่ถูกต้องไม่แสดง
            }
          })}
        </ul>
      </nav>
    </header>
  );
}
