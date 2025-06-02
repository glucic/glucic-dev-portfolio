// app/[lang]/page.tsx
import {getDictionary} from './dictionaries';
import {
    MainSection,
    AboutSection,
    ExperienceSection,
    ContactSection,
    FooterSection,
} from '@/components/sections';
import {NavigationBar} from "@/components/elements/NavigationBar";

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
            <NavigationBar />
            <MainSection dict={dict}/>
            <AboutSection dict={dict}/>
            <ExperienceSection/>
            <ContactSection/>
            <FooterSection/>
        </div>
    );
}