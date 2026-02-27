type EventName = string;
type EventProperties = Record<string, string | number | boolean>;

interface Analytics {
  track: (name: EventName, properties?: EventProperties) => void;
  page: (name: string) => void;
  identify: (userId: string, traits?: Record<string, string>) => void;
}

const isDevelopment = import.meta.env.DEV;
const analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED === "true";

const analytics: Analytics = {
  track: (name: EventName, properties?: EventProperties) => {
    if (isDevelopment) {
      console.log("[Analytics] Track:", name, properties);
      return;
    }

    if (analyticsEnabled && typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, properties);
    }

    if (analyticsEnabled && typeof window !== "undefined" && "plausible" in window) {
      (window as unknown as { plausible: (name: string, props?: EventProperties) => void }).plausible(name, properties);
    }
  },

  page: (name: string) => {
    if (isDevelopment) {
      console.log("[Analytics] Page:", name);
      return;
    }

    if (analyticsEnabled && typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "page_view", { page_title: name });
    }
  },

  identify: (userId: string, traits?: Record<string, string>) => {
    if (isDevelopment) {
      console.log("[Analytics] Identify:", userId, traits);
      return;
    }

    if (analyticsEnabled && typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("config", import.meta.env.VITE_GA_MEASUREMENT_ID || "", {
        user_id: userId,
        user_properties: traits,
      });
    }
  },
};

export function trackFormSubmission(formName: string, success: boolean) {
  analytics.track("form_submission", {
    form_name: formName,
    success,
  });
}

export function trackCTAClick(ctaName: string, destination: string) {
  analytics.track("cta_click", {
    cta_name: ctaName,
    destination,
  });
}

export function trackSectionView(sectionName: string) {
  analytics.track("section_view", {
    section_name: sectionName,
  });
}

export default analytics;