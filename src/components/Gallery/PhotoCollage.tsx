// src/components/Gallery/PhotoCollage.tsx
import Image from "next/image";

type Props = { images: { src: string; alt?: string }[] };

export default function PhotoCollage({ images }: Props) {
  const imgs = images;

  return (
    <div className="masonry-container">
      {imgs.map((img, i) => (
        <div key={i} className="masonry-item">
          <Image
            src={img.src}
            alt={img.alt ?? `Photo ${i + 1}`}
            width={800}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="masonry-image"
            priority={i < 6}
          />
        </div>
      ))}
    </div>
  );
}
