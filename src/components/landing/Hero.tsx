import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { openContactModal } from "@/components/layout/ContactModal";

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
        <div className="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10" />
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
                <span className="text-sm font-bold text-green-900 tracking-tight">India's 1st AI Operating System for Ayush</span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl font-display leading-[1.05] mb-8">
                The Unique AI <br />
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Operating System
                </span> <br />
                for Ayush Hospitals
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Kiasoft is India's first end-to-end AI ecosystem built exclusively for Ayurveda. Automate complex Panchakarma protocols and hospital workflows, collapsing man-hour efforts from <span className="font-bold text-slate-900 underline decoration-green-500 underline-offset-4">hours to mere minutes</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgb(22 163 74 / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openContactModal}
                  className="h-14 px-10 rounded-2xl bg-green-600 text-white font-bold text-lg shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 transition-colors hover:bg-green-700 cursor-pointer"
                >
                  Deploy AI OS
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openContactModal}
                  className="h-14 px-10 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg shadow-sm flex items-center justify-center gap-3 transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <Play className="h-4 w-4 fill-slate-700" />
                  See AI in Action
                </motion.button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-slate-200 pt-10">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span>AI-Driven Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span>95% Reduction in Admin Tasks</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Column - Professional Layered UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mobile: Visible simplified version */}
            <div className="lg:hidden mb-8">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <img src="/images/segment-1.webp" alt="AI Ayush OS Dashboard" className="w-full h-auto" />
              </div>
            </div>
            
            {/* Desktop: Full layered version */}
            <div className="hidden lg:block relative">
            {/* Main Dashboard Mockup - The Base Layer */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] bg-white">
               <img src="/images/segment-1.webp" alt="AI Ayush OS Dashboard" className="w-full h-auto" />
            </div>
            
            {/* Floating Intelligence Layer 1 - Top Left */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 z-20 w-72 p-6 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-green-100"
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-green-600 flex items-center justify-center shadow-lg shadow-green-200">
                        <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm">Real-time Analysis</h4>
                        <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">AI Neural Core Active</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <div className="h-8 w-1.5 bg-green-100 rounded-full overflow-hidden"><motion.div animate={{ height: "60%" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="w-full bg-green-500" /></div>
                      <div className="h-12 w-1.5 bg-green-100 rounded-full overflow-hidden"><motion.div animate={{ height: "85%" }} transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatType: "reverse" }} className="w-full bg-green-500" /></div>
                      <div className="h-10 w-1.5 bg-green-100 rounded-full overflow-hidden"><motion.div animate={{ height: "45%" }} transition={{ duration: 2, delay: 0.4, repeat: Infinity, repeatType: "reverse" }} className="w-full bg-green-500" /></div>
                      <div className="h-14 w-1.5 bg-green-100 rounded-full overflow-hidden"><motion.div animate={{ height: "95%" }} transition={{ duration: 2, delay: 0.1, repeat: Infinity, repeatType: "reverse" }} className="w-full bg-green-500" /></div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Intelligence Layer 2 - Bottom Right */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 z-20 w-64 p-5 rounded-2xl bg-slate-900 text-white shadow-2xl"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-xs">OS Efficiency Gain</span>
                </div>
                <div className="text-2xl font-bold text-green-400 mb-1">95.4%</div>
                <p className="text-[10px] text-slate-400">Manual tasks automated by AI core</p>
            </motion.div>

            {/* Decorative blurs */}
            <div className="absolute -top-20 -right-20 z-0 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 z-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-20 left-[10%]"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-3 h-3 bg-green-400/30 rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-32 right-[15%]"
        >
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-4 h-4 bg-emerald-400/20 rounded-lg rotate-45"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-16 left-[30%]"
        >
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="w-2 h-2 bg-teal-400/40 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
