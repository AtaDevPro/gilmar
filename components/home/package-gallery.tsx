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
    <div className={styles.packageImage}>
      {images.map(([src, alt], index) => (
        <Image
          className={`${styles.packageLayer} ${
            index === activeIndex ? styles.packageLayerActive : ""
          }`}
          src={src}
          alt={index === activeIndex ? alt : ""}
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), 602px"
          key={src}
        />
      ))}
      <p>تجربه‌ی اقامتی اصیل در دل طبیعت شمال</p>
      <div className={styles.packageImagePager} aria-label="تصاویر پکیج اقامت">
        {images.map(([, alt], index) => (
          <button
            type="button"
            className={index === activeIndex ? styles.packagePagerActive : ""}
            aria-label={`نمایش ${alt}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            key={alt}
          />
        ))}
      </div>
    </div>
  );
}
