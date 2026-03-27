"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Mail,
  MessageSquare,
  Database,
  Bell,
  Workflow
} from "lucide-react";

export default function AutomationImpact() {

  const inputs = [
    { icon: Mail, label: "Lead Form" },
    { icon: FileText, label: "Documents" },
    { icon: MessageSquare, label: "Customer Queries" },
  ];

  const outputs = [
    { icon: Database, label: "CRM Updated" },
    { icon: Bell, label: "Sales Alert" },
    { icon: Workflow, label: "Workflow Triggered" },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % inputs.length);
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="py-28">

      <div className="glass-section max-w-6xl mx-auto px-12 py-24 relative overflow-hidden">

        {/* glow */}
        <div className="impact-bg-glow"></div>


        {/* HEADER */}

        <div className="text-center mb-24">

          <h2 className="text-4xl md:text-5xl font-bold text-nexflowGreen tracking-tight">
            Automation Impact
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Nexflow transforms incoming business operations into intelligent
            automated workflows that eliminate repetitive tasks and accelerate
            operational efficiency.
          </p>

        </div>


        {/* PIPELINE */}

        <div className="grid md:grid-cols-3 items-center gap-16 relative">


          {/* INPUTS */}

          <div className="flex flex-col gap-8 relative z-10">

            {inputs.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`
                  impact-card
                  flex items-center gap-4
                  p-5
                  rounded-xl
                  transition-all duration-500
                  ${active === index ? "impact-card-active" : ""}
                  `}
                >

                  <div className="impact-icon">
                    <Icon className="w-5 h-5 text-nexflowGreen" />
                  </div>

                  <span className="font-medium text-gray-700">
                    {item.label}
                  </span>

                </div>
              );

            })}

          </div>



          {/* ENGINE */}

          <div className="relative flex flex-col items-center justify-center text-center">

            {/* LEFT FLOW LINE */}

            <div className="flow-line flow-left">

              <span className="flow-dot"></span>
              <span className="flow-dot"></span>
              <span className="flow-dot"></span>

            </div>


            {/* RIGHT FLOW LINE */}

            <div className="flow-line flow-right">

              <span className="flow-dot"></span>
              <span className="flow-dot"></span>
              <span className="flow-dot"></span>

            </div>


            {/* ENGINE CORE */}

            <div className="engine-core">

              Nexflow
              <br />
              Engine

            </div>

            <p className="mt-6 text-gray-600 max-w-xs text-sm leading-relaxed">
              AI powered automation engine that processes incoming data and
              triggers intelligent workflows across business systems.
            </p>

          </div>



          {/* OUTPUTS */}

          <div className="flex flex-col gap-8 relative z-10">

            {outputs.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                  impact-card
                  flex items-center gap-4
                  p-5
                  rounded-xl
                  transition-all duration-300
                  "
                >

                  <div className="impact-icon">
                    <Icon className="w-5 h-5 text-nexflowOrange" />
                  </div>

                  <span className="font-medium text-gray-700">
                    {item.label}
                  </span>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}