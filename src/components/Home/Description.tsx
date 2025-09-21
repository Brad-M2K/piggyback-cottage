import { MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Heart, ShieldCheck } from 'lucide-react';
import HighlightSection from './Description/HighlightSection';
import KeyFactsGrid from './Description/KeyFactsGrid';
import WelcomeBanner from './Description/WelcomeBanner';

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
        label: 'Bathrooms & WCs',
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
        icon: Bed,
        title: 'Ground-floor Master',
        description: 'King bed with generous en-suite shower and TV — perfect if dogs stay downstairs',
        iconColor: 'text-heather',
        background: 'bg-heather/5',
    },
    {
        icon: Bath,
        title: 'Roll-top Sanctuary',
        description: 'Upstairs bathroom with statement roll-top bath, separate shower and WC',
        iconColor: 'text-golden',
        background: 'bg-golden/10',
    },
    {
        icon: Wifi,
        title: 'Cosy & Considered',
        description: 'Log-burning stove, TVs in every bedroom, welcome hamper, toiletries and starter logs/coffee',
        iconColor: 'text-forest',
        background: 'bg-forest/5',
    },
];

const LOCATION_HIGHLIGHTS = [
    {
        icon: MapPin,
        title: 'Alnmouth Village',
        description: '10 minutes • Colourful coastal village with beach, cafés and wildlife',
        iconColor: 'text-heather',
        background: 'bg-heather/5',
    },
    {
        icon: Car,
        title: 'Historic Alnwick',
        description: '15 minutes • Alnwick Castle, Gardens and larger supermarkets',
        iconColor: 'text-golden',
        background: 'bg-golden/10',
    },
    {
        icon: Coffee,
        title: 'Warkworth Village',
        description: 'On the doorstep • Pubs, restaurants, jewellers, chocolatiers and art gallery',
        iconColor: 'text-forest',
        background: 'bg-forest/5',
    },
];

export default function Description() {
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
