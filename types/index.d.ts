export interface MainSectionDict {
    main: {
        title: string;
        subtitle: string;
        typewriterSubtitle: Array<{
            text: string;
            className?: string;
        }>;
        location: string;
        downloadCV: string;
        contactMe: string;
    };
}

export interface AboutSectionDict {
    about: {
        name: string;
        role: string;
        intro: string;
        experience: string;
        goals: string;
    };
}

export interface ExperienceSectionDict {
    experience: {
        headline: string;
        subtext?: string;
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

export interface SkillsSectionDict {
    skills: {
        headline: string;
        subtext: string;
        skills: Array<{
            title: string;
            description: string;
            icon: string;
            tech?: Array<string>;
        }>;
    };
}

export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectItem {
    title: string;
    description: string;
    tech: string[];
    imageUrl?: string;
    links: ProjectLink[];
}

export interface ProjectsSectionDict {
    projects: {
        headline: string;
        subtext: string;
        projects: {
            [category: string]: ProjectItem[];
        };
    };
}