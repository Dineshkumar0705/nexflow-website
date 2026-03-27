"use client";

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function WorkflowSteps() {
  return (
    <section className="section-glass">
      <div className="glass-container">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            How Workflow Automation Works
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            A structured automation workflow connects every step of your business —
            from
            <span className="text-orange-500 font-semibold"> data input </span>
            to
            <span className="text-green-500 font-semibold"> execution and response</span>,
            ensuring seamless operations without manual intervention.
          </p>
        </Reveal>

        {/* IMAGE */}
        <Reveal>
          <div className="flex justify-center mb-14">
            <div className="relative w-full max-w-6xl">

              <Image
                src="/images/workflow-steps.png"
                alt="Workflow automation steps"
                width={1400}
                height={600}
                className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 hover:scale-[1.02]"
                priority
              />

            </div>
          </div>
        </Reveal>

        {/* STEP LABELS */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm mb-6">

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
              Lead Input
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
              Data Processing
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
              CRM Storage
            </span>

            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
              Email Automation
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
              Task Assignment
            </span>

            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
              Notification System
            </span>

          </div>
        </Reveal>

        {/* DESCRIPTION */}
        <Reveal>
          <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Each step in the workflow is automatically triggered based on defined rules,
            allowing your business to operate with
            <span className="text-green-500 font-semibold"> speed</span>,
            <span className="text-green-500 font-semibold"> accuracy</span>, and
            <span className="text-green-500 font-semibold"> consistency</span> —
            without relying on manual processes.
          </p>
        </Reveal>

      </div>
    </section>
  );
}