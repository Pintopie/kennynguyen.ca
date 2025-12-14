import React from "react";

interface TimelineItem {
    phase: string;
    duration: string;
    desc: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-between border-t border-border pt-8 mt-8">
            {items.map((item, idx) => (
                <div key={idx} className="flex-1">
                    <div className="text-sm font-mono text-muted-foreground mb-1">{item.duration}</div>
                    <div className="font-bold text-lg mb-2">{item.phase}</div>
                    <div className="text-sm text-foreground/80">{item.desc}</div>
                </div>
            ))}
        </div>
    );
}
