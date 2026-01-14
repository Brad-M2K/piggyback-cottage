import { MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Heart, ShieldCheck, Home, Castle, Train, Flame } from 'lucide-react';
import HighlightSection from "./Overview/HighlightSection";
import KeyFactsGrid from "./Overview/KeyFactsGrid";
import WelcomeBanner from "./Overview/WelcomeBanner";

const KEY_FACTS = [
    {
        icon: Users,
        value: '5',
        label: 'Guests',
    },
    {
        icon: Bed,
        value: '3',
        label: 'Bedrooms',
    },
    {
        icon: Bath,
        value: '2',
        label: 'Bathrooms & 3 WCs',
    },
    {
        icon: Heart,
        value: 'Dogs',
        label: 'Welcome (2)',
        iconColor: 'text-heather',
        valueColor: 'text-heather',
    },
    {
        icon: ShieldCheck,
        value: 'Secure',
        label: 'Enclosed Patios',
        iconColor: 'text-forest',
        valueColor: 'text-forest',
    },
];

const ACCOMMODATION_HIGHLIGHTS = [
    {
        icon: Home,
        title: 'Downstairs Spaces',
        description:
            'Enclosed patio, downstairs WC, utility with washing machine, kitchen-diner, lounge with log-burning stove and master bedroom with generous en-suite shower.',
        iconColor: 'text-forest',
        background: 'bg-forest/5',
        iconBackground: 'bg-forest/10',
    },
    {
        icon: Bed,
        title: 'Upstairs',
        description:
            'Roll-top bathroom with separate shower & WC, a single bedroom, and an extra-large king bedroom — each with beautiful views of countryside, castle and sea.',
        iconColor: 'text-heather',
        background: 'bg-heather/5',
        iconBackground: 'bg-heather/10',
    },
    {
        icon: Flame,
        title: 'Cosy & Considered',
        description: 'Log-burning stove, ambient lighting, welcome hamper, toiletries, and a starter bundle of logs, tea and coffee.',
        iconColor: 'text-golden',
        background: 'bg-golden/10',
        iconBackground: 'bg-golden/10',
    },
    {
        icon: Wifi,
        title: 'Full Fibre Broadband',
        description: 'Fast, reliable connection in the cottage.',
        iconColor: 'text-golden',
        background: 'bg-golden/10',
        iconBackground: 'bg-golden/10',
    },
];

const LOCATION_HIGHLIGHTS = [
    {
        icon: MapPin,
        title: 'Lindisfarne (Holy Island)',
        description: '50 mins drive',
        iconColor: 'text-heather',
        background: 'bg-heather/5',
        iconBackground: 'bg-heather/10',
    },
    {
        icon: Castle,
        title: 'Bamburgh Castle',
        description: '40 mins drive',
        iconColor: 'text-golden',
        background: 'bg-golden/10',
        iconBackground: 'bg-golden/10',
    },
    {
        icon: Coffee,
        title: 'Warkworth Town Centre',
        description: 'On the doorstep',
        iconColor: 'text-forest',
        background: 'bg-forest/5',
        iconBackground: 'bg-forest/10',
    },
    {
        icon: Train,
        title: 'Hipsburn Train Station',
        description: 'Easy access to Edinburgh, Morpeth, Newcastle',
        iconColor: 'text-heather',
        background: 'bg-heather/5',
        iconBackground: 'bg-heather/10',
    },
    {
        icon: Home,
        title: 'Post Office & Village Store',
        description: 'For last-minute essentials',
        iconColor: 'text-forest',
        background: 'bg-forest/5',
        iconBackground: 'bg-forest/10',
    },
];

export default function OverviewSection() {
    return (
        <div className="space-y-16 py-12">
            <KeyFactsGrid facts={KEY_FACTS} />

            <WelcomeBanner title="A Cosy Retreat in Medieval Warkworth">
                Piggyback Cottage is a beautifully renovated, extremely cosy home nestled beneath Warkworth Castle in
                an Area of Outstanding Natural Beauty. Wake to views of the dunes and sea beyond, light the stove after
                a windswept walk, and unwind knowing every thoughtful detail has been taken care of.
            </WelcomeBanner>

            <div className="grid md:grid-cols-2 gap-12">
                <HighlightSection title="Your Accommodation" items={ACCOMMODATION_HIGHLIGHTS} />
                <HighlightSection title="Perfect Location" items={LOCATION_HIGHLIGHTS} />
            </div>

            {/* Call to Action */}
            {/* <div className="text-center bg-gradient-to-r from-forest/5 to-heather/5 rounded-3xl p-12">
                <h3 className="text-2xl md:text-3xl font-serif text-forest mb-4">
                    Ready for Your Northumberland Escape?
                </h3>
                <p className="text-slate text-lg mb-8 max-w-2xl mx-auto">
                    Perfect for walkers, dog owners, and anyone seeking tranquility in one of England's most beautiful regions.
                </p>
                <button className="bg-forest text-cream px-8 py-4 rounded-full font-medium text-lg hover:bg-heather transition-all duration-300 hover:scale-105 shadow-lg">
                    Check Availability
                </button>
            </div> */}
        </div>
    );
}
