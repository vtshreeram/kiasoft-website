import { Card, CardContent } from "@/components/ui/card";
import { Unplug, Clock, FileStack, EyeOff } from "lucide-react";

export default function Challenge() {
  return (
    <section id="challenge" className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ayurvedic hospitals face unique, complex operational challenges.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From coordinating multi-phase Panchakarma to managing raw herbal inventory, manual workflows cost thousands of man-hours. Our AI OS collapses these efforts from <span className="text-green-600 font-bold underline">hours to minutes</span>.
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
                  Chaotic Panchakarma Scheduling
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Manually matching therapists, specific treatment rooms, and specialized oils for daily Purvakarma and Pradhanakarma therapies leads to critical delays.
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
                  Disconnected Clinical Diagnostics
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Vaidyas waste hours entering subjective Nadi and Prakriti assessments into generic EHRs that don't understand Ayurvedic parameters.
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
                  Complex Inventory Sync
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Tracking raw herbs, Kasayam batches, and custom formulations across the pharmacy and treatment rooms is a logistical nightmare without AI.
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
                  Compliance & Reporting Blindspots
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Without an AI core, adhering to strict Ayush Ministry data standards and generating hospital-wide operational insights requires massive manual audits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
