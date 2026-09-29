import Image from "next/image";

import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

const rooms = [
  "/gilmar/rooms/autumn-cabin.png",
  "/gilmar/rooms/woodland-cabin.png",
  "/gilmar/rooms/modern-cabin.png",
  "/gilmar/rooms/forest-stream.png",
] as const;

export default function ResidenceSection() {
  return (
    <section
      className={styles.residenceSection}
      id="residence"
      aria-labelledby="residence-title"
    >
      <div className={styles.container}>
        <SectionIntro
          id="residence-title"
          icon="/gilmar/shared/award.svg"
          title="انواع اتاق‌های اقامتگاه گیلمار"
          description="اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند."
          className={styles.residenceIntro}
        />
        <div className={styles.roomsGrid}>
          {rooms.map((room, index) => (
            <article className={styles.roomCard} key={room}>
              <Image
                src={room}
                alt={`خانه چوبی گیلمار، نمای ${index + 1}`}
                fill
                sizes="(max-width: 767px) 78vw, 302px"
              />
              <div className={styles.roomCopy}>
                <h3>خانه‌ی چوبی گیلمار</h3>
                <p>هر شب اقامت از ۱۳0۰۰۰۰ تومان</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
