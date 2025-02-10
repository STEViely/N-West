"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/images/i1.jpg",
    text: "ลดแสงสะท้อนจากไฟหน้ารถ",
  },
  {
    image: "/images/i2.jpg",
    text: "ตัดแสงยูวี",
  },
  {
    image: "/images/i3.jpg",
    text: "เพิ่มความคมชัด",
  },
  {
    image: "/images/i4.jpg",
    text: "ช่วยในการมองเห็นในทุกสภาพอากาศ",
  },
  {
    image: "/images/i5.jpg",
    text: "นวัตกรรมที่เปลี่ยนโลก",
  },
  {
    image: "/images/i6.jpg",
    text: "ป้องกันคราบน้ำและสิ่งสกปรก",
  },
  {
    image: "/images/i7.jpg",
    text: "ความสวยงามและทันสมัย",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
