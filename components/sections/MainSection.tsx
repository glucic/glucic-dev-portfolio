"use client";

import {motion} from "framer-motion";
import React from "react";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
import {useIsMobile} from "@/lib/utils";
import {NavigationBar} from "@/components/elements/NavigationBar";
import {MainSectionDict} from "@/types";

export function MainSection({dict}: { dict: MainSectionDict }) {
    const isMobile = useIsMobile();

    return (
        <section id="main" className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
            <NavigationBar/>
            <div
                className="min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center w-full max-w-4xl mx-auto">

                {/* Title */}
                <motion.h1
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: [20, -5, 0]}}
                    transition={{duration: 0.5, ease: [0.4, 0.0, 0.2, 1]}}
                    className="roboto text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[var(--foreground)] uppercase"
                >
                    {dict.main.title}
                </motion.h1>

                {/* Subtitle */}
                {isMobile ? (
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: [20, -5, 0]}}
                        transition={{duration: 0.6, delay: 0.1}}
                        className="roboto-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-[var(--muted-foreground)]"
                    >
                        {dict.main.subtitle}
                    </motion.p>
                ) : (
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-[var(--muted-foreground)]">
                        <TypewriterEffectSmooth words={dict.main.typewriterSubtitle}/>
                    </div>
                )}

                {/* Location */}
                <p className="roboto-thin text-lg sm:text-xl text-[var(--muted-foreground)] mt-4">
                    {dict.main.location}
                </p>

                {/* Buttons */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: [20, -5, 0]}}
                    transition={{duration: 0.5}}
                    className="mt-8 flex flex-wrap justify-center gap-4"
                >
                    {/* CV Download */}
                    <motion.a
                        href="/files/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.98}}
                        transition={{type: "spring", stiffness: 300}}
                        className="rounded-xl bg-[var(--foreground)] px-6 py-2 font-semibold text-[var(--background)] shadow-md transition-colors duration-300 hover:bg-[color-mix(in srgb,var(--foreground),#000000_15%)] uppercase"
                    >
                        {dict.main.downloadCV}
                    </motion.a>

                    {/* Contact Link */}
                    <motion.a
                        href="#contact"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.98}}
                        transition={{type: "spring", stiffness: 300}}
                        className="rounded-xl border border-[var(--foreground)] bg-[var(--background)] px-6 py-2 font-semibold text-[var(--foreground)] shadow-md transition-colors duration-300 hover:bg-[color-mix(in srgb,var(--background),#ffffff_10%)] uppercase"
                    >
                        {dict.main.contactMe}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}