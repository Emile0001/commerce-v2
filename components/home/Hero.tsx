import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Props for a category card.
 * Each card can render either a video background OR an image background.
 */
interface CategoryCardProps {
    title: string;
    description: string;
    buttonText: string;
    imageSrc?: string;
    videoSrc?: string;
    isDark?: boolean;
    className?: string;
}

/**
 * CategoryCard
 *
 * A reusable promotional card component that supports:
 * - Video background (preferred for hero-style content)
 * - Image background (fallback or secondary content)
 *
 * This component is presentation-only and contains no business logic.
 */
const CategoryCard = ({
    title,
    description,
    buttonText,
    imageSrc,
    videoSrc,
    isDark = true,
    className = "",
}: CategoryCardProps) => {
    return (
        <div
            className={`relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-xl p-8 lg:p-12 ${className}`}
        >
            {/* ===============================
               Background Media Layer
               =============================== */}
            {videoSrc ? (
                /**
                 * Video background
                 * - autoPlay + muted are required for most browsers
                 * - playsInline avoids full-screen takeover on mobile
                 */
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            ) : (
                /**
                 * Image background fallback
                 * Uses next/image for optimization
                 */
                imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                    />
                )
            )}

            {/* ===============================
               Overlay Gradient
               Improves text readability
               =============================== */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* ===============================
               Content Layer
               =============================== */}
            <div className="relative z-10 max-w-sm text-white">
                <h3 className="mb-2 text-3xl font-bold tracking-tight">
                    {title}
                </h3>

                <p className="mb-6 text-lg text-gray-200">{description}</p>

                <Button
                    variant="secondary"
                    className="group w-fit gap-2 font-semibold"
                >
                    {buttonText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
    );
};

/**
 * ProductCategories5
 *
 * Section component rendering featured product categories.
 * This is ideal for a homepage hero or category promotion area.
 */
export default function ProductCategories5() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* ===============================
                       Main Featured Category (LOCAL VIDEO)
                       Video is served from /public/videos
                       =============================== */}
                    <CategoryCard
                        title="Handcrafted Press-On Nails"
                        description="Premium, reusable press-on nails designed and handcrafted for a flawless, salon-quality finish."
                        buttonText="Shop Collection"
                        videoSrc="/videos/Modern_Nail_Design_Video_Generated.mp4"
                    />

                    {/* ===============================
                       Secondary Category (IMAGE)
                       =============================== */}
                    <CategoryCard
                        title="Modern Essentials"
                        description="Curated nail designs created for everyday elegance and effortless style."
                        buttonText="Explore Now"
                        imageSrc="/images/heroCarousel/heroNails1.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
