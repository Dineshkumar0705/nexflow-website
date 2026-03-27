"use client";

import Reveal from "@/components/ui/Reveal";
import {
  Building2,
  Home,
  ShoppingCart,
  Briefcase,
  Users,
  ClipboardList,
} from "lucide-react";

const useCases = [
  {
    title: "Sales Teams",
    desc: "Capture leads, track interactions, and automate follow-ups to close deals faster.",
    icon: Users,
  },
  {
    title: "Real Estate",
    desc: "Manage property inquiries, assign agents, and schedule site visits automatically.",
    icon: Home,
  },
  {
    title: "E-commerce",
    desc: "Track customers, automate offers, and improve retention with smart workflows.",
    icon: ShoppingCart,
  },
  {
    title: "Agencies",
    desc: "Handle multiple clients, manage pipelines, and automate communication efficiently.",
    icon: Briefcase,
  },
  {
    title: "Service Businesses",
    desc: "Capture bookings, assign tasks, and streamline customer communication.",
    icon: ClipboardList,
  },
  {
    title: "Enterprises",
    desc: "Manage large-scale customer data, automate workflows, and improve team coordination.",
    icon: Building2,
  },
];

export default function CRMUseCasesSection() {
  return (
    <section className="section-glass relative overflow-hidden">

      {/* 🔥 subtle background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-r from-nexflowGreen via-transparent to-nexflowOrange blur-3xl" />

      <div className="glass-container relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-14 max-w-3xl mx-auto px-4">

            <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
              CRM Automation for{" "}
              <span className="text-nexflowOrange">Every Business</span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Whether you're managing leads, customers, or large-scale operations,
              our CRM automation adapts to your business and improves how you convert and retain customers.
            </p>

          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={index}>
                <div className="crm-usecase-card group">

                  {/* ICON */}
                  <div className="crm-usecase-icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 mt-5 tracking-tight">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* 🔥 hover underline */}
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