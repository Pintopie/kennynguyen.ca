import React from "react";

interface InsightCardProps {
    insight: string;
    evidence: string;
    implication: string;
    icon?: React.ReactNode;
}

export function InsightCard({ insight, evidence, implication, icon }: InsightCardProps) {
    return (
        <div className="h-full p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col gap-4">
            {icon && <div className="text-primary mb-2">{icon}</div>}
            <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-1">Insight</h4>
                <h3 className="text-xl font-bold">{insight}</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4 mt-auto">
                <div className="pl-4 border-l-2 border-primary/30">
                    <span className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Evidence</span>
                    <p className="text-sm text-foreground/80">{evidence}</p>
                </div>
                <div className="pl-4 border-l-2 border-primary">
                    <span className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Implication</span>
                    <p className="text-sm font-medium text-foreground">{implication}</p>
                </div>
            </div>
        </div>
    );
}
