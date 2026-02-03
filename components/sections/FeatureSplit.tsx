import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/components/ui/Button'; // reusing cn

interface FeatureSplitProps {
    title: string;
    description: string;
    imageSrc: string;
    isReversed?: boolean;
    hasCta?: boolean;
}

export function FeatureSplit({ title, description, imageSrc, isReversed, hasCta }: FeatureSplitProps) {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className={cn("max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20", isReversed ? "md:flex-row-reverse" : "")}>
                {/* Content */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {description}
                    </p>
                    {hasCta && (
                        <div className="pt-4 flex justify-center md:justify-start">
                            <a href="#waitlist" className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2 group">
                                Join Waitlist <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    )}
                </div>

                {/* Image/Visual */}
                <div className="flex-1 relative w-full flex justify-center">
                    <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
                        {/* Placeholder for app screenshot */}
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500">
                            {/* Simple placeholder logic if image fails or is strictly placeholder */}
                            <span className="text-xs">App Screen</span>
                        </div>
                        {/* If we have a real image, we would use Next Image here, but for now using a div with background/img */}
                        <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    {/* Decor elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] bg-indigo-500/20 blur-[100px] rounded-full" />
                </div>
            </div>
        </section>
    );
}
