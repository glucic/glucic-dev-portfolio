"use client";

import {motion} from "framer-motion";

export interface SkillsSectionDict {
    skills: {
        headline: string;
        subtext: string;
        skills: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
    }
}

export function SkillsSection({dict}: { dict: SkillsSectionDict }) {
    return (
        <section
            id="skills"
            className="h-screen w-full px-6 py-20 max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
        >
            <div className="mb-8 md:mb-12 md:mx-auto text-center max-w-3xl">
                <h2 className="roboto-bold leading-tighter tracking-tighter md:text-4xl text-3xl">
                    {dict.skills.headline}
                </h2>
                <p className="roboto-thin mt-4 text-xl text-gray-600 dark:text-gray-400">
                    {dict.skills.subtext}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl">
                {dict.skills.skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{scale: 1.05, y: -4}}
                        transition={{type: "spring", stiffness: 300, damping: 15}}
                        className="flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition"
                    >
                        <div className="p-4 rounded-full bg-primary text-white dark:bg-black shrink-0">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                                <use href={`#ai:${skill.icon}`}/>
                            </svg>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-black dark:text-white">
                                {skill.title}
                            </h3>
                            <p className="text-base mt-2 text-gray-600 dark:text-gray-400">
                                {skill.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}