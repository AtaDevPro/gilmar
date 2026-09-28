import styles from "./home.module.css";

type SectionIntroProps = Readonly<{
  id: string;
  icon: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}>;

export function SectionIntro({
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
        {/* Exported SVGs keep their own exact viewBox and aspect ratio. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width={24} height={24} />
      </span>
      <div className={styles.introCopy}>
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}

type GradientActionProps = Readonly<{
  href: string;
  children: React.ReactNode;
  className?: string;
}>;

export function GradientAction({
  href,
  children,
  className = "",
}: GradientActionProps) {
  return (
    <a className={`${styles.gradientAction} ${className}`} href={href}>
      <span>{children}</span>
      <span className={styles.actionIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M15.5 5 8.5 12l7 7" />
        </svg>
      </span>
    </a>
  );
}

export function PagerDots() {
  return (
    <div className={styles.pagerDots} aria-hidden="true">
      <span />
      <span className={styles.pagerActive} />
      <span />
    </div>
  );
}
