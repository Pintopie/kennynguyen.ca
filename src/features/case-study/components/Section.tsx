import React, { ReactNode } from "react";
// If @/lib/utils doesn't exist, I will create it or valid code without it. 
// Let's assume standard Next.js shadcn structure or similar. 
// To be safe I will implement a local 'cn' if needed or just use template literals.
// Checking file list earlier showed no 'lib', so I will use template literals mostly or clsx if available.
// Actually, I'll just keep it simple.

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    eyebrow?: string;
}

export function Section({ children, id, className = "", title, eyebrow }: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
            {(title || eyebrow) && (
                <div className="mb-12 md:mb-16 max-w-3xl">
                    {eyebrow && (
                        <span className="block text-sm font-mono uppercase tracking-widest text-primary mb-3">
                            {eyebrow}
                        </span>
                    )}
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {title}
                        </h2>
                    )}
                </div>
            )}
            {children}
        </section>
    );
}
