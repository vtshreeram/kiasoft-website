import { useState, useRef, useEffect, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

interface UseContactFormOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useContactForm(options: UseContactFormOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

  useEffect(() => {
    if (turnstileRef.current && siteKey && window.turnstile) {
      turnstileRef.current.innerHTML = "";
      window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
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
  }, [siteKey]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (siteKey && !turnstileToken) {
      setTurnstileError("Please complete the captcha first");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      message: formData.get("message") as string,
    };

    setIsSubmitting(true);

    try {
      const apiEndpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT || "https://api.zeptomail.com/v1.1/email";
      const apiKey = import.meta.env.VITE_ZEPTO_API_KEY || "";
      const fromEmail = import.meta.env.VITE_FROM_EMAIL || "noreply@kiasoft.in";
      const toEmail = import.meta.env.VITE_CONTACT_EMAIL || "contact@kiasoft.in";

      if (apiKey) {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": apiKey,
          },
          body: JSON.stringify({
            from: { address: fromEmail, name: "Kiasoft Technologies" },
            to: [{ address: toEmail, name: "Kiasoft Technologies Team" }],
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

        if (!response.ok) {
          throw new Error("Failed to send email");
        }
      }

      setSubmitted(true);
      setTurnstileToken("");
      if (turnstileRef.current) {
        turnstileRef.current.innerHTML = "";
      }

      options.onSuccess?.();

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(true);
      options.onError?.(error as Error);
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setTurnstileToken("");
    setTurnstileError("");
  };

  return {
    isSubmitting,
    submitted,
    turnstileToken,
    turnstileError,
    turnstileRef,
    handleSubmit,
    reset,
    hasCaptcha: !!siteKey,
  };
}