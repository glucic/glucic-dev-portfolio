// components/ExperienceSection.tsx
import {Timeline} from "@/components/ui/timeline";
import {SkillBadge} from "@/components/elements/SkillBadges";
import {MapPin} from "lucide-react";

const experienceData = [
    {
        title: (
            <div className="text-3xl">
                <p>04.2025 - Present</p>
                <p className="text-2xl">Ongoing</p>
            </div>
        ),
        content: (
            <div className="text-base sm:text-lg md:text-xl">
                <div className="flex items-center gap-2 mb-1 text-2xl font-semibold">
                    <span>Intermediate Software Developer</span>
                </div>
                <p className="text-lg text-gray-600 mb-2">
                    <a href="https://www.compleet.com" target="_blank" rel="noopener noreferrer"
                       className="underline hover:text-blue-600">
                        compleet GmbH
                    </a>
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    Munich, Germany
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    <SkillBadge tech="HTML"/>
                    <SkillBadge tech="CSS"/>
                    <SkillBadge tech="PHP"/>
                    <SkillBadge tech="Laravel"/>
                    <SkillBadge tech="Symfony"/>
                    <SkillBadge tech="Postgresql"/>
                    <SkillBadge tech="Docker"/>
                    <SkillBadge tech="Kubernetes"/>
                </div>
                <p>
                    Took ownership of a Symfony-based project while also maintaining our Laravel self-contained service.
                    Balanced development of new features with critical refactoring and stability improvements.
                    Worked daily with PHP (Symfony, Laravel), containerized environments
                    (Docker, Kubernetes), and collaborated closely with product and QA teams. This role deepened my
                    understanding of service architecture and production-ready development.
                </p>
            </div>
        )
    },
    {
        title: (
            <div className="text-3xl">
                <p>03.2023 - 04.2025</p>
                <p className="text-2xl">2 Years</p>
            </div>
        ),
        content: (
            <div className="text-base sm:text-lg md:text-xl">
                <div className="flex items-center gap-2 mb-1 text-2xl font-semibold">
                    <span>Associate Software Developer</span>
                </div>
                <p className="text-lg text-gray-600 mb-2">
                    <a href="https://www.compleet.com" target="_blank" rel="noopener noreferrer"
                       className="underline hover:text-blue-600">
                        compleet GmbH
                    </a>
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    Munich, Germany
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    <SkillBadge tech="HTML"/>
                    <SkillBadge tech="CSS"/>
                    <SkillBadge tech="Java"/>
                    <SkillBadge tech="Spring Boot"/>
                    <SkillBadge tech="PHP"/>
                    <SkillBadge tech="Laravel"/>
                    <SkillBadge tech="Postgresql"/>
                    <SkillBadge tech="DynamoDB"/>
                    <SkillBadge tech="Docker"/>
                    <SkillBadge tech="Kubernetes"/>
                </div>
                <p className="mb-4">
                    Was a part of two projects focused on modernizing legacy systems. The first
                    involved building a scalable backend using Spring Boot, where I developed REST APIs and
                    authentication features, and deployed the service using Docker and Kubernetes. The application
                    followed a modern architecture and was built for high availability, integrating reliably with
                    enterprise partners like Indeed and Stepstone through custom APIs.
                </p>
                <p className="mb-4">
                    The second was a long-term Laravel project aimed at replacing a critical part of a large monolithic
                    system. It was built as a self-contained service within a growing ecosystem of modular services.
                    This system handled job creation and automated distribution to various job boards. I implemented
                    major customer-facing features, contributed to production readiness, and helped maintain a clean,
                    scalable codebase aligned with modern development and deployment practices.
                </p>
            </div>
        )
    },
    {
        title: (
            <div className="text-3xl">
                <p>07.2021 - 03.2023</p>
                <p className="text-2xl">2 Years</p>
            </div>
        ),
        content: (
            <div className="text-base sm:text-lg md:text-xl">
                <div className="flex items-center gap-2 mb-1 text-2xl font-semibold">
                    <span>Software Developer</span>
                </div>
                <p className="text-lg text-gray-600 mb-2">
                    <a href="https://www.compleet.com" target="_blank" rel="noopener noreferrer"
                       className="underline hover:text-blue-600">
                        compleet GmbH
                    </a>
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    Munich, Germany
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    <SkillBadge tech="HTML"/>
                    <SkillBadge tech="CSS"/>
                    <SkillBadge tech="PHP"/>
                    <SkillBadge tech="Zend"/>
                    <SkillBadge tech="Postgresql"/>
                    <SkillBadge tech="Docker"/>
                </div>
                <p className="mb-4">
                    Worked on B2B web platforms in the recruiting and workforce management domain. Focused on
                    maintaining and extending a legacy PHP application using the Zend Framework. Refactored older
                    modules for better code quality, implemented new features, and fixed bugs. Took part in
                    transitioning parts of the monolith to containerized microservices with Docker and integrated APIs
                    and PostgreSQL models.
                </p>
            </div>
        )
    },
    {
        title: (
            <div className="text-3xl">
                <p>08.2018 - 07.2021</p>
                <p className="text-2xl">3 Years</p>
            </div>
        ),
        content: (
            <div className="text-base sm:text-lg md:text-xl">
                <div className="flex items-center gap-2 mb-1 text-2xl font-semibold">
                    <span>Intern (Apprenticeship)</span>
                </div>
                <p className="text-lg text-gray-600 mb-2">
                    <a href="https://www.compleet.com" target="_blank" rel="noopener noreferrer"
                       className="underline hover:text-blue-600">
                        compleet GmbH (formerly GermanPersonnel e-search GmbH)
                    </a>
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    Munich, Germany
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    <SkillBadge tech="HTML"/>
                    <SkillBadge tech="CSS"/>
                    <SkillBadge tech="PHP"/>
                    <SkillBadge tech="JavaScript"/>
                    <SkillBadge tech="AngularJS"/>
                    <SkillBadge tech="Postgresql"/>
                </div>
                <p className="mb-4">
                    Completed a three-year apprenticeship while studying, developing a full-stack application with Zend,
                    AngularJS, and PostgreSQL. Learned the fundamentals of end-to-end software development and Agile
                    methodologies, gaining experience in diverse technical environments.
                </p>
            </div>
        )
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="w-full px-6 py-12 max-w-7xl mx-auto">
            <Timeline data={experienceData}/>
        </section>
    );
}