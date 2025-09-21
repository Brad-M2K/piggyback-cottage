import { type LucideIcon } from 'lucide-react';

interface KeyFact {
    icon: LucideIcon;
    value: string;
    label: string;
    iconColor?: string;
    valueColor?: string;
}

interface KeyFactsGridProps {
    facts: KeyFact[];
}

export default function KeyFactsGrid({ facts }: KeyFactsGridProps) {
    return (
        <div className="grid gap-6 pt-14 sm:grid-cols-2 lg:grid-cols-5">
            {facts.map((fact) => (
                <div
                    key={fact.label}
                    className="bg-cream/60 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-muted-sage/10"
                >
                    <div className="flex items-center justify-center gap-3 md:flex-col md:text-center md:gap-0">
                        <fact.icon
                            className={`w-8 h-8 flex-shrink-0 md:mx-auto md:mb-2 ${fact.iconColor ?? 'text-forest'}`}
                        />
                        <div className="flex flex-col text-left md:text-center">
                            <p className={`text-2xl font-bold leading-tight ${fact.valueColor ?? 'text-forest'}`}>
                                {fact.value}
                            </p>
                            <p className="text-slate text-sm">{fact.label}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
