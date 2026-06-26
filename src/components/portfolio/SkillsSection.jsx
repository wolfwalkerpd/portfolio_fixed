import React from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Core Stack",
    tag: "[PRIMARY]",
    icon: Cpu,
    active: true,
    skills: [
      { name: "Next.js", detail: "v14+ / App Router" },
      { name: "TypeScript", detail: "Strict Mode" },
      { name: "Tailwind CSS", detail: "v3.x / Custom Design Systems" },
    ],
  },
  {
    title: "Backend & Database",
    tag: "[INFRASTRUCTURE]",
    icon: Database,
    active: false,
    skills: [
      { name: "PostgreSQL", detail: "Relations / Indexing / Optimization" },
      { name: "PHP", detail: "Laravel / API Development" },
    ],
  },
  {
    title: "Tools",
    tag: "[UTILITIES]",
    icon: Wrench,
    active: false,
    skills: [
      { name: "Postman", detail: "API Testing & Documentation" },
      { name: "Git", detail: "Version Control / CI Workflows" },
    ],
  },
];

function SkillCard({ group, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-charcoal border border-steel hover:border-nexusCyan/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,255,0.08)] p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <group.icon size={16} className="text-nexusCyan opacity-70" />
          <h3 className="font-heading font-semibold text-silver text-lg tracking-tight">
            {group.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {group.active && (
            <span className="w-1.5 h-1.5 rounded-full bg-nexusCyan pulse-dot" />
          )}
          <span className="font-mono text-xs text-steel tracking-wider">
            {group.tag}
          </span>
        </div>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-baseline justify-between border-b border-steel/50 pb-3 last:border-0 last:pb-0">
            <span className="text-silver font-medium text-sm">
              {skill.name}
            </span>
            <span className="font-mono text-xs text-slate2 tracking-wide">
              {skill.detail}
            </span>
          </div>
        ))}
      </div>

      {/* Module count */}
      <div className="mt-6 pt-4 border-t border-steel/30">
        <span className="font-mono text-xs text-steel">
          {group.skills.length} MODULES LOADED
        </span>
      </div>
    </motion.article>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20">
          <span className="font-mono text-xs text-nexusCyan tracking-widest uppercase block mb-4">
            // Technical Expertise
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-silver tracking-tighter">
            System Architecture
          </h2>
          <p className="mt-4 text-slate2 max-w-lg text-base leading-relaxed">
            A comprehensive toolkit engineered for building scalable,
            maintainable, and high-performance web applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
