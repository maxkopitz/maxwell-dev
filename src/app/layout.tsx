import "~/styles/globals.css";

import { Inter } from "next/font/google";
import TopNav from "./_components/topnav";

import { Metadata } from "next";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://maxwell.dev'),
    title: {
        default: 'Maxwell Kopitz',
        template: '%s | Maxwell Kopitz',
    },
    description: "Developer, builder, and writer",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${inter.variable} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}>
                    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                        <TopNav />
                        {children}
                    </main>
            </body>
        </html>
    );
}
