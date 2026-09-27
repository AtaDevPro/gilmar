import type { Metadata } from "next";

import { abarHigh, abarLow, abarMid } from "./fonts";
import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Gilmar",
  description: "Gilmar website",
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
      className={`${abarHigh.variable} ${abarMid.variable} ${abarLow.variable}`}
    >
      <body className={abarMid.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
