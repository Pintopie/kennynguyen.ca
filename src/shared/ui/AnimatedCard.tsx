"use client";

import React from "react";
import { motion } from "framer-motion";
import { cardVariants } from "@/constants";

export default function AnimatedCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                ...cardVariants,
                visible: {
                    ...cardVariants.visible,
                    transition: { ...cardVariants.visible.transition, delay },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
