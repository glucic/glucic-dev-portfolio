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
    return [{lang: 'en'}, {lang: 'de'}];
}

export const metadata: Metadata = {
    title: "Gabriel Lucic",
    description: "Portfolio Page created using Next.js",
    icons: {
        icon: [
            {
                url: "/svg/icon.svg",
                href: "/svg/icon.svg",
            },
        ],
    },
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
        <html lang={lang} className={roboto.variable}>
        <body className="font-sans antialiased">{children}</body>
        </html>
    );
}