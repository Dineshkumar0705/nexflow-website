"use client";

import Reveal from "@/components/ui/Reveal";

import {
  FileSearch,
  MessageCircle,
  Mail,
  LineChart,
  UserCheck,
  Database,
} from "lucide-react";

export default function AIUseCasesSection() {

  const useCases = [
    {
      title: "Document Processing",
      desc: "Extract and structure data from invoices, PDFs, and documents automatically using AI.",
      icon: FileSearch,
    },
    {
      title: "AI Chat Support",
      desc: "Handle customer queries with intelligent responses and escalate when necessary.",
      icon: MessageCircle,
    },
    {
      title: "Smart Email Automation",
      desc: "Classify incoming emails, generate replies, and trigger workflows automatically.",
      icon: Mail,
    },
    {
      title: "Financial Analysis",
      desc: "Analyze transactions, detect patterns, and generate reports with AI-driven insights.",
      icon: LineChart,
    },
    {
      title: "Resume Screening",
      desc: "Automatically filter and shortlist candidates based on job requirements.",
      icon: UserCheck,
    },
    {
      title: "Data Processing Pipelines",
      desc: "Clean, validate, and process large datasets into structured business-ready formats.",
      icon: Database,
    },
  ];

  return (
    <section className="section-glass py-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ai-use-glow-green"></div>
        <div className="ai-use-glow-orange"></div>
      </div>

      <div className="glass-container relative z-10">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            Real-World AI Use Cases
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            AI automation can be applied across multiple business functions —
            from handling customer interactions to processing complex data workflows.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {useCases.map((item, i) => {
            const Icon = item.icon;

            return (
              <Reveal key={i}>
                <div className="ai-use-card group">

                  {/* ICON */}
                  <div className="ai-use-icon">
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