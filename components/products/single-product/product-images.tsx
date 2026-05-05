"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
    const [activeImage, setActiveImage] = useState(0);
    return (
        <>
            {/* Main image */}
            <Image
                src={images[activeImage]}
                alt="product image"
                fill
                className="object cover"
                sizes="(min-width: 1024px) 520px, 100vw"
                priority
            />
            {/* Thumbnails */}
            <div>
                {images.map((image, index)=>(
                    <div>
                ))}
            </div>
        </>
    );
};

export default ProductImages;
