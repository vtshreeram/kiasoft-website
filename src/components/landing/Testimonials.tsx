import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Kiasfot Technologies transformed our Ayurvedic practice. Their EHR captures Prakriti and Vikriti seamlessly, completely digitizing our workflow without losing the essence of Ayurveda.",
    name: "Dr. Ananya Sharma",
    role: "Chief Physician, Veda Healing Center",
    avatar: "AS",
    avatarBg: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    quote:
      "Managing Panchakarma therapies used to be a logistical nightmare. This software automates scheduling and inventory tracking, saving us countless hours every week.",
    name: "Dr. Rajiv Menon",
    role: "Director, Kerala Panchakarma Institute",
    avatar: "RM",
    avatarBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    quote:
      "We launched our Ayurvedic e-commerce store with their custom platform. The integration with our clinic's inventory is flawless, and our global patient base loves it.",
    name: "Priya Patel",
    role: "Founder, AyurNaturals",
    avatar: "PP",
    avatarBg: "bg-gradient-to-br from-green-600 to-emerald-700",
  },
  {
    quote:
      "The telemedicine module allows us to consult with patients globally. The secure, Ayush-compliant architecture gives us total peace of mind.",
    name: "Dr. Vikram Singh",
    role: "Head of Tele-Ayurveda, Global Ayush Network",
    avatar: "VS",
    avatarBg: "bg-gradient-to-br from-teal-500 to-green-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-24 lg:py-28 relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-green-100/50 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          {/* Section Label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-600">
            <Star className="h-4 w-4 fill-green-600" />
            <span>Success Stories</span>
          </div>

          {/* Heading */}
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display leading-[1.1]">
            Trusted by leading Ayush practitioners.
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative rounded-3xl bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-green-500/10 transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 h-10 w-10 sm:h-12 sm:w-12 text-green-50 opacity-50" />

              {/* Star Rating */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-xl font-medium leading-relaxed text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 sm:mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className={`h-11 w-11 sm:h-12 sm:w-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
