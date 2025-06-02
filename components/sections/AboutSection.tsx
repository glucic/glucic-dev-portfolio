// components/AboutSection.tsx
import Image from "next/image";
import { SkillBadge } from "@/components/elements/SkillBadges";

export function AboutSection() {
    const skills = [
        "PHP",
        "Laravel",
        "Symfony",
        "Postgresql",
        "Docker",
        "Kubernetes",
        "JavaScript",
        "AngularJS",
        "Java",
        "Spring Boot"
    ];

    return (
        <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-12 max-w-7xl mx-auto">
            <div className="flex-1 text-center md:text-left">
                <h2 className="roboto-bold text-3xl sm:text-4xl md:text-5xl mb-2">Gabriel Lucic</h2>
                <p className="roboto-thin text-xl sm:text-2xl text-gray-700 mb-4">Full Stack Software Engineer</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                    {skills.map((tech, idx) => (
                        <SkillBadge key={idx} tech={tech} />
                    ))}
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                    I'm an experienced Software Developer with over 7 years of hands-on experience in backend development, primarily using PHP and Laravel. I have a strong foundation in building and maintaining scalable systems within structured, agile teams.
                    <br /><br />
                    I'm highly proficient with technologies like PHP, Laravel, Symfony, PostgreSQL, Docker, and Kubernetes, and have additional experience working with JavaScript, Node.js, Java, Spring Boot, and AngularJS.
                    <br /><br />
                    Beyond technical skills, I bring a strong sense of ownership, a deep understanding of clean and maintainable code, and the ability to contribute to long-term software architecture. I’ve collaborated across teams, participated in migrating legacy monoliths into modern systems, and worked closely with UX teams to ensure user-centered solutions.
                    <br /><br />
                    Fluent in English, German, and Croatian, I thrive in multicultural environments and agile workflows. My ambition is to grow into a Lead Software Architect role, where I can take a broader responsibility for the design and evolution of complex systems.
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