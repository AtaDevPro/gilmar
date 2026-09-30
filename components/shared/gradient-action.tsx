"use client";

import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";
import Link from "next/link";

type GradientActionProps = Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "hero" | "compact";
  className?: string;
}>;

export default function GradientAction({
  href,
  children,
  variant = "compact",
  className = "",
}: GradientActionProps) {
  const isHero = variant === "hero";

  return (
    <ButtonBase
      className={`!inline-flex items-center justify-between gap-3 whitespace-nowrap !rounded-full border border-transparent bg-[radial-gradient(circle_at_65%_0%,rgb(255_255_255_/_24%),transparent_42%),linear-gradient(115deg,var(--gilmar-blue),var(--gilmar-green))] py-1.5 pe-2 ps-5 !text-sm !leading-none !font-extrabold !text-white shadow-[0_8px_24px_rgb(2_173_247_/_18%)] transition-[translate,scale,box-shadow] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgb(2_173_247_/_24%)] active:translate-y-0 active:scale-[.98] ${
        isHero ? "h-[52px] w-[191px] text-base" : "h-[46px]"
      } ${className}`}
      component={Link}
      href={href}
    >
      <span>{children}</span>
      <span
        className={`grid shrink-0 place-items-center rounded-full bg-white/95 ${
          isHero ? "h-10 w-10" : "h-[34px] w-[34px]"
        }`}
        aria-hidden="true"
      >
        <Image src="/gilmar/shared/arrow-left.svg" alt="" width={21} height={21} />
      </span>
    </ButtonBase>
  );
}
