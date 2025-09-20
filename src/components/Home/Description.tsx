import { MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Heart } from 'lucide-react';
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
        label: 'Bathrooms',
    },
    {
        icon: Heart,
        value: 'Dog',
        label: 'Friendly',
        iconColor: 'text-heather',
        valueColor: 'text-heather',
    },
];

const ACCOMMODATION_HIGHLIGHTS = [
    {
        icon: Bed,
        title: 'Master Bedroom',
        description: 'Downstairs with king-size bed and large shower en-suite',
        iconColor: 'text-heather',
        background: 'bg-heather/5',
    },
    {
        icon: Bath,
        title: 'Luxurious Bath',
        description: 'Beautiful roll-top bath and shower upstairs',
        iconColor: 'text-golden',
        background: 'bg-golden/10',
    },
    {
        icon: Wifi,
        title: 'Modern Amenities',
        description: 'All bedrooms fitted with TVs, log-burning stove',
        iconColor: 'text-forest',
        background: 'bg-forest/5',
    },
];

const LOCATION_HIGHLIGHTS = [
    {
        icon: MapPin,
        title: 'Alnmouth Village',
        description: '10 minutes • Wildlife, beaches, pubs & shops',
        iconColor: 'text-heather',
        background: 'bg-heather/5',
    },
    {
        icon: Car,
        title: 'Historic Alnwick',
        description: '15 minutes • Alnwick Castle & Gardens',
        iconColor: 'text-golden',
        background: 'bg-golden/10',
    },
    {
        icon: Coffee,
        title: 'Warkworth Village',
        description: 'On your doorstep • Pubs, restaurants & shops',
        iconColor: 'text-forest',
        background: 'bg-forest/5',
    },
];

export default function Description() {
    return (
        <div className="space-y-16 py-12">
            <KeyFactsGrid facts={KEY_FACTS} />

            <WelcomeBanner title="A Cosy Retreat in Medieval Warkworth">
                Beautifully renovated cottage nestled within the picturesque medieval village of Warkworth, in an
                Area of Outstanding Natural Beauty. With stunning views to the castle and pretty beach dunes, this is
                your perfect home away from home to relax and unwind.
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
