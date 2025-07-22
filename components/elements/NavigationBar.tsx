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



export function NavigationBar({ navItems = [] }: { navItems?: Array<{ label: string; href: string }> }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full px-3 py-4 sm:py-6 md:py-10 bg-[var(--background)] text-[var(--foreground)] transition-colors">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <div className="flex items-center gap-4">
                        <NavItems items={Array.isArray(navItems) ? navItems.map(item => ({ name: item.label, link: item.href })) : []} />
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
                        {Array.isArray(navItems) && navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-base text-[var(--muted-foreground)] py-2 transition-colors hover:text-[var(--foreground)]"
                            >
                                {item.label}
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