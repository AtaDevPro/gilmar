import Image from "next/image";

import styles from "./home.module.css";
import { GradientAction, SectionIntro } from "./shared";

export default function VideoSection() {
  return (
    <section
      className={styles.videoSection}
      id="video"
      aria-labelledby="video-title"
    >
      <div className={styles.videoImage} aria-hidden="true">
        <Image src="/gilmar/video/forest.jpg" alt="" fill sizes="914px" />
      </div>
      <span className={styles.playMark} aria-hidden="true">
        <i />
      </span>
      <div className={styles.videoCopy}>
        <SectionIntro
          id="video-title"
          icon="/gilmar/shared/video.svg"
          title="تور ویدیویی اقامتگاه گیلمار"
          description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را تجربه کنید."
          align="start"
        />
        <GradientAction href="#residence">اقامت در گیلمار</GradientAction>
      </div>
      <Image
        className={styles.compass}
        src="/gilmar/video/compass.svg"
        alt=""
        width={174}
        height={177}
      />
    </section>
  );
}
