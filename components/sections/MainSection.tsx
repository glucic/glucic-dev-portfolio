// components/MainSection.tsx
"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";
import {GithubIcon, InstagramIcon, LinkedinIcon} from "next-share";
import {TypewriterEffectSmooth} from "../ui/typewriter-effect";

export interface MainSectionDict {
    main: {
        title: string;
        subtitle: Array<{
            text: string;
            className?: string;
        }>;
        location: string;
        downloadCV: string;
        contactMe: string;
    };
}

export function MainSection({dict}: { dict: MainSectionDict }) {
    return (
        <section
            id="main"
            className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center"
        >
            <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: [20, -5, 0]}}
                transition={{duration: 0.5, ease: [0.4, 0.0, 0.2, 1]}}
                className="roboto-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl dark:text-slate-800"
            >
                {dict.main.title}
            </motion.h1>

            <TypewriterEffectSmooth
                className="roboto text-2xl sm:text-4xl md:text-3xl text-gray-700 dark:text-slate-800 mt-4"
                words={dict.main.subtitle}/>

            <p className="roboto-thin text-xl sm:text-2xl text-gray-600 mt-4">
                {dict.main.location}
            </p>

            <div className="flex justify-center items-center space-x-4 mt-6">
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
                        className="m-2 transition-all duration-300 hover:-translate-y-0.5"
                        size={32}
                        round
                    />
                </Link>
            </div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: [20, -5, 0]}}
                className="mt-8 flex flex-wrap justify-center gap-4"
            >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button
                        className="rounded-lg bg-black px-6 py-2 font-medium text-white transition duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    >
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
        </section>
    );
}