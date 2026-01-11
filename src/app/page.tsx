import Hero from "@/components/Home/Hero";
import Description from "@/components/Home/Description";
import CottageInfo from "@/components/Home/CottageInfo";
import Reviews from "@/components/Home/Reviews";
import PhotoCollage from "@/components/Gallery/PhotoCollage";
import ContactForm from "@/components/Home/ContactForm";
import fs from "fs";
import path from "path";

type CollageImage = { src: string; alt: string };

type GalleryImages = {
  interior: CollageImage[];
  garden: CollageImage[];
  attractions: CollageImage[];
};

const ALLOWED_IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);
const GALLERY_ROOT = path.join(process.cwd(), "public", "best-photos");

function formatAltText(fileName: string) {
  const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
  return nameWithoutExtension
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getImagesFromFolder(folder: string): CollageImage[] {
  const folderPath = path.join(GALLERY_ROOT, folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        ALLOWED_IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    )
    .map((entry) => ({
      src: `/best-photos/${folder}/${encodeURI(entry.name)}`,
      alt: formatAltText(entry.name),
    }));
}

const INSIDE_PREVIEW_ORDER = [
  "front-cottage.jpg",
  "kitchen-2.jpeg",
  "living-room.jpg",
  "spare-double-1.jpg",
];
const ATTRACTIONS_PREVIEW_ORDER = [
  "warkworth.jpg",
  "river-path.jpg",
  "church-1.jpeg",
  "beach-best view.jpg",
];

function getFileNameFromSrc(src: string) {
  const parts = src.split("/");
  const fileName = parts[parts.length - 1] ?? src;
  try {
    return decodeURIComponent(fileName);
  } catch {
    return fileName;
  }
}

function prioritizeImages(images: CollageImage[], preferredOrder: string[]) {
  if (images.length === 0 || preferredOrder.length === 0) {
    return images;
  }

  const imagesByName = new Map(
    images.map((image) => [getFileNameFromSrc(image.src), image])
  );
  const ordered: CollageImage[] = [];

  preferredOrder.forEach((fileName) => {
    const match = imagesByName.get(fileName);
    if (match) {
      ordered.push(match);
    }
  });

  const used = new Set(ordered.map((image) => image.src));
  const remaining = images.filter((image) => !used.has(image.src));

  return [...ordered, ...remaining];
}

function getGalleryImages(): GalleryImages {
  return {
    interior: getImagesFromFolder("cottage-interior"),
    garden: getImagesFromFolder("cottage-garden"),
    attractions: getImagesFromFolder("local-attractions"),
  };
}

const galleryImages = getGalleryImages();
const insideImages = prioritizeImages(
  [...galleryImages.garden, ...galleryImages.interior],
  INSIDE_PREVIEW_ORDER
);
const attractionsImages = prioritizeImages(
  galleryImages.attractions,
  ATTRACTIONS_PREVIEW_ORDER
);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="min-h-screen max-w-6xl mx-auto px-8 md:px-20 space-y-20">
        <section id="details" className="scroll-mt-32 space-y-16">
          <Description />
        </section>

        <section
          id="pricing"
          className="scroll-mt-32 rounded-3xl border border-muted-sage/30 bg-cream/60 backdrop-blur py-10 px-8 space-y-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif text-forest">
              Stay Information
            </h2>
            <p className="text-slate text-base leading-relaxed">
              Sleeps 5 guests across three bedrooms with two bathrooms and three
              WCs. Blow-up airbed provided for the extra bed. Rates vary by
              season and are available on enquiry. A small welcome pack, luxury
              linens, toiletries, and a starter bundle of logs, tea and coffee
              are all included.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate md:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-5 shadow-sm">
              <p className="font-semibold text-forest mb-2">
                Arrival & Departure
              </p>
              <p>
                Check-in: from 3pm • Departure: 11am • Self check-in with secure
                key box.
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 p-5 shadow-sm">
              <p className="font-semibold text-forest mb-2">Extras</p>
              <p>
                Up to two well-behaved medium dogs are welcome (£30 per dog). EV
                charging available in the village.
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 p-5 shadow-sm">
              <p className="font-semibold text-forest mb-2">Book Direct</p>
              <p>
                Use the enquiry form below to secure your preferred dates. A 20%
                deposit is required on booking with the balance due four weeks
                before arrival.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-32 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif text-forest">
              Inside Piggyback Cottage
            </h3>
            <p className="text-slate text-base leading-relaxed">
              Light-filled living spaces, cosy bedrooms, and glimpses of the
              garden flow together to make the cottage feel like a true home
              from home.
            </p>
            <PhotoCollage
              images={insideImages}
              priorityCount={4}
              previewCount={5}
              className="max-w-full"
            />
          </div>
        </section>

        <section id="location" className="scroll-mt-32">
          <CottageInfo />
        </section>

        <section id="local-favourites" className="scroll-mt-32 space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-serif text-forest">
              Explore Warkworth & Beyond
            </h3>
            <p className="text-slate max-w-3xl mx-auto text-base leading-relaxed">
              Wander historic castle grounds, stroll along golden beaches, and
              discover charming villages within minutes of the cottage.
            </p>
          </div>
          <PhotoCollage
            images={attractionsImages}
            priorityCount={3}
            previewCount={5}
            className="max-w-5xl"
          />
        </section>

        <section className="scroll-mt-32" aria-labelledby="experience-heading">
          <div className="max-w-6xl mx-auto">
            <h2
              id="experience-heading"
              className="text-4xl md:text-5xl font-serif text-heather mb-8 text-center"
            >
              Northumberland Experience
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-heather/10 rounded-xl p-6">
                <h3 className="text-xl font-serif text-forest mb-3">
                  Lindisfarne (Holy Island)
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Around 50 minutes away, cross the causeway and explore the
                  historic priory and coastal landscapes.
                </p>
              </div>
              <div className="bg-golden/20 rounded-xl p-6">
                <h3 className="text-xl font-serif text-forest mb-3">
                  Hiking Trails
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Discover scenic walks through moorland and forest, from gentle
                  strolls to challenging hikes.
                </p>
              </div>
              <div className="bg-forest/10 rounded-xl p-6">
                <h3 className="text-xl font-serif text-heather mb-3">
                  Local Pubs
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Enjoy traditional Northumbrian cuisine and local ales in
                  authentic countryside pubs nearby.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Reviews />

        <section id="contact" className="scroll-mt-32">
          <ContactForm />
        </section>
      </div>
    </>
  );
}
