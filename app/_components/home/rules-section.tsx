import Image from "next/image";

import styles from "./home.module.css";
import { SectionIntro } from "./shared";

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
        <div className={styles.rulesConnector} aria-hidden="true" />
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
