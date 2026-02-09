"use client";

import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

// Dynamic import for the shader component
const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
    const [isHovered, setIsHovered] = useState(false)
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            if (res.ok) {
                setIsSubmitted(true)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section id="waitlist" className="py-20 w-full flex justify-center items-center px-4 md:px-6 bg-[var(--bg-primary)]">
            <div
                className="w-full max-w-7xl relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-[48px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-2xl min-h-[600px] md:min-h-[500px] flex flex-col items-center justify-center duration-500">
                    <Suspense fallback={<div className="absolute inset-0 bg-[var(--bg-secondary)]" />}>
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
                            <Dithering
                                colorBack="#F8F6F1" // Warm Cream
                                colorFront="#D97706"  // Amber 600
                                shape="warp"
                                type="4x4"
                                speed={isHovered ? 0.6 : 0.2}
                                className="size-full"
                                minPixelRatio={1}
                            />
                        </div>
                    </Suspense>

                    <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center w-full">

                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-700 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            Early Access
                        </div>

                        {/* Headline */}
                        <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-8 leading-[1.05]">
                            Your English, <br />
                            <span className="text-[var(--text-secondary)] opacity-80">mastered perfectly.</span>
                        </h2>

                        {/* Form */}
                        {isSubmitted ? (
                            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500 mb-12">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-green-500/30">
                                    <ArrowRight className="w-8 h-8 text-green-600 rotate-[-45deg]" /> {/* Checkmark-ish */}
                                </div>
                                <p className="text-2xl font-bold text-[var(--text-primary)]">You're on the list!</p>
                                <p className="text-[var(--text-secondary)] mt-2">We'll be in touch soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="w-full max-w-md relative flex items-center mb-12">
                                <div className="relative w-full group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-16 rounded-full bg-white border border-[var(--border-strong)] pl-6 pr-36 text-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all shadow-sm"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-2 bottom-2 bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)] px-6 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-amber-500/20"
                                    >
                                        Join Waitlist
                                    </button>
                                </div>
                            </form>
                        )}


                    </div>
                </div>
            </div>
        </section>
    )
}
