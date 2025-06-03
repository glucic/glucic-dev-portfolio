import {NavBody, NavItems} from "@/components/ui/resizable-navbar";
import React from "react";
import {navItems} from "@/components/elements/NavigationBar";

export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-gray-200 bg-white dark:bg-gray-900 px-4 sm:px-6 py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* Text */}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                    &copy; Copyright {currentYear} Gabriel Lucic
                </p>

                {/* Navigation */}
                <nav aria-label="Footer navigation" className="w-full md:w-auto md:ml-auto">
                    <NavBody>
                        <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                            <NavItems items={navItems}/>
                        </ul>
                    </NavBody>
                </nav>
            </div>
        </footer>
    );
};