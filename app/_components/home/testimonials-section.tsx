import Image from "next/image";

import styles from "./home.module.css";
import { PagerDots, SectionIntro } from "./shared";

const markers = [
  ["avatar-04.png", "markerOne"],
  ["avatar-02.png", "markerTwo"],
  ["avatar-01.png", "markerThree"],
  ["avatar-05.png", "markerFour"],
  ["avatar-03.png", "markerFive"],
  ["avatar-01.png", "markerSix"],
  ["avatar-02.png", "markerSeven"],
  ["avatar-05.png", "markerEight"],
] as const;

export default function TestimonialsSection() {
  return (
    <section
      className={styles.testimonialsSection}
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className={styles.container}>
        <SectionIntro
          id="testimonials-title"
          icon="/gilmar/shared/message.svg"
          title="گیلمار از نگاه مهمانان"
          description="تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است."
          className={styles.testimonialsIntro}
        />
        <Image
          className={styles.worldMap}
          src="/gilmar/testimonials/world-map-dots.svg"
          alt=""
          width={1169}
          height={518}
        />
        {markers.map(([avatar, markerClass], index) => (
          <span
            className={`${styles.avatarMarker} ${styles[markerClass]}`}
            key={`${avatar}-${index}`}
            aria-hidden="true"
          >
            <Image
              src={`/gilmar/shared/${avatar}`}
              alt=""
              fill
              sizes="80px"
            />
          </span>
        ))}
        <article className={styles.testimonialCard}>
          <span className={styles.quoteMark} aria-hidden="true">
            ”
          </span>
          <blockquote>
            اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً
            آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم
            واقعاً از هیاهوی شهر دور بشم.
          </blockquote>
          <strong>احسان عبدی پور</strong>
          <span>مهمان</span>
          <PagerDots />
        </article>
      </div>
    </section>
  );
}
