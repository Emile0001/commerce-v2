import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

import PageContainer from "@/components/layout/PageContainer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NavbarMega from "@/components/navbar/NavbarMega";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${APP_NAME}`,
    description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavbarMega />
                    <PageContainer className="py-20">{children}</PageContainer>
                </ThemeProvider>
            </body>
        </html>
    );
}
