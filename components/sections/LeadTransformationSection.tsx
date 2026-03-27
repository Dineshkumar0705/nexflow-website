"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function LeadTransformationSection() {
  return (
    <section className="section-glass relative overflow-hidden py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="transform-glow-left"></div>
        <div className="transform-glow-right"></div>
      </div>

      <div className="glass-container relative z-10">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            From Missed Leads to Automated Conversions
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            Without automation, leads slip through the cracks. With Nexflow,
            every lead is captured, processed, and converted — automatically.
          </p>
        </Reveal>

        {/* SPLIT IMAGE */}
        <div className="relative max-w-6xl mx-auto">

          <Reveal>
            <div className="transform-card">

              <Image
                src="/images/lead-automation-transformation.png"
                alt="Manual vs Automated Lead Workflow"
                width={1600}
                height={900}
                className="rounded-2xl object-cover w-full h-auto"
                priority
              />

            </div>
          </Reveal>

          {/* LABELS */}
          <div className="absolute top-6 left-6 hidden md:block">
            <span className="transform-label problem">
              Manual Workflow
            </span>
          </div>

          <div className="absolute top-6 right-6 hidden md:block">
            <span className="transform-label solution">
              Automated System
            </span>
          </div>

        </div>

        {/* EXPLANATION CARDS */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">

          {/* LEFT */}
          <Reveal>
            <div className="transform-info problem">

              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Without Automation
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">

                <li>• Leads are delayed or missed</li>
                <li>• Manual follow-ups consume time</li>
                <li>• Data scattered across tools</li>
                <li>• No visibility on lead status</li>
                <li>• Lost revenue opportunities</li>

              </ul>

            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal>
            <div className="transform-info solution">

              <h3 className="text-xl font-semibold mb-4 text-green-600">
                With Nexflow Automation
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">

                <li>• Instant lead capture and routing</li>
                <li>• Automated follow-ups and notifications</li>
                <li>• Centralized CRM and tracking</li>
                <li>• Real-time visibility and updates</li>
                <li>• Higher conversions and revenue growth</li>

              </ul>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  );
}