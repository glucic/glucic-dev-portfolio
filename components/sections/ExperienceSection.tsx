// components/ExperienceSection.tsx
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
            <div className="text-3xl">
                <p>{entry.date}</p>
                <p className="text-2xl">{entry.duration}</p>
            </div>
        ),
        content: (
            <div className="text-base sm:text-lg md:text-xl">
                <div className="flex items-center gap-2 mb-1 text-2xl font-semibold">
                    <span>{entry.role}</span>
                </div>
                <p className="text-lg text-gray-600 mb-2 underline hover:text-blue-600">
                    {entry.company}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    {entry.location}
                </p>
                {/* Optional: Match badges per role by key if needed */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    {entry.tech.map((techItem, i) => (
                        <SkillBadge key={i} tech={techItem}/>
                    ))}
                </div>
                <p>{entry.description}</p>
            </div>
        ),
    }));

    return (
        <section id="experience" className="w-full px-6 py-12 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">{dict.experience.title}</h2>
            <Timeline data={experienceData} />
        </section>
    );
}