"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./home.module.css";

const images = [
  ["/gilmar/rooms/autumn-cabin.png", "خانه چوبی گیلمار در پاییز"],
  ["/gilmar/rooms/woodland-cabin.png", "خانه چوبی گیلمار در جنگل"],
  ["/gilmar/rooms/modern-cabin.png", "خانه مدرن گیلمار در جنگل"],
  ["/gilmar/rooms/forest-stream.png", "خانه چوبی گیلمار کنار رود جنگلی"],
] as const;

export default function PackageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative mx-auto aspect-[602/815] w-full max-w-[602px] xl:h-[815px] xl:w-[602px]">
      <div
        className={`${styles.packageMask} absolute inset-0 overflow-hidden drop-shadow-[0_24px_32px_rgb(0_46_37_/_18%)]`}
      >
        {images.map(([src, alt], index) => (
          <Image
            className={`object-cover transition-[opacity,scale] duration-[var(--motion-card)] ease-[var(--motion-ease)] ${
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-[1.03] opacity-0"
            }`}
            src={src}
            alt={index === activeIndex ? alt : ""}
            fill
            sizes="(min-width: 1280px) 602px, calc(100vw - 32px)"
            key={src}
          />
        ))}
        <span
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50"
          aria-hidden="true"
        />
      </div>
      <p className="absolute top-[11%] left-0 z-[2] m-0 grid h-[10%] w-[23.1%] place-items-center px-1 text-center text-[9px] leading-[18px] font-semibold text-[#1a1a1a] sm:text-[10px] sm:leading-5 md:text-xs md:leading-6 xl:text-sm xl:leading-7">
        تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </p>
      <div
        className="absolute bottom-[18px] left-[8%] z-[2] flex gap-3"
        dir="ltr"
        role="group"
        aria-label="تصاویر پکیج اقامت"
      >
        {images.map(([, alt], index) => (
          <button
            type="button"
            className="group grid h-11 w-10 cursor-pointer place-items-center border-0 bg-transparent p-0"
            aria-label={`نمایش ${alt}`}
            aria-pressed={index === activeIndex}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            key={alt}
          >
            <span
              className={`h-1 w-7 rounded-full transition-colors duration-[var(--motion-fast)] ${index === activeIndex ? "bg-white" : "bg-white/55 group-hover:bg-white/80"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
