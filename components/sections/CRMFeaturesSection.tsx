"use client";

import Reveal from "@/components/ui/Reveal";
import {
  Database,
  GitBranch,
  Bell,
  BarChart3,
  Users,
  Workflow,
} from "lucide-react";

const features = [
  {
    title: "Centralized Data",
    desc: "All leads and customer interactions are stored in one place — no more scattered spreadsheets or lost information.",
    icon: Database,
  },
  {
    title: "Automated Pipeline",
    desc: "Leads automatically move across stages based on triggers, actions, and real-time behavior.",
    icon: GitBranch,
  },
  {
    title: "Smart Follow-ups",
    desc: "Emails, reminders, and notifications are triggered automatically — ensuring zero missed opportunities.",
    icon: Bell,
  },
  {
    title: "Live Insights",
    desc: "Track conversions, pipeline health, and performance using real-time dashboards.",
    icon: BarChart3,
  },
  {
    title: "Team Alignment",
    desc: "Assign leads, monitor activities, and keep your entire team synchronized effortlessly.",
    icon: Users,
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive CRM tasks and reduce manual workload across your operations.",
    icon: Workflow,
  },
];

export default function CRMFeaturesSection() {
  return (
    <section className="section-glass relative overflow-hidden">

      {/* 🔥 subtle background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-r from-nexflowGreen via-transparent to-nexflowOrange blur-3xl" />

      <div className="glass-container relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-14 max-w-3xl mx-auto px-4">

            <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
              CRM Automation That{" "}
              <span className="text-nexflowOrange">Drives Conversions</span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Transform your CRM from a simple data storage tool into a powerful
              revenue engine that manages leads, automates follow-ups, and closes deals.
            </p>

          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={index}>
                <div className="crm-feature-card group">

                  {/* ICON */}
                  <div className="crm-feature-icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 mt-5 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* 🔥 subtle bottom glow line */}
                  <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-nexflowOrange to-nexflowGreen group-hover:w-full transition-all duration-500" />

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}