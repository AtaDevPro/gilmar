import Image from "next/image";

import GradientAction from "@/components/shared/gradient-action";
import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

export default function AboutSection() {
  return (
    <section
      className="h-auto xl:h-[642px]"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="relative mx-auto grid h-full w-[min(1280px,calc(100%_-_32px))] grid-cols-1 gap-10 md:grid-cols-2 xl:gap-10">
        <div
          className={`${styles.gridGlow} relative z-[2] flex flex-col items-start justify-center gap-5 xl:translate-y-8`}
        >
          <SectionIntro
            id="about-title"
            icon="/gilmar/shared/earth.svg"
            title="گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
            align="start"
            className="max-w-[620px]"
          />
          <p className="-mt-1 max-w-[620px] text-justify text-sm leading-8 font-semibold text-[#4c4c4d]">
            گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
            لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
            پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی
            مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی
            متفاوت برای سفر تبدیل کرده است.
          </p>
          <GradientAction href="#residence" className="w-[164px]">
            اقامت در گیلمار
          </GradientAction>
        </div>
        <div
          className="relative isolate mx-auto aspect-[582/649] w-full max-w-[582px] overflow-visible [direction:ltr]"
          aria-label="تصاویر اقامتگاه گیلمار"
        >
          <div className={styles.aboutDecor} aria-hidden="true">
            <i className="absolute top-[5%] left-[10%] h-3 w-3 rotate-12 rounded-sm bg-[#ffcf67]" />
            <i className="absolute top-[40%] right-[2%] h-2.5 w-2.5 rotate-45 rounded-sm bg-[#80d9ff]" />
            <i className="absolute bottom-[11%] left-[2%] h-3 w-3 -rotate-12 rounded-sm bg-[#8ee8a6]" />
            <i className="absolute right-[10%] bottom-[2%] h-2 w-2 rotate-45 rounded-sm bg-[#f5a6bd]" />
          </div>
          <div className="group absolute top-[-2.6%] left-[14.9%] z-[1] aspect-[452/455] w-[76.7%] transition-[translate,scale] duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-1.5 hover:scale-[1.01]">
            <Image
              className="object-contain"
              src="/gilmar/about/main-building.png"
              alt="نمای اصلی اقامتگاه گیلمار"
              fill
              sizes="(max-width: 1023px) 77vw, 447px"
            />
          </div>
          <div className="group absolute top-[35.8%] left-[-1.6%] z-[1] aspect-[357/401] w-[60.4%] -rotate-1 transition-[translate,scale] duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-1.5 hover:scale-[1.01]">
            <Image
              className="object-contain"
              src="/gilmar/about/exterior-02.png"
              alt="نمای بیرونی خانه‌های چوبی گیلمار"
              fill
              sizes="(max-width: 1023px) 61vw, 352px"
            />
          </div>
          <div className="group absolute top-[40.9%] left-[47.9%] z-0 aspect-[357/463] w-[60.4%] rotate-1 transition-[translate,scale] duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-1.5 hover:scale-[1.01]">
            <Image
              className="object-contain"
              src="/gilmar/about/exterior-01.png"
              alt="طبیعت پیرامون اقامتگاه گیلمار"
              fill
              sizes="(max-width: 1023px) 61vw, 352px"
            />
          </div>
          <div className="absolute top-[18%] left-0 z-[4] flex h-[58px] w-[min(244px,72%)] flex-row-reverse items-center gap-2 rounded-full bg-white p-2 ps-3 text-xs font-semibold whitespace-nowrap shadow-[0_16px_32px_rgb(15_15_15_/_12%)] transition-[translate,scale,box-shadow] duration-[var(--motion-fast)] hover:-translate-y-[3px] hover:scale-[1.01] md:top-[20.801%] md:h-[72px] md:w-[41.924%] md:gap-4 md:p-3 md:ps-7 md:text-sm xl:top-[135px] xl:left-0 xl:w-[244px]">
            <i
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#02adf7,#26e05a)] md:h-12 md:w-12"
              aria-hidden="true"
            >
              <Image
                src="/gilmar/about/resort-eco-icon.svg"
                alt=""
                width={35}
                height={32}
              />
            </i>
            <span>اقامتگاه بوم‌گردی گیلمار</span>
          </div>
          <div className="absolute top-[68%] right-0 z-[4] flex h-[58px] w-[min(249px,74%)] flex-row-reverse items-center gap-2 rounded-full bg-white p-2 ps-3 text-xs font-semibold whitespace-nowrap shadow-[0_16px_32px_rgb(15_15_15_/_12%)] transition-[translate,scale,box-shadow] duration-[var(--motion-fast)] hover:-translate-y-[3px] hover:scale-[1.01] md:top-[64.253%] md:right-auto md:left-[39.519%] md:h-[72px] md:w-[42.784%] md:gap-4 md:p-3 md:ps-7 md:text-sm xl:top-[417px] xl:left-[230px] xl:w-[249px]">
            <i
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#02adf7,#26e05a)] md:h-12 md:w-12"
              aria-hidden="true"
            >
              <Image
                src="/gilmar/about/north-experience-icon.svg"
                alt=""
                width={28}
                height={28}
              />
            </i>
            <span>تجربه اقامت اصیل شمال</span>
          </div>
        </div>
      </div>
    </section>
  );
}
