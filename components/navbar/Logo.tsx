import Link from "next/link";
import Image from "next/image";

export function Logo({
    url,
    src,
    alt,
    title,
}: {
    url: string;
    src: string;
    alt: string;
    title: string;
}) {
    return (
        <Link href={url} className="flex items-center gap-2">
            <Image
                src={src}
                className="h-10 w-auto md:h-12 lg:h-14 "
                width={500}
                height={500}
                alt={alt}
            />
            <span className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase">
                {title}
            </span>
        </Link>
    );
}
