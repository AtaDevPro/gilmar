import localFont from "next/font/local";

export const abarMid = localFont({
  src: [
    {
      path: "./Webfonts/woff2/AbarMidFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Webfonts/woff2/AbarMidFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-abar-mid",
});
