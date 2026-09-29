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
    <section className="relative h-auto xl:h-[815px]" id="packages" aria-labelledby="packages-title">
      <div className="relative mx-auto grid h-full w-[min(1280px,calc(100%_-_32px))] grid-cols-1 gap-10 xl:grid-cols-[minmax(0,620px)_minmax(0,602px)] xl:gap-[58px]">
        <div className={`${styles.packagesDecor} relative z-[2] flex flex-col xl:pt-[152px]`}>
          <SectionIntro
            id="packages-title"
            icon="/gilmar/shared/cube.svg"
            title="پکیج‌های ویژه اقامت در گیلمار"
            description="پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز در دل طبیعت است."
            align="start"
          />
          <div className="mt-7 border-t border-dashed border-[#cbd5da] pt-6">
            <h3 className="m-0 text-base leading-8 font-extrabold">پکیج رمانتیک دو نفره</h3>
            <p className="m-0 text-sm leading-8 font-semibold text-[#4c4c4d]">شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری</p>
          </div>
          <div className="mt-[22px] grid grid-cols-2 justify-between gap-4 sm:grid-cols-4 sm:gap-[22px]">
            {features.map(([label, image]) => (
              <div className="flex h-[116px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-2xl border-[6px] border-white bg-[#fcfdfd] px-1 shadow-[0_24px_32px_rgb(0_46_37_/_16%)]" key={label}>
                <Image className="h-[74px] w-[74px] object-contain" src={image} alt="" width={100} height={100} />
                <span className="text-center text-sm leading-7 font-semibold whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-[30px] flex flex-wrap items-center justify-between gap-5">
            <strong className="text-base font-extrabold text-[#58c27d]">قیمت: ۲٬۳۰۰٬۰۰۰ تومان</strong>
            <GradientAction href="#footer" className="w-[178px]">
              همین حالا رزرو کن
            </GradientAction>
          </div>
        </div>
        <PackageGallery />
      </div>
    </section>
  );
}
