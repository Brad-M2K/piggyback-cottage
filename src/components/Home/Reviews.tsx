import { Star } from 'lucide-react';

const REVIEWS = [
    {
        name: 'Jan Parker Walker',
        text: 'We would highly recommend Piggyback Cottage as it is beautiful and immaculately presented. There was everything we needed for our 7 night stay. The hamper and doggy treats were a very thoughtful touch. The beds were extremely comfy and having the option of a bath was perfect! The views from upstairs are breathtaking. Our dog was safe in the enclosed area outside and just loved being all cosy with us inside. The bedroom downstairs was ideal as dogs are not allowed upstairs. The cottage is ideally located a short walk into the village — we even saw a family of otters while walking along the riverside. We ate at the Warkworth Hotel and Bertrams Cafe, both excellent. We loved this place so much we have booked again for next year.',
        stay: 'Stayed 2024',
    },
    {
        name: 'Phillip Gill',
        text: 'From the moment we walked through the door we just loved this cottage. It has everything you need and more. Great for us — we came with friends so having one of the big bedrooms downstairs was perfect. It was warm and cosy; we lit the fire every night which made it extra special. We love this area of Northumberland, so many beautiful beaches, landscapes and historical places to visit. We already have another weekend booked here and we can’t wait to return. Highly recommend a visit in any season!',
        stay: 'Stayed 2024',
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="scroll-mt-32 space-y-10 py-16">
            <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-serif text-forest">Guest Kind Words</h2>
                <p className="text-slate max-w-3xl mx-auto text-base leading-relaxed">
                    A few highlights from recent guests who made Piggyback Cottage their home for a few days.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {REVIEWS.map((review) => (
                    <figure
                        key={review.name}
                        className="h-full rounded-3xl bg-cream/70 border border-muted-sage/20 p-6 shadow-sm backdrop-blur"
                    >
                        <div className="flex items-center gap-2 text-golden mb-4">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                            ))}
                        </div>
                        <blockquote className="text-slate text-sm leading-relaxed">
                            “{review.text}”
                        </blockquote>
                        <figcaption className="mt-6 text-sm font-medium text-forest">
                            {review.name}
                            <span className="block text-slate/70 font-normal">{review.stay}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
