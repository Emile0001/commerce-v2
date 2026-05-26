"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ProductImages = ({ images }: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const activeImage = images[activeIndex];

    const nextImage = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const previousImage = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Keyboard navigation when modal is open
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "ArrowRight") {
                nextImage();
            }

            if (e.key === "ArrowLeft") {
                previousImage();
            }

            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, images.length]);

    // Preload next image for smoother transitions
    useEffect(() => {
        const nextIndex =
            activeIndex === images.length - 1 ? 0 : activeIndex + 1;

        const img = new window.Image();
        img.src = images[nextIndex];
    }, [activeIndex, images]);

    return (
        <>
            {/* MOBILE CAROUSEL */}
            <div className="md:hidden">
                <Carousel>
                    <CarouselContent>
                        {images.map((img, index) => (
                            <CarouselItem key={index}>
                                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                    <DialogTitle className="sr-only">
                                        product images
                                    </DialogTitle>
                                    <DialogTrigger asChild>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveIndex(index)
                                            }
                                            className="w-full cursor-zoom-in"
                                        >
                                            <AspectRatio
                                                ratio={1}
                                                className="overflow-hidden rounded-lg"
                                            >
                                                <Image
                                                    src={img}
                                                    alt="product image"
                                                    fill
                                                    priority={index === 0}
                                                    sizes="100vw"
                                                    className="object-cover object-center"
                                                />
                                            </AspectRatio>
                                        </button>
                                    </DialogTrigger>

                                    <DialogContent className="max-w-6xl border-0 bg-black/95 p-0 shadow-none">
                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(false)}
                                            className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-2 text-white"
                                        >
                                            <X className="size-5" />
                                        </button>

                                        <div className="relative flex items-center justify-center p-4">
                                            <button
                                                type="button"
                                                onClick={previousImage}
                                                className="absolute left-4 z-40 rounded-full bg-black/60 p-2 text-white"
                                            >
                                                <ChevronLeft className="size-6" />
                                            </button>

                                            <div className="relative h-[80vh] w-full">
                                                <Image
                                                    src={activeImage}
                                                    alt="product image"
                                                    fill
                                                    sizes="100vw"
                                                    className="object-contain"
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                onClick={nextImage}
                                                className="absolute right-4 z-40 rounded-full bg-black/60 p-2 text-white"
                                            >
                                                <ChevronRight className="size-6" />
                                            </button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>

            {/* TABLET + DESKTOP */}
            <div className="hidden md:block space-y-4">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTitle className="sr-only">
                        product images
                    </DialogTitle>
                    <DialogTrigger asChild>
                        <button
                            type="button"
                            className="group w-full cursor-zoom-in"
                        >
                            <AspectRatio
                                ratio={1}
                                className="overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={activeImage}
                                    alt="product image"
                                    fill
                                    priority
                                    sizes="(min-width: 1280px) 1280px, 100vw"
                                    className="object-cover object-center transition duration-300 group-hover:scale-105"
                                />
                            </AspectRatio>
                        </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-7xl border-0 bg-black/95 p-0 shadow-none">
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-2 text-white transition hover:scale-105"
                        >
                            <X className="size-5" />
                        </button>

                        <div className="relative flex items-center justify-center p-6">
                            {/* Previous */}
                            <button
                                type="button"
                                onClick={previousImage}
                                className="absolute left-4 z-40 rounded-full bg-black/60 p-3 text-white transition hover:scale-105"
                            >
                                <ChevronLeft className="size-7" />
                            </button>

                            {/* Main Modal Image */}
                            <div className="relative h-[85vh] w-full">
                                <Image
                                    src={activeImage}
                                    alt="product image"
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                />
                            </div>

                            {/* Next */}
                            <button
                                type="button"
                                onClick={nextImage}
                                className="absolute right-4 z-40 rounded-full bg-black/60 p-3 text-white transition hover:scale-105"
                            >
                                <ChevronRight className="size-7" />
                            </button>
                        </div>

                        {/* Modal Thumbnails */}
                        <div className="mx-auto mb-6 grid w-full max-w-4xl grid-cols-5 gap-4 px-6">
                            {images.map((img, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`overflow-hidden rounded-lg border-2 transition cursor-pointer ${
                                            isActive
                                                ? "border-primary"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                    >
                                        <AspectRatio ratio={1}>
                                            <Image
                                                src={img}
                                                alt="product thumbnail"
                                                fill
                                                sizes="200px"
                                                className="object-cover"
                                            />
                                        </AspectRatio>
                                    </button>
                                );
                            })}
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Desktop Thumbnails */}
                <div className="grid grid-cols-3 gap-4 xl:gap-5">
                    {images.map((img, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <button
                                type="button"
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`group overflow-hidden rounded-lg border transition cursor-pointer ${
                                    isActive
                                        ? "border-primary"
                                        : "border-transparent"
                                }`}
                            >
                                <AspectRatio ratio={1}>
                                    <Image
                                        src={img}
                                        alt="product thumbnail"
                                        fill
                                        sizes="400px"
                                        className="object-cover object-center transition duration-300 group-hover:scale-105"
                                    />
                                </AspectRatio>
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ProductImages;
