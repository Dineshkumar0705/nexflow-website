'use client';

import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Web Platform',
    category: 'Web App',
    industry: 'Retail',
    desc: 'Full-stack e-commerce platform with AI product recommendations, real-time inventory, and integrated payment gateway.',
    tags: ['Next.js', 'Node.js', 'AI', 'Stripe'],
    screens: [
      { label: 'Dashboard', bars: [65, 80, 55, 90, 70, 85] },
      { label: 'Products',  bars: [40, 60, 75, 50, 88, 72] },
    ],
    emoji: '🛒',
    accent: '#4B7F52',
  },
  {
    title: 'AI Customer Support Bot',
    category: 'AI Chatbot',
    industry: 'SaaS',
    desc: 'WhatsApp + website chatbot handling 500+ daily queries with GPT-4. Trained on company knowledge base and escalates edge cases.',
    tags: ['GPT-4', 'WhatsApp API', 'Python', 'LangChain'],
    screens: [
      { label: 'Chats',    bars: [90, 75, 85, 60, 95, 80] },
      { label: 'Resolved', bars: [70, 85, 65, 90, 75, 88] },
    ],
    emoji: '🤖',
    accent: '#6EC99A',
  },
  {
    title: 'Real Estate CRM Dashboard',
    category: 'CRM Dashboard',
    industry: 'Real Estate',
    desc: 'Custom CRM with lead pipeline, property tracking, automated follow-ups, and a full analytics dashboard for agents and managers.',
    tags: ['React', 'PostgreSQL', 'Automation', 'Analytics'],
    screens: [
      { label: 'Leads',      bars: [55, 70, 82, 60, 75, 90] },
      { label: 'Properties', bars: [80, 65, 78, 88, 70, 85] },
    ],
    emoji: '📊',
    accent: '#96E8BC',
  },
  {
    title: 'Android Delivery App',
    category: 'Android App',
    industry: 'Logistics',
    desc: 'Real-time delivery tracking app with driver assignment, route optimization, live GPS updates, and customer notifications.',
    tags: ['Flutter', 'Firebase', 'Maps API', 'Push Notif.'],
    screens: [
      { label: 'Map View', bars: [75, 88, 65, 92, 70, 85] },
      { label: 'Orders',   bars: [60, 78, 85, 70, 88, 75] },
    ],
    emoji: '📦',
    accent: '#4B7F52',
  },
  {
    title: 'HR Recruitment SaaS',
    category: 'SaaS Platform',
    industry: 'HR Tech',
    desc: 'AI-powered recruitment platform with automated resume screening, candidate scoring, interview scheduling, and team collaboration.',
    tags: ['AI Screening', 'SaaS', 'React', 'OpenAI'],
    screens: [
      { label: 'Pipeline', bars: [85, 70, 90, 65, 80, 88] },
      { label: 'Resumes',  bars: [72, 88, 65, 85, 75, 92] },
    ],
    emoji: '👥',
    accent: '#6EC99A',
  },
  {
    title: 'Lead Automation System',
    category: 'Business Automation',
    industry: 'Marketing',
    desc: 'End-to-end lead capture, qualification, CRM sync, and automated email/WhatsApp follow-up workflow handling 1,000+ leads/month.',
    tags: ['n8n', 'Make.com', 'WhatsApp', 'HubSpot'],
    screens: [
      { label: 'Leads In', bars: [60, 75, 88, 70, 92, 80] },
      { label: 'Converted', bars: [45, 60, 72, 85, 65, 90] },
    ],
    emoji: '⚡',
    accent: '#96E8BC',
  },
];

const categoryColors: Record<string, string> = {
  'Web App': '#4B7F52',
  'AI Chatbot': '#6EC99A',
  'CRM Dashboard': '#96E8BC',
  'Android App': '#4B7F52',
  'SaaS Platform': '#6EC99A',
  'Business Automation': '#96E8BC',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web App', 'AI Chatbot', 'CRM Dashboard', 'Android App', 'SaaS Platform', 'Business Automation'];
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#050A07' }}>

      {/* BG glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(150,232,188,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
            <span className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: '#96E8BC' }}>Our Work</span>
          </div>
          <h2 className="text-[40px] md:text-[52px] font-black text-white tracking-tight mb-5">
            Real Products.{' '}
            <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real Impact.
            </span>
          </h2>
          <p className="text-[17px] text-white/45 max-w-xl mx-auto leading-relaxed">
            A showcase of applications, platforms, and AI systems we have built for clients across industries.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
              style={{
                background: activeFilter === f ? 'rgba(75,127,82,0.2)' : 'rgba(255,255,255,0.03)',
                border: activeFilter === f ? '1px solid rgba(150,232,188,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: activeFilter === f ? '#96E8BC' : 'rgba(255,255,255,0.4)',
              }}>
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(150,232,188,0.08)', backdropFilter: 'blur(12px)' }}>

              {/* App mockup preview */}
              <div className="relative overflow-hidden" style={{ background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(150,232,188,0.08)' }}>
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.05]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-3 h-5 rounded flex items-center px-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <span className="text-[10px] text-white/20">nexflow.ai / {project.category.toLowerCase().replace(' ', '-')}</span>
                  </div>
                </div>

                {/* App UI simulation */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{project.emoji}</span>
                    <div>
                      <div className="text-[12px] font-semibold text-white/80">{project.title}</div>
                      <div className="text-[10px] text-white/30">{project.industry}</div>
                    </div>
                    <div className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-medium"
                      style={{ background: 'rgba(150,232,188,0.1)', color: '#96E8BC', border: '1px solid rgba(150,232,188,0.2)' }}>
                      Live
                    </div>
                  </div>

                  {/* Simulated screen tabs */}
                  <div className="flex gap-1 mb-3">
                    {project.screens.map((s, si) => (
                      <div key={si} className="px-2 py-0.5 rounded text-[10px]"
                        style={{ background: si === 0 ? 'rgba(75,127,82,0.2)' : 'rgba(255,255,255,0.04)', color: si === 0 ? '#96E8BC' : 'rgba(255,255,255,0.3)' }}>
                        {s.label}
                      </div>
                    ))}
                  </div>

                  {/* Bar chart visualization */}
                  <div className="flex items-end gap-1 h-10 mb-3">
                    {project.screens[0].bars.map((h, bi) => (
                      <div key={bi} className="flex-1 rounded-sm transition-all duration-300"
                        style={{ height: `${h}%`, background: bi === project.screens[0].bars.length - 1 ? `linear-gradient(to top, ${project.accent}, #96E8BC)` : `rgba(75,127,82,0.25)` }} />
                    ))}
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-2">
                    {['Performance', 'Uptime', 'Users'].map((m, mi) => (
                      <div key={mi} className="rounded p-1.5 text-center" style={{ background: 'rgba(75,127,82,0.06)', border: '1px solid rgba(150,232,188,0.06)' }}>
                        <div className="text-[10px] text-white/25">{m}</div>
                        <div className="text-[11px] font-bold" style={{ color: '#96E8BC' }}>{['98%', '99.9%', '↑ 3x'][mi]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.15)', color: '#96E8BC' }}>
                    {project.category}
                  </span>
                  <span className="text-[11px] text-white/25">{project.industry}</span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-[#96E8BC] transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Desc */}
                <p className="text-[13px] text-white/38 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: '#96E8BC' }}>
                  View Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 32px rgba(75,127,82,0.4)' }}>
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
