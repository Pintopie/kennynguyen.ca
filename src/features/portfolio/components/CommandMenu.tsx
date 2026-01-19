"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";
import { NAV_LINKS, containerVariants, itemVariants } from "@/constants";

type CommandItem = {
    label: string;
    description: string;
    action: () => void;
    shortcut?: string;
    chips?: string[];
    feedback?: string;
};

interface CommandMenuProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
    onOpenResume: () => void;
}

export default function CommandMenu({ dark, setDark, onOpenResume }: CommandMenuProps) {
    const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
    const [commandQuery, setCommandQuery] = useState("");
    const [focusedCommandIndex, setFocusedCommandIndex] = useState(0);
    const [commandFeedback, setCommandFeedback] = useState("");
    const commandFeedbackTimeout = useRef<NodeJS.Timeout | null>(null);

    useHotkeys("cmd+k,ctrl+k", (e) => {
        e.preventDefault();
        setCommandPaletteOpen((v) => !v);
        setCommandQuery("");
        setFocusedCommandIndex(0);
    });

    const commandItems = useMemo<CommandItem[]>(() => {
        const sectionCommands = NAV_LINKS.map((link) => ({
            label: `Jump to ${link.label}`,
            description: `Scroll to #${link.href.replace("#", "")}`,
            shortcut: link.label.charAt(0).toUpperCase(),
            action: () => {
                const el = document.querySelector(link.href);
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
            },
        }));

        return [
            ...sectionCommands,
            {
                label: "Open GitHub",
                description: "github.com/Pintopie",
                shortcut: "G",
                action: () => window.open("https://github.com/Pintopie", "_blank"),
            },
            {
                label: "Open LinkedIn",
                description: "linkedin.com/in/kennyngdev-ca",
                shortcut: "L",
                action: () => window.open("https://www.linkedin.com/in/kennyngdev-ca/", "_blank"),
            },
            {
                label: "Toggle theme",
                description: dark ? "Switch to light" : "Switch to dark",
                shortcut: "D",
                action: () => setDark((d) => !d),
            },
            {
                label: "Preview resume",
                description: "Open inline resume modal",
                shortcut: "R",
                action: () => onOpenResume(),
            },
            {
                label: "Copy LinkedIn",
                description: "Copy linkedin.com/in/kennyngdev-ca",
                shortcut: "C",
                feedback: "LinkedIn URL copied",
                action: () => {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText("https://www.linkedin.com/in/kennyngdev-ca/");
                    }
                },
            },
        ];
    }, [dark, setDark, onOpenResume]);

    const filteredCommands = useMemo(() => {
        if (!commandQuery.trim()) return commandItems;
        return commandItems.filter((cmd) =>
            `${cmd.label} ${cmd.description}`.toLowerCase().includes(commandQuery.trim().toLowerCase())
        );
    }, [commandItems, commandQuery]);

    const handleCommandRun = useCallback((cmd: CommandItem) => {
        cmd.action();
        if (commandFeedbackTimeout.current) {
            clearTimeout(commandFeedbackTimeout.current);
        }
        if (cmd.feedback) {
            setCommandFeedback(cmd.feedback);
            commandFeedbackTimeout.current = setTimeout(() => setCommandFeedback(""), 2000);
        }
        setCommandPaletteOpen(false);
        setCommandQuery("");
    }, []);

    useEffect(() => {
        setFocusedCommandIndex(0);
    }, [commandQuery, commandPaletteOpen]);

    useEffect(() => {
        return () => {
            if (commandFeedbackTimeout.current) {
                clearTimeout(commandFeedbackTimeout.current);
            }
        };
    }, []);

    const handleCommandKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!filteredCommands.length) return;
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setFocusedCommandIndex((idx) => Math.min(idx + 1, filteredCommands.length - 1));
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setFocusedCommandIndex((idx) => Math.max(idx - 1, 0));
        } else if (event.key === "Enter") {
            event.preventDefault();
            handleCommandRun(filteredCommands[focusedCommandIndex]);
        } else if (event.key === "Escape") {
            setCommandPaletteOpen(false);
        }
    };

    return (
        <AnimatePresence>
            {commandPaletteOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setCommandPaletteOpen(false)}
                >
                    <motion.div
                        className="bg-[var(--card)]/95 border border-[var(--border)] rounded-2xl shadow-xl p-6 max-w-lg w-full relative mx-4"
                        initial={{ opacity: 0, scale: 0.9, y: -30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.button
                            onClick={() => setCommandPaletteOpen(false)}
                            className="absolute top-3 right-3 text-xl text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            whileTap={{ scale: 0.85 }}
                        >
                            &times;
                        </motion.button>
                        <motion.h3
                            className="text-lg font-bold mb-2 text-[var(--primary)] flex items-center gap-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                        >
                            <Command size={16} /> Command Palette
                        </motion.h3>
                        <motion.input
                            className="w-full px-3 py-2 rounded bg-[var(--background)] border border-[var(--border)] mb-3"
                            placeholder="Type a command or page..."
                            autoFocus
                            value={commandQuery}
                            onChange={(event) => setCommandQuery(event.target.value)}
                            onKeyDown={handleCommandKeyDown}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        />
                        <motion.div
                            className="space-y-2 max-h-64 overflow-y-auto"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {filteredCommands.length === 0 && (
                                <p className="text-sm text-[var(--muted-foreground)]">No commands found.</p>
                            )}
                            {filteredCommands.map((cmd, idx) => (
                                <motion.button
                                    key={cmd.label}
                                    className={`w-full text-left rounded-xl border border-[var(--border)] px-4 py-3 text-sm flex items-start justify-between gap-3 transition-colors ${idx === focusedCommandIndex ? "bg-primary/10" : "bg-[var(--card)]/80"
                                        }`}
                                    onClick={() => handleCommandRun(cmd)}
                                    variants={itemVariants}
                                    whileHover={{ backgroundColor: "var(--primary)", opacity: 0.1, x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div>
                                        <p className="font-semibold">{cmd.label}</p>
                                        <p className="text-xs text-[var(--muted-foreground)]">{cmd.description}</p>
                                    </div>
                                    {cmd.shortcut && (
                                        <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                                            {cmd.shortcut}
                                        </span>
                                    )}
                                </motion.button>
                            ))}
                        </motion.div>
                        <motion.div
                            className="text-xs text-[var(--muted-foreground)] mt-3 flex justify-between"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span>Press Esc to close • Enter to run</span>
                            <motion.span
                                key={commandFeedback}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                {commandFeedback}
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
