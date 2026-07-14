import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ChevronRight, HelpCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Visual Identity');
  const [budget, setBudget] = useState<string>('$10,000 – $25,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const categories = [
    'Visual Identity',
    'Custom Packaging',
    'Editorial Layout',
    'Interactive Digital',
  ];

  const budgets = [
    '<$10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000+',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('submitting');
    
    // Simulate real server logic parsing the request
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Form Details / Meta info */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold">
                05 / Collaboration Gateway
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-gold-gradient uppercase">
                Initiate a<br />Brand Evolution
              </h2>
              <p className="text-brand-muted text-sm md:text-base leading-relaxed max-w-md">
                Ready to redefine your presence? Tell us about your project brief, objectives, and budget expectations. We will respond with a tailored conceptual proposal within 24 business hours.
              </p>
            </div>

            {/* Studio Contact details */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex justify-between text-xs font-mono py-1">
                <span className="text-brand-muted uppercase">HQ LOCATION:</span>
                <span className="text-[#f4f4f4] font-medium">LONDON / REMOTE</span>
              </div>
              <div className="flex justify-between text-xs font-mono py-1">
                <span className="text-brand-muted uppercase">DIRECT EMAIL:</span>
                <a href="mailto:studio@salahdesign.com" className="text-brand-orange font-medium hover:underline">
                  studio@salahdesign.com
                </a>
              </div>
              <div className="flex justify-between text-xs font-mono py-1">
                <span className="text-brand-muted uppercase">BUSINESS HOUR:</span>
                <span className="text-[#f4f4f4] font-medium">09:00 – 18:00 GMT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form interactive panel */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
            
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.form
                  key="form-idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Step 1: Category Selector */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                      Select Project Classification
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-2.5 text-[10px] font-mono uppercase tracking-wider rounded-xl text-center border transition-all ${
                            selectedCategory === cat
                              ? 'border-brand-orange bg-brand-orange text-[#080808] font-bold'
                              : 'border-white/10 hover:border-brand-orange text-[#f4f4f4] bg-white/[0.03]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Budget Selectors */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                      Define Resource Parameters (Budget)
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`px-3 py-2.5 text-[10px] font-mono uppercase tracking-wider rounded-xl text-center border transition-all ${
                            budget === b
                              ? 'border-brand-orange bg-brand-orange/10 text-brand-orange font-bold'
                              : 'border-white/10 hover:border-brand-orange text-[#f4f4f4] bg-white/[0.03]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Helena Vance"
                        className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-brand-orange focus:outline-none rounded-xl font-sans text-sm text-[#f4f4f4]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                        Your Professional Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. helena@company.com"
                        className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-brand-orange focus:outline-none rounded-xl font-sans text-sm text-[#f4f4f4]"
                      />
                    </div>
                  </div>

                  {/* Step 4: Message Body */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                        Project Vision & Brief
                      </label>
                      <span className="font-mono text-[9px] text-brand-muted">Min. 10 chars</span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Explain your goals, target audience, aesthetic preferences, and launch timeline..."
                      className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-brand-orange focus:outline-none rounded-xl font-sans text-sm text-[#f4f4f4] resize-none"
                    />
                  </div>

                  {/* Form Footer Action */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand-orange text-[#080808] font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-[#f4f4f4] transition-all duration-300 shadow-xl group cursor-pointer font-bold"
                  >
                    Transmit Collaboration Proposal
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              )}

              {status === 'submitting' && (
                <motion.div
                  key="form-submitting"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-[400px] flex flex-col items-center justify-center space-y-4"
                >
                  <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
                  <p className="font-mono text-xs text-brand-muted uppercase tracking-widest animate-pulse">
                    Analyzing brand requirements...
                  </p>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#d4af37] animate-bounce" />
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-[#f4f4f4] uppercase">
                      Transmission Confirmed
                    </h3>
                    <p className="text-brand-muted text-sm max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-[#f4f4f4]">{name}</span>. Your brief regarding <span className="font-semibold text-brand-orange">{selectedCategory}</span> is being processed by our design desk.
                    </p>
                  </div>
                  <div className="bg-[#181818] border border-white/5 p-4 rounded-2xl max-w-sm mx-auto text-left space-y-2.5 font-mono text-[10px]">
                    <span className="text-brand-orange font-bold uppercase tracking-wider block">
                      NEXT PHASE OBJECTIVES
                    </span>
                    <p className="text-[#f4f4f4]">
                      1. Brand Alignment Assessment.<br />
                      2. Design Desk review of budget parameters ({budget}).<br />
                      3. Delivery of tailored aesthetic roadmap to {email}.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="flex items-center gap-1.5 px-5 py-2 border border-white/10 hover:border-brand-orange text-[#f4f4f4] hover:bg-white/5 font-mono text-[11px] uppercase rounded-full transition-all duration-300"
                  >
                    Submit New Brief
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
