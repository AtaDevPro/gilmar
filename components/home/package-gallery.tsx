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
      {/* Gallery image */}
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

      {/* Text inside the mask cutout */}
      <p className="absolute top-[11%] left-0 z-[2] m-0 grid h-[10%] w-[23.1%] place-items-center px-1 text-center text-[9px] leading-[18px] font-semibold text-[#1a1a1a] sm:text-[10px] sm:leading-5 md:text-xs md:leading-6 xl:text-sm xl:leading-7">
        تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </p>

      {/* Gallery pagination */}
      <div
        className="absolute bottom-[2.6%] left-[2%] z-[3] flex w-[56%] items-center gap-[4%]"
        dir="ltr"
        role="group"
        aria-label="تصاویر پکیج اقامت"
      >
        {images.map(([, alt], index) => {
          const isActive = index === activeIndex;

          return (
            <button
              type="button"
              className="group flex h-8 min-w-0 flex-1 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
              aria-label={`نمایش ${alt}`}
              aria-pressed={isActive}
              aria-current={isActive ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              key={alt}
            >
              <span
                className={`block h-[3px] w-full rounded-full transition-[background-color,opacity] duration-[var(--motion-fast)] sm:h-1 xl:h-[5px] ${
                  isActive
                    ? "bg-white opacity-100"
                    : "bg-white opacity-50 group-hover:opacity-75"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
