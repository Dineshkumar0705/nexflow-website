"use client";

import Reveal from "@/components/ui/Reveal";

export default function LeadCTASection() {
  return (
    <section className="section-glass pb-28 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cta-glow-green"></div>
        <div className="cta-glow-orange"></div>
      </div>

      <Reveal>
        <div className="glass-container text-center relative z-10">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
            Never Miss a Lead Again
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Every lead is an opportunity — but only if it’s handled instantly.
            Nexflow ensures your leads are captured, processed, and followed up
            automatically, so you can focus on closing deals instead of chasing them.
          </p>

          {/* HIGHLIGHT POINTS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">

            <span className="cta-pill">
              Instant Response
            </span>

            <span className="cta-pill">
              Zero Missed Leads
            </span>

            <span className="cta-pill">
              Automated Follow-Ups
            </span>

            <span className="cta-pill">
              Higher Conversions
            </span>

          </div>

          {/* CTA BUTTON */}
          <div className="mt-12 flex justify-center">

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/nexflowauto-ai/30min",
                  "_blank"
                )
              }
              className="cta-button"
            >
              Book a Free Demo
            </button>

          </div>

          {/* TRUST LINE */}
          <p className="mt-6 text-gray-400 text-sm">
            No commitment required. See how automation fits your workflow.
          </p>

        </div>
      </Reveal>

    </section>
  );
}