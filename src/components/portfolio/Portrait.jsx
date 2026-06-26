import React from "react";
import { User } from "lucide-react";

export default function Portrait({ image }) {
  return (
    <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] md:w-[340px] md:h-[420px]">
      {/* Frame */}
      <div className="absolute inset-0 border border-steel" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Corner accents */}
      <span className="absolute -top-px -left-px w-4 h-4 border-t border-l border-nexusCyan/60" />
      <span className="absolute -top-px -right-px w-4 h-4 border-t border-r border-nexusCyan/60" />
      <span className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-nexusCyan/60" />
      <span className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-nexusCyan/60" />

      {/* Image or placeholder */}
      {image ? (
        <img
          src={image}
          alt="Mohammad Jawad Samadi"
          className="relative w-full h-full object-contain"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <User size={32} className="text-steel" />
          <span className="font-mono text-xs text-steel tracking-widest uppercase">
            [Portrait]
          </span>
        </div>
      )}

      {/* Metadata label */}
      <span className="absolute -bottom-7 left-0 font-mono text-xs text-steel tracking-wider">
        [SUBJECT: M.J.S]
      </span>
    </div>
  );
}