"use client";

import { Timeline } from "@/components/ui/timeline";
import { SkillBadge } from "@/components/elements/SkillBadges";
import { MapPin } from "lucide-react";

interface ExperienceSectionProps {
    dict: ExperienceDict;
}

export interface ExperienceDict {
    experience: {
        headline: string;
        subtext?: string;
        entries: {
            [key: string]: {
                date: string;
                duration: string;
                role: string;
                company: string;
                link?: string;
                location: string;
                description: string;
                tech: Array<string>;
            };
        };
    };
}

export function ExperienceSection({ dict }: ExperienceSectionProps) {
    const entries = Object.values(dict.experience.entries);

    const experienceData = entries.map((entry) => ({
        title: (
            <div className="text-lg sm:text-xl md:text-2xl text-[var(--foreground)]">
                <p>{entry.date}</p>
                <p className="text-base sm:text-lg text-[var(--muted-foreground)]">{entry.duration}</p>
            </div>
        ),
        content: (
            <div className="text-base sm:text-lg md:text-xl text-[var(--foreground)]">
                <div className="flex items-center gap-2 mb-1 text-xl sm:text-2xl font-semibold">
                    <span>{entry.role}</span>
                </div>
                <p className="text-base underline hover:text-blue-600 transition-colors">
                    <a href={entry.link} target="_blank" rel="noopener noreferrer">
                        {entry.company}
                    </a>
                </p>
                <p className="text-sm flex items-center gap-1 mt-2 text-[var(--muted-foreground)]">
                    <MapPin size={16} />
                    {entry.location}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    {entry.tech.map((techItem, i) => (
                        <SkillBadge key={i} tech={techItem} />
                    ))}
                </div>
                <p className="text-sm sm:text-base text-[var(--muted-foreground)]">
                    {entry.description}
                </p>
            </div>
        ),
    }));

    return (
        <section
            id="experience"
            className="w-full min-h-screen px-6 py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="roboto-bold leading-tighter tracking-tighter md:text-4xl text-3xl text-[var(--foreground)]">
                        {dict.experience.headline}
                    </h2>
                    <p className="roboto-thin mt-4 text-xl text-[var(--muted-foreground)]">
                        {dict.experience.subtext}
                    </p>
                </div>
                <Timeline data={experienceData} />
            </div>
        </section>
    );
}