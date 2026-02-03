import { WaitlistForm } from "./WaitlistForm";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pt-20 pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/30 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-8 z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                    One Solution To All Of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                        Your Language Goals
                    </span>
                </h1>

                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    The all-in-one browser that makes it easy to master English. Contextual explanations, native content, and AI assistance while you surf.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a href="#features" className="px-8 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition">
                        Learn More
                    </a>
                    <div className="w-full max-w-sm">
                        {/* We reuse the form, but style it for light background */}
                        <WaitlistForm variant="light" />
                    </div>
                </div>
            </div>

            {/* Hero Visual */}
            <div className="mt-20 relative animate-float">
                <div className="relative w-[320px] h-[650px] md:w-[360px] md:h-[720px] bg-slate-900 rounded-[3.5rem] p-4 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] border-[8px] border-slate-800">
                    <div className="w-full h-full bg-slate-800 rounded-[2.5rem] overflow-hidden relative">
                        {/* Placeholder content for phone screen */}
                        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent z-10" />

                        {/* Actual image placeholder */}
                        <div className="w-full h-full bg-slate-700 flex flex-col items-center justify-center text-slate-400 space-y-4 p-8 text-center">
                            <span className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center">📷</span>
                            <p className="text-sm">Place Product Demo/Screenshot Here</p>
                        </div>

                        {/* Fake UI Elements to look like the app */}
                        <div className="absolute bottom-8 left-6 right-6 h-20 bg-slate-600/50 backdrop-blur rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">AI</div>
                            <div className="flex-1 h-2 bg-white/20 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
