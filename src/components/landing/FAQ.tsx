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
    question: "What makes Kiasoft India's first AI Operating System for Ayush?",
    answer:
      "Unlike generic EHRs that are retrofitted for Ayurveda, Kiasoft is built from the ground up as a neural AyushOS specifically designed for the unique complexities of Ayush hospitals, fully automating traditional workflows from Nadi analysis to multi-phase Panchakarma logistics.",
  },
  {
    question: "How does the AI optimize complex Panchakarma protocols?",
    answer:
      "Our AI core handles the logistical nightmare of Panchakarma by dynamically scheduling therapies, auto-assigning available therapists based on skill, matching specific treatment rooms, and synchronizing real-time herb/oil inventory—eliminating human error and delays.",
  },
  {
    question: "How does AI reduce man-hour effort from hours to minutes?",
    answer:
      "By autonomously orchestrating the daily Purvakarma, Pradhanakarma, and Paschatkarma phases for every patient. Tasks that previously required manual data entry, cross-referencing, and phone calls are now handled instantly by the AI core.",
  },
  {
    question: "Is the AI compliance engine really autonomous?",
    answer:
      "Yes. The AI constantly monitors all clinical and operational workflows against Ayush Ministry and global data standards, automatically flagging discrepancies and ensuring 100% compliance without manual audits.",
  },
  {
    question: "How long does it take to deploy the AyushOS?",
    answer:
      "Our rapid deployment framework allows us to integrate the AI core into your hospital operations in as little as 4-6 weeks, significantly faster than traditional legacy ERP implementations.",
  },
  {
    question: "Will the AI integrate with our existing legacy systems?",
    answer:
      "Yes, our AyushOS is designed with an API-first architecture, allowing it to act as an intelligent layer on top of your existing financial (Tally/Zoho) and diagnostic systems.",
  },
  {
    question: "Is patient data safe with AI processing?",
    answer:
      "Security is paramount. All AI processing occurs within encrypted, HIPAA-compliant environments, ensuring that while the system learns patterns, individual patient privacy is never compromised.",
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
            AyushOS FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Intelligent Solutions, <span className="text-green-600">Answered.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn how our AI Operating System is transforming Ayush hospital management.
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
