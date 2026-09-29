"use client";

import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BlogCard from "./blog-card";

const stories = [1, 2, 3] as const;

export default function BlogsCarousel() {
  return (
    <div className="mt-12 w-full overflow-hidden xl:hidden" dir="rtl">
      <Swiper
        className="!overflow-visible"
        modules={[A11y, Keyboard]}
        a11y={{ enabled: true }}
        centeredSlides
        centeredSlidesBounds
        keyboard={{ enabled: true }}
        slidesPerView="auto"
        spaceBetween={16}
        breakpoints={{ 768: { spaceBetween: 24 } }}
      >
        {stories.map((story) => (
          <SwiperSlide className="!h-auto !w-[min(84vw,408px)]" key={story}>
            <BlogCard className="aspect-[408/482] w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
