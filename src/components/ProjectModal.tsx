import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Disable scrolling on background body when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const handleCopyColor = (colorHex: string) => {
    navigator.clipboard.writeText(colorHex);
    setCopiedColor(colorHex);
    setTimeout(() => {
      setCopiedColor(null);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Drawer Sheet */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="relative w-full max-w-4xl h-full bg-[#0c0c0c] border-l border-white/10 shadow-2xl overflow-y-auto flex flex-col z-10"
        >
          {/* Header Actions sticky */}
          <div className="sticky top-0 bg-[#0c0c0c]/90 backdrop-blur-md z-20 flex justify-between items-center px-6 md:px-12 py-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-brand-muted uppercase">
                Project Detail /
              </span>
              <span className="font-mono text-xs font-semibold uppercase text-brand-orange">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="group flex items-center gap-2 px-3 py-1.5 border border-white/10 hover:border-brand-orange text-brand-dark rounded-full font-mono text-[11px] uppercase transition-all duration-300"
            >
              Close Case
              <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Large Hero Image */}
          <div className="relative w-full aspect-[21/9] md:aspect-[16/6] bg-[#121212] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 md:left-12 text-[#f4f4f4]">
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight uppercase text-gold-gradient">
                {project.title}
              </h2>
              <p className="font-mono text-[11px] tracking-widest uppercase mt-2 text-brand-muted">
                CLIENT: {project.client} — YEAR: {project.year}
              </p>
            </div>
          </div>

          {/* Content Body Grid */}
          <div className="px-6 md:px-12 py-10 space-y-12">
            {/* Project Overview metadata block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-brand-orange font-bold">
                  The Creative Brief & Concept
                </h3>
                <p className="font-sans text-brand-dark text-lg font-light leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Side Info Panel */}
              <div className="space-y-6 bg-[#121212] border border-white/5 p-6 rounded-2xl shadow-xl">
                <div>
                  <span className="font-mono text-[9px] text-brand-muted uppercase tracking-widest block mb-1">
                    My Role
                  </span>
                  <span className="font-sans text-sm font-medium text-[#f4f4f4]">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-brand-muted uppercase tracking-widest block mb-1">
                    Core Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[9px] bg-white/[0.03] text-brand-orange px-2 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.metrics && (
                  <div className="pt-4 border-t border-white/5 flex flex-col justify-start">
                    <span className="font-mono text-[9px] text-brand-orange uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      Key Result
                    </span>
                    <span className="font-display font-bold text-3xl text-brand-orange mt-1">
                      {project.metrics.value}
                    </span>
                    <span className="font-sans text-[11px] text-brand-muted">
                      {project.metrics.label}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Design System Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand Color Guide */}
              <div className="space-y-4">
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-muted font-bold">
                  Brand Color Palette
                </h4>
                <p className="text-xs text-brand-muted">
                  Click on any swatch below to copy its HEX value to clipboard.
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {project.brandColors.map((colorHex, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyColor(colorHex)}
                      className="group flex flex-col items-center gap-2 p-1.5 bg-[#121212] border border-white/5 rounded-xl hover:border-brand-orange transition-all duration-300"
                    >
                      <div
                        className="w-full aspect-square rounded-lg shadow-inner"
                        style={{ backgroundColor: colorHex }}
                      />
                      <span className="font-mono text-[10px] text-[#f4f4f4]/80 font-medium uppercase tracking-tight flex items-center gap-1">
                        {copiedColor === colorHex ? (
                          <Check className="w-3 h-3 text-brand-orange" />
                        ) : (
                          <Copy className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                        {colorHex}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography Guide */}
              <div className="space-y-4">
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-muted font-bold">
                  Typography Pairing
                </h4>
                <div className="bg-[#121212] border border-white/5 p-5 rounded-2xl space-y-4 shadow-xl">
                  {project.typography.map((font, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between pb-3 border-b border-white/5 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <span className="font-mono text-[9px] text-brand-muted tracking-widest block uppercase">
                          {idx === 0 ? 'Primary Font' : 'Supporting Font'}
                        </span>
                        <span className="font-display font-medium text-[#f4f4f4]">
                          {font}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-brand-orange bg-brand-orange/5 px-2.5 py-1 rounded">
                        Aa Bb Cc 1-9
                      </span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <p className="text-[11px] font-mono leading-relaxed text-brand-muted italic">
                      "Design is intelligence made visible."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase Secondary Gallery */}
            <div className="space-y-6 pt-6">
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-brand-muted font-bold">
                Additional Collateral & Context
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.secondaryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#121212] border border-white/10"
                  >
                    <img
                      src={imgUrl}
                      alt={`Collateral view ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout CTA */}
            <div className="bg-[#121212] border border-white/5 text-[#f4f4f4] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 mt-12 shadow-2xl">
              <div className="space-y-2 text-center md:text-left">
                <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest font-bold">
                  Inspired by this case study?
                </span>
                <h4 className="font-display font-semibold text-2xl tracking-tight text-gold-gradient">
                  Let's craft your custom aesthetic.
                </h4>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 bg-brand-orange text-[#080808] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#f4f4f4] transition-all duration-300 shadow-lg shrink-0 font-bold"
              >
                Start Collaborating
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
