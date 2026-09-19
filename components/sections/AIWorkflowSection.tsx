"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

import {
  ArrowRight,
  FileInput,
  Brain,
  GitBranch,
  Zap,
} from "lucide-react";

export default function AIWorkflowSection() {

  const steps = [
    {
      title: "Input",
      desc: "User data, documents, or requests enter the system.",
      icon: FileInput,
    },
    {
      title: "AI Processing",
      desc: "AI analyzes data, understands context, and extracts meaning.",
      icon: Brain,
    },
    {
      title: "Decision Logic",
      desc: "System determines the next action based on intelligence and rules.",
      icon: GitBranch,
    },
    {
      title: "Automation Execution",
      desc: "Workflows are triggered automatically across tools and systems.",
      icon: Zap,
    },
  ];

  return (
    <section className="section-glass py-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ai-flow-glow-green"></div>
        <div className="ai-flow-glow-orange"></div>
      </div>

      <div className="glass-container relative z-10">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            How AI Automation Works
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            AI systems don’t just automate tasks — they understand data, make
            intelligent decisions, and execute workflows automatically.
          </p>
        </Reveal>

        {/* IMAGE */}
        <div className="max-w-6xl mx-auto px-4 mb-16">

          <Reveal>
            <div className="ai-flow-image-card group">

              <Image
                src="/images/ai-automation-flow.png"
                alt="AI Automation Workflow Nexflow"
                width={1600}
                height={900}
                className="rounded-2xl object-cover w-full h-auto transition duration-500 group-hover:scale-[1.02]"
                priority
              />

            </div>
          </Reveal>

        </div>

        {/* STEP FLOW */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="flex flex-col md:flex-row items-center">

                {/* CARD */}
                <Reveal>
                  <div className="ai-flow-card group">

                    <div className="ai-flow-icon">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mt-4">
                      {step.title}
                    </h3>

                    <p className="text-xs md:text-sm text-gray-600 mt-2 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                </Reveal>

                {/* ARROW */}
                {index !== steps.length - 1 && (
                  <>
                    <ArrowRight className="hidden md:block mx-4 text-gray-300" />
                    <ArrowRight className="md:hidden rotate-90 my-4 text-gray-300" />
                  </>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
