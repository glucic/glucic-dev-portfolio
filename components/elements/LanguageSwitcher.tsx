'use client';

import {Popover} from '@headlessui/react';
import {useRouter, usePathname} from 'next/navigation';
import Flag from 'react-world-flags';
import {useEffect, useState} from 'react';

const languages = [
    {code: 'en', label: 'English', flag: 'GB'},
    {code: 'de', label: 'Deutsch', flag: 'DE'},
];

export default function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const currentLang =
        languages.find((lang) => pathname.startsWith(`/${lang.code}`)) ||
        languages[0];

    const switchLanguage = (langCode: string) => {
        const newPath = pathname.replace(/^\/(en|de)/, `/${langCode}`);
        router.push(newPath);
    };

    return (
        <Popover className="relative">
            <Popover.Button
                className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-700 transition">
                <Flag code={currentLang.flag} className="h-5 w-5"/>
                <span>{currentLang.label}</span>
            </Popover.Button>

            {/* Absolute on mobile to escape scroll area */}
            <Popover.Panel
                className={`z-50 mt-2 w-40 rounded-md shadow-lg ring-1 ring-black ring-opacity-5
          ${isMobile ? 'fixed left-4 bottom-20' : 'absolute'} 
          bg-white dark:bg-neutral-800`}
            >
                <div className="py-1">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang.code)}
                            className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-neutral-700"
                        >
                            <Flag code={lang.flag} className="h-5 w-5 mr-2"/>
                            {lang.label}
                        </button>
                    ))}
                </div>
            </Popover.Panel>
        </Popover>
    );
}