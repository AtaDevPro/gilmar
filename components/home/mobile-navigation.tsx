"use client";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "./navigation";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const closeNavigation = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-controls={open ? "mobile-navigation" : undefined}
        aria-expanded={open}
        aria-label="باز کردن فهرست ناوبری"
        className="!grid !h-11 !w-11 !shrink-0 !place-items-center !rounded-full !border !border-[#edf1f3] !bg-white !text-[#1a1a1a] !shadow-[0_5px_14px_rgb(15_15_15_/_7%)]"
        onClick={() => setOpen(true)}
      >
        <span className="grid w-[18px] gap-[5px]" aria-hidden="true">
          <i className="block h-[2px] rounded-full bg-current" />
          <i className="block h-[2px] rounded-full bg-current" />
          <i className="block h-[2px] rounded-full bg-current" />
        </span>
      </IconButton>

      <Drawer
        anchor="right"
        dir="rtl"
        id="mobile-navigation"
        open={open}
        onClose={closeNavigation}
        slotProps={{
          paper: {
            className:
              "!right-0 !left-auto flex w-[min(86vw,340px)] bg-[#f8fbfc]! px-5 py-6 text-[#1a1a1a]",
            dir: "rtl",
          },
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#e8eef1] pb-5">
          <Link
            className="flex items-center"
            href="/"
            aria-label="گیلمار، خانه"
            onClick={closeNavigation}
          >
            <Image
              className="h-auto w-[132px]"
              src="/gilmar/shared/gilmar-logo-primary.svg"
              alt="اقامتگاه بوم‌گردی گیلمار"
              width={169}
              height={53}
            />
          </Link>

          <IconButton
            aria-controls={open ? "mobile-navigation" : undefined}
            aria-expanded={open}
            aria-label="باز کردن فهرست ناوبری"
            className="!grid !h-11 !w-11 !shrink-0 !place-items-center !rounded-full !border !border-[#edf1f3] !bg-white/80 !text-[#1a1a1a] !shadow-[0_4px_12px_rgb(15_15_15_/_6%)]"
            onClick={() => setOpen(true)}
          >
            <span className="grid w-[18px] gap-[5px]" aria-hidden="true">
              <i className="block h-[2px] rounded-full bg-current" />
              <i className="block h-[2px] rounded-full bg-current" />
              <i className="block h-[2px] rounded-full bg-current" />
            </span>
          </IconButton>
        </div>

        {/* Navigation */}
        <nav className="mt-5 flex flex-col gap-1.5" aria-label="ناوبری موبایل">
          {navItems.map(([label, href]) => (
            <a
              className="flex min-h-12 items-center rounded-2xl px-4 text-sm font-bold text-[#353945] transition-[background-color,color,translate] duration-[var(--motion-fast)] hover:translate-x-[-2px] hover:bg-white hover:text-[var(--gilmar-blue)] focus-visible:bg-white focus-visible:text-[var(--gilmar-blue)]"
              href={href}
              onClick={closeNavigation}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Authentication CTA */}
        <div className="mt-auto border-t border-[#e8eef1] pt-5">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_68%_0%,rgb(255_255_255_/_22%),transparent_45%),linear-gradient(115deg,#02adf7,#26e05a)] text-sm font-extrabold text-white shadow-[0_8px_20px_rgb(2_173_247_/_18%)] transition-[translate,box-shadow] duration-[var(--motion-fast)] hover:-translate-y-px hover:shadow-[0_10px_24px_rgb(2_173_247_/_22%)]"
            href="/auth"
            onClick={closeNavigation}
          >
            ورود / ثبت‌نام
          </Link>
        </div>
      </Drawer>
    </>
  );
}
