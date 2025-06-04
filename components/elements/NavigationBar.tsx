'use client';

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    NavbarLogo,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import LanguageSwitcher from '@/components/elements/LanguageSwitcher';
import { ThemeToggle } from "@/components/elements/ThemeToggle";

export const navItems = [
    {
        name: 'About',
        link: '#about',
    },
    {
        name: 'Skills',
        link: '#skills'
    },
    {
        name: 'Experience',
        link: '#experience',
    },
    {
        name: 'Contact',
        link: '#contact',
    },
];

export function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full px-3 py-4 sm:py-6 md:py-10 bg-[var(--background)] text-[var(--foreground)] transition-colors">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <div className="flex items-center gap-4">
                        <NavItems items={navItems} />
                    </div>
                    <div className="flex flex-row gap-5">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <NavbarLogo />
                    <MobileNavHeader>
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        className="max-h-[75vh] overflow-y-auto px-4 pt-4 pb-6 bg-[var(--background)] text-[var(--foreground)] rounded-lg transition-colors"
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-base text-[var(--muted-foreground)] py-2 transition-colors hover:text-[var(--foreground)]"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex flex-row mt-4 gap-5">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}