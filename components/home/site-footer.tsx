import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";

const socials = ["x", "youtube", "telegram", "linkedin"] as const;

export default function SiteFooter() {
  return (
    <footer className={styles.siteFooter} id="footer">
      <div className={styles.footerMain}>
        <div className={styles.footerBrand}>
          <Link href="/" aria-label="گیلمار، خانه">
            <Image
              src="/gilmar/shared/gilmar-logo-primary.svg"
              alt="اقامتگاه بوم‌گردی گیلمار"
              width={169}
              height={53}
            />
          </Link>
          <p>
            اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با
            امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی
            میراث فرهنگی گیلان فعالیت می‌کند.
          </p>
        </div>
        <nav className={styles.footerLinks} aria-label="کاوش در گیلمار">
          <h2>کاوش در گیلمار</h2>
          <a href="#residence">سوئیت‌ها و اقامت</a>
          <a href="#rules">راهنمای مهمان‌ها</a>
          <a href="#about">درباره گیلمار</a>
          <a href="#blogs">مجله گیلمار</a>
        </nav>
        <div className={styles.footerContact}>
          <h2>راه‌های ارتباط با گیلمار</h2>
          <p>
            تلفن پشتیبانی: <a href="tel:+981334775400" dir="ltr">01334775400</a>
            {" - "}
            <a href="tel:+981334775411" dir="ltr">01334775411</a>
            <br />
            ایمیل: <a href="mailto:info@gilmar-gilan.com" dir="ltr">info@gilmar-gilan.com</a>
            <br />
            موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان
            کوزه‌گران، اقامتگاه گیلمار
          </p>
        </div>
        <div className={styles.footerMap}>
          <Image
            src="/gilmar/footer/location-map.png"
            alt="نقشه موقعیت اقامتگاه گیلمار"
            fill
            sizes="364px"
          />
        </div>
      </div>
      <div className={styles.footerBar}>
        <p>© تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.</p>
        <div className={styles.socials} aria-hidden="true">
          {socials.map((social) => (
            <span key={social} aria-hidden="true">
              <Image
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
