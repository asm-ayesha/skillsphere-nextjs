"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import BannerImg from "@/asstes/img2.webp";

const slides = [
  {
    title: "Upgrade Your Skills 🚀",
    desc: "Learn from industry experts and grow faster.",
  },
  {
    title: "Master In-Demand Skills 🎯",
    desc: "Build real-world projects and get hired.",
  },
  {
    title: "Start Learning Today 📚",
    desc: "Join thousands of students online.",
  },
];

const Banner = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden rounded-lg container mx-auto px-2">
      <Image
        src={BannerImg}
        alt="hero"
        fill
        className="object-cover "
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Sliding Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sky-50">
                  {item.title}
                </h1>
                <p className="text-gray-200 text-lg">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Banner;