"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Image from "next/image";
import { useState } from "react";

import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

const questions = [1, 2, 3, 4, 5] as const;

export default function FaqSection() {
  const [expanded, setExpanded] = useState<number | false>(0);

  return (
    <section className="relative h-auto xl:h-[576px]" id="faq" aria-labelledby="faq-title">
      <div className="relative mx-auto grid h-full w-[min(1280px,calc(100%_-_32px))] grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-10">
        <div className={`${styles.faqDecor} relative isolate flex flex-col items-start`}>
          <SectionIntro
            id="faq-title"
            icon="/gilmar/shared/help.svg"
            title="سوالات متداول مهمانان گیلمار"
            description="پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید."
            align="start"
          />
          <Image
            className="relative mx-auto mt-6 h-auto w-full max-w-[280px] object-contain md:max-w-[340px] xl:absolute xl:bottom-[-25px] xl:start-24 xl:m-0 xl:h-[382px] xl:w-[420px] xl:max-w-none"
            src="/gilmar/faq/travel-binoculars.png"
            alt="دوربین سفر و تصاویر طبیعت"
            width={420}
            height={382}
            sizes="(min-width: 1280px) 420px, (min-width: 768px) 340px, 280px"
          />
        </div>
        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Accordion
              className="!m-0 !overflow-hidden !rounded-3xl !border !border-[#eef3f6] !bg-[#fcfdfd] !shadow-[0_20px_24px_rgb(0_46_37_/_12%)] before:!hidden"
              disableGutters
              elevation={0}
              expanded={expanded === index}
              onChange={(_, isExpanded) => {
                setExpanded(isExpanded ? index : false);
              }}
              key={question}
            >
              <AccordionSummary
                className={`${styles.faqSummary} !min-h-16 !gap-4 !rounded-[22px] !p-4 !text-sm !leading-8 !font-extrabold focus-visible:!shadow-[inset_0_0_0_3px_#079cf1] focus-visible:!outline-0 [&_.MuiAccordionSummary-content]:!m-0`}
                expandIcon={<span className={styles.faqIndicator} aria-hidden="true" />}
                aria-controls={`gilmar-faq-panel-${index}`}
                id={`gilmar-faq-summary-${index}`}
              >
                <span>امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!</span>
              </AccordionSummary>
              <AccordionDetails
                className="!p-0"
                id={`gilmar-faq-panel-${index}`}
                aria-labelledby={`gilmar-faq-summary-${index}`}
              >
                <p className="mx-4 mt-[-4px] mb-5 text-sm leading-8 font-semibold text-[#4c4c4d]">
                  در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع
                  بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً
                  برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با
                  پشتیبانی در ارتباط باشید.
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
