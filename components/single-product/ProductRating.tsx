// const ProductRating = () => {
//     return <div>ProductRating</div>;
// };
// export default ProductRating;
import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingProps = {
    rating: number; // e.g. 5.0
    reviewsCount?: number; // e.g. 200
    maxStars?: number; // default 5
    className?: string;
    showCountText?: boolean; // default true
};

export function ProductRating({
    rating,
    reviewsCount = 0,
    maxStars = 5,
    className,
    showCountText = true,
}: RatingProps) {
    // Clamp rating into [0, maxStars]
    const safeRating = Math.max(0, Math.min(rating, maxStars));

    // Round to nearest half-star (optional; keeps fill stable)
    const rounded = Math.round(safeRating * 2) / 2;

    const stars = Array.from({ length: maxStars }, (_, i) => {
        const starValue = i + 1;
        const isFull = rounded >= starValue;
        const isHalf = !isFull && rounded + 0.5 >= starValue;

        return (
            <span key={i} className="relative inline-flex h-4 w-4">
                {/* base outline */}
                <Star className="h-4 w-4 text-foreground" />

                {/* full fill */}
                {isFull && (
                    <Star className="absolute left-0 top-0 h-4 w-4 fill-foreground text-foreground" />
                )}

                {/* half fill */}
                {isHalf && (
                    <span className="absolute left-0 top-0 h-4 w-4 overflow-hidden">
                        <span className="block h-4 w-2 overflow-hidden">
                            <Star className="h-4 w-4 fill-foreground text-foreground" />
                        </span>
                    </span>
                )}
            </span>
        );
    });

    return (
        <div className={cn("inline-flex flex-col gap-1", className)}>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">{stars}</div>
                <span className="text-sm font-semibold tabular-nums text-foreground">
                    {safeRating.toFixed(1)}
                </span>
            </div>

            {showCountText && (
                <div className="text-xs text-muted-foreground">
                    from{" "}
                    <span className="font-medium text-foreground/80">
                        {reviewsCount.toLocaleString()}+
                    </span>{" "}
                    reviews
                </div>
            )}
        </div>
    );
}
