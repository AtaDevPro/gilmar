"use client";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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
      {/* Menu trigger */}
      <IconButton
        aria-controls={open ? "mobile-navigation" : undefined}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="باز کردن فهرست ناوبری"
        className="!grid !h-11 !w-11 !shrink-0 !place-items-center !rounded-full !border !border-[#edf1f3] !bg-white/90 !text-[#1a1a1a] !shadow-[0_5px_14px_rgb(15_15_15_/_7%)]"
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
          backdrop: {
            className: "!bg-[#172034]/45 !backdrop-blur-[2px]",
          },

          paper: {
            dir: "rtl",
            className:
              "!right-0 !left-auto !flex !w-[min(88vw,340px)] !overflow-hidden !rounded-l-[28px] !bg-[#f8fbfc] !px-0 !py-0 !text-[#1a1a1a] !shadow-[-20px_0_50px_rgb(15_15_15_/_12%)]",
          },
        }}
      >
        <div className="flex h-full min-h-0 flex-col">
          {/* Header */}
          <div className="flex h-[88px] shrink-0 items-center justify-between border-b border-[#e6edef] px-5">
            <Link
              className="flex items-center transition-opacity duration-[var(--motion-fast)] hover:opacity-85"
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
              aria-label="بستن فهرست ناوبری"
              className="!grid !h-10 !w-10 !shrink-0 !place-items-center !rounded-full !border !border-[#e6edef] !bg-white !text-[#1a1a1a] !shadow-[0_4px_12px_rgb(15_15_15_/_6%)]"
              onClick={closeNavigation}
            >
              <span
                className="relative block h-[18px] w-[18px]"
                aria-hidden="true"
              >
                <i className="absolute top-1/2 left-1/2 block h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                <i className="absolute top-1/2 left-1/2 block h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
              </span>
            </IconButton>
          </div>

          {/* Navigation */}
          <nav
            className="min-h-0 flex-1 overflow-y-auto px-4 py-4"
            aria-label="ناوبری موبایل"
          >
            <List className="!flex !flex-col !gap-1 !p-0" disablePadding>
              {navItems.map(([label, href]) => (
                <ListItem className="!p-0" disablePadding key={href}>
                  <ListItemButton
                    className="group !min-h-[50px] !justify-start !rounded-[16px] !px-4 !py-0 !text-right !text-sm !font-bold !text-[#353945] !transition-[background-color,color,translate] !duration-[var(--motion-fast)] hover:!-translate-x-1 hover:!bg-white hover:!text-[var(--gilmar-blue)] focus-visible:!bg-white focus-visible:!text-[var(--gilmar-blue)]"
                    component={Link}
                    href={href}
                    onClick={closeNavigation}
                  >
                    <span
                      className="me-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d5e0e4] transition-colors duration-[var(--motion-fast)] group-hover:bg-[var(--gilmar-blue)]"
                      aria-hidden="true"
                    />

                    <ListItemText
                      className="!m-0 !text-right"
                      disableTypography
                      primary={label}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>

          {/* Authentication */}
          <div className="shrink-0 border-t border-[#e6edef] bg-white/45 px-5 pt-5 pb-[max(20px,env(safe-area-inset-bottom))]">
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_68%_0%,rgb(255_255_255_/_22%),transparent_45%),linear-gradient(115deg,#02adf7,#26e05a)] text-sm font-extrabold text-white shadow-[0_8px_20px_rgb(2_173_247_/_18%)] transition-[translate,box-shadow] duration-[var(--motion-fast)] hover:-translate-y-px hover:shadow-[0_10px_24px_rgb(2_173_247_/_22%)]"
              href="/auth"
              onClick={closeNavigation}
            >
              ورود / ثبت‌نام
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
}
