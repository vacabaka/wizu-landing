import { FlowFeatures } from "@/components/sections/FlowFeatures";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { Footer } from "@/components/sections/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CTASection } from "@/components/ui/hero-dithering-card";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col items-center overflow-x-hidden">
            <div className="w-full max-w-[1440px] bg-white shadow-2xl shadow-indigo-100/50 min-h-screen flex flex-col">
                {/* Navigation */}
                <nav className="w-full px-6 py-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-lg z-50 border-b border-indigo-50">
                    <div className="flex items-center gap-2">
                        {/* Logo Placeholder */}
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">W</div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">Wizu</span>
                    </div>
                    <a href="#waitlist" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/25">
                        Join Waitlist
                    </a>
                </nav>

                <AuroraBackground className="min-h-screen">
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-[var(--text-primary)] leading-[1.1] mb-8">
                            Design your english <br />
                            <span className="text-[var(--accent-primary)] italic">made simple</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-12">
                            The all-in-one browser that makes it easy to master English. Contextual explanations, native content, and AI assistance while you surf.
                        </p>
                        <div className="w-full max-w-md">
                            <WaitlistForm variant="light" />
                        </div>
                    </div>
                </AuroraBackground>

                <FlowFeatures />

                <CTASection />

                <Footer />
            </div>
        </main>
    );
}
