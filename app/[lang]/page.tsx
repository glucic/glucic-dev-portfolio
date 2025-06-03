// app/[lang]/page.tsx
import {getDictionary} from './dictionaries';
import {
    MainSection,
    AboutSection,
    ExperienceSection,
    ContactSection,
    FooterSection,
    SkillsSection,
} from '@/components/sections';

export async function generateStaticParams() {
    return [{lang: 'en'}, {lang: 'de'}];
}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ lang: 'en' | 'de' }>;
}) {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (
        <div>
            <MainSection dict={dict}/>
            <AboutSection dict={dict}/>
            <SkillsSection dict={dict}/>
            <ExperienceSection dict={dict}/>
            <ContactSection/>
            <FooterSection/>
        </div>
    );
}