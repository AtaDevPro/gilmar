import Image from "next/image";

type BlogCardProps = Readonly<{ className?: string }>;

export default function BlogCard({ className = "" }: BlogCardProps) {
  return (
    <article className={`group relative overflow-hidden rounded-[20px] shadow-[0_24px_32px_rgb(0_46_37_/_18%)] transition-[translate,box-shadow] duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-1.5 hover:shadow-[0_30px_40px_rgb(0_46_37_/_22%)] ${className}`}>
      <Image
        className="object-cover transition-transform duration-[var(--motion-card)] ease-[var(--motion-ease)] group-hover:scale-[1.035]"
        src="/gilmar/blogs/story-resort-building.png"
        alt="نمای اقامتگاه گیلمار"
        fill
        sizes="(min-width: 1280px) 408px, min(84vw, 408px)"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 from-0% to-black/[.08] to-75%" aria-hidden="true" />
      <div className="absolute inset-x-6 bottom-6 z-[2] text-white">
        <h3 className="m-0 text-base leading-8 font-extrabold">۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید</h3>
        <p className="mt-2 mb-0 text-justify text-sm leading-8 font-semibold text-white/80">
          از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...
        </p>
      </div>
    </article>
  );
}
