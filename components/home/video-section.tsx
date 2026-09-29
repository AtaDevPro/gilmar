import Image from "next/image";

import GradientAction from "@/components/shared/gradient-action";
import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

export default function VideoSection() {
  return (
    <section
      className={styles.videoSection}
      id="video"
      aria-labelledby="video-title"
    >
      <div className={styles.videoImage} aria-hidden="true">
        <Image
          src="/gilmar/video/forest.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), 914px"
        />
        <span className={styles.playMark}>
          <span className={styles.playCore}>
            <i />
          </span>
        </span>
      </div>
      <div className={styles.videoCopy}>
        <SectionIntro
          id="video-title"
          icon="/gilmar/shared/video.svg"
          title="تور ویدیویی اقامتگاه گیلمار"
          description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را تجربه کنید."
          align="start"
        />
        <GradientAction href="#residence" className={styles.videoAction}>
          اقامت در گیلمار
        </GradientAction>
      </div>
      <Image
        className={styles.compass}
        src="/gilmar/video/compass.svg"
        alt=""
        width={134}
        height={139}
      />
    </section>
  );
}
