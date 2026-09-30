import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";

const socials = ["x", "youtube", "telegram", "linkedin"] as const;

export default function SiteFooter() {
  return (
    <footer
      className={`${styles.footerGlow} relative mt-[72px] w-full pb-6 xl:mt-[140px] xl:h-[392px] xl:pb-10`}
      id="footer"
    >
      <div className="relative mx-auto grid w-[min(1280px,calc(100%_-_32px))] grid-cols-1 overflow-hidden rounded-3xl border-[6px] border-white/60 bg-white/85 shadow-[0_40px_64px_-32px_rgb(15_15_15_/_10%)] backdrop-blur-2xl md:grid-cols-2 xl:h-[276px] xl:grid-cols-[1.45fr_.8fr_1.45fr_364px]">
        <div className="px-6 py-7 xl:py-[42px] xl:pe-4 xl:ps-7">
          <Link
            className="inline-flex transition-opacity hover:opacity-85"
            href="/"
            aria-label="گیلمار، خانه"
          >
            <Image
              src="/gilmar/shared/gilmar-logo-primary.svg"
              alt="اقامتگاه بوم‌گردی گیلمار"
              width={169}
              height={53}
            />
          </Link>
          <p className="mt-4 mb-0 text-justify text-sm leading-8 font-semibold text-[#4c4c4d]">
            اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با
            امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی
            میراث فرهنگی گیلان فعالیت می‌کند.
          </p>
        </div>
        <nav
          className="flex flex-col items-start gap-[3px] px-6 py-7 xl:px-0 xl:py-[42px]"
          aria-label="کاوش در گیلمار"
        >
          <h2 className="mt-0 mb-3.5 text-base leading-none font-extrabold">
            کاوش در گیلمار
          </h2>
          {[
            ["سوئیت‌ها و اقامت", "#residence"],
            ["راهنمای مهمان‌ها", "#rules"],
            ["درباره گیلمار", "#about"],
            ["مجله گیلمار", "#blogs"],
          ].map(([label, href]) => (
            <a
              className="text-sm leading-8 font-semibold text-[#4c4c4d] transition-colors hover:text-[var(--gilmar-blue)] focus-visible:text-[var(--gilmar-blue)]"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="px-6 py-7 xl:px-5 xl:py-[42px]">
          <h2 className="mt-0 mb-3.5 text-base leading-none font-extrabold">
            راه‌های ارتباط با گیلمار
          </h2>
          <p className="m-0 text-justify text-sm leading-8 font-semibold text-[#4c4c4d]">
            تلفن پشتیبانی:{" "}
            <a
              className="transition-colors hover:text-[var(--gilmar-blue)]"
              href="tel:+981334775400"
              dir="ltr"
            >
              01334775400
            </a>
            {" - "}
            <a
              className="transition-colors hover:text-[var(--gilmar-blue)]"
              href="tel:+981334775411"
              dir="ltr"
            >
              01334775411
            </a>
            <br />
            ایمیل:{" "}
            <a
              className="transition-colors hover:text-[var(--gilmar-blue)]"
              href="mailto:info@gilmar-gilan.com"
              dir="ltr"
            >
              info@gilmar-gilan.com
            </a>
            <br />
            موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان
            کوزه‌گران، اقامتگاه گیلمار
          </p>
        </div>
        <div
          className={`${styles.footerMap} relative min-h-[240px] overflow-hidden md:col-span-2 xl:col-span-1 xl:min-h-0`}
        >
          <Image
            className="scale-[1.08] -translate-x-[7%] object-cover"
            src="/gilmar/footer/location-map.png"
            alt="نقشه موقعیت اقامتگاه گیلمار"
            fill
            sizes="(min-width: 1280px) 364px, calc(100vw - 32px)"
          />
        </div>
      </div>
      <div className="relative mx-auto mt-3 flex min-h-14 w-[min(1280px,calc(100%_-_32px))] flex-col items-center justify-center gap-2 rounded-[28px] border border-[#eef3f6] bg-white/85 px-6 py-3 text-center md:h-12 md:min-h-0 md:flex-row md:justify-between md:rounded-full md:px-5 md:py-1.5 md:text-start">
        <p className="m-0 text-sm leading-8 font-semibold text-[#4c4c4d] md:text-xs md:leading-6">
          © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
        </p>
        <div className="flex gap-3 md:gap-2" dir="ltr" aria-hidden="true">
          {socials.map((social) => (
            <span
              className="grid h-10 w-10 cursor-default place-items-center rounded-full bg-[radial-gradient(circle_at_65%_0%,rgb(255_255_255_/_24%),transparent_42%),linear-gradient(135deg,#02adf7,#26e05a)] shadow-[0_8px_20px_rgb(0_46_37_/_12%)] transition-[translate,scale,opacity,filter] duration-[var(--motion-fast)] hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-95 hover:drop-shadow-[0_4px_8px_rgb(2_173_247_/_20%)] md:h-8 md:w-8"
              key={social}
              aria-hidden="true"
            >
              <Image
                className="h-6 w-6 md:h-[18px] md:w-[18px]"
                src={`/gilmar/shared/${social}.svg`}
                alt=""
                width={24}
                height={24}
              />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
