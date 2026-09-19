"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

import {
  User,
  Cpu,
  Database,
  Mail,
  Bell,
  Repeat,
} from "lucide-react";

export default function LeadWorkflowSection() {

  const steps = [
    {
      title: "Lead Capture",
      desc: "Customer submits a form, message, or inquiry",
      icon: User,
    },
    {
      title: "Processing",
      desc: "System validates and structures the data",
      icon: Cpu,
    },
    {
      title: "CRM Storage",
      desc: "Lead is automatically stored and organized",
      icon: Database,
    },
    {
      title: "Instant Response",
      desc: "Email or message is sent immediately",
      icon: Mail,
    },
    {
      title: "Notification",
      desc: "Your team is alerted in real-time",
      icon: Bell,
    },
    {
      title: "Follow-Up",
      desc: "Automated sequences and reminders triggered",
      icon: Repeat,
    },
  ];

  return (
    <section className="section-glass py-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="workflow-glow-green"></div>
        <div className="workflow-glow-orange"></div>
      </div>

      <div className="glass-container relative z-10">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            How Lead Automation Works
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            From the moment a lead enters your system, every step is handled automatically —
            ensuring instant response, organized data, and consistent follow-ups.
          </p>
        </Reveal>

        {/* IMAGE */}
        <Reveal>
          <div className="flex justify-center mb-20 px-4">

            <div className="workflow-image-card">
              <Image
                src="/images/lead-automation-flow.png"
                alt="Lead Automation Workflow Nexflow"
                width={1400}
                height={800}
                className="rounded-2xl object-cover w-full h-auto"
                priority
              />
            </div>

          </div>
        </Reveal>

        {/* STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <Reveal key={i}>
                <div className="workflow-step-card group">

                  {/* ICON */}
                  <div className="workflow-step-icon">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base font-semibold text-nexflowGreen mt-4 mb-2">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}