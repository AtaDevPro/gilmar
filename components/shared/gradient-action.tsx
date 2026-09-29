import Image from "next/image";
import Link from "next/link";

import styles from "./shared.module.css";

type GradientActionProps = Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "hero" | "compact";
  className?: string;
}>;

export default function GradientAction({
  href,
  children,
  variant = "compact",
  className = "",
}: GradientActionProps) {
  return (
    <Link
      className={`${styles.gradientAction} ${styles[variant]} ${className}`}
      href={href}
    >
      <span>{children}</span>
      <span className={styles.actionIcon} aria-hidden="true">
        <Image src="/gilmar/shared/arrow-left.svg" alt="" width={21} height={21} />
      </span>
    </Link>
  );
}
