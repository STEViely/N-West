"use client";

import { useState, useRef } from "react";
import SubNavbar from "../_components/subNavBar";
import Image from "next/image";

export default function Page() {
  const images = [
    {
      src: "/BYD/BYD ATTO 3.jpg",
      alt: "BYD ATTO 3",
      width: 1000,
      height: 1000,
      name: "BYD Seal",
    },

    {
      src: "/BYD/BYD DOLPHIN.jpg",
      alt: "BYD Dolphin",
      width: 1000,
      height: 1000,
      name: "BYD Dolphin",
    },
    {
      src: "/BYD/BYD SEAL.jpg",
      alt: "BYD Seal",
      width: 1000,
      height: 1000,
      name: "BYD Seal",
    },
    {
      src: "/HONDA/BRIO.jpg",
      alt: "BRIO",
      width: 1000,
      height: 1000,
      name: "BRIO",
    },

    {
      src: "/HONDA/CITY 12.jpg",
      alt: "CITY 2012",
      width: 1000,
      height: 1000,
      name: "CITY 2012",
    },
    {
      src: "/HONDA/CITY TURBO WRV.jpg",
      alt: "CITY TURBO WRV.jpg",
      width: 1000,
      height: 1000,
      name: "CITY TURBO WRV.jpg",
    },
    {
      src: "/HONDA/CIVIC FD.jpg",
      alt: "CIVC FD",
      width: 1000,
      height: 1000,
      name: "CIVC FD",
    },
    {
      src: "/HONDA/CIVIC FE FL.jpg",
      alt: "CIVC FE, FL",
      width: 1000,
      height: 1000,
      name: "CIVC FE, FL",
    },
    {
      src: "/HONDA/CIVIC FE, FK.jpg",
      alt: "CIVC FE, FK",
      width: 1000,
      height: 1000,
      name: "CIVC FE, FK",
    },
    {
      src: "/HONDA/JAZZ GD (MNC).jpg",
      alt: "JAZZ GD (MNC)",
      width: 1000,
      height: 1000,
      name: "JAZZ GD (MNC)",
    },
    {
      src: "/HONDA/JAZZ GD.jpg",
      alt: "JAZZ GD",
      width: 1000,
      height: 1000,
      name: "JAZZ GD",
    },
    {
      src: "/HONDA/JAZZ GE.jpg",
      alt: "JAZZ GE",
      width: 1000,
      height: 1000,
      name: "JAZZ GE",
    },
    {
      src: "/HONDA/JAZZ GK, CITY GM6, MOBRIO, BRV, BRIO.jpg",
      alt: "JAZZ GK, CITY GM6, MOBRIO, BRV, BRIO",
      width: 1000,
      height: 1000,
      name: "JAZZ GK, CITY GM6, MOBRIO, BRV, BRIO",
    },
    {
      src: "/HONDA/NEW HRV, CRV.jpg",
      alt: "NEW HRV, CRV",
      width: 1000,
      height: 1000,
      name: "NEW HRV, CRV",
    },
    {
      src: "/HONDA/Old CRV.jpg",
      alt: "CRV (old)",
      width: 1000,
      height: 1000,
      name: "CRV (old)",
    },
    {
      src: "/HONDA/Old HRV.jpg",
      alt: "HRV (old)",
      width: 1000,
      height: 1000,
      name: "HRV (old)",
    },
    {
      src: "/MAZDA/MAZDA 2 G1.jpg",
      alt: "MAZDA 2 Gen1",
      width: 1000,
      height: 1000,
      name: "VIOS GEN1",
    },
    {
      src: "/MAZDA/MAZDA 2 G2.jpg",
      alt: "MAZDA2G1",
      width: 1000,
      height: 1000,
      name: "MAZDA 2 Gen2",
    },
    {
      src: "/TESLA/TESLA 3.jpg",
      alt: "TESLA3",
      width: 1000,
      height: 1000,
      name: "TESLA model:3",
    },
    {
      src: "/TESLA/TESLA Y.jpg",
      alt: "TESLA Y",
      width: 1000,
      height: 1000,
      name: "TESLA model: Y",
    },
    {
      src: "/TOYOTA/VIOS 08, YARIS G1.jpg",
      alt: "VIOS 08, YARIS G1",
      width: 1000,
      height: 1000,
      name: "VIOS 2008, YARIS Gen:1",
    },
    {
      src: "/TOYOTA/VIOS 13, YARIS, ALTIS, CAMRY.jpg",
      alt: "VIOS13, YARIS, CAMRY",
      width: 1000,
      height: 1000,
      name: "VIOS13, YARIS, CAMRY",
    },
    {
      src: "/TOYOTA/VIOS G1.jpg",
      alt: "VIOS Gen:1",
      width: 1000,
      height: 1000,
      name: "VIOS Gen:1",
    },
    {
      src: "/NISSAN/ALMERA.jpg",
      alt: "NISSAN ALMERA",
      width: 1000,
      height: 1000,
      name: "NISSAN ALMERA",
    },
    {
      src: "/SUZUKI/SWIFT G2.jpg",
      alt: "swiftG2",
      width: 1000,
      height: 1000,
      name: "SUZUKI SWIFT Gen2",
    },
    {
      src: "/SUZUKI/SWIFT G3.jpg",
      alt: "swiftG3",
      width: 1000,
      height: 1000,
      name: "SUZUKI SWIFT Gen3",
    },


  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // สไลด์ไปทางซ้าย (ต่อไปยังรูปถัดไป)
      nextImage();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // สไลด์ไปทางขวา (ย้อนกลับไปยังรูปก่อนหน้า)
      prevImage();
    }
  };

  return (
    <>
      <SubNavbar />
      <div className="flex flex-col justify-center items-center mt-8 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-4  gap-4">
          {images.slice(0, 27).map((img, index) => (
            <div
              key={img.src}
              className="flex flex-col items-center justify-around gap-2 xh-[180px] w-[180px] md:h-[170px] md:w-[170px] lg:h-[250px] lg:w-[250px] xl:h-[250px] xl:w-[350px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b from-[#0000fe] to-[#000939]"
              onClick={() => openModal(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={180}
                height={180}
                className="object-cover mx-auto lg:w-[280px]"
              />
              <span className="text-white text-[14px] lg:text-[22px] mx-auto">
                {img.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center pt-40 sm:z-50 sm:px-4 lg:pt-[200px]">
          <div
            className="relative max-w-screen-lg mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute right-1/2 top-[-50px] text-white font-bold text-[24px] lg:text-[80px] sm:text-[32px] lg:right-1/2 sm:top-[-40px] lg:top-[-200px]"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col items-center relative">
              {/* ชื่อภาพด้านบนซ้าย */}
              <span className="absolute top-[-80px] left-0 text-white text-lg sm:text-xl lg:text-[40px] font-semibold">
                {images[currentImageIndex].name}
              </span>
              <button
                className="absolute left-[-30px] top-1/4 text-white font-bold text-[24px] sm:text-[32px] lg:text-[50px] lg:top-1/3"
                onClick={prevImage}
              >
                &lt;
              </button>
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={800}
                height={400}
              />
              <button
                className="absolute right-[-30px] top-1/4 text-white font-bold text-[24px] sm:text-[32px] lg:text-[50px] lg:top-1/3"
                onClick={nextImage}
              >
                &gt;
              </button>
            </div>

            {/* ภาพเล็กพร้อมชื่อด้านล่าง */}

            <div className="flex justify-center items-center ">
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 mt-2  lg:w-[1200px]  rounded-lg">
                {images.map((img, index) => (
                  <button
                    key={img.src}
                    className={`flex flex-col items-center w-[90px] sm:w-[70px] lg:w-[140px]  p-2 ${
                      currentImageIndex === index
                        ? "border-2 border-white bg-gradient-to-b from-[#0000fe] to-[#000939]"
                        : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={100}
                      height={75}
                    />
                    <span className="text-white text-[12px] sm:text-[14px]">
                      {img.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
