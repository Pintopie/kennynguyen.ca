"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { EXPERIENCE, EDUCATION } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";
import ScrollReveal from "@/shared/ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLElement>(".timeline-card");
        items.forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                x: -20,
                duration: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                delay: i * 0.1
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full max-w-4xl mb-24 mx-auto" id="experience">
            
            <div className="flex flex-col gap-24">
                {/* Work Experience Section */}
                <div className="space-y-10">
                    <ScrollReveal className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] ring-1 ring-[var(--primary)]/20">
                            <Briefcase size={24} />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Work History</h2>
                    </ScrollReveal>
                    
                    <div className="relative border-l ml-3.5 border-[var(--border)] space-y-12 pb-2 pl-8">
                         {/* Experience Items */}
                        {EXPERIENCE.map((job, idx) => (
                            <div key={idx} className="timeline-card relative mb-12 last:mb-0">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-[3px] border-[var(--background)] bg-[var(--primary)] shadow-sm" />
                                
                                <div className="group relative">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <h4 className="font-bold text-lg text-[var(--foreground)] leading-tight">{job.role}</h4>
                                                <p className="font-medium text-[var(--primary)] mt-1">{job.company}</p>
                                            </div>
                                            {job.logo ? (
                                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)]">
                                                    <Image src={job.logo} alt={job.company} fill className="object-cover" />
                                                </div>
                                            ) : (
                                                 <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)]">
                                                    <Building2 size={18} />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={12} />
                                                {job.startDate} — {job.endDate}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={12} />
                                                {job.location}
                                            </span>
                                        </div>
                                        
                                        {/* Card container for details */}
                                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/40 p-5 transition-all hover:bg-[var(--card)] hover:border-[var(--primary)]/20 hover:shadow-sm">
                                            <ul className="space-y-3 mb-5">
                                                {job.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]/40 group-hover:bg-[var(--primary)] transition-colors" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]/50">
                                                {job.tech.map((tech) => (
                                                    <span 
                                                        key={tech} 
                                                        className="px-2 py-1 rounded-md bg-[var(--primary)]/5 text-[var(--primary)] text-[10px] font-bold tracking-wider border border-[var(--primary)]/10"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="space-y-10">
                    <ScrollReveal className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] ring-1 ring-[var(--primary)]/20">
                            <GraduationCap size={24} />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Education</h2>
                    </ScrollReveal>

                    <div className="relative border-l ml-3.5 border-[var(--border)] space-y-12 pb-12 pl-8">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="timeline-card relative mb-12 last:mb-0">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-[3px] border-[var(--background)] bg-[var(--primary)] shadow-sm" />
                                
                                <div className="group relative">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-start gap-4">
                                             <div>
                                                <h4 className="font-bold text-lg text-[var(--foreground)] leading-tight">{edu.school}</h4>
                                                <p className="font-medium text-[var(--primary)] mt-1">{edu.degree}</p>
                                            </div>
                                            {edu.logo ? (
                                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)]">
                                                    <Image src={edu.logo} alt={edu.school} fill className="object-cover" />
                                                </div>
                                            ) : (
                                                 <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)]">
                                                    <GraduationCap size={18} />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={12} />
                                                {edu.startDate} — {edu.endDate}
                                            </span>
                                            {edu.gpa && (
                                                <span className="px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                                                    GPA: {edu.gpa}
                                                </span>
                                            )}
                                        </div>

                                        {/* Card container for details */}
                                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/40 p-5 transition-all hover:bg-[var(--card)] hover:border-[var(--primary)]/20 hover:shadow-sm">
                                            <ul className="space-y-3">
                                                {edu.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]/40 group-hover:bg-[var(--primary)] transition-colors" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
