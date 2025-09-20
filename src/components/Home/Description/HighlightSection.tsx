import { type LucideIcon } from 'lucide-react';

interface HighlightItem {
    icon: LucideIcon;
    title: string;
    description: string;
    iconColor: string;
    background: string;
}

interface HighlightSectionProps {
    title: string;
    items: HighlightItem[];
}

export default function HighlightSection({ title, items }: HighlightSectionProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-serif text-forest mb-4">{title}</h3>
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className={`flex items-start gap-4 p-4 rounded-xl shadow-sm ${item.background}`}
                    >
                        <item.icon className={`w-6 h-6 mt-1 ${item.iconColor}`} />
                        <div>
                            <p className="font-semibold text-forest">{item.title}</p>
                            <p className="text-slate text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
