"use client";

import Link from "next/link";

const solutions = [
  {
    title: "Web & SaaS Development",
    desc: "Custom websites, web applications, and full SaaS platforms built with modern tech stacks. Fast, scalable, and production-ready.",
    icon: "🌐",
    tags: ["Next.js", "React", "Node.js"],
    href: "/solutions/web-development",
    color: "#4B7F52",
  },
  {
    title: "Android App Development",
    desc: "Native and cross-platform Android applications with seamless UX, integrated APIs, and AI capabilities built-in.",
    icon: "📱",
    tags: ["Flutter", "Kotlin", "Firebase"],
    href: "/solutions/android-development",
    color: "#6EC99A",
  },
  {
    title: "AI Chatbots & Assistants",
    desc: "Intelligent AI-powered chatbots for websites, WhatsApp, and apps. Automate support, sales, and customer engagement 24/7.",
    icon: "🤖",
    tags: ["GPT-4", "WhatsApp API", "LangChain"],
    href: "/solutions/ai-chatbots",
    color: "#96E8BC",
  },
  {
    title: "CRM Dashboards",
    desc: "Custom CRM systems and business dashboards tailored to your workflow. Real-time data, lead tracking, and pipeline management.",
    icon: "📊",
    tags: ["Custom CRM", "Analytics", "Real-time"],
    href: "/solutions/crm-dashboards",
    color: "#4B7F52",
  },
  {
    title: "Business Automation",
    desc: "End-to-end workflow automation that eliminates repetitive tasks. Lead capture, follow-ups, invoicing, and more on autopilot.",
    icon: "⚡",
    tags: ["n8n", "Zapier", "Make.com"],
    href: "/solutions/business-automation",
    color: "#6EC99A",
  },
  {
    title: "Integrated AI Systems",
    desc: "Full-stack AI integrations across your business — combining web apps, mobile, CRM, and automation into one connected ecosystem.",
    icon: "🔗",
    tags: ["API Integration", "AI Pipeline", "Full-stack"],
    href: "/solutions/integrated-systems",
    color: "#96E8BC",
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#050A07' }}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, rgba(75,127,82,0.6) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
            <span className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: '#96E8BC' }}>What We Build</span>
          </div>
          <h2 className="text-[40px] md:text-[52px] font-black text-white tracking-tight mb-5">
            One Team.{' '}
            <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Every Solution.
            </span>
          </h2>
          <p className="text-[17px] text-white/45 max-w-2xl mx-auto leading-relaxed">
            From AI-powered chatbots to full SaaS platforms — NexFlow covers the entire digital spectrum so you can focus on growing your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item, i) => (
            <Link href={item.href} key={i} className="group block">
              <div className="relative rounded-2xl p-6 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(75,127,82,0.15)]"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(150,232,188,0.08)', backdropFilter: 'blur(12px)' }}>

                {/* Top accent line on hover */}
                <div className="absolute top-0 left-6 right-6 h-px rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.12)' }}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-white mb-3 group-hover:text-[#96E8BC] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-[14px] text-white/40 leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag, t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.12)', color: 'rgba(150,232,188,0.6)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-200"
                  style={{ color: 'rgba(150,232,188,0.5)' }}>
                  <span className="group-hover:text-[#96E8BC] transition-colors">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
