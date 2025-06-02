import {MainSection} from "@/components/sections/MainSection";
import React from "react";
import {AboutSection} from "@/components/sections/AboutSection";
import {NavigationBar} from "@/components/elements/NavigationBar";
import {ExperienceSection} from "@/components/sections/ExperienceSection";
import {ContactSection} from "@/components/sections/ContactSection";
import {FooterSection} from "@/components/sections/FooterSection";

export default function Portfolio() {
    return (
        <div>
            <NavigationBar/>
            <MainSection/>
            <AboutSection/>
            <ExperienceSection/>
            <ContactSection/>
            <FooterSection/>
        </div>
    );
}
