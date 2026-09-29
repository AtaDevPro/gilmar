import Image from "next/image";

type SectionIntroProps = Readonly<{
  id: string;
  icon: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}>;

export default function SectionIntro({
  id,
  icon,
  title,
  description,
  align = "center",
  className = "",
}: SectionIntroProps) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "start"
          ? "items-start text-start"
          : "items-center text-center"
      } ${className}`}
    >
      <span
        className="relative grid h-[52px] w-[84px] shrink-0 place-items-center"
        aria-hidden="true"
      >
        <Image
          className="absolute -inset-1 h-[60px] w-[92px] max-w-none"
          src="/gilmar/shared/section-icon-frame.svg"
          alt=""
          width={92}
          height={60}
        />
        <span className="relative block h-6 w-6">
          <Image className="object-contain" src={icon} alt="" fill sizes="24px" />
        </span>
      </span>
      <div className="flex max-w-[732px] flex-col gap-4">
        <h2
          className="m-0 text-[clamp(25px,8vw,32px)] leading-[1.25] font-extrabold tracking-[-1.4px] text-[#1a1a1a] md:text-[32px] md:leading-none"
          id={id}
        >
          {title}
        </h2>
        {description ? (
          <p className="m-0 text-sm leading-8 font-semibold text-[#4c4c4d]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
