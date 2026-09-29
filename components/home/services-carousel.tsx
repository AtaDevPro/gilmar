"use client";

import Image from "next/image";
import { useRef } from "react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";

const services = [
  { title: "دوچرخه سواری", image: "/gilmar/services/cycling.jpg" },
  { title: "قایق سواری", image: "/gilmar/services/boating.png" },
  { title: "پرنده نگری", image: "/gilmar/services/birdwatching.jpg" },
] as const;

export default function ServicesCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div
      className="relative h-[330px] w-[calc(100%+32px)] -ms-4 overflow-hidden xl:absolute xl:top-0 xl:left-[-214px] xl:h-[346px] xl:w-[844px]"
      dir="rtl"
    >
      <Swiper
        className="h-full !overflow-visible"
        modules={[A11y, Keyboard]}
        a11y={{ enabled: true }}
        centeredSlides
        initialSlide={1}
        keyboard={{ enabled: true }}
        rewind
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView="auto"
        spaceBetween={41}
      >
        {services.map((service, index) => (
          <SwiperSlide
            className="!flex !h-full !w-[clamp(220px,68vw,254px)] !items-center !justify-center xl:!w-[254px]"
            key={service.title}
          >
            {({ isActive }) => (
              <button
                className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-[20px] border-0 p-0 text-start shadow-[0_24px_32px_rgb(0_46_37_/_20%)] transition-[width,height,translate,box-shadow] duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-1 ${
                  isActive
                    ? "h-[330px] w-[min(78vw,288px)] shadow-[0_30px_40px_rgb(0_46_37_/_24%)] xl:h-[346px] xl:w-[288px]"
                    : "h-[286px] w-[min(68vw,254px)] xl:h-[304px] xl:w-[254px]"
                }`}
                type="button"
                aria-label={`نمایش خدمت ${service.title}`}
                aria-pressed={isActive}
                onClick={() => swiperRef.current?.slideTo(index)}
              >
                <Image
                  className={`object-cover transition-transform duration-[var(--motion-card)] ease-[var(--motion-ease)] group-hover:scale-[1.035] ${isActive ? "scale-[1.035]" : ""}`}
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 288px, min(78vw, 288px)"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/65 from-0% to-transparent to-45%" aria-hidden="true" />
                <span className="absolute inset-x-5 bottom-[18px] z-[2] text-base leading-none font-extrabold text-white" dir="rtl">
                  {service.title}
                </span>
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute top-1/2 right-2 z-10 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-[6px] border-white bg-white shadow-[0_8px_20px_rgb(0_46_37_/_16%)] transition-[translate,scale] duration-[var(--motion-fast)] hover:translate-x-0.5 hover:-translate-y-1/2 hover:scale-[1.03] xl:right-[-8px]"
        type="button"
        aria-label="نمایش خدمت بعدی"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Image src="/gilmar/shared/arrow-right.svg" alt="" width={31} height={31} />
      </button>
    </div>
  );
}
