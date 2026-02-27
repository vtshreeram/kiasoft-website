import { motion } from "framer-motion";
import { ArrowRight, X, Loader2, Sparkles, ShieldCheck, Globe, Star, Activity } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
const ZEPTO_API_KEY = import.meta.env.VITE_ZEPTO_API_KEY || "";
const ZEPTO_FROM_EMAIL = import.meta.env.VITE_FROM_EMAIL || "noreply@kiasfot.com";
const ZEPTO_TO_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contact@kiasfot.com";

export default function FinalCTA() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showForm && turnstileRef.current) {
      turnstileRef.current.innerHTML = "";
      if (window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            setTurnstileToken(token);
            setTurnstileError("");
          },
          "error-callback": () => {
            setTurnstileError("Please complete the captcha to continue");
          },
          "expired-callback": () => {
            setTurnstileToken("");
            setTurnstileError("Captcha expired, please try again");
          },
        });
      }
    }
  }, [showForm]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      setTurnstileError("Please complete the captcha first");
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    };
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.zeptomail.com/v1.1/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${ZEPTO_API_KEY}`,
        },
        body: JSON.stringify({
          from: { address: ZEPTO_FROM_EMAIL, name: "Kiasfot Technologies" },
          to: [{ address: ZEPTO_TO_EMAIL, name: "Kiasfot Technologies Team" }],
          subject: `New Contact Form Submission from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Organization:</strong> ${data.organization || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `,
          text: `New Contact Form Submission\n\nName: ${data.name}\nEmail: ${data.email}\nOrganization: ${data.organization || "Not provided"}\n\nMessage:\n${data.message}`,
        }),
      });
      if (!response.ok) throw new Error("Failed to send email");
      setSubmitted(true);
      setTurnstileToken("");
      if (turnstileRef.current) turnstileRef.current.innerHTML = "";
      setTimeout(() => { setSubmitted(false); setShowForm(false); }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setShowForm(false); }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse" />
            
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
                  <span>Start Your Digital Journey</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-[1.1] mb-6">
                  Ready to digitize your <br />
                  <span className="text-green-400">Ayush Practice?</span>
                </h2>
                
                <p className="text-lg text-green-100 mb-8 max-w-lg">
                  Join leading Ayurvedic hospitals and wellness centers already streamlining their operations with Kiasfot Technologies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowForm(true)}
                    className="h-14 px-8 rounded-2xl bg-white text-green-900 font-bold text-lg shadow-xl hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                  >
                    Get Started Now
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
                    <span>Trusted by 50+ Clinics</span>
                  </div>
                </div>
              </div>

              {/* Feature Cards in CTA */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: "HIPAA Secure", desc: "Enterprise Encryption" },
                  { icon: Globe, title: "Global Scale", desc: "Cross-border Ayush" },
                  { icon: Star, title: "NABH Ready", desc: "Accreditation Tools" },
                  { icon: Activity, title: "Real-time Sync", desc: "EHR & Inventory" },
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

      {/* Form Overlay - Updated Style */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setShowForm(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
             {/* Form content remains functionally similar but styled tighter */}
             <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors">
              <X className="h-6 w-6" />
            </button>
            {submitted ? (
              <div className="text-center py-10">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Our Ayush consultants will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Let's Build Together</h3>
                  <p className="text-slate-500 mb-6">Scale your Ayurvedic practice with modern tech.</p>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="popup-name">Full Name</Label>
                    <Input id="popup-name" name="name" placeholder="Vaidya Rajesh" required className="rounded-xl h-12" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="popup-email">Work Email</Label>
                    <Input id="popup-email" name="email" type="email" placeholder="vaidya@ayush.com" required className="rounded-xl h-12" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="popup-message">How can we help?</Label>
                    <Textarea id="popup-message" name="message" placeholder="I need a Panchakarma management system..." required className="rounded-xl" rows={3} />
                  </div>
                </div>
                                <div className="flex justify-center py-2">
                                  <div ref={turnstileRef}></div>
                                </div>
                                {turnstileError && (
                                  <p className="text-xs text-red-500 text-center">{turnstileError}</p>
                                )}
                                <button type="submit" disabled={isSubmitting} className="w-full h-14 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                  {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
