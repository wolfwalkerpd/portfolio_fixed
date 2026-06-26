import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/90 backdrop-blur-md border-b border-steel"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2"
        >
          <span className="w-9 h-9 flex items-center justify-center border border-steel group-hover:border-nexusCyan/50 transition-colors duration-300">
            <span className="font-heading font-bold text-nexusCyan text-lg leading-none">
              J
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-slate2 hover:text-nexusCyan transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-nexusCyan group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <span className="w-px h-4 bg-steel" />
          <span className="font-mono text-xs text-steel tracking-wider">
            [v1.0.2]
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-slate2 hover:text-nexusCyan transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-md border-t border-steel">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-slate2 hover:text-nexusCyan transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}