import { ShieldCheck, HeartPulse, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AyushBenefits() {
  const benefits = [
    {
      title: "Data Driven Ayurveda",
      description: "Convert subjective Nadi and Prakriti assessments into standardized, trackable data points for improved clinical outcomes.",
      icon: HeartPulse,
      points: ["Nadi Pattern Recognition", "Prakriti Analysis Engines", "Digital Pulse Graphs"],
    },
    {
      title: "Holistic Health Dashboards",
      description: "Comprehensive patient views incorporating physical, mental, and lifestyle metrics unique to the Ayush methodology.",
      icon: Brain,
      points: ["Dosha Balance Charts", "Srota Visualization", "Lifestyle Trackers"],
    },
  ];

  return (
    <section id="why-kiasfot" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-slate-50"
            >
              <img 
                src="/images/segment-2.webp" 
                alt="Ayurvedic Software Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white max-w-xs">
                <div className="h-1 w-20 bg-green-500 mb-6" />
                <h4 className="text-2xl font-bold font-display">Built for Compliance</h4>
                <p className="text-green-100 text-sm mt-2 opacity-80">Every module adheres to the highest standards of Ayush Ministry data guidelines.</p>
              </div>
            </motion.div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]"
            >
              <div className="text-4xl font-extrabold text-green-600 font-display">40%</div>
              <p className="text-slate-900 font-bold mt-1">Faster Diagnosis</p>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">Integrated Nadi analysis reduces patient intake time by nearly half.</p>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>Why Choose Kiasfot?</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display leading-[1.1]">
                Bridging Ancient Wisdom & <br />
                <span className="text-green-600">Digital Intelligence</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We don't just digitize clinical records; we translate the multi-dimensional nature of Ayurvedic healing into actionable digital workflows.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 h-16 w-16 rounded-[1.5rem] bg-green-50 flex items-center justify-center text-green-600 shadow-sm border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{benefit.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {benefit.points.map(point => (
                        <div key={point} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ x: 10 }}
              href="#final-cta"
              className="inline-flex items-center gap-3 text-lg font-bold text-green-600 hover:text-green-700"
            >
              Explore Our Full Methodology
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
