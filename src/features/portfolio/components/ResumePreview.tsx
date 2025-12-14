"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumePreviewProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumePreview({ isOpen, onClose }: ResumePreviewProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="bg-[var(--card)]/90 border border-[var(--border)] rounded-2xl shadow-xl p-8 max-w-2xl w-full relative flex flex-col items-center mx-4"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <motion.button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            whileTap={{ scale: 0.85 }}
                        >
                            &times;
                        </motion.button>
                        <motion.h3
                            className="text-xl font-bold mb-4 text-[var(--primary)]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            My Resume
                        </motion.h3>
                        <motion.iframe
                            src="/resumes/resume.pdf"
                            className="w-full h-96 rounded shadow"
                            title="Resume Preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.a
                            href="/resumes/resume.pdf"
                            download
                            className="btn btn-primary mt-4"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download PDF
                        </motion.a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
