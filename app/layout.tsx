import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/utils/SmoothScroll";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ['normal', 'italic'] });

export const metadata: Metadata = {
    title: "Wizu - AI Language Learning Browser",
    description: "Join the waitlist for the smarter way to learn languages.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jakarta.variable} ${playfair.variable} font-sans antialiased text-slate-900 bg-[#F8F6F1]`}>
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
