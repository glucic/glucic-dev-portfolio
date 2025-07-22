// app/[lang]/page.tsx
import {getDictionary} from './dictionaries';
import {
    NavigationBar,
    MainSection,
    AboutSection,
    ExperienceSection,
    ContactSection,
    FooterSection,
    SkillsSection,
    ProjectsSection,
} from '@/components';
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
                <NavigationBar dict={dict}/>
                <MainSection dict={dict}/>
                <AboutSection dict={dict}/>
                <SkillsSection dict={dict}/>
                <ExperienceSection dict={dict}/>
                <ProjectsSection dict={dict}/>
                <ContactSection dict={dict}/>
                <FooterSection dict={dict}/>
            </ThemeProvider>
        </div>
    );
}