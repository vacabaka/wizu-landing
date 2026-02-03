import { FlowFeatures } from "@/components/sections/FlowFeatures";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { Footer } from "@/components/sections/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CTASection } from "@/components/ui/hero-dithering-card";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F8F6F1] overflow-x-hidden">
            <AuroraBackground className="min-h-screen justify-start">
                {/* Navigation - Absolute Overlay */}
                <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20 w-full max-w-7xl mx-auto">
                    <div className="text-xl font-bold flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-serif">W</div>
                        Wizu
                    </div>
                    <a href="#waitlist" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                        Get Early Access
                    </a>
                </nav>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-40 md:pt-60 min-h-[70vh]">
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

                <FlowFeatures />

                <CTASection />

                <Footer />
            </AuroraBackground>
        </main>
    );
}
