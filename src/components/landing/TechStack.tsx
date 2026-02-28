import { Cpu, Database, Globe, Terminal, Activity, Zap, Layers, Network, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const systemModules = [
  {
    id: "MOD-01",
    label: "Inference Engine",
    title: "Neural ML Core",
    tech: ["PyTorch", "LLM", "CUDA"],
    metric: "Sub-100ms Inference",
    icon: Cpu,
    color: "text-green-600",
    border: "border-green-100",
    bg: "bg-green-50/50"
  },
  {
    id: "MOD-02",
    label: "Data persistence",
    title: "Neural Memory Layer",
    tech: ["Vector DB", "PostgreSQL", "Redis"],
    metric: "99.999% Reliability",
    icon: Database,
    color: "text-emerald-600",
    border: "border-emerald-100",
    bg: "bg-emerald-50/50"
  },
  {
    id: "MOD-03",
    label: "Protocol Bridge",
    title: "Integration Mesh",
    tech: ["gRPC", "REST", "WebSockets"],
    metric: "High-concurrency",
    icon: Network,
    color: "text-teal-600",
    border: "border-teal-100",
    bg: "bg-teal-50/50"
  },
  {
    id: "MOD-04",
    label: "Global Backbone",
    title: "Cloud Edge Fabric",
    tech: ["AWS", "K8s", "Docker"],
    metric: "Edge-First Scale",
    icon: Globe,
    color: "text-green-700",
    border: "border-green-200",
    bg: "bg-green-100/20"
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-white relative overflow-hidden">
      {/* Surgical Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: System Status & Header */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Terminal className="h-3 w-3" />
              <span>Kernel.Core.Status: Active</span>
            </motion.div>
            
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl font-display leading-[1.1] mb-8">
              The AI <br />
              <span className="text-green-600">Kernel Stack.</span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-12 leading-relaxed max-w-md font-sans">
              A vertically integrated architecture engineered for real-time Ayush clinical intelligence and autonomous hospital operations.
            </p>

            {/* Performance Metrics Dashboard */}
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-10">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 group hover:border-green-200 transition-colors">
                    <div className="flex items-center gap-3">
                        <Activity className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uptime Score</span>
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-900 tracking-tighter">99.999%</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 group hover:border-green-200 transition-colors">
                    <div className="flex items-center gap-3">
                        <Zap className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Inference Speed</span>
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-900 tracking-tighter">&lt; 85ms</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 group hover:border-green-200 transition-colors">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Encryption</span>
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-900 tracking-tighter">AES-256</span>
                </div>
            </div>
          </div>

          {/* Right: The Modules (Technical Glass Grid) */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {systemModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500"
                  >
                    <div className="flex justify-between items-start mb-8">
                        <div className={`p-3 rounded-2xl ${module.bg} ${module.color} border ${module.border}`}>
                            <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-300 group-hover:text-green-600 transition-colors">
                            {module.id}
                        </span>
                    </div>

                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {module.label}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">
                        {module.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                        {module.tech.map(t => (
                            <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100 group-hover:border-green-100 group-hover:text-green-700 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-2">
                            <Layers className="h-3.5 w-3.5 text-green-600" />
                            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter">
                                {module.metric}
                            </span>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-green-600 transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Terminal Status Bar */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Neural Kernel v4.2.0</span>
                    </div>
                    <div className="h-4 w-px bg-slate-700 hidden sm:block" />
                    <span className="text-[10px] font-mono text-slate-400">Arch: Ayush-Optimized-x64</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-slate-600">BUILD_UUID: 48F9E-2A1B</span>
                    <div className="px-2 py-0.5 rounded bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-tighter">Production</div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
