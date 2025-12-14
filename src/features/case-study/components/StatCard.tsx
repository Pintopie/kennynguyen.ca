import React from "react";

interface StatCardProps {
    value: string;
    label: string;
    caption?: string;
}

export function StatCard({ value, label, caption }: StatCardProps) {
    return (
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col justify-center h-full">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
            <div className="text-lg font-semibold text-foreground mb-1">{label}</div>
            {caption && <div className="text-sm text-muted-foreground">{caption}</div>}
        </div>
    );
}
