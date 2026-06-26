import React from "react";
import { ArrowDown, Send } from "lucide-react";
import { motion } from "framer-motion";
import Portrait from "@/components/portfolio/Portrait";

export default function HeroSection({ heroImage, portraitImage }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Scan Line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Faint Hero Image Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Top metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 md:mb-12"
            >
              <span className="font-mono text-xs text-slate2 tracking-widest uppercase">
                [STATUS: ACTIVE] — Full-Stack Developer
              </span>
            </motion.div>

            {/* Main Name */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="font-heading font-bold text-silver leading-none tracking-tighter">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Mohammad
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-1 md:mt-2">
                  Jawad{" "}
                  <span className="text-nexusCyan text-glow">Samadi</span>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-12 max-w-xl"
            >
              <p className="text-slate2 text-base md:text-lg leading-relaxed">
                Architecting clean, high-performance web ecosystems from frontend
                interfaces to robust backend systems. Building digital experiences
                with precision engineering.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-nexusCyan/10 border border-nexusCyan/30 text-nexusCyan font-mono text-sm uppercase tracking-widest hover:bg-nexusCyan/20 hover:border-nexusCyan/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]"
              >
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                View Work
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-steel text-slate2 font-mono text-sm uppercase tracking-widest hover:border-silver/30 hover:text-silver transition-all duration-300"
              >
                <Send size={14} />
                Contact
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:flex justify-center pb-8"
          >
            <Portrait image={portraitImage} />
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-6 md:left-8 right-6 md:right-8 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-steel" />
          <span className="font-mono text-xs text-steel tracking-wider">
            SCROLL TO EXPLORE
          </span>
          <div className="flex-1 h-px bg-steel" />
        </motion.div>
      </div>
    </section>
  );
}