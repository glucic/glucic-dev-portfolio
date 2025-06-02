// components/SkillBadge.tsx
import React from "react";
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
    SiAmazondynamodb
} from "react-icons/si";

const techConfig: Record<string, { color: string; icon: React.ReactNode }> = {
    PHP: { color: "text-purple-700", icon: <SiPhp size={30} className="text-purple-700" /> },
    Laravel: { color: "text-red-600", icon: <SiLaravel size={22} className="text-red-600" /> },
    Symfony: { color: "text-gray-700", icon: <SiSymfony size={22} className="text-gray-700" /> },
    Zend: { color: "text-gray-700", icon: <SiZend size={22} className="text-gray-700" /> },
    Postgresql: { color: "text-blue-700", icon: <SiPostgresql size={25} className="text-blue-700" /> },
    DynamoDB: { color: "text-orange-300", icon: <SiAmazondynamodb size={25} className="text-orange-300" /> },
    Docker: { color: "text-blue-800", icon: <SiDocker size={25} className="text-blue-800" /> },
    Kubernetes: { color: "text-indigo-700", icon: <SiKubernetes size={25} className="text-indigo-700" /> },
    JavaScript: { color: "text-yellow-600", icon: <SiJavascript size={25} className="text-yellow-600" /> },
    "Node.js": { color: "text-green-700", icon: <SiNodedotjs size={25} className="text-green-700" /> },
    AngularJS: { color: "text-red-700", icon: <SiAngular size={25} className="text-red-700" /> },
    Java: { color: "text-orange-700", icon: <SiSpring size={25} className="text-orange-700" /> },
    "Spring Boot": { color: "text-green-800", icon: <SiSpring size={25} className="text-green-800" /> },
    HTML: { color: "text-orange-600", icon: <SiHtml5 size={25} className="text-orange-600" /> },
    CSS: { color: "text-blue-600", icon: <SiCss3 size={25} className="text-blue-600" /> }
};

export function SkillBadge({ tech }: { tech: string }) {
    const config = techConfig[tech] || {
        color: "text-neutral-600",
        icon: null,
    };
    return (
        <div className="relative group flex items-center justify-center p-2">
            {config.icon}
            <div className="absolute bottom-full mb-2 hidden group-hover:flex px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap">
                {tech}
            </div>
        </div>
    );
}
