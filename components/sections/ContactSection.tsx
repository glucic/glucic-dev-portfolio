// components/ContactSection.tsx
"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";
import {GithubIcon, LinkedinIcon, InstagramIcon} from "next-share";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-700 px-6 py-16 text-center"
        >
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: [20, -5, 0]}}
                transition={{duration: 0.5}}
                className="text-slate-100 dark:text-slate-800"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold m-10">LET&apos;S GET IN TOUCH :)</h2>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: [20, -5, 0]}}
                transition={{delay: 0.2}}
                className="flex justify-center space-x-6"
            >
                <Link href="https://www.linkedin.com/in/gabriel-lucic/">
                    <LinkedinIcon
                        className="transition-transform duration-300 hover:scale-110"
                        size={40}
                        round
                    />
                </Link>
                <Link href="https://github.com/glucic">
                    <GithubIcon
                        className="transition-transform duration-300 hover:scale-110"
                        size={40}
                        round
                    />
                </Link>
                <Link href="https://www.instagram.com/gabriellucic_">
                    <InstagramIcon className="m-2 transition-all duration-300 hover:-translate-y-0.5" size={32} round/>
                </Link>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: [20, -5, 0]}}
                transition={{delay: 0.4}}
                className="z-10 mt-4"
            >
                <a
                    href="mailto:gabriellucic@protonmail.com?subject=Portfolio%20Contact&body=Hi%20Gabriel%2C"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-800 transition-all hover:scale-105 hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                >
                    Send a Message
                </a>
            </motion.div>
        </section>
    );
}
