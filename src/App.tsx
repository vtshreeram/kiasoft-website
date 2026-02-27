import { Suspense, lazy } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import ErrorBoundary from "@/components/ErrorBoundary";

const Services = lazy(() => import("@/components/landing/Services"));
const TechStack = lazy(() => import("@/components/landing/TechStack"));
const AyushBenefits = lazy(() => import("@/components/landing/AyushBenefits"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const FAQ = lazy(() => import("@/components/landing/FAQ"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));
const Footer = lazy(() => import("@/components/layout/Footer"));
const CookieConsent = lazy(() => import("@/components/layout/CookieConsent"));

function App() {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-background font-sans antialiased">
        <Navbar />

        <main id="main-content" role="main">
          <Hero />
          
          <Trust />

          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-green-600">Loading Kiasfot Platforms...</div>}>
            <Services />

            <TechStack />

            <AyushBenefits />

            <Testimonials />

            <FAQ />

            <FinalCTA />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
          <CookieConsent />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
