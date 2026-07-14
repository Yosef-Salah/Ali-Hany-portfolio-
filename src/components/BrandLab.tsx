import { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Copy, Check, RefreshCw, Layers, Database, Cpu, ShieldAlert } from 'lucide-react';

interface ClusterPreset {
  name: string;
  background: string;
  text: string;
  accent: string;
  latency: string;
}

const PRESETS: ClusterPreset[] = [
  { name: 'PostgreSQL DB Cluster', background: '#080808', text: '#f4f4f4', accent: '#d4af37', latency: '1.2ms' },
  { name: 'Odoo ERP Server Cache', background: '#141c15', text: '#f0fdf4', accent: '#15803d', latency: '4.5ms' },
  { name: 'Scala Actor Orchestrator', background: '#1e1b4b', text: '#e0e7ff', accent: '#4f46e5', latency: '0.8ms' },
  { name: 'OpenGL VBO Framebuffer', background: '#1c1c1c', text: '#ffffff', accent: '#d4af37', latency: '0.1ms' },
];

export default function BrandLab() {
  const [endpointRoute, setEndpointRoute] = useState('/api/v1/hospital/records');
  const [queryParams, setQueryParams] = useState('limit=250&sort=desc&auth=true');
  const [payloadFormat, setPayloadFormat] = useState<'json' | 'sql' | 'xml'>('json');
  const [selectedPreset, setSelectedPreset] = useState<ClusterPreset>(PRESETS[0]);
  const [concurrencyThreads, setConcurrencyThreads] = useState<number>(8); // Thread limit
  const [batchSize, setBatchSize] = useState<number>(150); // Records batch size
  const [sslSecure, setSslSecure] = useState<boolean>(true);
  const [corsEnabled, setCorsEnabled] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const handleReset = () => {
    setEndpointRoute('/api/v1/hospital/records');
    setQueryParams('limit=250&sort=desc&auth=true');
    setPayloadFormat('json');
    setSelectedPreset(PRESETS[0]);
    setConcurrencyThreads(8);
    setBatchSize(150);
    setSslSecure(true);
    setCorsEnabled(true);
  };

  const generateConfigSpecs = () => {
    return JSON.stringify(
      {
        endpointRoute: endpointRoute,
        queryParams: queryParams,
        transport: {
          protocol: sslSecure ? 'HTTPS / WSS' : 'HTTP / WS',
          corsEnabled: corsEnabled ? 'Active' : 'Disabled',
          payloadFormat: payloadFormat.toUpperCase(),
        },
        engineConfig: {
          targetCluster: selectedPreset.name,
          baseLatency: selectedPreset.latency,
          concurrencyThreads: `${concurrencyThreads} Core Workers`,
          dataBatchSize: `${batchSize} Records / Page`,
        },
        securityToken: sslSecure ? 'AES-256-GCM_ACTIVE' : 'INSECURE_WARNING',
        renderedStyles: {
          accentColor: selectedPreset.accent,
          backgroundColor: selectedPreset.background,
        }
      },
      null,
      2
    );
  };

  const handleCopySpecs = () => {
    navigator.clipboard.writeText(generateConfigSpecs());
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
              Interactive Architecture Sandbox
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-gold-gradient uppercase">
              Developer Sandbox
            </h2>
            <p className="text-brand-muted max-w-2xl text-sm md:text-base">
              Test and model Ali Hany Medhat's typical full-stack architecture parameters. Tweak simulated concurrency counts, API routes, security variables, and cluster engines in real-time.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end items-end">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-brand-orange hover:bg-white/5 text-brand-dark rounded-full font-mono text-xs uppercase transition-all duration-300 cursor-pointer"
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
                Gateway Specifications
              </h3>
            </div>

            {/* Field: Route Endpoint */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                01 / Gateway API Route
              </label>
              <input
                type="text"
                value={endpointRoute}
                onChange={(e) => setEndpointRoute(e.target.value.slice(0, 40))}
                placeholder="Enter route..."
                className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-brand-orange focus:outline-none rounded-xl font-mono text-xs text-[#f4f4f4]"
              />
            </div>

            {/* Field: Query Params */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                02 / Dynamic Query String
              </label>
              <input
                type="text"
                value={queryParams}
                onChange={(e) => setQueryParams(e.target.value.slice(0, 50))}
                placeholder="limit=100&auth=true"
                className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-brand-orange focus:outline-none rounded-xl font-mono text-xs text-[#f4f4f4]"
              />
            </div>

            {/* Grid Adjustments */}
            <div className="grid grid-cols-2 gap-4">
              {/* Dropdown: Payload Format */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                  03 / Serialization Schema
                </label>
                <div className="flex flex-col gap-1.5">
                  {(['json', 'sql', 'xml'] as const).map((format) => (
                    <button
                      key={format}
                      onClick={() => setPayloadFormat(format)}
                      className={`px-3 py-2 border rounded-xl font-mono text-[11px] text-left uppercase transition-all cursor-pointer ${
                        payloadFormat === format
                          ? 'border-brand-orange bg-brand-orange text-[#080808] font-bold'
                          : 'border-white/10 bg-[#181818] hover:border-brand-orange text-brand-dark'
                      }`}
                    >
                      {format === 'json' ? 'JSON Payload' : format === 'sql' ? 'SQL Script' : 'XML Schema'}
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
                    onClick={() => setSslSecure(!sslSecure)}
                    className={`px-3 py-2 border rounded-xl font-mono text-[11px] text-left uppercase transition-all cursor-pointer ${
                      sslSecure ? 'border-brand-orange bg-brand-orange/10 text-brand-orange' : 'border-white/10 bg-[#181818] text-brand-muted'
                    }`}
                  >
                    SSL TLS: {sslSecure ? 'ACTIVE' : 'WARNING'}
                  </button>
                  <button
                    onClick={() => setCorsEnabled(!corsEnabled)}
                    className={`px-3 py-2 border rounded-xl font-mono text-[11px] text-left uppercase transition-all cursor-pointer ${
                      corsEnabled ? 'border-brand-orange bg-brand-orange/10 text-brand-orange' : 'border-white/10 bg-[#181818] text-brand-muted'
                    }`}
                  >
                    CORS HEADERS: {corsEnabled ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>

            {/* Slider: Threads */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-brand-muted uppercase tracking-widest">05 / Thread Workers (Concurrency)</span>
                <span className="text-brand-dark font-bold">{concurrencyThreads} Workers</span>
              </div>
              <input
                type="range"
                min="1"
                max="32"
                step="1"
                value={concurrencyThreads}
                onChange={(e) => setConcurrencyThreads(Number(e.target.value))}
                className="w-full accent-brand-orange cursor-ew-resize"
              />
            </div>

            {/* Slider: Batch size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-brand-muted uppercase tracking-widest">06 / Records Batch Size</span>
                <span className="text-brand-dark font-bold">{batchSize} Records</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={batchSize}
                onChange={(e) => setBatchSize(Number(e.target.value))}
                className="w-full accent-brand-orange cursor-ew-resize"
              />
            </div>

            {/* Swatch Picker presets */}
            <div className="space-y-3">
              <label className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                07 / Backend Cluster Engine
              </label>
              <div className="grid grid-cols-2 gap-3">
                {PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPreset(preset)}
                    className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPreset.name === preset.name
                        ? 'border-brand-orange bg-[#181818] shadow-lg'
                        : 'border-white/10 bg-[#121212]/50 hover:border-brand-orange'
                    }`}
                  >
                    <span className="font-mono text-[9px] text-brand-dark font-medium block mb-2">
                      {preset.name}
                    </span>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-1.5">
                        <div
                          className="w-3 h-3 rounded-full border border-black/10 shrink-0 animate-pulse"
                          style={{ backgroundColor: preset.accent }}
                        />
                      </div>
                      <span className="font-mono text-[8px] text-brand-muted">Ping: {preset.latency}</span>
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
                className="w-full max-w-lg aspect-[1.586/1] rounded-2xl relative shadow-2xl border overflow-hidden p-8 flex flex-col justify-between transition-all duration-500"
                style={{
                  backgroundColor: selectedPreset.background,
                  color: selectedPreset.text,
                  borderColor: selectedPreset.accent + '20',
                }}
              >
                {/* Structural geometric framing indicator */}
                {sslSecure && (
                  <div
                    className="absolute inset-4 border rounded-lg pointer-events-none transition-all duration-500"
                    style={{ borderColor: selectedPreset.accent + '30' }}
                  />
                )}

                {/* Card Header metadata info */}
                <div className="flex justify-between items-start z-10">
                  <div className="font-mono text-[9px] tracking-widest opacity-80 uppercase flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-brand-orange" />
                    STATUS: {sslSecure ? 'SSL-SECURE' : 'UNSECURED-WS'}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[8px] text-brand-muted uppercase">Ping: {selectedPreset.latency}</span>
                    <div
                      className="w-2.5 h-2.5 rounded-full animate-ping"
                      style={{ backgroundColor: selectedPreset.accent }}
                    />
                  </div>
                </div>

                {/* Core Live Logo Typo */}
                <div className="z-10 text-center my-auto">
                  <h3
                    className="font-mono text-xs tracking-tight transition-all duration-300 break-all text-brand-orange"
                    style={{
                      textTransform: sslSecure ? 'none' : 'uppercase',
                      lineHeight: '1.4',
                    }}
                  >
                    GET {endpointRoute || '/api/v1'}
                  </h3>
                  {queryParams && (
                    <p
                      className="font-mono text-[10px] tracking-wide mt-2 opacity-75 break-all transition-all duration-300"
                      style={{ color: selectedPreset.text }}
                    >
                      ?{queryParams}
                    </p>
                  )}
                </div>

                {/* Card Footer specs */}
                <div className="flex justify-between items-end z-10 font-mono text-[8px] opacity-80">
                  <div className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-brand-orange" />
                    <span>WORKERS: {concurrencyThreads} CORES</span>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span>SERIALIZATION: {payloadFormat.toUpperCase()}</span>
                    <span>BATCH SIZE: {batchSize}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Generated Code Specifications Output */}
            <div className="bg-[#121212] text-brand-cream rounded-3xl p-6 space-y-4 shadow-2xl border border-white/5">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-brand-orange" />
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                    Cluster Config & Routing Specs JSON
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
                      COPY CONFIG JSON
                    </>
                  )}
                </button>
              </div>
              <pre className="font-mono text-[10px] text-brand-orange overflow-x-auto leading-relaxed max-h-[140px] opacity-90">
                {generateConfigSpecs()}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
