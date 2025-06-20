"use client";
import React, {useState} from "react";
import {StickyScroll} from "../ui/sticky-scroll-reveal";
import {ProjectsSectionDict} from "@/types";

export function ProjectsSection({dict}: { dict: ProjectsSectionDict }) {
    const categoryKeys = Object.keys(dict.projects.projects);
    const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

    return (
        <div className="min-h-screen w-full p-10">
            <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
                <h2 className="roboto-bold leading-tighter tracking-tighter md:text-4xl text-3xl text-[var(--foreground)]">
                    {dict.projects.headline}
                </h2>
                <p className="roboto-thin mt-4 text-xl text-[var(--muted-foreground)]">
                    {dict.projects.subtext}
                </p>

                {/* Category Buttons */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {categoryKeys.map((key) => {
                        const itemCount = dict.projects.projects[key]?.length || 0;
                        return (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key)}
                                className={
                                    selectedCategory === key
                                        ? "px-4 py-2 rounded-full text-sm font-medium bg-[color:var(--accent)] text-white"
                                        : "px-4 py-2 rounded-full text-sm font-medium border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--muted)]"
                                }
                            >
                                {key} ({itemCount})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Project Viewer */}
            <StickyScroll content={dict.projects.projects[selectedCategory]}/>
        </div>
    );
}