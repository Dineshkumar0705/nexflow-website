"use client";

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function CRMTransformationSection() {
  return (
    <section className="section-glass relative overflow-hidden">

      {/* 🔥 Background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-r from-nexflowOrange via-transparent to-nexflowGreen blur-3xl" />

      <div className="glass-container relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-14 max-w-3xl mx-auto px-4">

            <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
              From Chaos to{" "}
              <span className="text-nexflowOrange">Clarity</span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Replace messy spreadsheets and missed follow-ups with a
              structured CRM system that captures, tracks, and converts
              every lead automatically.
            </p>

          </div>
        </Reveal>

        {/* IMAGE */}
        <Reveal>
          <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">

            <Image
              src="/images/crm-before-after.png"
              alt="CRM transformation from manual workflow to automated system"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />

          </div>
        </Reveal>

        {/* TEXT COMPARISON */}
        <div className="mt-14 grid md:grid-cols-2 gap-10 px-4">

          {/* LEFT — BEFORE */}
          <Reveal>
            <div className="crm-transform-card">

              <h3 className="text-lg font-semibold text-red-500 mb-4">
                ❌ Manual Workflow
              </h3>

              <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">

                <li>• Scattered spreadsheets and tools</li>
                <li>• Missed follow-ups and lost leads</li>
                <li>• No visibility into sales pipeline</li>
                <li>• High manual effort and inefficiency</li>

              </ul>

            </div>
          </Reveal>

          {/* RIGHT — AFTER */}
          <Reveal>
            <div className="crm-transform-card">

              <h3 className="text-lg font-semibold text-green-600 mb-4">
                ✅ CRM Automation
              </h3>

              <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">

                <li>• Centralized customer data system</li>
                <li>• Automated follow-ups and reminders</li>
                <li>• Clear and structured sales pipeline</li>
                <li>• Efficient and scalable operations</li>

              </ul>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}