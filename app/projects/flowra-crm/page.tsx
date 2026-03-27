'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const integrations = [
  { name: 'WhatsApp Business', desc: '1,284 messages sent today. Automated follow-ups, template messages, and read receipts — directly from your CRM pipeline.', stat: '98.2% Open Rate', color: '#22c55e', icon: '💬' },
  { name: 'Gmail', desc: '4,730 emails synced. Two-way email sync, automated sequences, inbox-to-CRM contact capture and thread tracking.', stat: '42.1% Open Rate', color: '#ef4444', icon: '✉️' },
  { name: 'Google Calendar', desc: '312 events synchronized. Meeting scheduling, auto-create deal touchpoints, and team availability management.', stat: '47 Meetings', color: '#3b82f6', icon: '📅' },
  { name: 'Autopilot AI', desc: '24 automations live. Stale deal alerts, AI lead scoring, smart routing, and re-engagement flows — hands-free.', stat: '18h/wk Saved', color: '#8b5cf6', icon: '🤖' },
  { name: 'Razorpay', desc: '₹38.4L revenue tracked. Payment tracking, invoice generation, subscription sync, and refund handling built-in.', stat: '97.8% Success Rate', color: '#06b6d4', icon: '💳' },
  { name: 'In-App Notifications', desc: '143 alerts sent today. Instant alerts, custom rules, push notifications and digest emails for every deal move.', stat: '91.4% Read Rate', color: '#f59e0b', icon: '🔔' },
];

const features = [
  {
    title: 'Smart Contact Management',
    desc: 'Manage every lead and customer with AI-powered lead scoring (0–100), status tracking across New → Contacted → Qualified → Converted, and source attribution across WhatsApp, Gmail, Web Form, and Referral.',
    highlight: 'Hot Leads auto-detected at score 70+',
    icon: '👥',
    color: '#4B7F52',
  },
  {
    title: 'Visual Deal Pipeline',
    desc: 'Kanban-style deal pipeline with customisable stages — Lead, Proposal, Negotiation, Won. Real-time pipeline velocity chart, deal distribution analytics, and one-click deal touchpoints via calendar.',
    highlight: '47 Active Deals · 62% Win Rate',
    icon: '🎯',
    color: '#96E8BC',
  },
  {
    title: 'AI Task Manager',
    desc: 'Stay on top of every to-do and follow-up. Urgent, Overdue, Due Today filters. Kanban + List views. Automated task creation from deal events — never miss a follow-up again.',
    highlight: '9 tasks tracked · 1 overdue alert',
    icon: '✅',
    color: '#06b6d4',
  },
  {
    title: 'Activity Feed & Audit Trail',
    desc: 'Full audit trail of every event across your CRM — contacts, deals, messages, automations, and system events. Activity heatmap, event breakdown, and CSV export for compliance.',
    highlight: '20 Events · 49-day heatmap',
    icon: '📊',
    color: '#8b5cf6',
  },
  {
    title: 'Reports & Analytics',
    desc: 'Revenue trend, pipeline velocity, win/loss breakdown, lead source analysis, and top performer leaderboard. Filter by Last 30d, Last 90d, This Year, or All Time. One-click PDF export.',
    highlight: '₹11.2L Revenue · +23% YoY growth',
    icon: '📈',
    color: '#f59e0b',
  },
  {
    title: 'Autopilot Automation Engine',
    desc: 'AI triggers automations the moment conditions are met — stale deal revival, cold lead re-engagement, WhatsApp follow-up sequences, Gmail triggers, and smart routing rules.',
    highlight: '37 deals auto-revived this month',
    icon: '⚡',
    color: '#22c55e',
  },
];

const topPerformers = [
  { rank: '🥇', name: 'Arjun Sharma', deals: 14, revenue: '₹42.0L', winRate: '74%', color: '#f59e0b' },
  { rank: '🥈', name: 'Priya Nair', deals: 11, revenue: '₹33.0L', winRate: '68%', color: '#9ca3af' },
  { rank: '🥉', name: 'Vikram Singh', deals: 9, revenue: '₹27.0L', winRate: '56%', color: '#cd7c2f' },
  { rank: '4', name: 'Ananya Rao', deals: 7, revenue: '₹21.0L', winRate: '53%', color: '#6b7280' },
];

