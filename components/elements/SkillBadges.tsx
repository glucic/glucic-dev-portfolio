'use client';

import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
    SiPhp,
    SiLaravel,
    SiSymfony,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiJavascript,
    SiNodedotjs,
    SiAngular,
    SiSpring,
    SiHtml5,
    SiCss3,
    SiZend,
    SiAmazondynamodb,
    SiTailwindcss,
} from 'react-icons/si';
import Image from 'next/image';

const techConfig: Record<string, { color: string; icon: React.ReactNode }> = {
    PHP: {
        color: "text-[#8892BF]", // PHP purple
        icon: <SiPhp size={30}/>,
    },
    Laravel: {
        color: "text-[#FF2D20]", // Laravel red
        icon: <SiLaravel size={22}/>,
    },
    Symfony: {
        color: "text-[#000000]", // Symfony black
        icon: <SiSymfony size={22}/>,
    },
    Zend: {
        color: "text-[#68B604]", // Zend green
        icon: <SiZend size={22}/>,
    },
    Postgresql: {
        color: "text-[#336791]", // PostgreSQL blue
        icon: <SiPostgresql size={25}/>,
    },
    DynamoDB: {
        color: "text-[#4053D6]", // AWS blue
        icon: <SiAmazondynamodb size={25}/>,
    },
    Docker: {
        color: "text-[#2496ED]", // Docker blue
        icon: <SiDocker size={25}/>,
    },
    Kubernetes: {
        color: "text-[#326CE5]", // Kubernetes blue
        icon: <SiKubernetes size={25}/>,
    },
    JavaScript: {
        color: "text-[#F7DF1E]", // JS yellow
        icon: <SiJavascript size={25}/>,
    },
    NodeJs: {
        color: "text-[#339933]", // Node.js green
        icon: <SiNodedotjs size={25}/>,
    },
    AngularJS: {
        color: "text-[#DD0031]", // Angular red
        icon: <SiAngular size={25}/>,
    },
    Java: {
        color: "text-[#007396]", // Java blue
        icon: <SiSpring size={25}/>,
    },
    Spring: {
        color: "text-[#6DB33F]", // Spring green
        icon: <SiSpring size={25}/>,
    },
    HTML: {
        color: "text-[#E34F26]", // HTML orange
        icon: <SiHtml5 size={25}/>,
    },
    CSS: {
        color: "text-[#1572B6]", // CSS blue
        icon: <SiCss3 size={25}/>,
    },
    Tailwind: {
        color: "text-[#38BDF8]", // Tailwind blue
        icon: <SiTailwindcss size={25}/>,
    },
    NextJS: {
        color: "text-black",
        icon:
            <Image
                src="/svg/nextjs.svg"
                alt="Next.js"
                width={25}
                height={25}
            />
    },
};

export function SkillBadge({tech}: { tech: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const config = techConfig[tech] || {
        color: 'text-neutral-600',
        icon: null,
    };

    return (
        <div
            className="relative flex items-center justify-center p-2 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{opacity: 0, y: 8, scale: 0.9}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: 8, scale: 0.9}}
                        transition={{type: 'spring', stiffness: 300, damping: 20}}
                        className="absolute bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap z-10 shadow-xl"
                    >
                        {tech}
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className={`transition-transform duration-300 group-hover:scale-110 ${config.color}`}
            >
                {config.icon}
            </div>
        </div>
    );
}