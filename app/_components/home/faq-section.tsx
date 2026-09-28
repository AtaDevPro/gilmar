import Image from "next/image";

import styles from "./home.module.css";
import { SectionIntro } from "./shared";

const questions = [1, 2, 3, 4, 5] as const;

export default function FaqSection() {
  return (
    <section className={styles.faqSection} id="faq" aria-labelledby="faq-title">
      <div className={`${styles.container} ${styles.faqLayout}`}>
        <div className={styles.faqVisual}>
          <SectionIntro
            id="faq-title"
            icon="/gilmar/shared/help.svg"
            title="سوالات متداول مهمانان گیلمار"
            description="پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید."
            align="start"
          />
          <Image
            src="/gilmar/faq/travel-binoculars.png"
            alt="دوربین سفر و تصاویر طبیعت"
            width={420}
            height={382}
          />
        </div>
        <div className={styles.faqList}>
          {questions.map((question, index) => (
            <details className={styles.faqItem} open={index === 0} key={question}>
              <summary>امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!</summary>
              <p>
                در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع
                بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً
                برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با
                پشتیبانی در ارتباط باشید.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
