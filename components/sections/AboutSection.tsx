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

export function AboutSection({ dict }: { dict: AboutSectionDict }) {
    return (
        <section
            id="about"
            className="w-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6 py-12 sm:py-16 md:py-20 lg:py-24"
        >
            <div className="min-h-screen max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-15">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="roboto-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-[var(--foreground)]">
                        {dict.about.name}
                    </h2>
                    <p className="roboto-thin text-lg sm:text-xl text-[var(--muted-foreground)] mb-4">
                        {dict.about.role}
                    </p>
                    <div className="text-sm sm:text-base leading-relaxed text-[var(--muted-foreground)] space-y-4">
                        <p>{dict.about.intro}</p>
                        <p>{dict.about.experience}</p>
                        <p>{dict.about.goals}</p>
                    </div>
                </div>

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
            </div>
        </section>
    );
}