import { Camera, TreePine, Castle, Waves, MapPin, Clock, Star, Utensils } from 'lucide-react';

export default function CottageInfo() {
    return (
        <section className="space-y-16 py-12">
            {/* Activities & Exploration */}
            <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif text-forest">
                    Explore Northumberland
                </h2>
                <p className="text-slate text-lg max-w-3xl mx-auto">
                    Step out to riverbank paths along the River Coquet, the vast Warkworth beach and endless
                    countryside adventures — idyllic for walkers and four-legged companions alike.
                </p>
                
                {/* Activities Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="bg-cream/50 rounded-2xl p-8 text-center border border-forest/10 group-hover:shadow-lg">
                            <Waves className="w-12 h-12 text-heather mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-forest mb-3">Beach Walks</h3>
                            <p className="text-slate text-sm">
                                Stunning Warkworth beach and coastal paths perfect for peaceful strolls
                            </p>
                        </div>
                    </div>
                    
                    <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="bg-cream/50 rounded-2xl p-8 text-center border border-forest/10 group-hover:shadow-lg">
                            <Castle className="w-12 h-12 text-golden mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-forest mb-3">Historic Sites</h3>
                            <p className="text-slate text-sm">
                                Medieval Warkworth Castle and famous Alnwick Castle & Gardens nearby
                            </p> 
                        </div>
                    </div>
                    
                    <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="bg-cream/50 rounded-2xl p-8 text-center border border-forest/10 group-hover:shadow-lg">
                            <TreePine className="w-12 h-12 text-forest mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-forest mb-3">Countryside</h3>
                            <p className="text-slate text-sm">
                                Fabulous walking routes through open countryside and along the River Coquet
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nearby Places */}
            <div className="bg-gradient-to-br from-heather/5 to-golden/10 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-serif text-forest mb-8 text-center">
                    What&apos;s Nearby?
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Alnmouth */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-3">
                            <MapPin className="w-5 h-5 text-heather" />
                            <h4 className="font-semibold text-forest">Alnmouth</h4>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-4 h-4 text-muted-sage" />
                            <span className="text-sm text-slate">10 minutes</span>
                        </div>
                        <p className="text-slate text-sm">
                            Colourful village with tranquil beach, charming pubs, cafés & independent shops
                        </p>
                    </div>

                    {/* Alnwick */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-3">
                            <Castle className="w-5 h-5 text-golden" />
                            <h4 className="font-semibold text-forest">Alnwick</h4>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-4 h-4 text-muted-sage" />
                            <span className="text-sm text-slate">15 minutes</span>
                        </div>
                        <p className="text-slate text-sm">
                            Historic town with famous castle, beautiful gardens & convenient shopping
                        </p>
                    </div>

                    {/* Amble */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-3">
                            <Waves className="w-5 h-5 text-heather" />
                            <h4 className="font-semibold text-forest">Amble</h4>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-4 h-4 text-muted-sage" />
                            <span className="text-sm text-slate">40 min walk</span>
                        </div>
                        <p className="text-slate text-sm">
                            Coastal town with harbour market, seafood shacks and waterfront dining • 40 min walk/short drive
                        </p>
                    </div>

                    {/* Golf Courses */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-3">
                            <Star className="w-5 h-5 text-golden" />
                            <h4 className="font-semibold text-forest">Golf Courses</h4>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-4 h-4 text-muted-sage" />
                            <span className="text-sm text-slate">Various</span>
                        </div>
                        <p className="text-slate text-sm">
                            World-class courses including Dunstanburgh, Alnmouth & Bamburgh
                        </p>
                    </div>
                </div>
            </div>

            {/* Village Life */}
            <div className="text-center space-y-8">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-serif text-forest mb-6">
                        Warkworth Village Life
                    </h3>
                    <p className="text-slate text-lg leading-relaxed">
                        Right on your doorstep, Warkworth offers vibrant pubs and restaurants, 
                        independent jewelry and chocolate shops, an art gallery, and the impressive 
                        Anglican Church of St Lawrence.
                    </p>
                </div>
                
                {/* Village Features */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-cream/30 rounded-xl p-6 text-center">
                        <Utensils className="w-8 h-8 text-forest mx-auto mb-3" />
                        <h4 className="font-semibold text-forest mb-2">Dining</h4>
                        <p className="text-slate text-sm">Vibrant pubs & restaurants</p>
                    </div>
                    <div className="bg-cream/30 rounded-xl p-6 text-center">
                        <Star className="w-8 h-8 text-heather mx-auto mb-3" />
                        <h4 className="font-semibold text-forest mb-2">Shopping</h4>
                        <p className="text-slate text-sm">Independent jewelry & chocolate shops</p>
                    </div>
                    <div className="bg-cream/30 rounded-xl p-6 text-center">
                        <Camera className="w-8 h-8 text-golden mx-auto mb-3" />
                        <h4 className="font-semibold text-forest mb-2">Culture</h4>
                        <p className="text-slate text-sm">Art gallery & historic church</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
