import Image from "next/image";

import styles from "./home.module.css";
import { GradientAction } from "./shared";

const navItems = [
  ["خانه", "#home"],
  ["سوئیت‌ها و اقامت", "#residence"],
  ["درباره گیلمار", "#about"],
  ["راهنمای مهمان‌ها", "#rules"],
  ["مجله گیلمار", "#blogs"],
  ["تماس با ما", "#footer"],
] as const;

const avatars = [1, 2, 3, 4, 5] as const;

function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <a className={styles.brand} href="#home" aria-label="گیلمار، خانه">
        <Image
          src="/gilmar/shared/gilmar-logo-primary.svg"
          alt="اقامتگاه بوم‌گردی گیلمار"
          width={169}
          height={53}
        />
      </a>
      <nav className={styles.nav} aria-label="ناوبری اصلی">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <span className={styles.loginPill}>
        <span className={styles.userIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="9" r="2.5" />
            <path d="M7.8 17c.7-2.2 2.2-3.3 4.2-3.3s3.5 1.1 4.2 3.3" />
          </svg>
        </span>
        ورود یا ثبت‌نام
      </span>
    </header>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.heroSection} id="home" aria-labelledby="hero-title">
      <div className={styles.heroNoise} aria-hidden="true" />
      <SiteHeader />
      <div className={styles.heroCopy}>
        <h1 id="hero-title">اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است</h1>
        <p>
          اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای
          امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
          میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
        </p>
        <GradientAction href="#packages" className={styles.heroAction}>
          مهمان گیلمار شو
        </GradientAction>
      </div>
      <div className={styles.heroMedia} aria-hidden="true">
        <Image
          src="/gilmar/hero/hero-resort-building.png"
          alt=""
          fill
          preload
          sizes="(min-width: 1280px) 1280px, 100vw"
        />
      </div>
      <div className={styles.socialProof}>
        <div className={styles.avatarStack} aria-hidden="true">
          {avatars.map((avatar) => (
            <Image
              src={`/gilmar/shared/avatar-0${avatar}.png`}
              alt=""
              width={34}
              height={34}
              key={avatar}
            />
          ))}
        </div>
        <span>+۱۲۰ رزرو موفق</span>
      </div>
      <p className={styles.heroCaption}>
        فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </p>
    </section>
  );
}
