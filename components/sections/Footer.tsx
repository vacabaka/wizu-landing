import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">W</div>
                    <span className="font-bold text-lg text-slate-900">Wizu</span>
                </div>

                <div className="flex gap-8 text-sm text-slate-500 font-medium">
                    <a href="#" className="hover:text-indigo-600 transition">Privacy</a>
                    <a href="#" className="hover:text-indigo-600 transition">Terms</a>
                    <a href="#" className="hover:text-indigo-600 transition">Twitter</a>
                    <a href="#" className="hover:text-indigo-600 transition">Contact</a>
                </div>

                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} Wizu. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
