"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function WaitlistForm({ variant = "light" }: { variant?: "light" | "dark" }) {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        // Mock submission
        setTimeout(() => setIsSubmitted(true), 800);
    };

    if (isSubmitted) {
        return (
            <div className={`p-6 rounded-2xl flex flex-col items-center gap-3 animate-in fade-in zoom-in ${variant === "light" ? "bg-green-50 text-green-800" : "bg-white/10 text-white backdrop-blur"
                }`}>
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <p className="font-semibold text-lg">You're on the list!</p>
                <p className={`text-sm ${variant === "light" ? "text-green-700" : "text-gray-200"}`}>
                    We'll notify you when we launch.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
            <Input
                type="email"
                placeholder="Enter your email"
                className={`h-14 md:text-base ${variant === "dark"
                        ? "bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-offset-transparent focus-visible:ring-white/50"
                        : "bg-white border-slate-200 text-slate-900"
                    }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Button
                type="submit"
                size="lg"
                className="h-14 px-8 text-base bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 border-0 shadow-lg shadow-orange-500/25"
            >
                Join Waitlist <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
        </form>
    );
}
