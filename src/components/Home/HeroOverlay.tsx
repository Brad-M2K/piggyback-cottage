import { MapPin } from 'lucide-react';

export default function HeroOverlay() {
    return (
        <div className="absolute -bottom-12 md:-bottom-8 inset-x-0 text-center z-10">
            <h1 className="text-3xl md:text-7xl font-serif text-forest font-bold mb-2 drop-shadow-lg whitespace-nowrap">
                Piggyback Cottage
            </h1>
            <p className="text-slate text-lg md:text-2xl flex items-center justify-center gap-2 drop-shadow-lg">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                Warkworth, Northumberland
            </p>
        </div>
    );
}
