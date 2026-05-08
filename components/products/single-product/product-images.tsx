"use client";

import { useState } from "react";
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductImages = ({ images }: { images: string[] }) => {
    const [activeImage, setActiveImage] = useState(images[0]);
    return (
        <>
            {/* Mobile CAROUSEL */}
            <div className="md:hidden">
                <Carousel>
                    <CarouselContent>
                        {images.map((img, index) => (
                            <CarouselItem key={index}>
                                <AspectRatio
                                    ratio={1}
                                    className="overflow-hidden rounded-lg"
                                >
                                    <Image
                                        src={img}
                                        alt="product image"
                                        fill
                                        sizes="(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw"
                                        className="block size-full object-cover object-center"
                                    />
                                </AspectRatio>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
            {/* TABLET + DESKTOP */}
            <div className="hidden md:block space-y-4">
                {/* Main Image */}
                <AspectRatio ratio={1} className="overflow-hidden rounded-lg">
                    <Image
                        src={activeImage}
                        alt="product image"
                        fill
                        sizes="(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw"
                        className="object-cover object-center"
                    />
                </AspectRatio>
                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-4 xl:gap-5">
                    {images.map((img, index) => {
                        const isActive = activeImage === img;
                        return (
                            <button
                                type="button"
                                key={index}
                                onClick={() => setActiveImage(img)}
                                className={`overflow-hidden rounded-lg border transition cursor-pointer ${isActive ? "border-primary " : "border-transparent"}`}
                            >
                                <AspectRatio ratio={1}>
                                    <Image
                                        src={img}
                                        alt="product image"
                                        fill
                                        sizes="(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw"
                                        className="block size-full object-cover object-center"
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
