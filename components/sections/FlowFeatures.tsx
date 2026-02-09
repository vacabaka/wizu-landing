"use client";

import { ArrowDown, Video, Bot, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollRevealText } from "@/components/ui/text-scroll-animation";

const steps = [
    {
        title: "Share your interests",
        subtitle: "with just a click",
        description: "Wizu learns from what you watch. Connect your YouTube or Netflix account and let the AI build your profile.",
        icon: Video,
        imagePlaceholder: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop", // Video/Streaming vibe
    },
    {
        title: "Get real context",
        subtitle: "(no dictionary required)",
        description: "Click anything to get instant context. Slang, idioms, and cultural nuances explained in seconds.",
        icon: Zap,
        imagePlaceholder: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop", // Learning/Edu vibe
    },
    {
        title: "Wizu shows you",
        subtitle: "where to focus next",
        description: "Our adaptive AI creates daily lessons based on the content you actually consumed.",
        icon: Bot,
        imagePlaceholder: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop", // Dashboard/Progress vibe
    }
];

export function FlowFeatures() {
    return (
        <section className="py-32 px-6 w-full max-w-5xl mx-auto relative">
            {/* Background decorative line - Dashed path */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 border-l-2 border-dashed border-slate-300 hidden md:block opacity-50" />

            <div className="space-y-48">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center">

                        {/* Step Marker/Connector */}
                        <div className="flex flex-col items-center mb-8 relative z-10">
                            {index > 0 && <ArrowDown className="w-6 h-6 text-slate-300 mb-4 animate-bounce" />}
                            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                <step.icon className="w-5 h-5 text-indigo-600" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 mb-12 max-w-lg mx-auto">
                            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] leading-tight">
                                {step.title} <br />
                                <span className="italic text-[var(--accent-primary)] opacity-90">{step.subtitle}</span>
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed text-balance">
                                {step.description}
                            </p>
                        </div>

                        {/* Visual Card - Hidden for now */}
                        {/* <div className="relative group w-full max-w-2xl">
                            <div className="absolute -left-12 top-12 w-24 h-24 bg-rose-200/50 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-700" />
                            <div className="absolute -right-12 bottom-12 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-700 delay-100" />

                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 0 }}
                                initial={{ rotate: 1 }}
                                transition={{ duration: 0.4 }}
                                className="relative bg-white/60 backdrop-blur-xl border border-white/50 p-3 rounded-3xl shadow-xl shadow-indigo-100/50 overflow-hidden"
                            >
                                <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 relative z-10">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                                    <img src={step.imagePlaceholder} alt={step.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                                </div>

                                <BorderBeam
                                    size={300}
                                    duration={12}
                                    delay={index * 2}
                                    colorFrom="#F59E0B"
                                    colorTo="#6366F1"
                                />
                            </motion.div>
                        </div> */}

                    </div>
                ))}
            </div>

            {/* Connecting to the end */}
            <div className="flex flex-col items-center mt-32 space-y-6">
                <div className="w-px h-24 border-l-2 border-dashed border-slate-300/50" />
                <h3 className="font-serif text-4xl text-[var(--text-primary)] text-center">
                    The modern <br /> <span className="italic text-indigo-600">learning flow</span> <br /> is here
                </h3>
                <ArrowDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
}
