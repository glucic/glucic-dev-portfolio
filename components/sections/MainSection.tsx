"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "next-share";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useIsMobile } from "@/lib/utils";
import { NavigationBar } from "@/components/elements/NavigationBar";

export interface MainSectionDict {
    main: {
        title: string;
        subtitle: string;
        typewriterSubtitle: Array<{
            text: string;
            className?: string;
        }>;
        location: string;
        downloadCV: string;
        contactMe: string;
    };
}

export function MainSection({ dict }: { dict: MainSectionDict }) {
    const isMobile = useIsMobile();

    return (
        <section id="main">
            <NavigationBar />
            <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center w-full max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -5, 0] }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="roboto-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl dark:text-slate-800"
                >
                    {dict.main.title}
                </motion.h1>

                {isMobile ? (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: [20, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="roboto-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4"
                    >
                        {dict.main.subtitle}
                    </motion.p>
                ) : (
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                        <TypewriterEffectSmooth words={dict.main.typewriterSubtitle} />
                    </div>
                )}

                <p className="roboto-thin text-lg sm:text-xl text-gray-600 mt-4">
                    {dict.main.location}
                </p>

                <div className="flex flex-row sm:flex-row justify-center items-center space-x-4 sm:space-y-0 sm:space-x-4 mt-6">
                    <Link href="https://www.linkedin.com/in/gabriel-lucic/">
                        <LinkedinIcon
                            className="transition-transform duration-300 hover:-translate-y-1"
                            size={32}
                            round
                        />
                    </Link>
                    <Link href="https://github.com/glucic">
                        <GithubIcon
                            className="transition-transform duration-300 hover:-translate-y-1"
                            size={32}
                            round
                        />
                    </Link>
                    <Link href="https://www.instagram.com/gabriellucic_">
                        <InstagramIcon
                            className="transition-transform duration-300 hover:-translate-y-0.5"
                            size={32}
                            round
                        />
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="/files/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-black px-6 py-2 font-medium text-white transition duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                            {dict.main.downloadCV}
                        </button>
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg bg-white border border-black px-6 py-2 font-medium text-black transition duration-300 hover:bg-gray-100 dark:bg-black dark:text-white dark:border-white dark:hover:bg-gray-900"
                    >
                        {dict.main.contactMe}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}