import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Is your software tailored specifically for Ayurveda and Ayush systems?",
    answer:
      "Yes. Unlike generic EHRs, our platforms natively support Ayurvedic diagnostic parameters like Prakriti, Vikriti, Nadi Pariksha, and Dhatu analysis, alongside standard medical vitals.",
  },
  {
    question: "Do you offer solutions for Panchakarma management?",
    answer:
      "Absolutely. We have specialized modules for scheduling therapies, assigning therapists, tracking specialized herb and oil inventory, and managing inpatient room assignments.",
  },
  {
    question: "Can you build a custom e-commerce platform for our Ayurvedic products?",
    answer:
      "Yes, we develop scalable, secure e-commerce solutions specifically for Ayurvedic pharmacies and wellness brands, complete with batch tracking and regulatory compliance features.",
  },
  {
    question: "Are your platforms HIPAA and Ayush Ministry compliant?",
    answer:
      "Security is our top priority. Our software architectures follow strict HIPAA guidelines for patient data and adhere to data standards recommended by the Ministry of Ayush.",
  },
  {
    question: "How long does custom software development take?",
    answer:
      "Implementation timelines vary. A basic clinic management system can be deployed in 4-6 weeks, while large-scale custom hospital ERPs or e-commerce platforms may take 3-4 months.",
  },
  {
    question: "Will you integrate with our existing accounting or lab software?",
    answer:
      "Yes, we build APIs to seamlessly integrate our Ayush platforms with your existing financial systems (like Tally/Zoho), diagnostic labs, and payment gateways.",
  },
  {
    question: "What kind of support do you provide post-launch?",
    answer:
      "We provide ongoing maintenance, secure cloud hosting, routine security updates, and dedicated technical support to ensure your practice runs smoothly.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-muted/30 py-20 sm:py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 gap-1.5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-700 bg-green-100"
          >
            <HelpCircle className="h-3 w-3" />
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn more about our customized Ayush software development services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/60"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline hover:text-green-600 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
