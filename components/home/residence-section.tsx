import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";
import ResidenceCarousel from "./residence-carousel";
import RoomCard, { rooms } from "./room-card";

export default function ResidenceSection() {
  return (
    <section
      className="relative h-auto xl:h-[504px]"
      id="residence"
      aria-labelledby="residence-title"
    >
      <div className={`${styles.residenceDecor} absolute inset-x-0 -top-9 h-[340px]`} aria-hidden="true" />
      <div className="relative mx-auto h-full w-[min(1280px,calc(100%_-_32px))]">
        <SectionIntro
          id="residence-title"
          icon="/gilmar/shared/award.svg"
          title="انواع اتاق‌های اقامتگاه گیلمار"
          description="اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند."
          className="relative z-[2] xl:translate-y-7"
        />
        <div className="absolute inset-x-0 bottom-[-32px] hidden grid-cols-4 gap-6 xl:grid">
          {rooms.map((room, index) => (
            <RoomCard room={room} index={index} className="h-[302px]" key={room.src} />
          ))}
        </div>
        <ResidenceCarousel />
      </div>
    </section>
  );
}
