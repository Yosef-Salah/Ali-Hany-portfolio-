import { ArrowUp, Instagram, Linkedin, Twitter, Sparkles, Feather } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-[#888888] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/5">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-orange rounded-full animate-pulse" />
              <span className="font-display font-bold text-xl uppercase tracking-tight text-gold-gradient">
                Studio Salah
              </span>
            </div>
            <p className="font-mono text-[9px] tracking-widest uppercase text-gray-500">
              © {new Date().getFullYear()} Yosef Salah Creative. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-full hover:border-brand-orange text-brand-dark font-mono text-[10px] uppercase transition-all duration-300"
            >
              Scroll to Top
              <ArrowUp className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
            </button>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Concept statement */}
          <div className="space-y-4 md:col-span-2">
            <span className="font-mono text-[10px] text-[#f4f4f4] uppercase tracking-widest block">
              Our Vision Statement
            </span>
            <p className="font-sans font-light text-sm text-gray-400 max-w-sm leading-relaxed">
              We operate at the convergence of Swiss layout rigidity and contemporary typographic exploration, providing luxury and organic brands with high-fidelity physical and digital visual identities.
            </p>
          </div>

          {/* Column 2: Socials */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-[#f4f4f4] uppercase tracking-widest block">
              Follow Creative
            </span>
            <div className="flex flex-col gap-2 font-mono text-xs text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-1.5 transition-colors duration-300">
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-1.5 transition-colors duration-300">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-1.5 transition-colors duration-300">
                <Twitter className="w-3.5 h-3.5" />
                Twitter / X
              </a>
            </div>
          </div>

          {/* Column 3: Legal/Inquiries */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-[#f4f4f4] uppercase tracking-widest block">
              Office Hours & Inquiries
            </span>
            <div className="space-y-2 font-mono text-[11px] text-gray-400">
              <p>Mon – Fri: 09:00 – 18:00 GMT</p>
              <p>Email: studio@salahdesign.com</p>
              <p className="text-brand-orange flex items-center gap-1">
                <Feather className="w-3.5 h-3.5" />
                Open for booking Q3/Q4
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Small Print */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600 gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-brand-orange" />
            <span>Deliberately crafted with absolute grid precision.</span>
          </div>
          <div>
            <span>London Design Festival Participant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
