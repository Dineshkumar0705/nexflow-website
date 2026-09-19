"use client";

import Reveal from "@/components/ui/Reveal";

export default function CRMCTASection() {

  const openDemo = () => {
    if (typeof window === "undefined") return;

    const url = "https://calendly.com/nexflowauto-ai/30min";

    const width = 900;
    const height = 700;

    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;

    window.open(
      url,
      "NexflowDemo",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <section className="section-glass pb-28">
      <div className="glass-container text-center max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen leading-tight">
            Turn Your Leads Into{" "}
            <span className="text-nexflowOrange">Revenue Automatically</span>
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing leads in spreadsheets and manual follow-ups.
            With Nexflow CRM automation, every lead is captured, tracked,
            and converted through a structured and intelligent pipeline.
          </p>
        </Reveal>

        {/* VALUE POINTS */}
        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {[
              "No missed follow-ups",
              "Centralized lead tracking",
              "Automated pipeline movement",
              "Higher conversion rates",
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium
                bg-nexflowGreen/10 text-nexflowGreen border border-nexflowGreen/20"
              >
                {item}
              </div>
            ))}

          </div>
        </Reveal>

        {/* CTA BUTTON */}
        <Reveal>
          <div className="mt-12 flex justify-center">

            <button
              onClick={openDemo}
              className="
              relative
              px-8 py-4
              rounded-xl
              font-semibold
              text-white
              text-lg
              bg-nexflowGreen
              hover:scale-105
              transition-all duration-300
              shadow-lg
              hover:shadow-xl
              "
            >
              Book a Free Demo
            </button>

          </div>
        </Reveal>

        {/* TRUST LINE */}
        <Reveal>
          <p className="mt-6 text-sm text-gray-500">
            No commitment. We analyze your workflow and show exact automation plan.
          </p>
        </Reveal>

      </div>
    </section>
  );
}