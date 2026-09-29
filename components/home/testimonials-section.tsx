import Image from "next/image";

import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

const markers = [
  ["avatar-04.png", "markerOne"],
  ["avatar-01.png", "markerTwo"],
  ["avatar-02.png", "markerThree"],
  ["avatar-05.png", "markerFour"],
  ["avatar-03.png", "markerFive"],
  ["avatar-01.png", "markerSix"],
  ["avatar-03.png", "markerSeven"],
  ["avatar-04.png", "markerEight"],
] as const;

const testimonial = {
  quote:
    "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
  name: "احسان عبدی پور",
  role: "مهمان",
} as const;

function TestimonialCard() {
  return (
    <article className="relative z-[4] flex w-full flex-col items-center rounded-2xl bg-[#fcfdfd] px-5 pt-5 pb-4 text-center shadow-[0_24px_48px_rgb(0_46_37_/_18%)] md:px-[30px] xl:absolute xl:top-[40.894%] xl:left-[28.614%] xl:min-h-[264px] xl:w-[500px] xl:pt-6">
      <span className="h-11 bg-[linear-gradient(135deg,#02adf7,#26e05a)] bg-clip-text font-serif text-7xl leading-none font-extrabold text-transparent" aria-hidden="true">
        ”
      </span>
      <blockquote className="my-2 text-sm leading-8 font-semibold text-[#4c4c4d] md:mb-2.5">
        {testimonial.quote}
      </blockquote>
      <strong className="text-sm leading-6 font-extrabold">{testimonial.name}</strong>
      <span className="text-sm leading-6 font-semibold text-[#4c4c4d]">{testimonial.role}</span>
      <div className="absolute bottom-[-28px] flex items-center justify-center" aria-hidden="true">
        <span className="h-2 w-6 rounded-full bg-[linear-gradient(90deg,var(--gilmar-blue),var(--gilmar-green))]" />
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="relative h-auto pb-7 xl:h-[698px] xl:pb-0"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="relative mx-auto h-full w-[min(1280px,calc(100%_-_32px))]">
        <SectionIntro
          id="testimonials-title"
          icon="/gilmar/shared/message.svg"
          title="گیلمار از نگاه مهمانان"
          description="تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است."
          className="relative z-[5]"
        />
        <div className="relative mt-6 xl:absolute xl:top-[94px] xl:left-1/2 xl:mt-0 xl:h-[604px] xl:w-[min(1169px,calc(100%_-_32px))] xl:-translate-x-1/2">
          <div className="relative -mx-4 aspect-[1169/604] w-[calc(100%+32px)] md:mx-auto md:w-full xl:absolute xl:inset-0">
            <Image
              className="absolute top-[14.238%] left-0 h-[85.762%] w-full"
              src="/gilmar/testimonials/world-map-dots.svg"
              alt=""
              width={1169}
              height={518}
              aria-hidden="true"
            />
            {markers.map(([avatar, markerClass], index) => (
              <span
                className={`${styles.avatarMarker} ${styles[markerClass]}`}
                key={`${avatar}-${index}`}
                aria-hidden="true"
              >
                <Image src={`/gilmar/shared/${avatar}`} alt="" fill sizes="100px" />
              </span>
            ))}
          </div>
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
