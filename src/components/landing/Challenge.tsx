import { Card, CardContent } from "@/components/ui/card";
import { Unplug, Clock, FileStack, EyeOff } from "lucide-react";

const painPoints = [
  {
    icon: Unplug,
    title: "Fragmented systems and disconnected workflows",
    description:
      "Disparate tools and siloed data create gaps that slow down care delivery and introduce errors.",
  },
  {
    icon: Clock,
    title: "Delays in care delivery and patient access",
    description:
      "Bottlenecks in scheduling, referrals, and communication leave patients waiting longer for the care they need.",
  },
  {
    icon: FileStack,
    title: "Heavy administrative workload",
    description:
      "Excessive paperwork and manual processes take clinicians away from what matters most — their patients.",
  },
  {
    icon: EyeOff,
    title: "Limited visibility into patient data and outcomes",
    description:
      "Without unified analytics, organizations struggle to track performance and make informed decisions.",
  },
];

export default function Challenge() {
  return (
    <section id="challenge" className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Modern healthcare faces growing complexity.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Care teams often spend more time managing systems than caring for
            patients.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <Card
                key={point.title}
                className="group border-border/60 bg-background transition-shadow hover:shadow-md"
              >
                <CardContent className="flex gap-4 p-6">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
