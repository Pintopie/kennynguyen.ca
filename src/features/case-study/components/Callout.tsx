import React, { ReactNode } from "react";

interface CalloutProps {
    children: ReactNode;
    type?: "quote" | "info" | "highlight";
}

export function Callout({ children, type = "info" }: CalloutProps) {
    const styles = {
        quote: "border-l-4 border-primary bg-primary/5 italic",
        info: "bg-muted rounded-xl",
        highlight: "bg-secondary/20 border border-secondary rounded-xl",
    };

    return <div className={`p-6 md:p-8 ${styles[type]} text-lg md:text-xl leading-relaxed`}>{children}</div>;
}
