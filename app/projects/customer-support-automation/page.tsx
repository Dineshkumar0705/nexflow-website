'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const outcomes = [
  { value: '80%', label: 'Faster Response Time', icon: '⚡' },
  { value: '60%', label: 'Support Cost Reduction', icon: '💰' },
  { value: '24/7', label: 'Always-On Support', icon: '🕐' },
  { value: '94%', label: 'Customer Satisfaction', icon: '⭐' },
];

const workflow = [
  { step: '01', title: 'Query Received', desc: 'Customer sends a message via WhatsApp, email, or web chat. The system instantly detects intent and language.', color: '#f59e0b' },
  { step: '02', title: 'AI Classification', desc: 'OpenAI classifies the query by type — billing, technical, general, or complaint — and determines urgency level.', color: '#06b6d4' },
  { step: '03', title: 'Auto-Resolution', desc: 'For 80% of queries, the AI drafts and sends a resolution instantly using your knowledge base and past tickets.', color: '#22c55e' },
  { step: '04', title: 'Smart Escalation', desc: 'Complex or high-priority queries are routed to the right human agent with full context and suggested response.', color: '#8b5cf6' },
];

const stack = ['OpenAI GPT-4', 'WhatsApp Business API', 'Node.js', 'Webhooks', 'Zapier', 'Knowledge Base API'];

export default function CustomerSupportPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 65%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[13px] text-white/30 mb-8">
              <Link href="/projects" className="hover:text-white/60 transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-white/60">Customer Support Automation</span>
            </div>
            <div className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold mb-5" style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', color: '#f59e0b' }}>CASE STUDY · AI AUTOMATION</div>
            <h1 className="text-[48px] sm:text-[60px] font-black text-white tracking-tight leading-tight mb-4">
              AI Customer<br />Support <span style={{ background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Automation</span>
            </h1>
            <p className="text-[16px] text-white/40 max-w-2xl leading-relaxed mb-10">Multi-channel AI support system with intelligent query classification, auto-resolution, and smart escalation — reducing response time by 80% while slashing support costs.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {outcomes.map(o => (
                <div key={o.label} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-[24px] mb-1">{o.icon}</div>
                  <div className="text-[28px] font-black text-white">{o.value}</div>
                  <div className="text-[11px] text-white/35 mt-1 leading-tight">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex px-4 py-1.5 rounded-full text-[11px] font-bold text-[#fbbf24] mb-3" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>HOW IT WORKS</div>
              <h2 className="text-[32px] font-black text-white">From query to resolution in seconds</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {workflow.map((w, i) => (
                <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-[11px] font-black tracking-widest mb-3" style={{ color: w.color }}>STEP {w.step}</div>
                  <h3 className="text-[16px] font-black text-white mb-2">{w.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[24px] font-black text-white mb-6 text-center">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {stack.map(t => (
                <span key={t} className="px-4 py-2 rounded-xl text-[13px] font-semibold text-white/60" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="text-[32px] font-black text-white mb-4">Want AI support for your business?</h2>
          <p className="text-[15px] text-white/40 max-w-md mx-auto mb-8">NexFlow builds custom AI customer support systems for any industry — WhatsApp, web, and email.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#b45309,#fbbf24)', boxShadow: '0 8px 24px rgba(245,158,11,0.3)' }}>
              Build Similar System →
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-semibold text-white/40 transition-all hover:text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              ← Back to Projects
            </Link>
          </div>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
