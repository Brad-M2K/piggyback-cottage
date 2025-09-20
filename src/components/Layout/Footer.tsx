import { Instagram, Mail, MapPin } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/lewisandco_cottages?igsh=N3U0bXZwMDVuMG1z';
const EMAIL = 'stay@piggybackcottage.example';
const ADDRESS = 'Piggyback Cottage, Castle Street, Warkworth, Northumberland NE65 0UW';

export default function Footer() {
    return (
        <footer className="bg-forest text-cream mt-24">
            <div className="max-w-6xl mx-auto px-6 py-16 md:flex md:items-center md:justify-between gap-12">
                <div className="space-y-3 max-w-xl">
                    <p className="uppercase tracking-[0.2em] text-sm text-cream/70">Your Northumberland Escape</p>
                    <h2 className="text-3xl md:text-4xl font-serif">Stay cosy in historic Warkworth</h2>
                    <p className="text-cream/80 text-base leading-relaxed">
                        Thoughtfully restored, dog-friendly cottage with castle views, log-burning stove, and everything you need for a peaceful break by the coast.
                    </p>
                </div>

                <div className="mt-10 md:mt-0 space-y-6">
                    <div className="flex items-center gap-3 text-cream/90">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                        <a className="hover:text-cream transition" href={`mailto:${EMAIL}`}>
                            {EMAIL}
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-cream/90">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                        <span>{ADDRESS}</span>
                    </div>
                    <div className="flex items-center gap-3 text-cream/90">
                        <Instagram className="h-5 w-5" aria-hidden="true" />
                        <a
                            className="hover:text-cream transition"
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @lewisandco_cottages
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-cream/20">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-cream/70">
                    <span>&copy; {new Date().getFullYear()} Piggyback Cottage. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a className="hover:text-cream transition" href="#">Privacy</a>
                        <a className="hover:text-cream transition" href="#">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
