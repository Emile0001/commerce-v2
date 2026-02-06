"use client";

import { cn } from "@/lib/utils";
import PageContainer from "@/components/layout/PageContainer";
import { NAVBAR_MEGA_DATA, type NavbarMegaPropsData } from "@/app/utils/link";

import DesktopNav from "@/components/navbar/DesktopNav";
import MobileNav from "@/components/navbar/MobileNav";

type Props = {
    className?: string;
    data?: NavbarMegaPropsData; // allows swapping data later (optional)
};

export default function NavbarMega({
    className,
    data = NAVBAR_MEGA_DATA,
}: Props) {
    const { logo, menu, auth } = data;

    return (
        <header
            className={cn(
                "border-b bg-background/80 backdrop-blur sticky top-0 z-50",
                className,
            )}
        >
            <PageContainer>
                <DesktopNav logo={logo} menu={menu} />
                <MobileNav logo={logo} menu={menu} auth={auth} />
            </PageContainer>
        </header>
    );
}
