import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";
import ServicesCarousel from "./services-carousel";

export default function ServicesSection() {
  return (
    <section className="relative h-auto overflow-hidden xl:h-[346px]" id="services" aria-labelledby="services-title">
      <div className="relative mx-auto grid h-full w-[min(1280px,calc(100%_-_32px))] grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-10">
        <div className={`${styles.gridGlow} relative z-[2] flex items-center pb-2 xl:pb-0`}>
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
