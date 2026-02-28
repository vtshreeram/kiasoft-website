import { ArrowRight, Sparkles } from "lucide-react";
import { openContactModal } from "@/components/layout/ContactModal";

const footerLinks = {
  product: [
    { label: "AI OS", href: "#services" },
    { label: "Neural Stack", href: "#tech-stack" },
    { label: "AI Advantage", href: "#why-kiasoft" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy.html" },
    { label: "Terms of Service", href: "/terms.html" },
    { label: "Security", href: "/security.html" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2 group mb-4" aria-label="Kiasoft Technologies Home">
                <div className="h-10 w-10 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:rotate-12 transition-transform">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold font-display tracking-tight text-slate-900">
                  Kiasoft<span className="text-green-600">.</span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
                India's 1st AI operating system for Ayush hospitals. Collapsing manual effort from hours to minutes.
              </p>
              <button
                onClick={openContactModal}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 cursor-pointer"
              >
                Deploy AI OS
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:col-span-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-green-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-green-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Kiasoft Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:contact@kiasoft.in" className="text-sm text-slate-500 hover:text-green-600 transition-colors">
                contact@kiasoft.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}