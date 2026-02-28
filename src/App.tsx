import { Suspense, lazy } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import ErrorBoundary from "@/components/ErrorBoundary";
import ContactModal from "@/components/layout/ContactModal";
import { SectionSkeleton } from "@/components/ui/skeleton";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { PageTransition } from "@/components/ui/PageTransition";

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
      <ScrollProgress />
      <div className="relative min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <ContactModal />

        <main id="main-content" role="main">
          <PageTransition>
            <Hero />
          </PageTransition>
          
          <Trust />

          <Suspense fallback={<SectionSkeleton />}>
            <PageTransition delay={0.1}>
              <Services />
            </PageTransition>

            <PageTransition delay={0.15}>
              <TechStack />
            </PageTransition>

            <PageTransition delay={0.2}>
              <AyushBenefits />
            </PageTransition>

            <PageTransition delay={0.25}>
              <Testimonials />
            </PageTransition>

            <PageTransition delay={0.3}>
              <FAQ />
            </PageTransition>

            <PageTransition delay={0.35}>
              <FinalCTA />
            </PageTransition>
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
