import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";

const EMAIL = "javad.samadi255@gmail.com";

export default function FooterContact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative py-24 md:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="font-mono text-xs text-nexusCyan tracking-widest uppercase block mb-4">
            // Establish Connection
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-silver tracking-tighter">
            Let's Build Something
          </h2>
          <p className="mt-4 text-slate2 max-w-md mx-auto text-base leading-relaxed">
            Open to collaborations, freelance opportunities, and ambitious
            projects that push boundaries.
          </p>
        </motion.div>

        {/* Email Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mb-16">
          <button
            onClick={handleCopy}
            className="group flex items-center gap-3 px-8 py-4 bg-charcoal border border-steel hover:border-nexusCyan/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]">
            {copied ? (
              <>
                <Check size={14} className="text-nexusCyan" />
                <span className="font-mono text-sm text-nexusCyan tracking-widest uppercase">
                  Copied to Clipboard
                </span>
              </>
            ) : (
              <>
                <Copy
                  size={14}
                  className="text-slate2 group-hover:text-nexusCyan transition-colors duration-300"
                />
                <span className="font-mono text-sm text-slate2 group-hover:text-silver tracking-wide transition-colors duration-300">
                  {EMAIL}
                </span>
              </>
            )}
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-20">
          <a
            href="https://github.com/wolfwalkerpd"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 flex items-center justify-center border border-steel hover:border-nexusCyan/40 bg-charcoal hover:bg-charcoal transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]"
            aria-label="GitHub Profile">
            <Github
              size={20}
              className="text-slate2 group-hover:text-nexusCyan transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-javad-samadi-13b134222/?trk=public-profile-join-page"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 flex items-center justify-center border border-steel hover:border-nexusCyan/40 bg-charcoal hover:bg-charcoal transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]"
            aria-label="LinkedIn Profile">
            <Linkedin
              size={20}
              className="text-slate2 group-hover:text-nexusCyan transition-colors duration-300"
            />
          </a>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-steel pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-heading font-bold text-silver text-sm tracking-tight">
              Nexus Lab
            </span>
            <span className="w-px h-3 bg-steel" />
            <span className="font-mono text-xs text-steel tracking-wider">
              [v1.0.2]
            </span>
          </div>

          <span className="font-mono text-xs text-slate2 tracking-wider">
            © 2026 Nexus Lab. All rights reserved.
          </span>

          <a
            href="#hero"
            className="font-mono text-xs text-slate2 hover:text-nexusCyan transition-colors duration-300 tracking-widest uppercase flex items-center gap-1">
            Back to Top
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
