import Hero from '@/components/Home/Hero';
import Description from '@/components/Home/Description';
import CottageInfo from '@/components/Home/CottageInfo';
import PhotoCollage from '@/components/Gallery/PhotoCollage';
import fs from 'fs';
import path from 'path';

const allowedImageExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

function getPublicImages() {
  const publicDir = path.join(process.cwd(), 'public', 'new');
  const entries = fs.readdirSync(publicDir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && allowedImageExts.has(path.extname(e.name).toLowerCase()))
    .map((e) => {
      const nameNoExt = e.name.replace(/\.[^/.]+$/, '');
      const alt = nameNoExt.replace(/[-_]+/g, ' ');
      const src = `/new/${encodeURI(e.name)}`; // handle spaces and special chars
      return { src, alt };
    });
}

const images = getPublicImages();

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero />
    <div className="min-h-screen max-w-6xl mx-auto px-12 md:px-20">
      
        <Description />
        <PhotoCollage images={images} />
        
        <CottageInfo />

      {/* Rooms Section */}
      <section className="min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-forest mb-8 text-center">Comfortable Rooms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-heather mb-4">Double Rooms</h3>
              <p className="text-slate leading-relaxed mb-4">
                Cozy double rooms with countryside views, ensuite bathrooms, and all modern amenities. 
                Perfect for couples seeking a romantic getaway.
              </p>
              <div className="text-golden font-medium">From £120/night</div>
            </div>
            <div className="bg-heather/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-forest mb-4">Family Suite</h3>
              <p className="text-slate leading-relaxed mb-4">
                Spacious family accommodation with separate sleeping areas, perfect for families 
                exploring the Northumberland countryside together.
              </p>
              <div className="text-golden font-medium">From £180/night</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-heather mb-8 text-center">Northumberland Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cream/70 rounded-xl p-6">
              <h3 className="text-xl font-serif text-forest mb-3">Hadrian&#39;s Wall</h3>
              <p className="text-slate text-sm leading-relaxed">
                Just 15 minutes away, explore this UNESCO World Heritage site and walk in the footsteps of Roman soldiers.
              </p>
            </div>
            <div className="bg-golden/20 rounded-xl p-6">
              <h3 className="text-xl font-serif text-forest mb-3">Hiking Trails</h3>
              <p className="text-slate text-sm leading-relaxed">
                Discover scenic walks through moorland and forest, from gentle strolls to challenging hikes.
              </p>
            </div>
            <div className="bg-forest/10 rounded-xl p-6">
              <h3 className="text-xl font-serif text-heather mb-3">Local Pubs</h3>
              <p className="text-slate text-sm leading-relaxed">
                Enjoy traditional Northumbrian cuisine and local ales in authentic countryside pubs nearby.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="min-h-screen p-8 md:p-16 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-forest mb-8">Plan Your Stay</h2>
          <div className="bg-cream/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <p className="text-xl text-slate mb-6 leading-relaxed">
              Ready to experience the tranquility of Northumberland? 
              Book your stay at Piggyback Cottage today.
            </p>
            <div className="space-y-4">
              <button className="bg-forest text-cream px-8 py-4 rounded-lg font-medium text-lg hover:bg-heather transition-colors">
                Check Availability
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
