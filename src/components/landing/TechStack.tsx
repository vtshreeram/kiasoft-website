import { Server, Smartphone, Cloud, Code, Database, Globe, Lock, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function TechStack() {
  const stacks = [
    {
      title: "Frontend & Mobile",
      items: ["React & React Native", "Flutter", "Next.js 15"],
      icon: Smartphone,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Scalable Backend",
      items: ["Node.js Microservices", "Go (High Performance)", "Python (AI/ML)"],
      icon: Server,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Cloud Infrastructure",
      items: ["AWS / Google Cloud", "Kubernetes", "CI/CD Pipelines"],
      icon: Cloud,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Intelligent Data",
      items: ["PostgreSQL (Reliable)", "MongoDB (Flexible)", "Redis Caching"],
      icon: Database,
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display leading-tight mb-6">
            Enterprise <span className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">Tech Stack</span> for Ayush
          </h2>
          <p className="text-lg text-slate-600">
            We use high-performance, secure software stacks to ensure your platforms perform flawlessly at global scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-16 w-16 rounded-[1.5rem] bg-gradient-to-br ${stack.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display mb-4">
                  {stack.title}
                </h3>
                <ul className="space-y-3">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center text-slate-500 text-sm font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mr-3 group-hover:bg-green-500 transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Feature badges at bottom of tech stack */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-16">
           <div className="flex flex-col items-center text-center gap-3">
             <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 border border-slate-100"><Globe className="h-6 w-6" /></div>
             <span className="text-sm font-bold text-slate-900">Edge Ready</span>
           </div>
           <div className="flex flex-col items-center text-center gap-3">
             <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 border border-slate-100"><Lock className="h-6 w-6" /></div>
             <span className="text-sm font-bold text-slate-900">SOC-2 Ready</span>
           </div>
           <div className="flex flex-col items-center text-center gap-3">
             <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 border border-slate-100"><Code className="h-6 w-6" /></div>
             <span className="text-sm font-bold text-slate-900">API First</span>
           </div>
           <div className="flex flex-col items-center text-center gap-3">
             <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 border border-slate-100"><Cpu className="h-6 w-6" /></div>
             <span className="text-sm font-bold text-slate-900">AI Enabled</span>
           </div>
        </div>
      </div>
    </section>
  );
}
