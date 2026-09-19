"use client";

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function TransformationSection() {
  return (
    <section className="section-glass">
      <div className="glass-container">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            From Team Overload to Intelligent Automation
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Traditional workflows require
            <span className="text-orange-500 font-semibold">
              {" "}multiple people, constant coordination, and manual effort{" "}
            </span>
            to keep operations running.

            With automation, a
            <span className="text-green-500 font-semibold">
              {" "}single intelligent system{" "}
            </span>
            can handle the entire workflow — faster, cleaner, and without errors.
          </p>
        </Reveal>

        {/* IMAGE */}
        <Reveal>
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-6xl">

              <Image
                src="/images/workflow-transformation.png"
                alt="Manual workflow vs automated system transformation"
                width={1400}
                height={700}
                className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 hover:scale-[1.02]"
                priority
              />

            </div>
          </div>
        </Reveal>

        {/* FLOW LABELS */}
        <Reveal>
          <div className="flex justify-center flex-wrap gap-4 mb-6 text-xs md:text-sm">

            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
              Manual Work
            </span>

            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
              Team Dependency
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
              Automated Flow
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
              Smart System
            </span>

          </div>
        </Reveal>

        {/* BOTTOM TEXT */}
        <Reveal>
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            From
            <span className="text-orange-500 font-semibold">
              {" "}scattered tasks{" "}
            </span>
            to
            <span className="text-green-500 font-semibold">
              {" "}structured automation{" "}
            </span>
            — every step becomes faster, smarter, and more reliable.
          </p>
        </Reveal>

      </div>
    </section>
  );
}