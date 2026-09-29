"use client";

import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import RoomCard, { rooms } from "./room-card";

export default function ResidenceCarousel() {
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
        {rooms.map((room, index) => (
          <SwiperSlide className="!h-auto !w-[min(78vw,302px)]" key={room.src}>
            <RoomCard room={room} index={index} className="aspect-square w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
