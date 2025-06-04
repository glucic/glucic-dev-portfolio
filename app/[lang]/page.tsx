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
import {ThemeProvider} from 'next-themes';

export async function generateStaticParams() {
    return [{lang: 'en'}, {lang: 'de'}, {lang: 'hr'}];
}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ lang: 'en' | 'de' | 'hr' }>;
}) {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <MainSection dict={dict}/>
                <AboutSection dict={dict}/>
                <SkillsSection dict={dict}/>
                <ExperienceSection dict={dict}/>
                <ContactSection dict={dict}/>
                <FooterSection/>
            </ThemeProvider>
        </div>
    );
}