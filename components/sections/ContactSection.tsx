// components/ContactSection.tsx
"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";
import {GithubIcon, LinkedinIcon, InstagramIcon} from "next-share";

export function ContactSection() {
    const [showForm, setShowForm] = useState(false);

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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">YOU REACHED THE END</h2>
                <p className="pt-3 text-xl sm:text-2xl">LET&apos;S GET IN TOUCH :)</p>
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
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: [20, -5, 0]}}
                transition={{delay: 0.4}}
                className="z-10 mt-4"
            >
                <button
                    onClick={() => setShowForm(true)}
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-800 transition-all hover:scale-105 hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                >
                    Send a Message
                </button>
            </motion.div>

            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="rounded-lg bg-white p-6 shadow-xl w-full max-w-md text-left">
                        <h3 className="text-lg font-bold mb-4">Contact Me</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setShowForm(false);
                        }}>
                            <label className="block mb-2 text-sm font-medium">Your Email</label>
                            <input
                                type="email"
                                required
                                className="w-full rounded border border-gray-300 px-4 py-2 mb-4"
                            />
                            <label className="block mb-2 text-sm font-medium">Message</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full rounded border border-gray-300 px-4 py-2 mb-4"
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
