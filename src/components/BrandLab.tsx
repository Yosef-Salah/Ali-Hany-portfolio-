import { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Copy, Check, RefreshCw, Sparkles, BookOpen, Layers } from 'lucide-react';

interface ColorPalette {
  name: string;
  background: string;
  text: string;
  accent: string;
}

const PALETTES: ColorPalette[] = [
  { name: 'Sartorial Gold', background: '#080808', text: '#f4f4f4', accent: '#d4af37' },
  { name: 'Warm Terracotta', background: '#221510', text: '#ffd4c3', accent: '#e07a5f' },
  { name: 'Electric Neo-Noir', background: '#09090B', text: '#39FF14', accent: '#FF007F' },
  { name: 'Earthy Sage & Ochre', background: '#1c2014', text: '#fefae0', accent: '#d4a373' },
];

export default function BrandLab() {
  const [brandName, setBrandName] = useState('KOMOREBI');
  const [tagline, setTagline] = useState('ARCHITECTURE & NATURE');
  const [selectedFont, setSelectedFont] = useState<'sans' | 'display' | 'mono'>('display');
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette>(PALETTES[0]);
  const [tracking, setTracking] = useState<number>(6); // tracking in pixels / tracking-widest
  const [fontSize, setFontSize] = useState<number>(32); // font-size in pixels
  const [isUppercase, setIsUppercase] = useState<boolean>(true);
  const [hasFrame, setHasFrame] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const fontStyles = {
    sans: 'font-sans',
    display: 'font-display font-medium',
    mono: 'font-mono uppercase',
  };

  const handleReset = () => {
    setBrandName('AETHER');
    setTagline('SKINCARE LABS');
    setSelectedFont('sans');
    setSelectedPalette(PALETTES[0]);
    setTracking(4);
    setFontSize(36);
    setIsUppercase(true);
    setHasFrame(true);
  };

  const generateStyleSpecs = () => {
    return JSON.stringify(
      {
        brandName: brandName,
        tagline: tagline,
        typography: {
          family: selectedFont === 'sans' ? 'Inter' : selectedFont === 'display' ? 'Cormorant Garamond' : 'JetBrains Mono',
          size: `${fontSize}px`,
          letterSpacing: `${tracking}px`,
          textTransform: isUppercase ? 'uppercase' : 'none',
        },
        colorPalette: {
          themeName: selectedPalette.name,
          backgroundColor: selectedPalette.background,
          primaryTextColor: selectedPalette.text,
          accentColor: selectedPalette.accent,
        },
        layout: {
          minimalFrame: hasFrame ? 'enabled' : 'disabled',
        },
      },
      null,
      2
    );
  };

  const handleCopySpecs = () => {
    navigator.clipboard.writeText(generateStyleSpecs());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="brand-lab" className="py-20 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 animate-spin-slow" />
              Interactive Prototype Sandbox
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-gold-gradient uppercase">
              Brand Identity Lab
            </h2>
            <p className="text-brand-muted max-w-2xl text-sm md:text-base">
              Step into the designer's shoes. Tweak and manipulate typographic hierarchy, tracking density, structural layouts, and color mapping inside this real-time render module.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end items-end">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-brand-orange hover:bg-white/5 text-brand-dark rounded-full font-mono text-xs uppercase transition-all duration-300"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Workspace
            </button>
          </div>
        </div>

        {/* Sandbox Board Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Panel: Adjustments Panel */}
          <div className="lg:col-span-5 bg-[#121212]/80 border border-white/5 p-6 md:p-8 rounded-3xl space-y-8 shadow-2xl">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10">
              <Sliders className="w-4 h-4 text-brand-orange" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-brand-dark">
                Dynamic Spec Adjusters
              </h3>
            </div>

            {/* Field: Brand Name */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                01 / Brand Name
              </label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value.slice(0, 20))}
                placeholder="Enter word..."
                className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-brand-orange focus:outline-none rounded-xl font-display font-medium text-[#f4f4f4]"
              />
            </div>

            {/* Field: Tagline / Supporting details */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                02 / Dynamic Subtitle
              </label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value.slice(0, 36))}
                placeholder="Enter tagline..."
                className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-brand-orange focus:outline-none rounded-xl font-mono text-xs text-[#f4f4f4]"
              />
            </div>

            {/* Grid Adjustments */}
            <div className="grid grid-cols-2 gap-4">
              {/* Dropdown: Font Selection */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                  03 / Typeface Pair
                </label>
                <div className="flex flex-col gap-1.5">
                  {(['display', 'sans', 'mono'] as const).map((font) => (
                    <button
                      key={font}
                      onClick={() => setSelectedFont(font)}
                      className={`px-3 py-2 border rounded-xl font-mono text-[11px] text-left uppercase transition-all ${
                        selectedFont === font
                          ? 'border-brand-orange bg-brand-orange text-[#080808] font-bold'
                          : 'border-white/10 bg-[#181818] hover:border-brand-orange text-brand-dark'
                      }`}
                    >
                      {font === 'display' ? 'Cormorant' : font === 'sans' ? 'Inter UI' : 'JetBrains Mono'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle controls */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                  04 / System Attributes
                </label>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setIsUppercase(!isUppercase)}
                    className={`px-3 py-2 border rounded-xl font-mono text-[11px] text-left uppercase transition-all ${
                      isUppercase ? 'border-brand-orange bg-brand-orange/10 text-brand-orange' : 'border-white/10 bg-[#181818] text-brand-muted'
                    }`}
                  >
                    UPPERCASE: {isUppercase ? 'ON' : 'OFF'}
                  </button>
                  <button
                    onClick={() => setHasFrame(!hasFrame)}
                    className={`px-3 py-2 border rounded-xl font-mono text-[11px] text-left uppercase transition-all ${
                      hasFrame ? 'border-brand-orange bg-brand-orange/10 text-brand-orange' : 'border-white/10 bg-[#181818] text-brand-muted'
                    }`}
                  >
                    Structural Frame: {hasFrame ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>

            {/* Slider: Tracking (Letter Spacing) */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-brand-muted uppercase tracking-widest">05 / Tracking (Letter Spacing)</span>
                <span className="text-brand-dark font-bold">{tracking}px</span>
              </div>
              <input
                type="range"
                min="-2"
                max="20"
                step="1"
                value={tracking}
                onChange={(e) => setTracking(Number(e.target.value))}
                className="w-full accent-brand-orange cursor-ew-resize"
              />
            </div>

            {/* Slider: Font Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-brand-muted uppercase tracking-widest">06 / Display Font Size</span>
                <span className="text-brand-dark font-bold">{fontSize}px</span>
              </div>
              <input
                type="range"
                min="16"
                max="56"
                step="1"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-brand-orange cursor-ew-resize"
              />
            </div>

            {/* Swatch Picker presets */}
            <div className="space-y-3">
              <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                07 / Corporate Color Mapping
              </label>
              <div className="grid grid-cols-2 gap-3">
                {PALETTES.map((palette, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPalette(palette)}
                    className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all ${
                      selectedPalette.name === palette.name
                        ? 'border-brand-orange bg-[#181818] shadow-lg'
                        : 'border-white/10 bg-[#121212]/50 hover:border-brand-orange'
                    }`}
                  >
                    <span className="font-mono text-[9px] text-brand-dark font-medium block mb-2">
                      {palette.name}
                    </span>
                    <div className="flex gap-1.5 w-full">
                      <div
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: palette.background }}
                      />
                      <div
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: palette.text }}
                      />
                      <div
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: palette.accent }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Render Output Board */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Live Render Canvas Container */}
            <div className="flex-1 min-h-[350px] bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-12 flex items-center justify-center relative overflow-hidden shadow-2xl">
              {/* Fine Design Grid lines background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

              {/* Simulated Card container */}
              <motion.div
                layout
                className="w-full max-w-lg aspect-[1.586/1] rounded-2xl relative shadow-2xl border overflow-hidden p-8 md:p-10 flex flex-col justify-between transition-all duration-500"
                style={{
                  backgroundColor: selectedPalette.background,
                  color: selectedPalette.text,
                  borderColor: selectedPalette.accent + '20',
                }}
              >
                {/* Structural geometric framing indicator */}
                {hasFrame && (
                  <div
                    className="absolute inset-4 border rounded-lg pointer-events-none transition-all duration-500"
                    style={{ borderColor: selectedPalette.accent + '30' }}
                  />
                )}

                {/* Card Header metadata info */}
                <div className="flex justify-between items-start z-10">
                  <div className="font-mono text-[9px] tracking-widest opacity-80 uppercase">
                    STUDIO ID: SPEC-9003
                  </div>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: selectedPalette.accent }}
                  />
                </div>

                {/* Core Live Logo Typo */}
                <div className="z-10 text-center my-auto">
                  <h3
                    className={`${fontStyles[selectedFont]} transition-all duration-300`}
                    style={{
                      fontSize: `${fontSize}px`,
                      letterSpacing: `${tracking}px`,
                      textTransform: isUppercase ? 'uppercase' : 'none',
                      lineHeight: '1.1',
                    }}
                  >
                    {brandName || 'BRAND NAME'}
                  </h3>
                  {tagline && (
                    <p
                      className="font-mono text-[9px] tracking-widest mt-3 opacity-75 uppercase transition-all duration-300"
                      style={{ color: selectedPalette.text }}
                    >
                      {tagline}
                    </p>
                  )}
                </div>

                {/* Card Footer specs */}
                <div className="flex justify-between items-end z-10">
                  <div className="font-mono text-[8px] opacity-70">
                    TYPEFACE: {selectedFont.toUpperCase()}
                  </div>
                  <div className="font-mono text-[8px] opacity-70">
                    TRACKING: {tracking}px / ACC: {selectedPalette.accent}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Generated Code Specifications Output */}
            <div className="bg-[#121212] text-brand-cream rounded-3xl p-6 space-y-4 shadow-2xl border border-white/5">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-orange" />
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                    Generated Style Specifications File
                  </span>
                </div>
                <button
                  onClick={handleCopySpecs}
                  className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg font-mono text-[10px] uppercase hover:bg-brand-orange hover:text-[#080808] hover:border-brand-orange transition-all duration-300 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-brand-orange animate-pulse" />
                      COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      COPY SPEC JSON
                    </>
                  )}
                </button>
              </div>
              <pre className="font-mono text-[10px] text-brand-orange overflow-x-auto leading-relaxed max-h-[140px] opacity-90">
                {generateStyleSpecs()}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
