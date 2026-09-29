import Image from "next/image";

import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

const rules = [
  {
    title: "مراقبت از وسایل اقامتگاه",
    description:
      "مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.",
    image: "/gilmar/rules/care-for-resort-property.png",
  },
  {
    title: "حفظ آرامش اقامتگاه",
    description:
      "برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سر‌وصدای زیاد به‌ویژه در ساعات شب خودداری کنید.",
    image: "/gilmar/rules/keep-resort-quiet.png",
  },
  {
    title: "حفظ طبیعت و محیط زیست",
    description:
      "گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.",
    image: "/gilmar/rules/protect-nature.png",
  },
] as const;

export default function RulesSection() {
  return (
    <section className={styles.rulesSection} id="rules" aria-labelledby="rules-title">
      <div className={styles.container}>
        <SectionIntro
          id="rules-title"
          icon="/gilmar/shared/lightning.svg"
          title="همراهی برای حفظ آرامش و طبیعت گیلمار"
          description="برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید."
          className={styles.rulesIntro}
        />
        <svg
          className={styles.rulesConnector}
          viewBox="0 0 837 134"
          width="837"
          height="134"
          aria-hidden="true"
        >
          <path d="M1 70C91 70 132 95 214 67C284 43 298 12 374 35C450 58 475 123 563 105C651 87 706 40 836 50" />
        </svg>
        <div className={styles.rulesGrid}>
          {rules.map((rule, index) => (
            <article className={styles.ruleItem} key={rule.title}>
              <div className={`${styles.ruleCard} ${styles[`ruleCard${index + 1}`]}`}>
                <Image src={rule.image} alt="" fill sizes="150px" />
              </div>
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
