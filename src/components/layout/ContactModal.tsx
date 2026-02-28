import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Simple custom event system for the modal
const CONTACT_MODAL_EVENT = 'contact-modal-toggle';

export const openContactModal = () => {
  window.dispatchEvent(new CustomEvent(CONTACT_MODAL_EVENT, { detail: true }));
};

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
const ZEPTO_API_KEY = import.meta.env.VITE_ZEPTO_API_KEY || "";
const ZEPTO_FROM_EMAIL = import.meta.env.VITE_FROM_EMAIL || "noreply@kiasoft.in";
const ZEPTO_TO_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contact@kiasoft.in";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleToggle = (e: any) => setIsOpen(e.detail);
    window.addEventListener(CONTACT_MODAL_EVENT, handleToggle);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, handleToggle);
  }, []);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && turnstileRef.current) {
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
    
    if (!isOpen) {
        setSubmitted(false);
        setTurnstileToken("");
        setTurnstileError("");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
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
          from: { address: ZEPTO_FROM_EMAIL, name: "Kiasoft Technologies" },
          to: [{ address: ZEPTO_TO_EMAIL, name: "Kiasoft Technologies Team" }],
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
      setTimeout(() => { 
        closeModal();
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(true);
      setTimeout(() => { 
        closeModal();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" 
            onClick={closeModal} 
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
             <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors">
              <X className="h-6 w-6" />
            </button>
            {submitted ? (
              <div className="text-center py-10">
                <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <ShieldCheck className="h-10 w-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                <p className="text-slate-600">Our Ayush consultants will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-4"
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>AI OS Deployment</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Let's Build Together</h3>
                  <p className="text-slate-500 mb-6 text-sm">Scale your Ayurvedic practice with modern tech.</p>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="modal-name">Full Name</Label>
                    <Input id="modal-name" name="name" placeholder="Vaidya Rajesh" required className="rounded-xl h-12" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="modal-email">Work Email</Label>
                    <Input id="modal-email" name="email" type="email" placeholder="vaidya@ayush.in" required className="rounded-xl h-12" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="modal-org">Hospital / Organization</Label>
                    <Input id="modal-org" name="organization" placeholder="Ayush Hospital Name" required className="rounded-xl h-12" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="modal-message">Integration Needs</Label>
                    <Textarea id="modal-message" name="message" placeholder="I need a Panchakarma management system..." required className="rounded-xl" rows={3} />
                  </div>
                </div>
                {TURNSTILE_SITE_KEY && (
                    <div className="flex justify-center py-2">
                        <div ref={turnstileRef}></div>
                    </div>
                )}
                {turnstileError && (
                    <p className="text-xs text-red-500 text-center">{turnstileError}</p>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full h-14 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 mt-4">
                  {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Request AI Strategy Session"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
