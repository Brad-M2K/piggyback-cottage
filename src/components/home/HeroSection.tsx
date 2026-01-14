import Image from "next/image";
import HeroTextOverlay from "./HeroTextOverlay";

export default function HeroSection() {
  return (
    <section className="w-full mt-16 md:mt-3 relative flex justify-center">
      <Image
        src="/best-photos/cottage-exterior/cottage-cutout-2.png"
        alt="Piggyback Cottage"
        width={1200}
        height={800}
        className="w-full md:max-w-4xl h-auto cottage-hero"
        style={{
          mask: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
          WebkitMask:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
        priority
      />
      <HeroTextOverlay />
    </section>
  );
}
