"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItemProps {
    title: string;
    role: React.ReactNode;
    children: React.ReactNode;
    collapsible?: boolean;
    link?: string;
    linkLabel?: string;
    date?: string;
    collapsedHeight?: string;
}

export function ExperienceItem({ title, role, children, collapsible = false, link, linkLabel = "↗", date, collapsedHeight = "max-h-20" }: ExperienceItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="group">
            <div className="mb-2 flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-black dark:text-white">{title}</span>
                    {date && (
                        <span className="rounded-full border border-gray-200 dark:border-gray-800 px-2 py-0.5 text-[10px] font-medium text-gray-400 dark:text-gray-500 tabular-nums">
                            {date}
                        </span>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 dark:text-gray-500 underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors"
                        >
                            {linkLabel}
                        </a>
                    )}
                </div>
                {role && <span className="text-sm text-gray-400 dark:text-gray-500">{role}</span>}
            </div>

            <div className={`relative max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-400 transition-all duration-300 ${!isExpanded && collapsible ? `${collapsedHeight} overflow-hidden` : ""}`}>
                {children}
                {collapsible && !isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent" />
                )}
            </div>

            {collapsible && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                >
                    {isExpanded ? (
                        <>
                            View Less <ChevronUp className="h-3 w-3" />
                        </>
                    ) : (
                        <>
                            View More <ChevronDown className="h-3 w-3" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
}
