import SectionIntro from "@/components/shared/section-intro";
import BlogCard from "./blog-card";
import BlogsCarousel from "./blogs-carousel";
import styles from "./home.module.css";

const stories = [1, 2, 3] as const;

export default function BlogsSection() {
  return (
    <section className="relative h-auto xl:h-[684px]" id="blogs" aria-labelledby="blogs-title">
      <div className={`${styles.blogsDecor} absolute -top-6 right-0 h-[300px] w-full`} aria-hidden="true" />
      <div className="relative mx-auto h-full w-[min(1280px,calc(100%_-_32px))]">
        <SectionIntro
          id="blogs-title"
          icon="/gilmar/shared/clipboard.svg"
          title="مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش"
          description="در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید."
          className="relative z-[2]"
        />
        <div className="absolute inset-x-0 bottom-0 hidden grid-cols-3 gap-7 xl:grid">
          {stories.map((story) => (
            <BlogCard className="h-[482px]" key={story} />
          ))}
        </div>
        <BlogsCarousel />
      </div>
    </section>
  );
}
