# Gilmar — Eco-Lodge Landing Page

A responsive, RTL-first eco-lodge landing page built from a Figma design with a strong focus on visual accuracy, maintainable component structure, responsive behavior, and polished interactions.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-149ECA?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/MUI-9.4-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![Swiper](https://img.shields.io/badge/Swiper-14.3-6332F6?logo=swiper&logoColor=white)](https://swiperjs.com/)

## Live Demo

**[View the deployed project on Vercel](https://gilmar-atadevpro.vercel.app/)**

## Overview

Gilmar is a single-page accommodation website for a nature-focused eco-lodge. The project was implemented from a provided Figma design and recreates the original visual language across desktop, tablet, and mobile layouts.

The page includes a custom hero composition, accommodation and activity sections, responsive carousels, packages, testimonials, FAQ, journal cards, and a detailed footer — all adapted for Persian RTL content.

> **Design note:** The UI/UX design was provided as a Figma reference. This repository contains my frontend implementation of that design.

## Highlights

- Pixel-conscious Figma-to-code implementation
- Fully responsive desktop, tablet, and mobile layouts
- Native Persian RTL layout with `dir="rtl"`
- Reusable section and CTA components
- Responsive Swiper carousels for interactive content
- MUI-powered mobile navigation primitives
- Custom masks, layered artwork, gradients, decorative effects, and micro-interactions
- Local Persian font integration using `next/font/local`
- Optimized images with `next/image`
- Accessible navigation and carousel controls
- Custom branded 404 page
- Vercel-ready production build

## Tech Stack

| Technology | Usage |
| --- | --- |
| **Next.js 16** | App Router, routing, metadata, image/font optimization |
| **React 19** | Component architecture and interactive UI |
| **TypeScript** | Type-safe frontend development |
| **Tailwind CSS v4** | Primary layout, responsive, spacing, typography, and visual styling |
| **Material UI v9** | Theme integration and interaction primitives such as mobile navigation |
| **Swiper v14** | RTL-aware responsive carousels |
| **Emotion** | MUI styling runtime |
| **Abar Mid FaNum** | Local Persian typography via `next/font/local` |

## Main Sections

- Hero and responsive navigation
- About Gilmar
- Guest guidelines
- Activities and services carousel
- Accommodation / room cards
- Video-tour visual section
- Guest testimonial section
- Stay packages and image gallery
- Journal / stories section
- FAQ
- Contact and footer

## Responsive Design

The page uses a responsive layout strategy instead of simply scaling the desktop design down.

- **Desktop:** preserves the full Figma composition and multi-column layouts
- **Tablet:** reflows sections and introduces swipeable content where appropriate
- **Mobile:** uses compact layouts, touch-friendly carousels, a dedicated navigation drawer, and responsive image compositions

Swiper is used where horizontal touch navigation provides a better mobile experience, while static desktop grids are kept where they better match the original design.

## RTL & Typography

The application is configured as a Persian RTL interface at the document level:

```tsx
<html lang="fa" dir="rtl">
```

The project uses the local **Abar Mid FaNum** font with optimized loading through `next/font/local`.

```ts
export const abarMid = localFont({
  src: [
    { path: "./Webfonts/woff2/AbarMidFaNum-SemiBold.woff2", weight: "600" },
    { path: "./Webfonts/woff2/AbarMidFaNum-ExtraBold.woff2", weight: "800" },
  ],
  variable: "--font-abar-mid",
});
```

## Project Structure

```text
.
├── app/
│   ├── fonts/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-carousel.tsx
│   │   ├── residence-carousel.tsx
│   │   ├── package-gallery.tsx
│   │   ├── blogs-carousel.tsx
│   │   ├── faq-section.tsx
│   │   └── ...
│   └── shared/
│       ├── gradient-action.tsx
│       └── section-intro.tsx
├── public/
│   └── gilmar/
├── theme/
│   └── theme.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Architecture Notes

The implementation separates responsibilities across three styling layers:

- **Tailwind CSS** for layout, spacing, typography, responsive rules, and most visual styling
- **MUI** for selected UI primitives and interaction behavior
- **Custom CSS** only where the design requires masks, complex decorative geometry, pseudo-elements, or custom animation effects

Interactive sections are isolated into Client Components, while the rest of the page remains server-rendered wherever possible.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AtaDevPro/gilmar.git
cd gilmar
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Start the production server
npm run lint    # Run ESLint
```

## Production Build

```bash
npm run build
npm run start
```

The live version is deployed on Vercel:

**https://gilmar-atadevpro.vercel.app/**

## Implementation Focus

This project was built with particular attention to:

- visual fidelity to the source design
- RTL correctness
- responsive behavior across screen sizes
- component reusability
- maintainable styling boundaries
- image cropping and mask geometry
- subtle interaction feedback
- accessibility-friendly controls
- production-ready Next.js structure

## Author

**AtaDevPro**

- GitHub: [github.com/AtaDevPro](https://github.com/AtaDevPro)
- Portfolio: [atadevpro.vercel.app](https://atadevpro.vercel.app/)

---

If you found this project useful or interesting, feel free to explore the code and other projects on my GitHub profile.
