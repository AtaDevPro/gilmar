import Image from "next/image";
import Link from "next/link";

import GradientAction from "@/components/shared/gradient-action";
import styles from "./home.module.css";
import MobileNavigation from "./mobile-navigation";
import { navItems } from "./navigation";

const avatars = [3, 2, 1] as const;

function SiteHeader() {
  return (
    <header>
      <div className="relative z-20 mx-4 mt-4 flex h-[68px] items-center justify-between rounded-[24px] border-4 border-white/70 bg-white/90 px-3 shadow-[0_24px_48px_-28px_rgb(15_15_15_/_22%)] backdrop-blur-2xl xl:hidden">
        <Link className="flex shrink-0 items-center" href="/" aria-label="گیلمار، خانه">
          <Image
            className="h-auto w-[112px]"
            src="/gilmar/shared/gilmar-logo-primary.svg"
            alt="اقامتگاه بوم‌گردی گیلمار"
            width={169}
            height={53}
          />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            className="inline-flex h-11 items-center rounded-full bg-[linear-gradient(115deg,#02adf7,#26e05a)] px-4 text-xs font-extrabold text-white shadow-[0_8px_20px_rgb(2_173_247_/_18%)]"
            href="/auth"
          >
            ورود / ثبت‌نام
          </Link>
          <MobileNavigation />
        </div>
      </div>
      <div className="absolute top-10 left-1/2 z-20 hidden h-[66px] w-[min(1280px,calc(100%_-_32px))] -translate-x-1/2 items-center justify-between rounded-full border-[6px] border-white/70 bg-white/90 py-px pe-4 ps-2 shadow-[0_40px_64px_-32px_rgb(15_15_15_/_10%)] backdrop-blur-2xl xl:flex">
        <Link
          className="flex shrink-0 items-center transition-[opacity,scale] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:scale-[1.01] hover:opacity-85"
          href="/"
          aria-label="گیلمار، خانه"
        >
          <Image
            className="h-auto w-[169px]"
            src="/gilmar/shared/gilmar-logo-primary.svg"
            alt="اقامتگاه بوم‌گردی گیلمار"
            width={169}
            height={53}
          />
        </Link>
        <nav className="flex items-center justify-center gap-10 text-sm leading-8 font-semibold whitespace-nowrap" aria-label="ناوبری اصلی">
          {navItems.map(([label, href]) => (
            <a
              className="transition-colors duration-[var(--motion-fast)] hover:text-[var(--gilmar-blue)] focus-visible:text-[var(--gilmar-blue)]"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <Link
          className="flex h-[52px] min-w-[154px] items-center justify-center gap-2.5 rounded-full bg-[radial-gradient(circle_at_68%_0%,rgb(255_255_255_/_24%),transparent_45%),linear-gradient(115deg,#02adf7,#26e05a)] text-sm leading-8 font-extrabold text-white transition-[translate,box-shadow] duration-[var(--motion-fast)] hover:-translate-y-px hover:shadow-[0_10px_22px_rgb(2_173_247_/_20%)]"
          href="/auth"
        >
          <span className={styles.userIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="9" r="2.5" />
              <path d="M7.8 17c.7-2.2 2.2-3.3 4.2-3.3s3.5 1.1 4.2 3.3" />
            </svg>
          </span>
          ورود یا ثبت‌نام
        </Link>
      </div>
    </header>
  );
}

export default function HeroSection() {
  return (
    <section
      className={`${styles.heroSection} relative flex flex-col items-center overflow-hidden px-4 pb-6 xl:block xl:h-[960px] xl:px-0 xl:pb-0`}
      id="home"
      aria-labelledby="hero-title"
    >
      <div className={styles.heroNoise} aria-hidden="true" />
      <SiteHeader />
      <div className="relative z-10 mt-10 flex w-full max-w-[980px] flex-col items-center text-center xl:absolute xl:top-[172px] xl:left-1/2 xl:mt-0 xl:-translate-x-1/2">
        <h1
          className="m-0 max-w-[760px] text-[clamp(30px,9vw,36px)] leading-[1.25] font-extrabold tracking-[-2.4px] text-[#141416] xl:max-w-none xl:text-[40px] xl:leading-none xl:whitespace-nowrap"
          id="hero-title"
        >
          اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
        </h1>
        <p className="my-5 max-w-[732px] text-sm leading-7 font-semibold text-[#353945] md:leading-8 xl:mt-7 xl:mb-[26px]">
          اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای
          امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
          میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
        </p>
        <GradientAction href="#packages" variant="hero">
          مهمان گیلمار شو
        </GradientAction>
      </div>
      <div className="relative z-[2] mt-7 aspect-[1280/581] w-full xl:absolute xl:top-[359px] xl:left-1/2 xl:mt-0 xl:w-[min(1280px,calc(100%_-_32px))] xl:-translate-x-1/2" aria-hidden="true">
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
      <p className="relative z-10 mx-auto mt-3 mb-0 w-full max-w-[251px] text-center text-sm leading-8 font-semibold text-[#1a1a1a] xl:absolute xl:right-[max(97px,calc((100vw_-_1280px)/2+17px))] xl:bottom-11 xl:mt-0">
        فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </p>
    </section>
  );
}
