"use client";

import Reveal from "@/components/ui/Reveal";
import { ArrowRight, User, Cpu, Database, Zap } from "lucide-react";

/* ===============================
   HOW IT WORKS DATA
================================ */

const steps = [
  {
    title: "User Input",
    desc: "Customer submits a form or request",
    icon: User,
  },
  {
    title: "Automation System",
    desc: "System processes data instantly",
    icon: Cpu,
  },
  {
    title: "Data Handling",
    desc: "Data is stored in CRM or database",
    icon: Database,
  },
  {
    title: "Action Triggered",
    desc: "Email, notification, or workflow is executed",
    icon: Zap,
  },
];

/* ===============================
   BUSINESS IMPACT DATA
================================ */

const points = [
  "Reduce manual workload and save operational time",
  "Minimize human errors in critical processes",
  "Improve response time and customer experience",
  "Scale operations without increasing team size",
  "Centralize workflows and business data",
  "Increase overall operational efficiency",
];

/* ===============================
   MAIN COMPONENT
================================ */

export default function WorkflowFlow() {
  return (
    <main className="w-full relative">

      {/* =====================================
          HOW IT WORKS
      ===================================== */}

      <section className="section-glass relative overflow-hidden">
        <div className="glass-container">

          {/* TITLE */}
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-nexflowGreen mb-6 tracking-tight">
              How It Works
            </h2>
          </Reveal>

          {/* SUBTEXT */}
          <Reveal>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 md:mb-16 px-4 leading-relaxed">
              A customer submits a request → Nexflow processes the data → stores it in a system → automatically triggers follow-ups and workflows.
            </p>
          </Reveal>

          {/* FLOW */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="flex flex-col md:flex-row items-center">

                  {/* CARD */}
                  <Reveal>
                    <div className="workflow-card-new group">

                      <div className="workflow-icon">
                        <Icon size={20} strokeWidth={2} />
                      </div>

                      <h3 className="text-sm md:text-base font-semibold text-gray-900 mt-4 tracking-tight">
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


      {/* =====================================
          BUSINESS IMPACT
      ===================================== */}

      <section className="section-glass">
        <div className="glass-container">

          {/* TITLE */}
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-nexflowGreen mb-12">
              Business Impact
            </h2>
          </Reveal>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">

            {points.map((text, index) => (
              <Reveal key={index}>
                <div className="why-card group">

                  {/* NUMBER ICON */}
                  <div className="why-number-icon">
                    <span>{index + 1}</span>
                  </div>

                  {/* TEXT */}
                  <p className="why-text">
                    {text}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}