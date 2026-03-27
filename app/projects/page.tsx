'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const featuredProducts = [
  {
    id: 'flowra-crm',
    title: 'Flowra — AI-Powered CRM',
    tagline: 'The sales CRM that closes deals on autopilot',
    desc: 'A full-stack AI-powered CRM platform with intelligent lead scoring, automated follow-ups, WhatsApp & Gmail integration, Razorpay payment tracking, and a real-time analytics dashboard — built for modern sales teams.',
    impact: '₹38.4L Revenue Tracked',
    stats: [
      { label: 'Automations Live', value: '24' },
      { label: 'Deals Auto-Revived', value: '37' },
      { label: 'Emails Synced', value: '4,730' },
      { label: 'Messages/Day', value: '847' },
    ],
    tech: ['Next.js', 'AI Autopilot', 'WhatsApp API', 'Razorpay', 'Gmail Sync', 'Google Calendar'],
    color: '#4B7F52',
    accentColor: '#96E8BC',
    type: 'SaaS · Web Platform',
    badge: 'LIVE PRODUCT',
    href: '/projects/flowra-crm',
  },
  {
    id: 'leapflow-pro',
    title: 'LeapFlow Pro',
    tagline: 'Lead management & analytics in your pocket',
    desc: 'A native Android application designed for field sales teams and lead managers. Real-time lead tracking, smart follow-up reminders, pipeline analytics, and offline support — everything you need to close deals on the go.',
    impact: '5x Faster Lead Response',
    stats: [
      { label: 'Lead Capture', value: 'Real-time' },
      { label: 'Analytics', value: 'Built-in' },
      { label: 'Platform', value: 'Android' },
      { label: 'Offline', value: 'Supported' },
    ],
    tech: ['Kotlin', 'Android', 'Firebase', 'Room DB', 'Retrofit', 'Charts'],
    color: '#06b6d4',
    accentColor: '#67e8f9',
    type: 'Android Application',
    badge: 'MOBILE APP',
    href: '/projects/leapflow-pro',
  },
];

const caseStudies = [
  {
    id: 'customer-support-automation',
    title: 'AI Customer Support Automation',
    desc: 'Automated customer queries using AI-powered support workflows — multi-channel routing, smart escalation, and instant resolution across WhatsApp, email, and web.',
    impact: '80% Faster Support',
    tech: ['OpenAI', 'Automation', 'API Integration'],
    color: '#f59e0b',
    href: '/projects/customer-support-automation',
  },
  {
    id: 'ecommerce-order-processing',
    title: 'E-commerce Order Processing',
    desc: 'End-to-end workflow automation for order management — from placement to delivery, with auto-invoicing, inventory sync, and real-time status updates.',
    impact: '3x Faster Operations',
    tech: ['Workflow Engine', 'Zapier', 'Webhooks'],
    color: '#8b5cf6',
    href: '/projects/ecommerce-order-processing',
  },
  {
    id: 'finance-document-ai',
    title: 'Finance Document AI Processing',
    desc: 'AI-powered document analysis for financial reports, invoices and contracts — intelligent extraction, validation, and automated ledger entry.',
    impact: '90% Manual Work Reduced',
    tech: ['AI OCR', 'LLM Processing', 'Automation'],
    color: '#06b6d4',
    href: '/projects/finance-document-ai',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(75,127,82,0.12) 0%, transparent 70%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-6" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
              OUR WORK
            </div>
            <h1 className="text-[52px] sm:text-[68px] font-black tracking-tight text-white leading-tight mb-5">
              Products &{' '}
              <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects</span>
            </h1>
            <p className="text-[17px] text-white/50 max-w-2xl mx-auto leading-relaxed">
              Real products built and shipped by NexFlow — from AI-powered SaaS platforms to Android applications and intelligent automation systems.
            </p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
              <span className="text-[12px] font-bold tracking-widest text-white/25 uppercase">Featured Products</span>
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProducts.map((p) => (
                <div
                  key={p.id}
                  className="group relative rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${p.color}40`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 24px 64px ${p.color}15`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${p.color}08, transparent)` }} />

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5 relative">
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider" style={{ background: `${p.color}20`, color: p.accentColor, border: `1px solid ${p.color}30` }}>
                        {p.badge}
                      </span>
                      <span className="text-[12px] text-white/25 font-medium">{p.type}</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl text-[12px] font-bold" style={{ background: `${p.color}18`, color: p.accentColor, border: `1px solid ${p.color}25` }}>
                      {p.impact}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] font-black text-white mb-1.5 relative">{p.title}</h3>
                  <p className="text-[13px] font-medium mb-4 relative" style={{ color: p.accentColor }}>{p.tagline}</p>
                  <p className="text-[14px] text-white/45 leading-relaxed mb-6 relative">{p.desc}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-3 mb-6 relative">
                    {p.stats.map(s => (
                      <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="text-[15px] font-black text-white">{s.value}</div>
                        <div className="text-[10px] text-white/30 mt-0.5 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-7 relative">
                    {p.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] text-white/40" style={{ background: 'rgba(255,255,255,0.05)' }}>{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={p.href}
                    className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 self-start"
                    style={{ background: `linear-gradient(135deg, ${p.color}, ${p.accentColor}30)`, border: `1px solid ${p.color}50`, boxShadow: `0 8px 24px ${p.color}25` }}
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
              <span className="text-[12px] font-bold tracking-widest text-white/25 uppercase">Case Studies</span>
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {caseStudies.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${p.color}35`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${p.color}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="inline-flex px-3 py-1 rounded-lg text-[11px] font-bold mb-4" style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}25` }}>{p.impact}</div>
                  <h3 className="text-[17px] font-black text-white mb-2">{p.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map(t => <span key={t} className="px-2.5 py-1 rounded-md text-[11px] text-white/35" style={{ background: 'rgba(255,255,255,0.05)' }}>{t}</span>)}
                  </div>
                  <Link href={p.href} className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors" style={{ color: p.color }}>
                    View Project
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[36px] sm:text-[48px] font-black text-white mb-4">Want Something Built?</h2>
            <p className="text-[16px] text-white/40 mb-8 leading-relaxed">NexFlow builds AI-powered products and automation systems tailored for your business — from idea to launch.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[16px] font-bold text-white transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 32px rgba(75,127,82,0.45)' }}>
              Start Your Project →
            </Link>
          </div>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
