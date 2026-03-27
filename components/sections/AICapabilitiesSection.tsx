"use client";

import Reveal from "@/components/ui/Reveal";

import {
  FileText,
  MessageSquare,
  Brain,
  BarChart3,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function AICapabilitiesSection() {

  const capabilities = [
    {
      title: "Intelligent Document Processing",
      desc: "Automatically extract, structure, and validate data from PDFs, invoices, and documents using AI.",
      icon: FileText,
    },
    {
      title: "AI Chatbots & Assistants",
      desc: "Handle customer queries, generate responses, and assist users with context-aware conversations.",
      icon: MessageSquare,
    },
    {
      title: "Decision Automation",
      desc: "Enable systems to make intelligent decisions based on patterns, rules, and real-time data.",
      icon: Brain,
    },
    {
      title: "Data Analysis & Insights",
      desc: "Analyze large datasets to generate summaries, trends, and actionable business insights.",
      icon: BarChart3,
    },
    {
      title: "AI Workflow Engines",
      desc: "Combine AI understanding with automation to build fully autonomous business workflows.",
      icon: Cpu,
    },
    {
      title: "Continuous Learning Systems",
      desc: "Improve system performance over time using feedback loops and data-driven learning.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="section-glass py-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ai-cap-glow-green"></div>
        <div className="ai-cap-glow-orange"></div>
      </div>

      <div className="glass-container relative z-10">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            What AI Can Do for Your Business
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            AI automation goes beyond simple workflows — it enables systems to
            understand data, make decisions, and continuously improve performance.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {capabilities.map((item, i) => {
            const Icon = item.icon;

            return (
              <Reveal key={i}>
                <div className="ai-cap-card group">

                  {/* ICON */}
                  <div className="ai-cap-icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-nexflowGreen mt-4 mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}