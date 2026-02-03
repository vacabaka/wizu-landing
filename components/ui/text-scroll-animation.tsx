"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
    char: string;
    index: number;
    centerIndex: number;
    scrollYProgress: MotionValue<number>;
};


export const CharacterV1 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}: CharacterProps) => {
    const isSpace = char === " ";
    const distanceFromCenter = index - centerIndex;

    // Adjusted ranges for smoother/quicker interaction if needed
    const x = useTransform(scrollYProgress, [0, 1], [distanceFromCenter * 50, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [distanceFromCenter * 50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]); // Fade in effect

    return (
        <motion.span
            className={cn("inline-block text-[var(--text-primary)]", isSpace && "w-4")}
            style={{ x, rotateX, opacity }}
        >
            {char}
        </motion.span>
    );
};

export const ScrollRevealText = ({ text, className }: { text: string, className?: string }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"] // Trigger when element enters viewport
    });

    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);

    return (
        <div ref={targetRef} className={cn("relative flex justify-center overflow-hidden py-10", className)}>
            <div
                className="font-serif w-full max-w-4xl text-center font-bold tracking-tighter"
                style={{ perspective: "500px" }}
            >
                {characters.map((char, index) => (
                    <CharacterV1
                        key={index}
                        char={char}
                        index={index}
                        centerIndex={centerIndex}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </div>
    );
}
