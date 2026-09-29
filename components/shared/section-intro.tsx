import Image from "next/image";

import styles from "./shared.module.css";

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
      className={`${styles.sectionIntro} ${
        align === "start" ? styles.sectionIntroStart : ""
      } ${className}`}
    >
      <span className={styles.sectionIcon} aria-hidden="true">
        <Image
          className={styles.sectionFrame}
          src="/gilmar/shared/section-icon-frame.svg"
          alt=""
          width={92}
          height={60}
        />
        <span className={styles.sectionGlyph}>
          <Image src={icon} alt="" fill sizes="24px" />
        </span>
      </span>
      <div className={styles.introCopy}>
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
