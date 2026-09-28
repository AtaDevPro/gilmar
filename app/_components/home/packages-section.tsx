import Image from "next/image";

import styles from "./home.module.css";
import { GradientAction, SectionIntro } from "./shared";

const features = [
  ["۱ شب اقامت", "/gilmar/packages/camping.png"],
  ["صبحانه", "/gilmar/packages/tropical-drink.png"],
  ["قایق‌سواری", "/gilmar/packages/kayaking.png"],
  ["تور جنگل‌نوردی", "/gilmar/packages/mountain-adventure.png"],
] as const;

export default function PackagesSection() {
  return (
    <section className={styles.packagesSection} id="packages" aria-labelledby="packages-title">
      <div className={`${styles.container} ${styles.packagesLayout}`}>
        <div className={styles.packagesCopy}>
          <SectionIntro
            id="packages-title"
            icon="/gilmar/shared/cube.svg"
            title="پکیج‌های ویژه اقامت در گیلمار"
            description="پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز در دل طبیعت است."
            align="start"
          />
          <div className={styles.packageDescription}>
            <h3>پکیج رمانتیک دو نفره</h3>
            <p>شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری</p>
          </div>
          <div className={styles.packageFeatures}>
            {features.map(([label, image]) => (
              <div className={styles.packageFeature} key={label}>
                <Image src={image} alt="" width={72} height={72} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className={styles.packageActions}>
            <strong>قیمت: ۲۳0۰۰۰۰ تومان</strong>
            <GradientAction href="#footer">همین حالا رزرو کن</GradientAction>
          </div>
        </div>
        <div className={styles.packageImage}>
          <Image
            src="/gilmar/rooms/autumn-cabin.png"
            alt="خانه چوبی در پاییز، پکیج اقامت گیلمار"
            fill
            sizes="602px"
          />
          <p>تجربه‌ی اقامتی اصیل در دل طبیعت شمال</p>
          <div className={styles.packageImagePager} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
