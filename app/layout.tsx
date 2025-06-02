import type {Metadata} from "next";
import {Roboto} from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-roboto', // Enables usage in Tailwind via 'font-sans'
});

export const metadata: Metadata = {
    title: "Gabriel Lucic",
    description: "Portfolio Page created using Next.js",
    icons: {
        icon: [
            {
                url: "/icon.svg",
                href: "/icon.svg",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="{locale}" className={roboto.variable}>
        <body className="font-sans antialiased">
        {children}
        </body>
        </html>
    );
}