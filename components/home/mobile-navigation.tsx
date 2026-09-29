"use client";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

import { navItems } from "./navigation";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        aria-controls={open ? "mobile-navigation" : undefined}
        aria-expanded={open}
        aria-label="باز کردن فهرست ناوبری"
        className="!grid !h-11 !w-11 !place-items-center !rounded-full !bg-white/75 !text-[#1a1a1a] !shadow-sm"
        onClick={() => setOpen(true)}
      >
        <span className="grid w-5 gap-1.5" aria-hidden="true">
          <i className="block h-0.5 rounded-full bg-current" />
          <i className="block h-0.5 rounded-full bg-current" />
          <i className="block h-0.5 rounded-full bg-current" />
        </span>
      </IconButton>
      <Drawer
        anchor="right"
        id="mobile-navigation"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            className:
              "w-[min(86vw,340px)] bg-[#f8fbfc]! px-5 py-6 text-[#1a1a1a]",
            dir: "rtl",
          },
        }}
      >
        <div className="mb-7 flex items-center justify-between">
          <strong className="text-base font-extrabold">فهرست گیلمار</strong>
          <IconButton
            aria-label="بستن فهرست ناوبری"
            className="!h-11 !w-11 !text-2xl !leading-none"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">×</span>
          </IconButton>
        </div>
        <nav className="flex flex-col gap-2" aria-label="ناوبری موبایل">
          {navItems.map(([label, href]) => (
            <a
              className="rounded-2xl px-4 py-3 text-sm font-bold transition-colors hover:bg-white hover:text-[var(--gilmar-blue)] focus-visible:bg-white"
              href={href}
              onClick={() => setOpen(false)}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
      </Drawer>
    </>
  );
}
