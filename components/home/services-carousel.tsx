"use client";

import Image from "next/image";
import { useRef } from "react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const services = [
  { title: "دوچرخه سواری", image: "/gilmar/services/cycling.jpg" },
  { title: "قایق سواری", image: "/gilmar/services/boating.png" },
  { title: "پرنده نگری", image: "/gilmar/services/birdwatching.jpg" },
] as const;

export default function ServicesCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div
      className="relative h-[330px] w-[calc(100%+32px)] -ms-4 overflow-visible xl:absolute xl:top-0 xl:left-[-214px] xl:h-[346px] xl:w-[844px]"
      dir="rtl"
    >
      <div className="h-full overflow-hidden">
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
                  className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-[20px] border-0 p-0 text-start transition-[width,height,translate] duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-1 ${
                    isActive
                      ? "h-[330px] w-[min(78vw,288px)] xl:h-[346px] xl:w-[288px]"
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
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-black/65 from-0% to-transparent to-45%"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-x-5 bottom-[18px] z-[2] text-base leading-none font-extrabold text-white"
                    dir="rtl"
                  >
                    {service.title}
                  </span>
                </button>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className="absolute top-1/2 right-2 z-20 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white p-1 shadow-[0_8px_20px_rgb(0_46_37_/_14%)] transition-[translate,scale] duration-[var(--motion-fast)] hover:-translate-y-1/2 hover:scale-[1.04] sm:right-1 md:right-[-18px] md:h-16 md:w-16 md:p-[5px] xl:right-[-32px]"
        type="button"
        aria-label="نمایش خدمت بعدی"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <span className="grid h-full w-full place-items-center rounded-full bg-[linear-gradient(135deg,#04B9E2_0%,#08CDB1_48%,#18DF83_100%)]">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#F8FFF9_0%,#E3FAF0_38%,#B5F0DD_68%,#83E1CF_100%)] shadow-[inset_0_1px_2px_rgb(255_255_255_/_90%),0_3px_8px_rgb(0_120_100_/_20%)] md:h-8 md:w-8">
            <ArrowForwardRoundedIcon className="!h-[18px] !w-[18px] !text-[#0AAE9C] md:!h-[22px] md:!w-[22px]" />
          </span>
        </span>
      </button>
      <button
        className="absolute top-1/2 left-2 z-20 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white p-1 shadow-[0_8px_20px_rgb(0_46_37_/_14%)] transition-[translate,scale] duration-[var(--motion-fast)] hover:-translate-y-1/2 hover:scale-[1.04] md:hidden"
        type="button"
        aria-label="نمایش خدمت قبلی"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <span className="grid h-full w-full place-items-center rounded-full bg-[linear-gradient(135deg,#04B9E2_0%,#08CDB1_48%,#18DF83_100%)]">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#F8FFF9_0%,#E3FAF0_38%,#B5F0DD_68%,#83E1CF_100%)] shadow-[inset_0_1px_2px_rgb(255_255_255_/_90%),0_3px_8px_rgb(0_120_100_/_20%)]">
            <ArrowBackRoundedIcon className="!h-[18px] !w-[18px] !text-[#0AAE9C]" />
          </span>
        </span>
      </button>
    </div>
  );
}
