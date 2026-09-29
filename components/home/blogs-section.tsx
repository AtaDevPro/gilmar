import Image from "next/image";

import SectionIntro from "@/components/shared/section-intro";
import styles from "./home.module.css";

const stories = [1, 2, 3] as const;

export default function BlogsSection() {
  return (
    <section className={styles.blogsSection} id="blogs" aria-labelledby="blogs-title">
      <div className={styles.container}>
        <SectionIntro
          id="blogs-title"
          icon="/gilmar/shared/clipboard.svg"
          title="مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش"
          description="در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید."
          className={styles.blogsIntro}
        />
        <div className={styles.blogsGrid}>
          {stories.map((story) => (
            <article className={styles.blogCard} key={story}>
              <Image
                src="/gilmar/blogs/story-resort-building.png"
                alt="نمای اقامتگاه گیلمار"
                fill
                sizes="(max-width: 767px) 84vw, 408px"
              />
              <div>
                <h3>۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید</h3>
                <p>
                  از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در
                  این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
