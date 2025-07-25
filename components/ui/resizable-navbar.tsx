"use client";
import {cn} from "@/lib/utils";
import {IconMenu2, IconX} from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, {useRef, useState} from "react";
import Image from "next/image";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({children, className}: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollY} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 100);
    });

    return (
        <motion.div
            ref={ref}
            className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        {visible}
                    )
                    : child
            )}
        </motion.div>
    );
};

export const NavBody = ({children, className, visible}: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "40%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{minWidth: "800px"}}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
                visible
                    ? "bg-white/80 dark:bg-neutral-950/80 transition-colors"
                    : "bg-transparent dark:bg-transparent",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({items = [], className, onItemClick}: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "hidden flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 dark:text-neutral-300 transition duration-200 lg:flex",
                className
            )}
        >
            {Array.isArray(items) && items.map((item, idx) => (
                <Link
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className="relative px-4 py-2 transition-colors hover:text-black dark:hover:text-white"
                    key={`link-${idx}`}
                    href={item.link}
                >
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800 transition-colors"
                        />
                    )}
                    <span className="relative z-20">{item.name}</span>
                </Link>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({children, className, visible}: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "4px" : "2rem",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
                visible
                    ? "bg-white/80 dark:bg-neutral-950/80 transition-colors"
                    : "bg-transparent dark:bg-transparent",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({children, className}: MobileNavHeaderProps) => {
    return (
        <div className={cn("flex w-full flex-row items-center justify-between", className)}>
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
                                  children,
                                  className,
                                  isOpen,
                              }: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950 transition-colors",
                        className
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
                                    isOpen,
                                    onClick,
                                }: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return isOpen ? (
        <IconX className="text-black dark:text-white" onClick={onClick}/>
    ) : (
        <IconMenu2 className="text-black dark:text-white" onClick={onClick}/>
    );
};

export const NavbarLogo = () => {
    return (
        <Link
            href="#"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
        >
            <Image
                src="/svg/icon.svg"
                alt="logo"
                width={128}
                height={128}
                className="invert-0 dark:invert"
            />
        </Link>
    );
};