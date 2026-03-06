import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Retreats() {
    const retreats = [
        {
            title: "Spiritual & Tradition Retreat",
            date: "Upcoming Dates Available",
            desc: "Immerse yourself in mindful activities, sacred gatherings, and the timeless beauty of the Moroccan landscape. Revive the Sunnah and find your inner Sakinah.",
            image: "/images/courtyard_night.jpg?v=3",
            link: "/",
            buttonText: "Learn More"
        },
        {
            title: "Yoga & Wellness Retreat",
            date: "Select Dates in 2026",
            desc: "A restorative journey focusing on physical wellness, mindfulness, and yoga practice set against the stunning backdrop of the Atlas Mountains.",
            image: "/images/hero-handstand.jpg",
            link: "https://dabavillage.uk/yoga.html",
            buttonText: "View Yoga Retreat"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col pt-24">
            <div className="container mx-auto px-4 py-16 text-center max-w-3xl">
                <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">The Journey</span>
                <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Our Retreats</h1>
                <p className="text-muted-foreground font-light text-lg">
                    Explore our carefully curated retreats designed to nourish your body, mind, and spirit. Choose the path that resonates with your current needs.
                </p>
            </div>

            <div className="container mx-auto px-4 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {retreats.map((retreat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="group flex flex-col border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={retreat.image}
                                    alt={retreat.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>{retreat.date}</span>
                                </div>
                                <h3 className="font-serif text-3xl mb-4">{retreat.title}</h3>
                                <p className="text-muted-foreground font-light leading-relaxed flex-1 mb-8">
                                    {retreat.desc}
                                </p>
                                <div className="mt-auto">
                                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs py-6" asChild>
                                        <a href={retreat.link} target={retreat.link.startsWith("http") ? "_blank" : "_self"} rel={retreat.link.startsWith("http") ? "noopener noreferrer" : ""}>
                                            {retreat.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Simple Footer just for this page so it doesn't look empty at bottom */}
            <footer className="bg-muted py-12 mt-auto border-t border-border text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    <a href="/" className="hover:text-primary transition-colors">Back to Home</a> • © 2026 Daba Village retreats
                </p>
            </footer>
        </div>
    );
}
