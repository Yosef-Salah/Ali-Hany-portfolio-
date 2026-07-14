import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Keep track of the local time for a professional creative studio touch
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Selected Works', href: '#works' },
    { label: 'Branding Lab', href: '#brand-lab' },
    { label: 'Services', href: '#services' },
    { label: 'About Philosophy', href: '#about' },
    { label: 'Start Project', href: '#contact' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-brand-cream/80 backdrop-blur-md py-4 border-white/10'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            id="logo-link"
            href="#"
            className="group flex flex-col justify-start items-start font-display font-bold text-lg leading-tight tracking-tight uppercase"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-orange rounded-full animate-pulse" />
              <span className="group-hover:text-brand-orange transition-colors duration-300">
                Studio Salah
              </span>
            </div>
            <span className="font-mono text-[9px] text-brand-muted tracking-widest font-normal lowercase">
              creative direct & brand design
            </span>
          </a>

          {/* Center Info Desk - Swiss Style */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] text-brand-muted">
            <div className="flex items-center gap-2 border-r border-white/10 pr-8">
              <Globe className="w-3.5 h-3.5 animate-spin-slow text-brand-orange" />
              <span>LONDON / DUSSELDORF / GLOBAL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span>EST TIME: {timeString || '09:33:10'}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                id={`desktop-nav-item-${index}`}
                href={item.href}
                className="font-mono text-xs text-brand-dark hover:text-brand-orange transition-all duration-300 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              id="header-cta"
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 border border-brand-dark font-mono text-[11px] uppercase tracking-wider rounded-full hover:bg-brand-dark hover:text-brand-cream transition-all duration-300"
            >
              Consultation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-brand-dark/5 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[73px] bg-brand-cream z-40 border-t border-white/10 md:hidden px-6 py-12 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-brand-muted tracking-widest uppercase">
                Navigation
              </span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    id={`mobile-nav-item-${index}`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display font-medium text-3xl tracking-tight hover:text-brand-orange transition-colors duration-300 py-1 border-b border-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-12 border-t border-white/10">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="text-brand-muted">Studio Email:</span>
                <a
                  href="mailto:studio@salahdesign.com"
                  className="hover:text-brand-orange transition-colors"
                >
                  studio@salahdesign.com
                </a>
              </div>
              <a
                id="mobile-cta-button"
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-brand-dark text-brand-cream font-mono text-sm uppercase rounded-full hover:bg-brand-orange transition-all duration-300 shadow-md"
              >
                Let's Build Your Identity
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
