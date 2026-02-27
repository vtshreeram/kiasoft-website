import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-50"
    >
      {/* Dynamic Background with Glassmorphism Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 h-[600px] w-[600px] rounded-full bg-green-200/40 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-24 h-[600px] w-[600px] rounded-full bg-emerald-200/40 blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-200 bg-white/80 p-1 pr-4 shadow-sm backdrop-blur-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-green-900 tracking-tight">Vaidya-First Software Ecosystem</span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl font-display leading-[1.05] mb-8">
                Empowering <br />
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Ayurveda
                </span> <br />
                with Next-Gen Tech
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Kiasfot Technologies delivers custom software development tailored for Ayush wellness centers, Ayurvedic hospitals, and holistic health startups. Digitize your practice while staying true to your roots.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgb(22 163 74 / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#final-cta"
                  className="h-14 px-10 rounded-2xl bg-green-600 text-white font-bold text-lg shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 transition-colors hover:bg-green-700"
                >
                  Consult an Expert
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#how-it-works"
                  className="h-14 px-10 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg shadow-sm flex items-center justify-center gap-3 transition-colors hover:bg-slate-50"
                >
                  <Play className="h-4 w-4 fill-slate-700" />
                  Watch Demo
                </motion.a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-slate-200 pt-10">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span>Ayush Ministry Standards</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span>Rapid 4-Week Deployment</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Column - Modern Abstract Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-3 scale-95 translate-x-12">
               <img src="/images/segment-1.webp" alt="Ayurveda Dashboard" className="w-full h-auto grayscale-0 brightness-110" />
            </div>
            
            <div className="absolute top-12 -left-12 z-20 w-80 p-8 rounded-[2rem] bg-white shadow-2xl border border-slate-100 -rotate-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Panchakarma Protocol</h4>
                        <p className="text-xs text-slate-500 tracking-wider font-bold">ACTIVE TRACKING</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div animate={{ width: "85%" }} transition={{ duration: 2, delay: 1 }} className="h-full bg-green-600 rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-400">
                        <span>PHASE 2: DETOX</span>
                        <span>85% DONE</span>
                    </div>
                </div>
            </div>

            {/* Decorative glass card */}
            <div className="absolute -bottom-12 right-0 z-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
