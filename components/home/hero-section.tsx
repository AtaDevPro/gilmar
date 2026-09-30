import Image from "next/image";
import Link from "next/link";

import GradientAction from "@/components/shared/gradient-action";
import styles from "./home.module.css";
import MobileNavigation from "./mobile-navigation";
import { navItems } from "./navigation";

const avatars = [3, 2, 1] as const;

function SiteHeader() {
  return (
    <header className="relative z-20 w-full">
      {/* Mobile / Tablet Header */}
      <div
        className="mx-auto mt-4 flex h-16 w-[calc(100%_-_24px)] max-w-[430px] items-center justify-between rounded-[22px] border-2 border-white/80 bg-white/95 px-3 shadow-[0_14px_32px_-20px_rgb(15_15_15_/_22%)] backdrop-blur-2xl xl:hidden"
        dir="ltr"
      >
        <MobileNavigation />

        <Link
          className="flex shrink-0 items-center justify-end transition-opacity duration-[var(--motion-fast)] hover:opacity-85"
          href="/"
          aria-label="گیلمار، خانه"
        >
          <Image
            className="h-auto w-[128px] sm:w-[142px]"
            src="/gilmar/shared/gilmar-logo-primary.svg"
            alt="اقامتگاه بوم‌گردی گیلمار"
            width={169}
            height={53}
            priority
          />
        </Link>
      </div>

      {/* Desktop Header */}
      <div className="absolute top-10 left-1/2 hidden h-[66px] w-[min(1280px,calc(100%_-_32px))] -translate-x-1/2 items-center justify-between rounded-full border-[6px] border-white/70 bg-white/90 py-px pe-4 ps-2 shadow-[0_40px_64px_-32px_rgb(15_15_15_/_10%)] backdrop-blur-2xl xl:flex">
        {/* desktop content همان کد فعلی */}
      </div>
    </header>
  );
}

export default function HeroSection() {
  return (
    <section
      className={`${styles.heroSection} relative flex flex-col items-center overflow-x-clip px-4 pb-6 xl:block xl:h-[960px] xl:px-0 xl:pb-0`}
      id="home"
      aria-labelledby="hero-title"
    >
      <div className={styles.heroNoise} aria-hidden="true" />

      <SiteHeader />

      <div className="relative z-10 mt-10 flex w-full max-w-[980px] flex-col items-center text-center sm:mt-12 xl:absolute xl:top-[172px] xl:left-1/2 xl:mt-0 xl:-translate-x-1/2">
        <h1
          className="m-0 max-w-[440px] text-[clamp(29px,8.5vw,36px)] leading-[1.3] font-extrabold tracking-[-1.8px] text-[#141416] sm:max-w-[620px] sm:tracking-[-2px] xl:max-w-none xl:text-[40px] xl:leading-none xl:tracking-[-2.4px] xl:whitespace-nowrap"
          id="hero-title"
        >
          اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
        </h1>

        <p className="my-5 max-w-[440px] text-sm leading-7 font-semibold text-[#353945] sm:max-w-[620px] md:max-w-[732px] md:leading-8 xl:mt-7 xl:mb-[26px]">
          اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای
          امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
          میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
        </p>

        <GradientAction href="#packages" variant="hero">
          مهمان گیلمار شو
        </GradientAction>
      </div>

      <div
        className="relative z-[2] mt-7 aspect-[1280/581] w-full xl:absolute xl:top-[359px] xl:left-1/2 xl:mt-0 xl:w-[min(1280px,calc(100%_-_32px))] xl:-translate-x-1/2"
        aria-hidden="true"
      >
        <div className={`${styles.heroHalo} absolute inset-0`} />

        <div className={`${styles.heroMedia} absolute inset-0`}>
          <Image
            src="/gilmar/hero/hero-resort-building.png"
            alt=""
            fill
            preload
            sizes="(min-width: 1440px) 1280px, (min-width: 768px) calc(100vw - 32px), calc(100vw - 32px)"
          />
        </div>
      </div>

      <div className="relative z-10 mt-4 flex h-12 w-[166px] self-start items-center justify-between gap-1 rounded-full bg-white py-1.5 pe-3 ps-[7px] text-sm font-semibold shadow-[0_12px_28px_rgb(0_46_37_/_14%)] xl:absolute xl:bottom-[37px] xl:left-[max(96px,calc((100vw_-_1280px)/2+16px))] xl:mt-0">
        <div className="flex ps-[11px]" dir="ltr" aria-hidden="true">
          {avatars.map((avatar) => (
            <Image
              className="ms-[-11px] h-[26px] w-[26px] rounded-full border-2 border-white object-cover"
              src={`/gilmar/shared/avatar-0${avatar}.png`}
              alt=""
              width={26}
              height={26}
              key={avatar}
            />
          ))}
        </div>

        <span>+۱۲۰ رزرو موفق</span>
      </div>

      <p className="relative z-10 mx-auto mt-3 mb-0 w-full max-w-[251px] text-right text-sm leading-8 font-semibold text-[#1a1a1a] xl:absolute xl:right-[max(97px,calc((100vw_-_1280px)/2+17px))] xl:bottom-11 xl:mt-0">
        فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </p>
    </section>
  );
}
