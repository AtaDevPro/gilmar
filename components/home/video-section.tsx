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
      <div className={`${styles.videoDecor} absolute inset-y-0 right-0 w-full xl:w-[660px]`} aria-hidden="true" />
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
        <div className={`${styles.videoMask} absolute inset-0 overflow-hidden`} aria-hidden="true">
          <Image
            className="object-cover"
            src="/gilmar/video/forest.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 914px, calc(100vw - 32px)"
          />
        </div>
        <div
          className="absolute top-[50.1%] left-[28.1%] z-[3] grid -translate-x-1/2 -translate-y-1/2 place-items-center"
          aria-hidden="true"
        >
          <span className={`${styles.playRing} grid h-[clamp(76px,24vw,120px)] w-[clamp(76px,24vw,120px)] place-items-center rounded-full bg-white/35 backdrop-blur-sm`}>
            <span className="grid h-[65.104%] w-[65.104%] place-items-center rounded-full bg-white">
              <i className="ms-1.5 block h-0 w-0 border-y-[13px] border-y-transparent border-l-[23px] border-l-[#13bda1] max-md:border-y-[10px] max-md:border-l-[18px]" />
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
