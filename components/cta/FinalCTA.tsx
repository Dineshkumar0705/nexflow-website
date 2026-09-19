"use client";

import Link from "next/link";

export default function FinalCTA() {

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
    <section className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          relative
          overflow-hidden
          text-center
          rounded-3xl
          px-10
          py-20
          bg-gradient-to-r
          from-nexflowGreen/90
          via-nexflowGreen
          to-nexflowOrange/90
          text-white
          shadow-2xl
          "
        >

          {/* Glow Layer */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,white,transparent_70%)]"></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Automate Your Business Operations?
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Discover how Nexflow can eliminate repetitive work,
              streamline operations, and help your business scale
              with intelligent automation systems.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6">

              {/* Demo Button */}
              <button
                type="button"
                onClick={openDemo}
                className="cta-button-white"
                aria-label="Book demo with Nexflow"
              >
                Book Demo
              </button>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="
                px-8 py-3
                rounded-xl
                border-2
                border-white
                text-white
                font-semibold
                hover:bg-white
                hover:text-nexflowGreen
                transition
              "
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}