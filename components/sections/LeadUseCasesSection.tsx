"use client";

import Reveal from "@/components/ui/Reveal";

import {
  Users,
  MessageCircle,
  Mail,
  Calendar,
  Megaphone,
  Database,
} from "lucide-react";

export default function LeadUseCasesSection() {

  const useCases = [
    {
      title: "Website Lead Capture",
      desc: "Automatically capture form submissions, store data, send instant responses, and notify your sales team.",
      icon: Users,
    },
    {
      title: "WhatsApp / Chat Automation",
      desc: "Capture leads from chat platforms, send auto replies, and store conversations in your system.",
      icon: MessageCircle,
    },
    {
      title: "Email Funnel Automation",
      desc: "Trigger automated email sequences and follow-ups the moment a lead is captured.",
      icon: Mail,
    },
    {
      title: "Appointment Booking",
      desc: "Automatically schedule demos, send confirmations, and manage reminders without manual effort.",
      icon: Calendar,
    },
    {
      title: "Ad Campaign Lead Processing",
      desc: "Capture leads from ads, qualify them, and route to the right team instantly.",
      icon: Megaphone,
    },
    {
      title: "CRM Automation",
      desc: "Store, track, and manage all leads in one centralized system with real-time updates.",
      icon: Database,
    },
  ];

  return (
    <section className="section-glass py-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="usecase-glow-green"></div>
        <div className="usecase-glow-orange"></div>
      </div>

      <div className="glass-container relative z-10">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-nexflowGreen mb-6">
            Where Lead Automation Works
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            From capturing leads to closing deals, automation can streamline every
            stage of your customer journey — across platforms and workflows.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {useCases.map((item, i) => {
            const Icon = item.icon;

            return (
              <Reveal key={i}>
                <div className="usecase-card group">

                  {/* ICON */}
                  <div className="usecase-icon-orange">
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