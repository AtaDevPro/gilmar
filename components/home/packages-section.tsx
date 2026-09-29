import Image from "next/image";

import GradientAction from "@/components/shared/gradient-action";
import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";
import PackageGallery from "./package-gallery";

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
                <Image src={image} alt="" width={100} height={100} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className={styles.packageActions}>
            <strong>قیمت: ۲۳0۰۰۰۰ تومان</strong>
            <GradientAction href="#footer" className={styles.packageAction}>
              همین حالا رزرو کن
            </GradientAction>
          </div>
        </div>
        <PackageGallery />
      </div>
    </section>
  );
}
