// app/[lang]/layout.tsx
import {ReactNode} from 'react';
import {Roboto} from 'next/font/google';
import '@/app/globals.css';
import {Metadata} from "next";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-roboto',
});

export async function generateStaticParams() {
    return [{lang: 'en'}, {lang: 'de'}, {lang: 'hr'}];
}

export const metadata: Metadata = {
    title: "Gabriel Lucic – Software Engineer Portfolio",
    description: "Full Stack Software Engineer based in Munich, Germany. View my work, skills, and contact info.",
    keywords: ["Gabriel Lucic", "Software Engineer", "Full Stack Developer", "Web Development", "PHP", "Laravel", "Munich", "Portfolio"],
    authors: [{name: "Gabriel Lucic"}],
    creator: "Gabriel Lucic",
    metadataBase: new URL("https://gabriel-lucic.dev"),
    openGraph: {
        title: "Gabriel Lucic – Software Engineer Portfolio",
        description: "Full Stack Software Engineer based in Munich, Germany.",
        url: "https://gabriel-lucic.dev",
        siteName: "Gabriel Lucic Portfolio",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/svg/icon.svg",
                width: 1200,
                height: 630,
                alt: "Gabriel Lucic Portfolio Screenshot",
            },
        ],
    },
    icons: {
        icon: [
            {url: "/svg/icon.svg", href: "/svg/icon.svg"},
            {url: "/favicon.ico", sizes: "any"},
        ],
        apple: "/apple-touch-icon.png",
    },
    themeColor: "#0f172a",
    referrer: "strict-origin-when-cross-origin",
    viewport: "width=device-width, initial-scale=1.0",
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const {lang} = await params;

    return (
        <html lang={lang} className={`${roboto.variable} scroll-smooth`} suppressHydrationWarning>
        <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)]">{children}</body>
        </html>
    );
}