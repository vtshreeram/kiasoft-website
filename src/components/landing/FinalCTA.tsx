import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Globe, Star, Activity } from "lucide-react";
import { openContactModal } from "@/components/layout/ContactModal";

export default function FinalCTA() {
  return (
    <>
      <section id="final-cta" className="relative py-24 bg-white overflow-hidden">
        {/* Modern Floating Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 bg-green-900 rounded-[3rem] p-8 md:p-20 overflow-hidden shadow-2xl">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/patterns/cubes.png')] opacity-10 animate-pulse" />
            
            {/* Split Layout Banner */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-800 text-green-300 text-xs font-bold uppercase tracking-widest mb-6"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>The Future of Ayush is AI</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-[1.1] mb-6">
                  India's 1st <br />
                  <span className="text-green-400">AyushOS is Live.</span>
                </h2>
                
                <p className="text-lg text-green-100 mb-8 max-w-lg">
                  Collapse your hospital's manual effort from <span className="font-bold text-white underline decoration-green-400">hours to minutes</span>. Join the AI revolution in Ayurvedic healthcare.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openContactModal}
                    className="h-14 px-8 rounded-2xl bg-white text-green-900 font-bold text-lg shadow-xl hover:bg-green-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Get AyushOS Now
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-green-900 bg-green-700 flex items-center justify-center text-[10px] font-bold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span>Trusted by Early Adopters</span>
                  </div>
                </div>
              </div>

              {/* Feature Cards in CTA */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: "AI Compliance", desc: "Automated Ministry Standards" },
                  { icon: Globe, title: "Global AI Scale", desc: "Intelligent Cross-border Care" },
                  { icon: Star, title: "Smart Accreditation", desc: "AI-ready NABH Tools" },
                  { icon: Activity, title: "Predictive Sync", desc: "Autonomous EHR & Inventory" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
                  >
                    <item.icon className="h-6 w-6 text-green-400 mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-green-200/60 text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
