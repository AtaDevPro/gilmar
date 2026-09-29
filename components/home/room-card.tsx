import Image from "next/image";

export const rooms = [
  { src: "/gilmar/rooms/autumn-cabin.png", position: "object-[50%_50%]" },
  { src: "/gilmar/rooms/woodland-cabin.png", position: "object-[52%_52%]" },
  { src: "/gilmar/rooms/modern-cabin.png", position: "object-[48%_50%]" },
  { src: "/gilmar/rooms/forest-stream.png", position: "object-[50%_45%]" },
] as const;

type RoomCardProps = Readonly<{
  room: (typeof rooms)[number];
  index: number;
  className?: string;
}>;

export default function RoomCard({ room, index, className = "" }: RoomCardProps) {
  return (
    <article className={`group relative overflow-hidden rounded-[20px] shadow-[0_24px_32px_rgb(0_46_37_/_18%)] transition-[translate,box-shadow] duration-[var(--motion-card)] ease-[var(--motion-ease)] hover:-translate-y-1.5 hover:shadow-[0_30px_38px_rgb(0_46_37_/_22%)] ${className}`}>
      <Image
        className={`object-cover transition-transform duration-[var(--motion-card)] ease-[var(--motion-ease)] group-hover:scale-[1.035] ${room.position}`}
        src={room.src}
        alt={`خانه چوبی گیلمار، نمای ${index + 1}`}
        fill
        sizes="(min-width: 1280px) 302px, min(78vw, 302px)"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/75 from-0% to-transparent to-50%" aria-hidden="true" />
      <div className="absolute inset-x-4 bottom-3 z-[2] text-white">
        <h3 className="m-0 text-base leading-8 font-extrabold">خانه‌ی چوبی گیلمار</h3>
        <p className="m-0 text-sm leading-8 font-semibold text-white/80">هر شب اقامت از ۱٬۳۰۰٬۰۰۰ تومان</p>
      </div>
    </article>
  );
}
