import {
  Cross,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldCheck,
  Building2,
  Syringe,
  Thermometer,
} from "lucide-react";

const logos = [
  { icon: Cross, name: "AyurCare" },
  { icon: HeartPulse, name: "NadiSync" },
  { icon: Stethoscope, name: "VedaHealth" },
  { icon: Activity, name: "HolisticMed" },
  { icon: ShieldCheck, name: "PanchakarmaPro" },
  { icon: Building2, name: "HerbLife" },
  { icon: Syringe, name: "Patanjali Tech" },
  { icon: Thermometer, name: "Kerala Clinics" },
];

export default function Trust() {
  return (
    <section className="relative border-b border-slate-100 bg-slate-50/50 py-10 sm:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="mb-6 sm:mb-8 text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by leading Ayush hospitals and wellness centers
        </p>

        <div className="relative flex w-full overflow-hidden mask-linear-gradient">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent" />

          {/* Marquee Track */}
          <div
            className="flex min-w-full shrink-0 items-center gap-12 sm:gap-16 py-2"
            style={{
              animation: 'marquee 30s linear infinite',
            }}
          >
            {[...logos, ...logos].map((logo, idx) => {
              const Icon = logo.icon;
              const isDuplicate = idx >= logos.length;
              return (
                <div
                  key={`${logo.name}-${idx}`}
                  aria-hidden={isDuplicate}
                  className="group flex shrink-0 items-center gap-2.5 opacity-40 transition-all duration-300 hover:opacity-70"
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200 group-hover:ring-green-100 transition-colors">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 group-hover:text-green-600 transition-colors" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                    <span className="sr-only">Partner: </span>
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
