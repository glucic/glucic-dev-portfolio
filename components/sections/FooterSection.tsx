import {NavBody, NavItems} from "@/components/ui/resizable-navbar";
import React from "react";
import {navItems} from "@/components/elements/NavigationBar";

export const FooterSection = () => {
    return (
        <footer className="w-full border-t border-gray-200 bg-white dark:bg-gray-900 px-6 py-6">
            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Gabriel Lucic — Software Engineer | Based in München, Germany
                </p>

                <div className="flex justify-center md:justify-end">
                    <NavBody>
                        <div className="flex flex-wrap gap-4">
                            <NavItems items={navItems}/>
                        </div>
                    </NavBody>
                </div>
            </div>
        </footer>
    );
};