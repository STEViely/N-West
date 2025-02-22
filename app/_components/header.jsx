"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import Link from "next/link";
import Image from "next/image";
import NWEST from "@/public/NWEST.png";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Lock/unlock scroll when menu is open/closed
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // Active path highlighting
  const isActive = (path) =>
    pathname === path || pathname.startsWith(`${path}/`);

  // Render links with dynamic classes
  const renderNavLink = (href, label) => (
    <li
      className={classNames("hover:text-[#0000FE]", { "text-[#0000FE]": isActive(href) })}
    >
      <Link href={href}>{label}</Link>
    </li>
  );

  return (
    <header>
      <nav className="bg-black w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 ">
        {/* Logo */}
        <Link href="/">
          <div className="w-[96px] md:w-[120px] lg:w-[193px] ">
            <Image src={NWEST} alt="n-west" />
          </div>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Close icon
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Menu icon
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className=" hidden lg:flex flex-row items-center gap-8 text-white text-[16px] sm:text-[20px] md:text-[20px] z-10">
          {renderNavLink("/", "หน้าหลัก")}
          {renderNavLink("/products", "สินค้า")}
          {renderNavLink("/aboutUs", "เกี่ยวกับเรา")}
          {renderNavLink("/contactUs", "ติดต่อเรา")}
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#1C1C1C] bg-opacity-50 z-50"
            onClick={toggleMenu} // Close menu when clicking outside
          ></div>
          <div className="absolute right-0 top-14 bg-black w-[60%] sm:w-[40%] flex flex-col items-end px-4 py-6 z-50">
            <ul className="flex flex-col gap-6 text-white text-[18px]">
              {renderNavLink("/", "HOME")}
              {renderNavLink("/products", "PRODUCTS")}
              {renderNavLink("/aboutUs", "ABOUT US")}
              {renderNavLink("/contactUs", "CONTACT US")}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
