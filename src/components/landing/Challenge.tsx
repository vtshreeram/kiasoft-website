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
            Legacy systems drain your hospital's most valuable resource: Time.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Manual Ayush workflows cost thousands of man-hours. Our AI OS collapses these efforts from <span className="text-green-600 font-bold underline">hours to minutes</span>.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          <Card className="group border-border/60 bg-background transition-shadow hover:shadow-md">
            <CardContent className="flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15">
                <Unplug className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  Disconnected Clinical Workflows
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Traditional EHRs create data silos that force practitioners to waste hours on redundant manual entry.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group border-border/60 bg-background transition-shadow hover:shadow-md">
            <CardContent className="flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15">
                <Clock className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  Massive Manual Admin Overhead
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Clinicians spend up to 40% of their day on administrative tasks that could be handled in minutes with AI.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group border-border/60 bg-background transition-shadow hover:shadow-md">
            <CardContent className="flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15">
                <FileStack className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  Fragmented Patient Histories
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Searching for historical patterns takes too long, delaying critical treatment decisions and care delivery.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group border-border/60 bg-background transition-shadow hover:shadow-md">
            <CardContent className="flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15">
                <EyeOff className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  Zero Real-time Operational Insights
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Without an AI core, you lack the predictive data needed to optimize hospital resources and patient throughput.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
