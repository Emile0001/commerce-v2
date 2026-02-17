"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function DarkMode() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const current = theme === "system" ? systemTheme : theme;
    const isDark = current === "dark";

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </Button>
    );
}
export default DarkMode;

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// function DarkMode() {
//     const { setTheme } = useTheme();
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="icon">
//                     <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//                     <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//                     <span className="sr-only">Toggle theme</span>
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//                 <DropdownMenuItem onClick={() => setTheme("light")}>
//                     Light
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("dark")}>
//                     Dark
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("system")}>
//                     System
//                 </DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     );
// }

// export default DarkMode;
