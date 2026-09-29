"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./home.module.css";

const services = [
  { title: "دوچرخه سواری", image: "/gilmar/services/cycling.jpg" },
  { title: "قایق سواری", image: "/gilmar/services/boating.png" },
  { title: "پرنده نگری", image: "/gilmar/services/birdwatching.jpg" },
] as const;

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={styles.servicesViewport}>
      <div className={styles.servicesRail} dir="ltr">
        {services.map((service, index) => {
          const active = index === activeIndex;

          return (
            <button
              className={`${styles.serviceCard} ${active ? styles.serviceCardActive : ""}`}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveIndex(index)}
              key={service.title}
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 767px) 78vw, 288px"
              />
              <span>{service.title}</span>
            </button>
          );
        })}
      </div>
      <button
        className={styles.serviceArrow}
        type="button"
        aria-label="نمایش خدمت بعدی"
        onClick={() => setActiveIndex((current) => (current + 1) % services.length)}
      >
        <Image src="/gilmar/shared/arrow-right.svg" alt="" width={31} height={31} />
      </button>
    </div>
  );
}
