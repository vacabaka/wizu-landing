import { Video, Bot, MonitorPlay, Zap } from "lucide-react";

const services = [
    {
        icon: MonitorPlay,
        color: "bg-indigo-900 text-white",
        title: "Native Content",
        description: "Learn from real videos on YouTube, Netflix, and the web. No more boring textbooks.",
    },
    {
        icon: Zap,
        color: "bg-orange-500 text-white",
        title: "Instant Explanations",
        description: "Click any word or phrase to get AI-powered context, grammar, and cultural notes.",
    },
    {
        icon: Bot, // Using Bot because ChatBubble is not standard or named differently in some lucide vers
        color: "bg-indigo-600 text-white", // Using indigo instead of red for alignment with app
        title: "AI Chat Assistant",
        description: "Your personal tutor that follows you everywhere. Ask questions about anything you see.",
    },
    {
        icon: Video,
        color: "bg-violet-500 text-white",
        title: "Subtitle Smart Layer",
        description: "Dual subtitles, blurred mode for listening practice, and smart pausing.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row gap-16">

                {/* Left Side: Title */}
                <div className="lg:w-1/3 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                        Our <span className="underline decoration-indigo-400 decoration-4 underline-offset-4">Features</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to master English in one smart browser. Replace your dictionary, textbook, and tutor.
                    </p>
                    <a href="#waitlist" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-900 hover:bg-slate-800 transition">
                        Request Access
                    </a>
                </div>

                {/* Right Side: List with Steps */}
                <div className="lg:w-2/3 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block" />

                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex gap-6 relative">
                                {/* Number Badge */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white shadow-sm bg-orange-400 text-white flex items-center justify-center font-bold z-10 hidden md:flex">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl ${service.color}`}>
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
