import type { Metadata } from "next";

import { abarMid } from "./fonts";
import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "اقامتگاه بوم‌گردی گیلمار",
  description:
    "اقامتی آرام و اصیل در دل طبیعت گیلان، همراه با امکانات رفاهی و تفریحی گیلمار.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={abarMid.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
