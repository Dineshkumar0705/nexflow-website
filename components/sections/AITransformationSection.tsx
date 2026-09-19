"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function AITransformationSection() {
  return (
    <section className="section-glass py-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ai-transform-glow-green"></div>
        <div className="ai-transform-glow-orange"></div>
      </div>

      <div className="glass-container relative z-10">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            From Manual Work to Intelligent Systems
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            Traditional systems rely on human effort to read, process, and decide.
            AI automation understands data, makes decisions, and executes workflows
            — instantly and intelligently.
          </p>
        </Reveal>

        {/* IMAGE */}
        <div className="max-w-6xl mx-auto px-4">

          <Reveal>
            <div className="ai-transform-card group">

              <Image
                src="/images/ai-automation-transformation.png"
                alt="AI Automation Transformation Nexflow"
                width={1600}
                height={900}
                className="rounded-2xl object-cover w-full h-auto transition duration-500 group-hover:scale-[1.02]"
                priority
              />

            </div>
          </Reveal>

        </div>

        {/* COMPARISON GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto px-4">

          {/* BEFORE */}
          <Reveal>
            <div className="ai-info-card problem">

              <h3 className="text-xl font-semibold mb-5 text-gray-700">
                Traditional Systems
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">

                <li>• Manual data reading and processing</li>
                <li>• Time-consuming repetitive workflows</li>
                <li>• Multiple disconnected tools and systems</li>
                <li>• High dependency on human effort</li>
                <li>• Slower and inconsistent decision-making</li>

              </ul>

            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal>
            <div className="ai-info-card solution">

              <h3 className="text-xl font-semibold mb-5 text-nexflowGreen">
                AI-Powered Systems
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">

                <li>• AI understands and extracts data instantly</li>
                <li>• Fully automated intelligent workflows</li>
                <li>• Connected and centralized systems</li>
                <li>• Minimal human intervention required</li>
                <li>• Faster, smarter, and consistent decisions</li>

              </ul>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  );
}