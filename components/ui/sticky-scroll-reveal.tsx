"use client";
import React, {useRef, useState} from "react";
import {useMotionValueEvent, useScroll} from "motion/react";
import {motion} from "motion/react";
import {cn} from "@/lib/utils";
import {SkillBadge} from "@/components/elements/SkillBadges";
import Image from "next/image";

export const StickyScroll = ({
                                 content,
                                 contentClassName,
                             }: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | never;
        links?: { label: string; href: string }[];
        tech?: string[];
        imageUrl?: string;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const handleScrollTo = (index: number) => {
        const el = document.getElementById(`card-${index}`);
        if (el && ref.current) {
            ref.current.scrollTo({
                top: el.offsetTop - 20, // optional padding offset
                behavior: "smooth",
            });
        }
    };

    const {scrollYProgress} = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            animate={{backgroundColor: "var(--background)"}}
            className="relative flex gap-6 overflow-hidden rounded-md px-4 py-6 sm:px-6 lg:px-8"
        >
            {/* Left scrollable column (narrower) */}
            <div
                ref={ref}
                className="flex-[2] h-[30rem] overflow-y-auto scrollbar-thin pr-4 scrollbar-thumb-[color:var(--primary)] scrollbar-track-transparent"
            >
                <div className="max-w-3xl min-h-[10%] mt-10 p-5">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-12" id={`card-${index}`}>
                            <div
                                onClick={() => handleScrollTo(index)}
                                className="cursor-pointer hover:opacity-90 transition"
                            >
                                <motion.h2
                                    initial={{opacity: 0}}
                                    animate={{opacity: activeCard === index ? 1 : 0.3}}
                                    className={`text-3xl font-bold text-[color:var(--foreground)] p-2 rounded ${
                                        activeCard === index ? "text-blue-500" : ""
                                    }`}
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{opacity: 0}}
                                    animate={{opacity: activeCard === index ? 1 : 0.3}}
                                    className="mt-4 text-lg text-[color:var(--muted-foreground)]"
                                >
                                    {item.description}
                                </motion.p>

                                {item.tech && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.tech.map((techItem, techIndex) => (
                                            <SkillBadge key={techIndex} tech={techItem}/>
                                        ))}
                                    </div>
                                )}

                                {item.links && (
                                    <div className="mt-4 space-y-1">
                                        {item.links.map((link, linkIndex) => (
                                            <a
                                                key={link.href + linkIndex}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[color:var(--accent)] underline hover:opacity-80"
                                            >
                                                <p>→ {link.label}</p>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="h-40"/>
                </div>
            </div>

            {/* Right sticky preview (wider) */}
            <div
                className={cn(
                    "flex-[3] sticky top-6 hidden lg:block h-[30rem] overflow-hidden rounded-md p-2",
                    contentClassName
                )}
            >
                <div className="h-full w-full flex items-center justify-center">
                    {content[activeCard]?.imageUrl ? (
                        <Image
                            src={content[activeCard].imageUrl}
                            alt={content[activeCard].title}
                            fill={true}
                            className="max-h-full max-w-full object-contain rounded-md shadow-lg"
                        />
                    ) : (
                        content[activeCard]?.content ?? null
                    )}
                </div>
            </div>
        </motion.div>
    );
};