"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
    EmailIcon,
} from "next-share";

export interface ContactDict {
    contact: {
        headline: string;
    };
}

export function ContactSection({ dict }: { dict: ContactDict }) {
    return (
        <section
            id="contact"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-700 dark:bg-gray-900 px-4 sm:px-6 py-12 text-center transition-colors"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.5 }}
                className="text-white"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 uppercase">
                    {dict.contact.headline}
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-6"
            >
                <Link href="mailto:gabriellucic@protonmail.com?subject=Portfolio%20Contact&body=Hi%20Gabriel%2C">
                    <EmailIcon
                        className="transition-transform duration-300 hover:scale-110"
                        size={52}
                        round
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-lucic/">
                    <LinkedinIcon
                        className="transition-transform duration-300 hover:scale-110"
                        size={52}
                        round
                    />
                </Link>
                <Link href="https://github.com/glucic">
                    <GithubIcon
                        className="transition-transform duration-300 hover:scale-110"
                        size={52}
                        round
                    />
                </Link>
                <Link href="https://www.instagram.com/gabriellucic_">
                    <InstagramIcon
                        className="transition-transform duration-300 hover:scale-110"
                        size={52}
                        round
                    />
                </Link>
            </motion.div>
        </section>
    );
}