import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";
import ServicesCarousel from "./services-carousel";

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
        <ServicesCarousel />
      </div>
    </section>
  );
}
