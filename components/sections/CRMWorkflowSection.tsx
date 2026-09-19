"use client";

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import {
  UserPlus,
  LayoutDashboard,
  GitBranch,
  Mail,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Lead Capture",
    desc: "Customer submits data through forms, landing pages, or integrations.",
    icon: UserPlus,
  },
  {
    title: "CRM Dashboard",
    desc: "All data is automatically stored and organized in a central system.",
    icon: LayoutDashboard,
  },
  {
    title: "Sales Pipeline",
    desc: "Leads move across stages based on actions and predefined rules.",
    icon: GitBranch,
  },
  {
    title: "Follow-up Automation",
    desc: "Emails, reminders, and notifications are triggered instantly.",
    icon: Mail,
  },
  {
    title: "Conversion",
    desc: "Leads are converted into customers efficiently without manual effort.",
    icon: CheckCircle,
  },
];

export default function CRMWorkflowSection() {
  return (
    <section className="section-glass relative overflow-hidden">

      {/* 🔥 subtle glow background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-r from-nexflowGreen via-transparent to-nexflowOrange blur-3xl" />

      <div className="glass-container relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-14 max-w-3xl mx-auto px-4">

            <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
              How CRM Automation{" "}
              <span className="text-nexflowOrange">Works</span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              From capturing leads to converting customers, our CRM automation
              system ensures every step is handled efficiently without manual effort.
            </p>

          </div>
        </Reveal>

        {/* IMAGE */}
        <Reveal>
          <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">

            <Image
              src="/images/crm-automation-flow.png"
              alt="CRM automation workflow"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />

          </div>
        </Reveal>

        {/* STEPS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={index}>
                <div className="crm-step-card group">

                  {/* ICON */}
                  <div className="crm-step-icon">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base font-semibold text-gray-900 mt-4">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* STEP NUMBER */}
                  <div className="crm-step-number">
                    {index + 1}
                  </div>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}