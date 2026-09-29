import Image from "next/image";

import GradientAction from "@/components/shared/gradient-action";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Image
          src="/gilmar/shared/gilmar-logo-primary.svg"
          alt="اقامتگاه بوم‌گردی گیلمار"
          width={169}
          height={53}
        />
        <p className={styles.code}>۴۰۴</p>
        <h1>این مسیر در گیلمار پیدا نشد</h1>
        <p className={styles.description}>
          صفحه‌ای که به دنبالش بودید در دسترس نیست؛ از اینجا به خانه‌ی گیلمار
          برگردید.
        </p>
        <GradientAction href="/" className={styles.homeAction}>
          بازگشت به خانه
        </GradientAction>
      </div>
    </main>
  );
}
