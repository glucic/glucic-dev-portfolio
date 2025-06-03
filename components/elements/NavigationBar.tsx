// components/elements/NavigationBar.tsx
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
        <div className="relative w-full px-3 py-10">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <div className="flex items-center gap-4">
                        <NavItems items={navItems} />
                    </div>
                    <LanguageSwitcher />
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
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="mt-4">
                            <LanguageSwitcher />
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}