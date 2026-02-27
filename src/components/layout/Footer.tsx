import { ArrowRight } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Services", href: "#services" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Why Kiasfot", href: "#why-kiasfot" },
    { label: "Testimonials", href: "#testimonials" },
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
              <a href="#" className="inline-block" aria-label="Kiasfot Technologies Home">
                <img
                  src="/logo.svg"
                  alt="Kiasfot Technologies"
                  width={96}
                  height={32}
                  className="h-8 w-auto"
                />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
                The operating system for modern healthcare. Streamline operations, reduce costs, and improve patient outcomes.
              </p>
              <a
                href="#final-cta"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
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
              &copy; {new Date().getFullYear()} Kiasfot Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:contact@kiasfot.com" className="text-sm text-slate-500 hover:text-green-600 transition-colors">
                contact@kiasfot.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}