import Image from "next/image";

import styles from "./home.module.css";
import { SectionIntro } from "./shared";

const services = [
  { title: "دوچرخه سواری", image: "/gilmar/services/cycling.jpg" },
  { title: "قایق سواری", image: "/gilmar/services/boating.png" },
  { title: "پرنده نگری", image: "/gilmar/services/birdwatching.jpg" },
] as const;

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
      <div className={`${styles.container} ${styles.servicesLayout}`}>
        <div className={styles.servicesCopy}>
          <SectionIntro
            id="services-title"
            icon="/gilmar/shared/star.svg"
            title="خدمات رفاهی گیلمار برای اقامتی دلنشین"
            description="در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی آماده شده است."
            align="start"
          />
        </div>
        <div className={styles.servicesRail} dir="ltr">
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="300px"
              />
              <span>{service.title}</span>
            </article>
          ))}
          <span className={styles.serviceArrow} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M8.5 5 15.5 12l-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
