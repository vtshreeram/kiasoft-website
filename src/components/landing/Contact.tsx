import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-chart-2/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-green-700 bg-green-100">
            <MessageSquare className="h-3 w-3" />
            Connect with AI Experts
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Deploy the <span className="text-green-600">AI Operating System.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to collapse your hospital's manual effort from hours to minutes? Let's discuss your AI integration strategy.
          </p>
        </div>

        {/* Contact Form - Centered */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="border-border/60 shadow-sm rounded-[2rem]">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Enquiry Received!
                  </h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Our AI consultants will reach out to you shortly to schedule your OS deployment strategy session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Two-column row for Name and Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Vaidya Rajesh"
                        required
                        autoComplete="name"
                        className="rounded-xl"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">
                        Work Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="vaidya@ayush.com"
                        required
                        autoComplete="email"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="organization">Ayush Hospital / Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="Organization name (optional)"
                      autoComplete="organization"
                      className="rounded-xl"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">
                      AI Integration Needs <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your current manual workflows and where you need AI automation..."
                      rows={4}
                      required
                      className="rounded-xl"
                    />
                  </div>

                  {/* Submit + privacy row */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" size="lg" className="gap-2 rounded-xl bg-green-600 hover:bg-green-700">
                      <Send className="h-4 w-4" />
                      Request AI Strategy Session
                    </Button>

                    <p className="text-xs text-muted-foreground sm:max-w-[240px] sm:text-right">
                      By submitting this form, you agree to our{" "}
                      <a
                        href="#"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Privacy Policy
                      </a>
                      . We&rsquo;ll never share your information with third
                      parties.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
