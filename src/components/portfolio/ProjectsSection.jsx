import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Banking system",
    description:
      "This is a Banking system technology, that is a simple example of real banking system.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/wolfwalkerpd/Banking-system",
    status: "DEPLOYED",
    image: "/financialAnalytic.png",
  },
  {
    title: "Library System",
    description:
      "A modern web application built with Next.js that allows users to discover, organize, and track their reading collections. Features a responsive UI, real-time search, and dynamic categorization for a seamless digital reading experience.",
    tech: ["PHP", "PostgreSQL", "Tailwind CSS", "REST API"],
    github: "https://github.com/wolfwalkerpd/library-university",
    status: "ACTIVE",
    image: "/library.png",
  },
  {
    title: "Live Collaborative editor",
    description:
      "A production-ready live document editing platform inspired by Google Docs, built with Next.js. Features instantaneous multi-user collaboration, presence indicators, and synchronous text editing, delivering a smooth, zero-latency desktop experience in the browser.",
    tech: ["Next.js", "TypeScript", "Postman", "Git"],
    github: "https://github.com/wolfwalkerpd/collaborative-editor",
    status: "IN DEVELOPMENT",
    image: "/live.png",
  },
  {
    title: "Hospital Appointment",
    description:
      "A modern full-stack web application built with Next.js designed to streamline patient booking and hospital workflows. Features dynamic doctor availability tracking, real-time schedule filtering, and an intuitive multi-step booking interface optimized for patient care.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/wolfwalkerpd/Hospital-appointment",
    status: "DEPLOYED",
    image: "dr.png",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative bg-charcoal border border-steel hover:border-nexusCyan/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,245,255,0.06)] flex flex-col">
      {/* Preview Image */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-steel/50">
        <div className="absolute inset-0 bg-obsidian" />
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        {/* Gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        {/* Status badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-obsidian/80 backdrop-blur-sm border border-steel">
          <span className="w-1.5 h-1.5 rounded-full bg-nexusCyan pulse-dot" />
          <span className="font-mono text-xs text-slate2 tracking-wider">
            [{project.status}]
          </span>
        </div>
        {/* GitHub icon */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-obsidian/80 backdrop-blur-sm border border-steel text-slate2 hover:text-nexusCyan hover:border-nexusCyan/40 transition-all duration-300"
          aria-label={`View ${project.title} on GitHub`}>
          <Github size={16} />
        </a>
      </div>

      {/* Content */}
      <div className="px-6 md:px-8 py-6 md:py-8 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading font-semibold text-xl md:text-2xl text-silver tracking-tight group-hover:text-nexusCyan transition-colors duration-300">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-9 h-9 flex items-center justify-center text-slate2 hover:text-nexusCyan transition-colors duration-300"
            aria-label={`Open ${project.title}`}>
            <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="mt-3 text-slate2 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-3 py-1.5 bg-obsidian border border-steel text-slate2 tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection({ projectImage }) {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-nexusCyan tracking-widest uppercase block mb-4">
              // Selected Work
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-silver tracking-tighter">
              Project Matrix
            </h2>
            <p className="mt-4 text-slate2 max-w-lg text-base leading-relaxed">
              A curated selection of production-grade applications demonstrating
              end-to-end engineering capabilities.
            </p>
          </div>
          <span className="font-mono text-xs text-steel tracking-wider">
            {projects.length} ENTRIES
          </span>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
