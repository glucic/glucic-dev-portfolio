// components/AboutSection.tsx
"use client";

import Image from "next/image";

export interface AboutSectionDict {
    about: {
        name: string;
        role: string;
        intro: string;
        experience: string;
        goals: string;
    };
}

export function AboutSection({dict}: { dict: AboutSectionDict }) {
    return (
        <section
            id="about"
            className="h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-12 max-w-7xl mx-auto"
        >
            <div className="flex-1 text-center md:text-left">
                <h2 className="roboto-bold text-3xl sm:text-4xl md:text-5xl mb-2">
                    {dict.about.name}
                </h2>
                <p className="roboto-thin text-xl sm:text-2xl text-gray-700 mb-4">
                    {dict.about.role}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-800 space-y-4">
                    <span>{dict.about.intro}</span>
                    <br/><br/>
                    <span>{dict.about.experience}</span>
                    <br/><br/>
                    <span>{dict.about.goals}</span>
                </p>
            </div>

            <div className="w-full md:max-w-md mb-8 md:mb-0">
                <Image
                    className="rounded-lg object-cover"
                    src="/images/ec0591e7-2256-4b46-bd4c-a259b0fafabe.png"
                    alt="about-me"
                    width={500}
                    height={700}
                    layout="responsive"
                />
            </div>
        </section>
    );
}