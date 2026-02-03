"use client";

import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
    title?: string
    highlightText?: string
    description?: string
    children?: React.ReactNode
    colors?: string[]
    distortion?: number
    swirl?: number
    speed?: number
    offsetX?: number
    className?: string
    titleClassName?: string
    descriptionClassName?: string
    maxWidth?: string
    veilOpacity?: string
    fontFamily?: string
    fontWeight?: number
}

export function HeroSection({
    title = "One Solution To All Of",
    highlightText = "Your Language Goals",
    description = "The all-in-one browser that makes it easy to master English. Contextual explanations, native content, and AI assistance while you surf.",
    children,
    colors = ["#ff9a9e", "#fad0c4", "#fad0c4", "#a18cd1", "#fbc2eb"], // Sunrise: pinks, soft purples, peach
    distortion = 1.0,
    swirl = 0.5,
    speed = 0.4,
    offsetX = 0.1,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    maxWidth = "max-w-7xl",
    veilOpacity = "bg-white/40 dark:bg-black/25",
    fontFamily = "var(--font-playfair), serif",
    fontWeight = 600,
}: HeroSectionProps) {
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const update = () =>
            setDimensions({
                width: window.innerHeight * 1.5, // Make it cover adequately
                height: window.innerHeight * 1.5,
            })
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    return (
        <section className={`relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center ${className}`}>
            <div className="absolute inset-0 w-full h-full -z-10">
                {mounted && (
                    <>
                        <div className="absolute inset-0 min-w-full min-h-full scale-110">
                            <MeshGradient
                                width={dimensions.width}
                                height={dimensions.height}
                                colors={colors}
                                distortion={distortion}
                                swirl={swirl}
                                grainMixer={0.2}
                                grainOverlay={0}
                                speed={speed}
                                offsetX={offsetX}
                            />
                        </div>
                        <div className={`absolute inset-0 pointer-events-none ${veilOpacity} backdrop-blur-[2px]`} />
                    </>
                )}
            </div>

            <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12`}>
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left space-y-8">
                    <h1
                        className={`text-5xl md:text-7xl tracking-tight text-[var(--text-primary)] leading-[1.1] ${titleClassName}`}
                        style={{ fontFamily, fontWeight }}
                    >
                        {title} <br /> <span className="text-[var(--accent-primary)] italic">{highlightText}</span>
                    </h1>
                    <p className={`text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl ${descriptionClassName}`}>
                        {description}
                    </p>

                    {children && <div className="pt-4">{children}</div>}
                </div>
            </div>
        </section>
    )
}
