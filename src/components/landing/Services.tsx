import { motion } from "framer-motion";
import { Leaf, Activity, Stethoscope, ShoppingBag, Database, Shield, Zap, Sparkles } from "lucide-react";

const services = [
  {
    title: "Ayurveda EHR",
    description: "Digital Prakriti, Vikriti & Nadi analysis modules built for modern practitioners.",
    icon: Stethoscope,
    className: "md:col-span-2 md:row-span-2 bg-green-50 border-green-100",
    iconColor: "text-green-600 bg-white",
  },
  {
    title: "Panchakarma",
    description: "Automated protocol tracking for complex therapies.",
    icon: Activity,
    className: "md:col-span-1 md:row-span-1 bg-white border-slate-100",
    iconColor: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Inventory",
    description: "Raw herb & batch tracking.",
    icon: Leaf,
    className: "md:col-span-1 md:row-span-1 bg-white border-slate-100",
    iconColor: "text-teal-600 bg-teal-50",
  },
  {
    title: "Ayush E-Commerce",
    description: "Scalable global stores for authentic Ayurvedic products with deep inventory sync.",
    icon: ShoppingBag,
    className: "md:col-span-2 md:row-span-1 bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-700 bg-white",
  },
  {
    title: "Tele-Ayurveda",
    description: "Secure virtual pulse diagnosis consultations.",
    icon: Shield,
    className: "md:col-span-1 md:row-span-1 bg-white border-slate-100",
    iconColor: "text-green-700 bg-green-50",
  },
  {
    title: "Smart Analytics",
    description: "AI-driven efficacy tracking for traditional treatments.",
    icon: Database,
    className: "md:col-span-1 md:row-span-1 bg-slate-900 text-white border-slate-800",
    iconColor: "text-green-400 bg-slate-800",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Our Capabilities</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display leading-tight">
              Software Solutions <br />
              <span className="text-green-600">Reimagined for Ayush</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-md">
            We merge ancient healing wisdom with modern engineering to create platforms that truly understand Ayurveda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-[180px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-3xl border flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${service.className}`}
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center rounded-2xl p-3 ${service.iconColor} mb-4 shadow-sm`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-2">
                    {service.title}
                  </h3>
                  <p className={`${service.className.includes('slate-900') ? 'text-slate-400' : 'text-slate-600'} text-sm leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative background element for large cards */}
                {service.className.includes('col-span-2') && (
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="h-32 w-32" />
                  </div>
                )}
                
                <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                  <span className={service.className.includes('slate-900') ? 'text-green-400' : 'text-green-600'}>Learn More</span>
                  <Zap className={`h-3 w-3 ${service.className.includes('slate-900') ? 'text-green-400' : 'text-green-600'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
