import { type ReactNode } from 'react';

interface WelcomeBannerProps {
    title: string;
    children: ReactNode;
}

export default function WelcomeBanner({ title, children }: WelcomeBannerProps) {
    return (
        <div className="bg-cream/40 rounded-3xl p-1 md:p-12 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-serif text-forest mb-6 text-center">{title}</h2>
            <p className="text-slate text-lg leading-relaxed text-center">{children}</p>
        </div>
    );
}
