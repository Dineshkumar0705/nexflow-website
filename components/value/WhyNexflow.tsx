'use client';

import { useEffect, useRef } from 'react';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
      </svg>
    ),
    title: 'AI at the Core',
    desc: 'Every automation is powered by intelligent AI models that learn, adapt, and improve — not just rigid rule-based scripts.',
    color: '#4B7F52',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
    title: 'Instant Results',
    desc: 'Go from manual chaos to fully automated workflows in days, not months. We move fast without cutting corners.',
    color: '#6EC99A',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
    title: 'Enterprise-Grade Reliability',
    desc: '99.9% uptime SLA, end-to-end encryption, and enterprise security so your systems never sleep.',
    color: '#06b6d4',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/>
      </svg>
    ),
    title: 'Seamless Integrations',
    desc: 'Connect to 200+ tools including Salesforce, HubSpot, Slack, Zapier, and any custom API — no friction.',
    color: '#10b981',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
      </svg>
    ),
    title: 'ROI You Can Measure',
    desc: 'Real-time dashboards show exactly how much time and money your automations are saving — every single day.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
      </svg>
    ),
    title: 'Dedicated Expert Team',
    desc: 'You get a dedicated automation specialist — not a chatbot. We own your results and stay with you long-term.',
    color: '#ec4899',
  },
];

export default function WhyNexflow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal').forEach((el, i) => { setTimeout(() => el.classList.add('visible'), i * 80); }); }}),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: '#070710' }}>
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.4),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
            WHY NEXFLOW
          </div>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-tight text-white mb-4 leading-tight">
            Built different.<br />
            <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Delivers differently.</span>
          </h2>
          <p className="text-[17px] text-white/45 max-w-xl mx-auto">
            We don't just set up tools. We engineer intelligent systems that compound in value over time.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal group relative rounded-2xl p-6 transition-all duration-300 cursor-default"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', animationDelay: `${i * 80}ms` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = `rgba(${f.color === '#4B7F52' ? '99,102,241' : f.color === '#6EC99A' ? '139,92,246' : f.color === '#06b6d4' ? '6,182,212' : f.color === '#10b981' ? '16,185,129' : f.color === '#f59e0b' ? '245,158,11' : '236,72,153'},0.06)`;
                (e.currentTarget as HTMLDivElement).style.borderColor = `${f.color}30`;
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px ${f.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.025)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300" style={{ background: `${f.color}18`, border: `1px solid ${f.color}25`, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="text-[17px] font-bold text-white mb-2">{f.title}</h3>
              <p className="text-[14px] text-white/45 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.15),transparent)' }} />
    </section>
  );
}
