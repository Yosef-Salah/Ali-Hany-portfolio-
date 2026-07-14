import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Compass,
  BookOpen,
  Box,
  Monitor,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import BrandLab from './components/BrandLab';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { projects, services, testimonials } from './data';
import { Project } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'ERP' | 'Backend' | 'Frontend' | 'Graphics' | 'Systems'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories: ('All' | 'ERP' | 'Backend' | 'Frontend' | 'Graphics' | 'Systems')[] = [
    'All',
    'ERP',
    'Backend',
    'Frontend',
    'Graphics',
    'Systems',
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-brand-cream relative">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden border-b border-white/5"
      >
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />

        {/* Ambient background shapes */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-orange/2 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center h-full">
          {/* Subtle tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-2.5 py-1 bg-white/[0.04] text-brand-orange text-[10px] font-mono uppercase tracking-widest rounded border border-white/5">
              Enterprise ERP & Software Systems
            </span>
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-ping" />
          </motion.div>

          {/* Main Display Headline */}
          <div className="space-y-4 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#f4f4f4] uppercase"
            >
              We engineer <span className="text-gold-gradient">robust</span> digital systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-muted text-base md:text-xl font-sans max-w-2xl font-light leading-relaxed pt-2"
            >
              Computer Science student and software engineer specializing in custom ERP architectures, robust backend workflows, database design, and interactive graphics pipelines.
            </motion.p>
          </div>

          {/* Call to Actions & Fine print */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-12"
          >
            <a
              id="hero-cta-works"
              href="#works"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-[#080808] font-bold hover:bg-[#f4f4f4] font-mono text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl group cursor-pointer"
            >
              Examine Technical Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              id="hero-cta-contact"
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-brand-orange text-[#f4f4f4] hover:bg-white/[0.02] font-mono text-xs uppercase tracking-wider rounded-full transition-all duration-300"
            >
              Initiate Collaboration
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Quick Metrics Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/5 font-mono"
          >
            <div>
              <span className="text-brand-muted text-[10px] block uppercase tracking-wider">PRACTICAL PROJECTS</span>
              <span className="text-2xl font-semibold text-[#f4f4f4]">5+ Complex Systems</span>
            </div>
            <div>
              <span className="text-brand-muted text-[10px] block uppercase tracking-wider">ACADEMIC EXCELLENCE</span>
              <span className="text-2xl font-semibold text-[#f4f4f4]">3.2 GPA / AAST CS</span>
            </div>
            <div>
              <span className="text-brand-muted text-[10px] block uppercase tracking-wider">ERP FOCUS</span>
              <span className="text-2xl font-semibold text-[#f4f4f4]">Odoo & Python Workflows</span>
            </div>
            <div>
              <span className="text-brand-muted text-[10px] block uppercase tracking-wider">ENGINEERING CODE</span>
              <span className="text-2xl font-semibold text-brand-orange">Clean & Robust Architecture</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works Portfolio Section */}
      <section id="works" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">
              01 / Case Studies
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase text-gold-gradient">
              Selected Works
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-white/5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-orange text-[#080808] font-bold'
                    : 'text-brand-muted hover:text-brand-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setActiveProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Brand Lab Section (Sandbox Module) */}
      <BrandLab />

      {/* Core Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">
              02 / Core Offerings
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase text-gold-gradient">
              Capabilities & Scope
            </h2>
            <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed">
              We focus on premium, structured creative execution. By stripping away visual clutter, we highlight your product's fundamental excellence. Here are our architectural disciplines:
            </p>
          </div>

          {/* Services Bento/List Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              // Icon selector helper
              const renderIcon = (name: string) => {
                switch (name) {
                  case 'Compass':
                    return <Compass className="w-8 h-8 text-brand-orange" />;
                  case 'BookOpen':
                    return <BookOpen className="w-8 h-8 text-brand-orange" />;
                  case 'Box':
                    return <Box className="w-8 h-8 text-brand-orange" />;
                  case 'Monitor':
                    return <Monitor className="w-8 h-8 text-brand-orange" />;
                  default:
                    return <Layers className="w-8 h-8 text-brand-orange" />;
                }
              };

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#121212]/80 border border-white/5 p-8 rounded-3xl hover:border-brand-orange hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-[#181818] rounded-2xl">
                        {renderIcon(service.iconName)}
                      </div>
                      <span className="font-mono text-xs text-brand-muted font-bold">
                        [ 0{idx + 1} ]
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display font-semibold text-xl tracking-tight text-[#f4f4f4]">
                        {service.title}
                      </h3>
                      <p className="text-brand-muted text-xs md:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                    <span className="font-mono text-[9px] text-brand-orange uppercase tracking-widest block font-bold">
                      DELIVERABLES & FRAMEWORKS
                    </span>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 font-mono text-[10px] text-[#f4f4f4]">
                          <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Philosophy / About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Philosophy copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">
                03 / Engineering Philosophy
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase text-gold-gradient leading-tight">
                Performance through order.<br />Reliability through function.
              </h2>
            </div>

            <p className="font-sans text-brand-muted text-sm md:text-base leading-relaxed font-light">
              I approach software engineering as digital architecture. By combining clean type-safe backend schemas, reliable relational database modeling, automated ERP workflows, and low-level computer graphics pipeline math, I build systems designed to perform flawlessly and scale indefinitely.
            </p>

            {/* Design Rules Timeline */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start pb-4 border-b border-white/10">
                <span className="font-mono text-brand-orange font-bold text-xs pt-1">01 /</span>
                <div>
                  <h4 className="font-display font-semibold text-lg text-[#f4f4f4]">Type-Safe & Modular Architecture</h4>
                  <p className="text-xs text-brand-muted mt-1">I program using strictly typed, modular, and reusable blocks—ensuring code maintenance remains low, scalability is high, and runtime exceptions are caught at compile-time.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start pb-4 border-b border-white/10">
                <span className="font-mono text-brand-orange font-bold text-xs pt-1">02 /</span>
                <div>
                  <h4 className="font-display font-semibold text-lg text-[#f4f4f4]">Relational Database Precision</h4>
                  <p className="text-xs text-brand-muted mt-1">I construct database models utilizing third-normal-form layouts and smart indexes on PostgreSQL, preventing data redundancy and optimizing execution query speed for high-throughput applications.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-mono text-brand-orange font-bold text-xs pt-1">03 /</span>
                <div>
                  <h4 className="font-display font-semibold text-lg text-[#f4f4f4]">ERP Workflow Automation</h4>
                  <p className="text-xs text-brand-muted mt-1">I leverage Python and Odoo's native framework layers to map intricate, error-free corporate processes directly into automated, unified dashboards that save administrative overhead.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Immersive Studio / Bento Box Detail */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#121212] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                alt="Software development workstation setup"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-[#f4f4f4]">
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-orange">THE ENGINEER</span>
                <p className="font-display font-semibold text-lg mt-1 text-gold-gradient">Ali Hany Medhat</p>
                <p className="font-mono text-[9px] opacity-75">Computer Science & Software Engineer</p>
              </div>
            </div>

            {/* Micro bento drawer: Creative Developer Collaboration */}
            <div className="bg-[#121212] text-[#f4f4f4] p-6 rounded-3xl space-y-4 shadow-xl border border-white/5">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-orange" />
                <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-gold-gradient">
                  Full-Stack ERP Capability
                </h4>
              </div>
              <p className="text-[11px] font-mono leading-relaxed text-gray-400">
                Deeply experienced in linking native ERP frameworks (Odoo, PostgreSQL) with robust backend engines (Python, Scala) and polished frontends. True database-to-user continuity.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[9px] font-mono bg-white/[0.02] text-brand-orange/80 px-2.5 py-0.5 rounded border border-white/5">
                  #Python
                </span>
                <span className="text-[9px] font-mono bg-white/[0.02] text-brand-orange/80 px-2.5 py-0.5 rounded border border-white/5">
                  #Odoo-ERP
                </span>
                <span className="text-[9px] font-mono bg-white/[0.02] text-brand-orange/80 px-2.5 py-0.5 rounded border border-white/5">
                  #PostgreSQL
                </span>
                <span className="text-[9px] font-mono bg-white/[0.02] text-brand-orange/80 px-2.5 py-0.5 rounded border border-white/5">
                  #Scala-Backend
                </span>
                <span className="text-[9px] font-mono bg-white/[0.02] text-brand-orange/80 px-2.5 py-0.5 rounded border border-white/5">
                  #React-TS
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section id="testimonials" className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info heading */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold flex items-center gap-1">
                <Sparkles className="w-4 h-4 animate-pulse" />
                04 / Client Reviews
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase text-gold-gradient leading-none">
                Design<br />in Action
              </h2>
              <p className="text-brand-muted font-sans text-xs md:text-sm leading-relaxed max-w-xs">
                See how modern identity alignments directly enhanced product desirability and customer retention across our creative partners.
              </p>
              
              {/* Pagination indicators */}
              <div className="flex gap-2 pt-4">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-orange flex items-center justify-center transition-colors duration-300 cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4 text-brand-orange" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-orange flex items-center justify-center transition-colors duration-300 cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4 text-brand-orange" />
                </button>
              </div>
            </div>

            {/* Right slider body */}
            <div className="lg:col-span-8 bg-[#121212]/80 border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden min-h-[250px] flex flex-col justify-between shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="font-sans font-light text-[#f4f4f4] text-lg md:text-xl leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-white/5"
                    />
                    <div>
                      <h4 className="font-display font-semibold text-sm text-[#f4f4f4]">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="font-mono text-[10px] text-brand-muted uppercase tracking-wider">
                        {testimonials[currentTestimonial].role} — {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Gateway */}
      <ContactForm />

      <Footer />

      {/* Case Study Lightbox Drawer modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
