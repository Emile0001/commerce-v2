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
            <img src={src} className="h-10 w-auto md:h-12 lg:h-14 " alt={alt} />
            {/* <span className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase">
                {title}
            </span> */}
        </Link>
    );
}