const techStack = [
  { label: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
  { label: 'Backend', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Redis'] },
  { label: 'Integrations', items: ['WhatsApp Business API', 'Gmail API', 'Google Calendar', 'Razorpay'] },
  { label: 'AI & Automation', items: ['Autopilot Engine', 'Lead Scoring AI', 'Smart Routing', 'NLP Triggers'] },
];

// Screenshot filenames — drop images into /public/images/projects/flowra-crm/
const screenshots = [
  { file: '/images/projects/flowra-crm/dashboard.png', label: 'Dashboard Overview' },
  { file: '/images/projects/flowra-crm/tasks.png', label: 'Task Manager' },
  { file: '/images/projects/flowra-crm/contacts.png', label: 'Contacts & Leads' },
  { file: '/images/projects/flowra-crm/reports.png', label: 'Reports & Analytics' },
  { file: '/images/projects/flowra-crm/integrations.png', label: 'Connected Apps' },
  { file: '/images/projects/flowra-crm/activity.png', label: 'Activity Feed' },
];

export default function FlowraCRMPage() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* ─── Hero ─── */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(75,127,82,0.14) 0%, transparent 65%)' }} />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[13px] text-white/30 mb-8">
              <Link href="/projects" className="hover:text-white/60 transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-white/60">Flowra CRM</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-[#96E8BC]" style={{ background: 'rgba(75,127,82,0.15)', border: '1px solid rgba(150,232,188,0.25)' }}>
                    LIVE PRODUCT
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-white/40" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    SaaS · Web Platform
                  </span>
                </div>

                <h1 className="text-[52px] sm:text-[64px] font-black tracking-tight text-white leading-[1.05] mb-4">
                  Flowra<br />
                  <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>CRM</span>
                </h1>

                <p className="text-[18px] text-white/40 font-medium mb-2">AI-powered CRM for modern sales teams</p>
                <p className="text-[15px] text-white/35 leading-relaxed mb-8">
                  A complete sales operating system — intelligent lead scoring, multi-channel automation, real-time analytics, and 6 deep integrations that run your pipeline on autopilot.
                </p>

                {/* Key stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '₹38.4L', label: 'Revenue Tracked' },
                    { value: '24', label: 'Automations Live' },
                    { value: '6/6', label: 'Apps Connected' },
                  ].map(s => (
                    <div key={s.label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div className="text-[24px] font-black text-white">{s.value}</div>
                      <div className="text-[12px] text-white/30 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 24px rgba(75,127,82,0.4)' }}>
                    Build Similar System →
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white/60 transition-all hover:text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Book Demo
                  </Link>
                </div>
              </div>

              {/* Stats panel */}
              <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-[12px] font-bold text-white/25 tracking-widest uppercase mb-4">Live Dashboard Metrics</div>
                {[
                  { label: 'WhatsApp Messages Sent', value: '1,284/day', color: '#22c55e', pct: 98 },
                  { label: 'Gmail Emails Synced', value: '4,730 total', color: '#ef4444', pct: 85 },
                  { label: 'Calendar Events', value: '312 synced', color: '#3b82f6', pct: 70 },
                  { label: 'Deals Auto-Revived', value: '37 this month', color: '#8b5cf6', pct: 78 },
                  { label: 'Revenue Tracked', value: '₹38.4L', color: '#4B7F52', pct: 92 },
                  { label: 'Notification Alerts', value: '143 sent today', color: '#f59e0b', pct: 65 },
                ].map(m => (
                  <div key={m.label} className="mb-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[13px] text-white/50">{m.label}</span>
                      <span className="text-[13px] font-bold text-white">{m.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${m.pct}%`, background: m.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Screenshot Gallery ─── */}
        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold text-[#96E8BC] mb-3" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>PRODUCT SCREENSHOTS</div>
              <h2 className="text-[32px] sm:text-[42px] font-black text-white">Every screen, crafted with intent</h2>
            </div>

            {/* Tab bar */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreen(i)}
                  className="px-4 py-2 rounded-xl text-[12px] font-semibold transition-all"
                  style={{
                    background: activeScreen === i ? 'rgba(75,127,82,0.25)' : 'rgba(255,255,255,0.05)',
                    border: activeScreen === i ? '1px solid rgba(150,232,188,0.35)' : '1px solid rgba(255,255,255,0.08)',
                    color: activeScreen === i ? '#96E8BC' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Browser mockup frame */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
              {/* Browser chrome */}
              <div className="px-4 py-3 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-xs mx-auto px-4 py-1.5 rounded-lg text-[12px] text-white/30 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    flowra.nexflowauto.ai
                  </div>
                </div>
              </div>
              {/* Screen area */}
              <div className="relative w-full" style={{ aspectRatio: '16/9', background: 'rgba(10,20,15,0.8)' }}>
                {/* Try to load actual screenshot, fallback to styled mockup */}
                <Image
                  src={screenshots[activeScreen].file}
                  alt={screenshots[activeScreen].label}
                  fill
                  className="object-cover object-top"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  unoptimized
                />
                {/* Fallback overlay — shown when no image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'rgba(5,10,7,0.6)' }}>
                  <div className="text-[48px] mb-3">📊</div>
                  <div className="text-[16px] font-bold text-white/50">{screenshots[activeScreen].label}</div>
                  <div className="text-[12px] text-white/25 mt-1">Screenshot: {screenshots[activeScreen].file}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Features ─── */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold text-[#96E8BC] mb-3" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>FEATURES</div>
              <h2 className="text-[32px] sm:text-[48px] font-black text-white mb-3">Everything your sales team needs</h2>
              <p className="text-[16px] text-white/35 max-w-xl mx-auto">Six powerful modules working in harmony — so your team can focus on closing, not managing.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${f.color}35`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${f.color}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="text-[32px] mb-4">{f.icon}</div>
                  <h3 className="text-[17px] font-black text-white mb-2">{f.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed mb-4">{f.desc}</p>
                  <div className="px-3 py-1.5 rounded-lg text-[11px] font-bold inline-flex" style={{ background: `${f.color}15`, color: f.color, border: `1px solid ${f.color}20` }}>
                    {f.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Integrations ─── */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold text-[#96E8BC] mb-3" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>INTEGRATIONS</div>
              <h2 className="text-[32px] sm:text-[48px] font-black text-white mb-3">6 apps. One connected ecosystem.</h2>
              <p className="text-[15px] text-white/35 max-w-lg mx-auto">Every tool your team uses — synced, automated, and reporting into one dashboard.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {integrations.map((intg, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${intg.color}35`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${intg.color}12`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[24px]">{intg.icon}</span>
                      <span className="text-[15px] font-black text-white">{intg.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-[10px] text-green-400 font-semibold">Live</span>
                    </div>
                  </div>
                  <p className="text-[13px] text-white/40 leading-relaxed mb-4">{intg.desc}</p>
                  <div className="px-3 py-1.5 rounded-lg text-[11px] font-bold inline-flex" style={{ background: `${intg.color}15`, color: intg.color, border: `1px solid ${intg.color}20` }}>
                    {intg.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Top Performers ─── */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold text-[#96E8BC] mb-3" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>ANALYTICS</div>
              <h2 className="text-[32px] sm:text-[42px] font-black text-white mb-3">Team performance, at a glance</h2>
              <p className="text-[15px] text-white/35">Built-in leaderboard ranked by deals won and revenue generated.</p>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Header */}
              <div className="grid grid-cols-4 px-6 py-4 text-[11px] font-bold tracking-widest text-white/25 uppercase" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span>Rep</span><span className="text-right">Deals Won</span><span className="text-right">Revenue</span><span className="text-right">Win Rate</span>
              </div>
              {topPerformers.map((p, i) => (
                <div key={i} className="grid grid-cols-4 px-6 py-5 items-center transition-all hover:bg-white/[0.02]" style={{ borderBottom: i < topPerformers.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-[18px]">{p.rank}</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-black text-white" style={{ background: `${p.color}30` }}>
                      {p.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[14px] font-semibold text-white">{p.name}</span>
                  </div>
                  <span className="text-right text-[15px] font-black text-white">{p.deals}</span>
                  <span className="text-right text-[15px] font-bold text-white">{p.revenue}</span>
                  <div className="flex justify-end">
                    <span className="px-2.5 py-1 rounded-lg text-[13px] font-bold" style={{ background: i === 0 ? 'rgba(34,197,94,0.15)' : i === 1 ? 'rgba(75,127,82,0.15)' : 'rgba(255,255,255,0.05)', color: i === 0 ? '#22c55e' : i === 1 ? '#96E8BC' : '#f59e0b' }}>
                      {p.winRate}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue callout */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Best Month', value: 'March (+34%)', icon: '📈' },
                { label: 'Top Lead Source', value: 'WhatsApp (34%)', icon: '⚡' },
                { label: 'Avg. Close Time', value: '8 days', icon: '🎯' },
              ].map(s => (
                <div key={s.label} className="rounded-xl p-4 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="text-[20px]">{s.icon}</span>
                  <div>
                    <div className="text-[14px] font-black text-white">{s.value}</div>
                    <div className="text-[11px] text-white/35">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold text-[#96E8BC] mb-3" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>TECH STACK</div>
              <h2 className="text-[32px] sm:text-[42px] font-black text-white">Built with production-grade tech</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techStack.map((layer, i) => (
                <div key={i} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-[11px] font-bold tracking-widest text-[#96E8BC] uppercase mb-3">{layer.label}</div>
                  <div className="flex flex-col gap-2">
                    {layer.items.map(item => (
                      <span key={item} className="text-[13px] text-white/60 font-medium flex items-center gap-2">
                        <span style={{ color: '#4B7F52' }}>▸</span> {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Security badges */}
            <div className="mt-8 rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-[12px] font-bold text-white/25 tracking-widest uppercase mb-4 text-center">Security & Trust</div>
              <div className="flex flex-wrap justify-center gap-4">
                {['OAuth 2.0 Auth', 'AES-256 Encryption', 'GDPR Compliant', 'API Rate Limiting', 'Audit Logs', 'Data Residency (India)', 'ISO 27001 Certified'].map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-[12px] text-white/40">
                    <span className="text-[#4B7F52] text-[14px]">✓</span> {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-3xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden" style={{ background: 'rgba(75,127,82,0.08)', border: '1px solid rgba(150,232,188,0.15)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(75,127,82,0.1) 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="text-[32px] sm:text-[48px] font-black text-white mb-4">Want a CRM like Flowra?</h2>
              <p className="text-[16px] text-white/40 max-w-lg mx-auto mb-8 leading-relaxed">NexFlow builds custom AI-powered CRM and sales automation systems tailored to your team's workflow and industry.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-bold text-white transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 32px rgba(75,127,82,0.45)' }}>
                  Build My CRM →
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-semibold text-white/50 transition-all hover:text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  ← Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
