'use client'

import {useTheme} from 'next-themes'
import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from 'react'

export function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-colors"
        >
            {theme === "dark" ? <Sun size={20}/> : <Moon size={20}/>}
        </button>
    )
}