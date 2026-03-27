"use client";

import {
  Hospital,
  Headphones,
  Briefcase,
  Building2,
  Banknote,
  Users,
} from "lucide-react";

export default function Industries() {

  const openCalendly = (e: React.MouseEvent) => {
    e.stopPropagation();

    const url = "https://calendly.com/nexflowauto-ai/30min";

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const industries = [
    {
      title: "Healthcare",
      description:
        "Automate patient records, appointment scheduling, medical documentation and administrative workflows.",
      icon: Hospital,
    },
    {
      title: "BPO Operations",
      description:
        "Streamline high-volume operational processes, customer workflows and internal task automation.",
      icon: Building2,
    },
    {
      title: "Call Centers",
      description:
        "AI-driven customer interaction systems, automated ticketing and intelligent support workflows.",
      icon: Headphones,
    },
    {
      title: "HR & Recruitment",
      description:
        "Automate resume screening, candidate communication, interview scheduling and hiring pipelines.",
      icon: Users,
    },
    {
      title: "Finance & Accounting",
      description:
        "Automated invoice processing, financial document extraction and reporting workflows.",
      icon: Banknote,
    },
    {
      title: "Enterprise Operations",
      description:
        "End-to-end business automation systems for internal operations and cross-department workflows.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen">
            Industries We Serve
          </h2>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Nexflow delivers intelligent automation systems across industries,
            helping organizations reduce manual work and scale operations efficiently.
          </p>

        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              >

                {/* Hover background gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition duration-500 bg-gradient-to-br 
                  from-nexflowGreen/10 to-nexflowOrange/10"
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 flex items-center justify-center 
                  rounded-lg bg-cardCream mb-6 transition-transform duration-500 
                  group-hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-nexflowGreen group-hover:text-nexflowOrange transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3
                  className="relative z-10 text-xl font-semibold text-nexflowGreen 
                  group-hover:text-nexflowOrange transition-colors duration-300"
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-3 text-gray-600 leading-relaxed">
                  {industry.description}
                </p>

                {/* Accent line */}
                <div
                  className="relative z-10 mt-6 h-[3px] w-12 bg-nexflowGreen 
                  transition-all duration-300 group-hover:w-24 group-hover:bg-nexflowOrange"
                />

                {/* Demo Button */}
                <div className="relative z-10 mt-6">

                  <button
                    type="button"
                    onClick={openCalendly}
                    className="
                    inline-block
                    px-5 py-2.5
                    rounded-lg
                    border
                    border-nexflowGreen
                    text-nexflowGreen
                    text-sm
                    font-semibold
                    transition
                    hover:bg-nexflowGreen
                    hover:text-white
                    "
                  >
                    Book Demo
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}