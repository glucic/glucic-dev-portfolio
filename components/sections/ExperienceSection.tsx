"use client";

import {Timeline} from "@/components/ui/timeline";
import {SkillBadge} from "@/components/elements/SkillBadges";
import {MapPin} from "lucide-react";

interface ExperienceSectionProps {
    dict: ExperienceDict;
}

export interface ExperienceDict {
    experience: {
        title: string;
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

export function ExperienceSection({dict}: ExperienceSectionProps) {
    const entries = Object.values(dict.experience.entries);

    const experienceData = entries.map((entry) => ({
        title: (
            <div className="text-lg sm:text-xl md:text-2xl">
                <p>{entry.date}</p>
                <p className="text-base sm:text-lg text-gray-500">{entry.duration}</p>
            </div>
        ),
        content: (
            <div className="text-base sm:text-lg md:text-xl">
                <div className="flex items-center gap-2 mb-1 text-xl sm:text-2xl font-semibold">
                    <span>{entry.role}</span>
                </div>
                <p className="text-base text-gray-600 mb-2 underline hover:text-blue-600">
                    <a href={entry.link}> {entry.company} </a>
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                    <MapPin size={16} className="text-gray-500"/>
                    {entry.location}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    {entry.tech.map((techItem, i) => (
                        <SkillBadge key={i} tech={techItem}/>
                    ))}
                </div>
                <p className="text-sm sm:text-base text-gray-800">{entry.description}</p>
            </div>
        ),
    }));

    return (
        <section
            id="experience"
            className="w-full px-6 py-12 sm:py-16 md:py-20 lg:py-24 max-w-6xl mx-auto"
        >
            <div className="mb-10 sm:mb-14 text-center">
                <h2 className="roboto-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl">
                    {dict.experience.title}
                </h2>
            </div>
            <Timeline data={experienceData}/>
        </section>
    );
}