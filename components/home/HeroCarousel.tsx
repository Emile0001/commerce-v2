//not going to use this, just keeping it for ideas

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoryCardProps {
    title: string;
    description: string;
    buttonText: string;
    imageSrc?: string;
    videoSrc?: string;
    isDark?: boolean;
    className?: string;
}

const CategoryCard = ({
    title,
    description,
    buttonText,
    imageSrc,
    videoSrc,
    isDark = true,
    className = "",
}: CategoryCardProps) => {
    const overlayClass = isDark
        ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        : "bg-gradient-to-t from-white/85 via-white/40 to-transparent";
    const textClass = isDark ? "text-white" : "text-slate-900";
    const descriptionClass = isDark ? "text-slate-200" : "text-slate-700";

    return (
        <Card
            className={`group relative min-h-[480px] overflow-hidden rounded-3xl border-0 bg-transparent p-0 shadow-none ${className}`}
        >
            {videoSrc ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero-carousel/hero-nails-1.svg"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            ) : (
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

            <div className={`absolute inset-0 ${overlayClass}`} />

            <div
                className={`relative z-10 flex h-full flex-col justify-end p-8 md:p-10 ${textClass}`}
            >
                <h3 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    {title}
                </h3>

                <p className={`mb-6 text-base md:text-lg ${descriptionClass}`}>
                    {description}
                </p>

                <Button
                    variant={isDark ? "secondary" : "default"}
                    className="group w-fit gap-2 font-semibold"
                >
                    {buttonText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </Card>
    );
};

const HeroCarousel = () => {
    return (
        <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
                <CarouselItem>
                    <CategoryCard
                        title="Handcrafted Press-On Nails"
                        description="Premium, reusable press-on nails designed and handcrafted for a flawless, salon-quality finish."
                        buttonText="Shop Collection"
                        videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    />
                </CarouselItem>
                <CarouselItem>
                    <CategoryCard
                        title="Modern Essentials"
                        description="Curated nail designs created for everyday elegance and effortless style."
                        buttonText="Explore Now"
                        imageSrc="/images/hero-carousel/hero-nails-1.svg"
                        isDark={false}
                    />
                </CarouselItem>
                <CarouselItem>
                    <CategoryCard
                        title="Seasonal Studio"
                        description="Discover limited-edition palettes inspired by the latest runway trends."
                        buttonText="View Drop"
                        imageSrc="/images/hero-carousel/hero-nails-2.svg"
                    />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
    );
};

export default HeroCarousel;
