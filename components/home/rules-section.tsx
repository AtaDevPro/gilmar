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

const rotations = ["-rotate-[14deg]", "rotate-[13deg]", "-rotate-[14deg]"];

export default function RulesSection() {
  return (
    <section className="relative h-auto xl:h-[562px]" id="rules" aria-labelledby="rules-title">
      <div className={`${styles.rulesDecor} absolute inset-0`} aria-hidden="true" />
      <div className="relative mx-auto h-full w-[min(1280px,calc(100%_-_32px))]">
        <SectionIntro
          id="rules-title"
          icon="/gilmar/shared/lightning.svg"
          title="همراهی برای حفظ آرامش و طبیعت گیلمار"
          description="برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید."
          className="relative z-[2]"
        />
        <svg
          className="absolute top-[266px] left-1/2 z-[1] hidden h-[133.7px] w-[836.9px] -translate-x-1/2 fill-none stroke-white [stroke-dasharray:4_12] [stroke-linecap:round] [stroke-width:3] xl:block"
          viewBox="0 0 837 134"
          width="837"
          height="134"
          aria-hidden="true"
        >
          <path d="M1 70C91 70 132 95 214 67C284 43 298 12 374 35C450 58 475 123 563 105C651 87 706 40 836 50" />
        </svg>
        <div className="relative z-[2] mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-7 xl:absolute xl:inset-x-20 xl:top-[210px] xl:mt-0 xl:gap-32">
          {rules.map((rule, index) => (
            <article className="group flex flex-col items-center text-center transition-transform duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-2" key={rule.title}>
              <div className={`relative mb-[22px] h-[180px] w-[150px] rounded-3xl bg-[#fcfdfd] shadow-[0_24px_32px_rgb(0_46_37_/_20%)] transition-[scale,box-shadow] duration-[var(--motion-card)] ease-[var(--motion-ease)] group-hover:scale-[1.02] group-hover:shadow-[0_30px_38px_rgb(0_46_37_/_24%)] ${rotations[index]}`}>
                <Image className="object-contain p-4 py-5" src={rule.image} alt="" fill sizes="150px" />
              </div>
              <h3 className="m-0 text-base leading-8 font-extrabold">{rule.title}</h3>
              <p className="m-0 max-w-[270px] text-sm leading-8 font-semibold text-[#4c4c4d]">{rule.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
