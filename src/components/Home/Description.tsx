import { MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Heart } from 'lucide-react';

export default function Description() {
    return (
        <div className="space-y-16 py-12">

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-cream/60 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-muted-sage/10">
<div className="flex items-center justify-center gap-3 md:flex-col md:text-center md:gap-0">
                        <Users className="w-8 h-8 text-forest flex-shrink-0 md:mx-auto md:mb-2" />
<div className="flex flex-col text-left md:text-center">
                            <p className="text-2xl font-bold text-forest leading-tight">5</p>
                            <p className="text-slate text-sm">Guests</p>
                        </div>
                    </div>
                </div>
                <div className="bg-cream/60 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-muted-sage/10">
<div className="flex items-center justify-center gap-3 md:flex-col md:text-center md:gap-0">
                        <Bed className="w-8 h-8 text-forest flex-shrink-0 md:mx-auto md:mb-2" />
<div className="flex flex-col text-left md:text-center">


                            <p className="text-2xl font-bold text-forest leading-tight">3</p>
                            <p className="text-slate text-sm">Bedrooms</p>
                        </div>
                    </div>
                </div>
                <div className="bg-cream/60 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-muted-sage/10">
<div className="flex items-center justify-center gap-3 md:flex-col md:text-center md:gap-0">
                        <Bath className="w-8 h-8 text-forest flex-shrink-0 md:mx-auto md:mb-2" />
                        <div className="flex flex-col text-left md:text-center">
                            <p className="text-2xl font-bold text-forest leading-tight">2</p>
                            <p className="text-slate text-sm">Bathrooms</p>
                        </div>
                    </div>
                </div>
                <div className="bg-cream/60 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-muted-sage/10">
<div className="flex items-center justify-center gap-3 md:flex-col md:text-center md:gap-0">
                        <Heart className="w-8 h-8 text-heather flex-shrink-0 md:mx-auto md:mb-2" />
                        <div className="flex flex-col text-left md:text-center">
                            <p className="text-2xl font-bold text-heather leading-tight">Dog</p>
                            <p className="text-slate text-sm">Friendly</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Description */}
            <div className="bg-cream/40 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-serif text-forest mb-6 text-center">
                    A Cosy Retreat in Medieval Warkworth
                </h2>
                <p className="text-slate text-lg leading-relaxed text-center  ">
                    Beautifully renovated cottage nestled within the picturesque medieval village of Warkworth, 
                    in an Area of Outstanding Natural Beauty. With stunning views to the castle and pretty beach dunes, 
                    this is your perfect home away from home to relax and unwind.
                </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12">
                {/* Accommodation Details */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-forest mb-4">Your Accommodation</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-heather/5 rounded-xl">
                            <Bed className="w-6 h-6 text-heather mt-1" />
                            <div>
                                <p className="font-semibold text-forest">Master Bedroom</p>
                                <p className="text-slate text-sm">Downstairs with king-size bed and large shower en-suite</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-golden/10 rounded-xl">
                            <Bath className="w-6 h-6 text-golden mt-1" />
                            <div>
                                <p className="font-semibold text-forest">Luxurious Bath</p>
                                <p className="text-slate text-sm">Beautiful roll-top bath and shower upstairs</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-forest/5 rounded-xl">
                            <Wifi className="w-6 h-6 text-forest mt-1" />
                            <div>
                                <p className="font-semibold text-forest">Modern Amenities</p>
                                <p className="text-slate text-sm">All bedrooms fitted with TVs, log-burning stove</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location & Activities */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-forest mb-4">Perfect Location</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-heather/5 rounded-xl">
                            <MapPin className="w-6 h-6 text-heather mt-1" />
                            <div>
                                <p className="font-semibold text-forest">Alnmouth Village</p>
                                <p className="text-slate text-sm">10 minutes • Wildlife, beaches, pubs & shops</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-golden/10 rounded-xl">
                            <Car className="w-6 h-6 text-golden mt-1" />
                            <div>
                                <p className="font-semibold text-forest">Historic Alnwick</p>
                                <p className="text-slate text-sm">15 minutes • Alnwick Castle & Gardens</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-forest/5 rounded-xl">
                            <Coffee className="w-6 h-6 text-forest mt-1" />
                            <div>
                                <p className="font-semibold text-forest">Warkworth Village</p>
                                <p className="text-slate text-sm">On your doorstep • Pubs, restaurants & shops</p>
                            </div>
                        </div>
                    </div>
                </div>
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
    )
}
