import Image from "next/image";

import GradientAction from "@/components/shared/gradient-action";
import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about" aria-labelledby="about-title">
      <div className={`${styles.container} ${styles.aboutLayout}`}>
        <div className={styles.aboutCopy}>
          <SectionIntro
            id="about-title"
            icon="/gilmar/shared/earth.svg"
            title="گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
            align="start"
            className={styles.aboutIntro}
          />
          <p>
            گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
            لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
            پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر
            دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را
            به مقصدی متفاوت برای سفر تبدیل کرده است.
          </p>
          <GradientAction href="#residence" className={styles.aboutAction}>
            اقامت در گیلمار
          </GradientAction>
        </div>
        <div className={styles.aboutCollage} aria-label="تصاویر اقامتگاه گیلمار">
          <div className={`${styles.aboutPhoto} ${styles.aboutPhotoMain}`}>
            <Image
              src="/gilmar/about/main-building.png"
              alt="نمای اصلی اقامتگاه گیلمار"
              fill
              sizes="(max-width: 767px) calc(100vw - 32px), 352px"
            />
          </div>
          <div className={`${styles.aboutPhoto} ${styles.aboutPhotoOne}`}>
            <Image
              src="/gilmar/about/exterior-02.png"
              alt="نمای بیرونی خانه‌های چوبی گیلمار"
              fill
              sizes="(max-width: 767px) calc(50vw - 24px), 256px"
            />
          </div>
          <div className={`${styles.aboutPhoto} ${styles.aboutPhotoTwo}`}>
            <Image
              src="/gilmar/about/exterior-01.png"
              alt="طبیعت پیرامون اقامتگاه گیلمار"
              fill
              sizes="(max-width: 767px) calc(50vw - 24px), 256px"
            />
          </div>
          <div className={`${styles.aboutBadge} ${styles.aboutBadgeResort}`}>
            <i aria-hidden="true">
              <Image
                src="/gilmar/about/resort-eco-icon.svg"
                alt=""
                width={35}
                height={32}
              />
            </i>
            <span>اقامتگاه بوم‌گردی گیلمار</span>
          </div>
          <div className={`${styles.aboutBadge} ${styles.aboutBadgeNorth}`}>
            <i aria-hidden="true">
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
