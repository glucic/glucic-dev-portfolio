// components/MainSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { GithubIcon, LinkedinIcon } from "next-share";

export function MainSection() {
    return (
        <section id="main" className="h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="roboto-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl dark:text-slate-800"
            >
                GABRIEL LUCIC
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="roboto-thin text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-slate-800 mt-4"
            >
                Software Engineer Specializing in Web Applications
            </motion.p>

            <p className="roboto-thin text-xl sm:text-2xl text-gray-600 mt-4">
                Based in München, Germany
            </p>

            <div className="flex justify-center items-center space-x-4 mt-6">
                <Link href="https://www.linkedin.com/in/gabriel-lucic/">
                    <LinkedinIcon className="transition-transform duration-300 hover:-translate-y-1" size={32} round />
                </Link>
                <Link href="https://github.com/glucic">
                    <GithubIcon className="transition-transform duration-300 hover:-translate-y-1" size={32} round />
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                className="mt-8"
            >
                <button className="w-full max-w-xs rounded-lg bg-black px-6 py-2 font-medium text-white transition duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Contact Me
                </button>
            </motion.div>
        </section>
    );
}
