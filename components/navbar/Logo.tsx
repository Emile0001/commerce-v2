// import Link from "next/link";
// import { Button } from "../ui/button";
// import { HeartPlusIcon } from "lucide-react";

// function Logo() {
//     return (
//         <Button size={"icon"} asChild>
//             <Link href={"/"}>
//                 <HeartPlusIcon className="w-6 h-6" />
//             </Link>
//         </Button>
//     );
// }
// export default Logo;
// components/nav/Logo.tsx
import Link from "next/link";

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
            {/* Use next/image later if you want */}

            <img src={src} className="max-h-8 dark:invert" alt={alt} />
            <span className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase">
                {title}
            </span>
        </Link>
    );
}
