"use client";

import React from "react";
import { motion } from "framer-motion";
import { CURRENT_YEAR } from "@/constants";

export default function Footer() {
    return (
        <motion.footer
            className="w-full text-center text-xs text-[var(--muted-foreground)] mt-auto pt-8 border-t border-[var(--border)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            &copy; {CURRENT_YEAR} Kenny Nguyen. Built with React + Next.js, and a lot of Tim's coffee.
        </motion.footer>
    );
}
