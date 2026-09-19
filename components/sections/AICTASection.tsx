"use client";

import Reveal from "@/components/ui/Reveal";
import { Sparkles } from "lucide-react";

export default function AICTASection() {
  return (
    <section className="section-glass pb-28 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ai-cta-glow-green"></div>
        <div className="ai-cta-glow-orange"></div>
      </div>

      <Reveal>
        <div className="glass-container text-center relative z-10">

          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="ai-cta-icon">
              <Sparkles size={24} />
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
            Build Smarter Systems with AI
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Move beyond manual workflows and rule-based automation.  
            Let us design intelligent systems that understand data, make decisions,
            and execute processes automatically — tailored to your business.
          </p>

          {/* VALUE PILLS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">

            <span className="ai-cta-pill">
              Intelligent Automation
            </span>

            <span className="ai-cta-pill">
              Faster Decision-Making
            </span>

            <span className="ai-cta-pill">
              Reduced Manual Effort
            </span>

            <span className="ai-cta-pill">
              Scalable Systems
            </span>

          </div>

          {/* BUTTON */}
          <div className="mt-12 flex justify-center">

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/nexflowauto-ai/30min",
                  "_blank"
                )
              }
              className="ai-cta-button"
            >
              Book a Free AI Consultation
            </button>

          </div>

          {/* TRUST LINE */}
          <p className="mt-6 text-gray-400 text-sm">
            No technical knowledge required. We handle everything end-to-end.
          </p>

        </div>
      </Reveal>

    </section>
  );
}