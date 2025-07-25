"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SkillBadge } from "@/components/elements/SkillBadges";
import {SkillsSectionDict} from "@/types";

export function SkillsSection({ dict }: { dict: SkillsSectionDict }) {
    return (
        <section
            id="skills"
            className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] px-6 py-20 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                {/* Headline */}
                <div className="mb-8 md:mb-12 md:mx-auto text-center max-w-3xl">
                    <h2 className="roboto-bold leading-tighter tracking-tighter text-3xl md:text-4xl text-[var(--foreground)]">
                        {dict.skills.headline}
                    </h2>
                    <p className="roboto-thin mt-4 text-xl text-[var(--muted-foreground)]">
                        {dict.skills.subtext}
                    </p>
                </div>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl">
                    {dict.skills.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="flex items-center gap-6 p-6 rounded-2xl bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] shadow-md hover:shadow-lg transition"
                        >
                            <div className="p-4 rounded-full bg-transparent shrink-0">
                                <Image
                                    src={`svg/${skill.icon}`}
                                    alt="Icon"
                                    width={46}
                                    height={46}
                                    className="align-middle"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                                    {skill.title}
                                </h3>

                                {/* Tech badges */}
                                <div className="flex flex-wrap justify-start gap-2">
                                    {skill.tech?.map((techItem, i) => (
                                        <SkillBadge key={i} tech={techItem} />
                                    ))}
                                </div>

                                <p className="text-base mt-2 text-[var(--muted-foreground)]">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}