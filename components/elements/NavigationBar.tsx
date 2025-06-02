"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu, NavbarLogo,
} from "@/components/ui/resizable-navbar";
import {useState} from "react";

export const navItems = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Contact",
        link: "#contact",
    }
];

export function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full px-3 py-10">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo/>
                    <div className="flex items-center gap-4">
                        <NavItems items={navItems}/>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <NavbarLogo/>
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
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}