import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Why Kiasfot", href: "#why-kiasfot" },
  { label: "Contact", href: "#final-cta" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled
          ? "py-4"
          : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between px-6 h-16 rounded-[2rem] transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-green-900/5" 
            : "bg-transparent border-transparent"
        }`}>
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="Kiasfot Technologies - Home"
          >
            <div className="h-10 w-10 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:rotate-12 transition-transform">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-slate-900">
              Kiasfot<span className="text-green-600">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-green-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#final-cta"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:bg-green-600 hover:shadow-green-500/20 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <button
            id="mobile-menu-button"
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-bold text-slate-900 hover:text-green-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-slate-100" />
              <a
                href="#final-cta"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-green-600 px-6 text-lg font-bold text-white"
              >
                Request a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
