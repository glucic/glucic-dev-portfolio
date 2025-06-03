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
            className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-12 sm:py-16 md:py-20 lg:py-24 max-w-4xl mx-auto"
        >
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="roboto-bold text-3xl sm:text-4xl md:text-5xl mb-2">
                    {dict.about.name}
                </h2>
                <p className="roboto-thin text-lg sm:text-xl text-gray-700 mb-4">
                    {dict.about.role}
                </p>
                <div className="text-sm sm:text-base leading-relaxed text-gray-800 space-y-4">
                    <p>{dict.about.intro}</p>
                    <p>{dict.about.experience}</p>
                    <p>{dict.about.goals}</p>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:max-w-xs mb-8 md:mb-0">
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