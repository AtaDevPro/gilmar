import Image from "next/image";

import GradientAction from "@/components/shared/gradient-action";
import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

export default function VideoSection() {
  return (
    <section
      className="relative mx-auto flex w-[calc(100%_-_32px)] flex-col gap-8 overflow-visible xl:block xl:h-[690px] xl:w-[min(1360px,calc(100%_-_40px))]"
      id="video"
      aria-labelledby="video-title"
    >
      <div
        className={`${styles.videoDecor} absolute inset-y-0 right-0 w-full xl:w-[660px]`}
        aria-hidden="true"
      />
      <div className="relative z-[3] order-1 flex w-full flex-col items-start gap-5 px-2 xl:absolute xl:top-[216px] xl:right-20 xl:w-[500px] xl:p-0">
        <SectionIntro
          id="video-title"
          icon="/gilmar/shared/video.svg"
          title="تور ویدیویی اقامتگاه گیلمار"
          description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را تجربه کنید."
          align="start"
        />
        <GradientAction href="#residence" className="w-[164px]">
          اقامت در گیلمار
        </GradientAction>
      </div>
      <div className="relative order-2 aspect-[914/690] w-full overflow-visible xl:absolute xl:inset-y-0 xl:left-0 xl:h-[690px] xl:w-[914px]">
        <div
          className={`${styles.videoMask} absolute inset-0 overflow-hidden`}
          aria-hidden="true"
        >
          <Image
            className="object-cover"
            src="/gilmar/video/forest.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 914px, calc(100vw - 32px)"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div
          className="absolute top-1/2 left-[33.3%] z-[3] grid -translate-x-1/2 -translate-y-1/2 place-items-center"
          aria-hidden="true"
        >
          <span
            className={`${styles.playRing} grid h-[72px] w-[72px] place-items-center rounded-full bg-white/35 backdrop-blur-sm sm:h-[84px] sm:w-[84px] md:h-[96px] md:w-[96px] xl:h-[120px] xl:w-[120px]`}
          >
            <span className="grid h-[65%] w-[65%] place-items-center rounded-full bg-white">
              <i className="block h-[18px] w-[16px] translate-x-[1px] bg-[#13bda1] [clip-path:polygon(0_0,100%_50%,0_100%)] sm:h-5 sm:w-[18px] md:h-[22px] md:w-5 xl:h-[26px] xl:w-[23px]" />
            </span>
          </span>
        </div>
        <Image
          className="absolute bottom-[-52px] left-1/2 z-[3] h-auto w-[90px] -translate-x-1/2 xl:top-[630px] xl:bottom-auto xl:left-[653px] xl:h-[139px] xl:w-[134px] xl:translate-x-0"
          src="/gilmar/video/compass.svg"
          alt=""
          width={134}
          height={139}
        />
      </div>
    </section>
  );
}
