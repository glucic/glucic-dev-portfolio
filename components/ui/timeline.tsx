"use client";

import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: React.ReactNode;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            ref={containerRef}
            className="w-full bg-[var(--background)] text-[var(--foreground)] font-sans md:px-10 transition-colors"
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:gap-20">
                        {/* Sticky Left Side: Title + Marker */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[var(--card)] flex items-center justify-center transition-colors">
                                <div className="h-4 w-4 rounded-full bg-[var(--muted-foreground)] border border-[var(--border)] p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[var(--foreground)] transition-colors">
                                {item.title}
                            </h3>
                        </div>

                        {/* Right Side: Styled Content */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[var(--foreground)] transition-colors">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] shadow-md hover:shadow-lg transition">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Timeline Line */}
                <div
                    style={{ height: `${height}px` }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-[var(--border)] to-transparent"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--muted-foreground)] via-[var(--border)] to-transparent rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};