'use client';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';

const features = [
  { icon: '🔄', title: 'Workflow Automation', desc: 'Map and automate multi-step business processes — from lead intake to invoice generation — using n8n, Make.com, or custom code.' },
  { icon: '📧', title: 'Email & WhatsApp Automation', desc: 'Automated drip sequences, triggered alerts, and follow-up campaigns across email and WhatsApp — fully personalized.' },
  { icon: '🎯', title: 'Lead Capture & Nurturing', desc: 'Automatically capture leads from forms, ads, and social — score them, enrich data, and push to your CRM with zero manual work.' },
  { icon: '📄', title: 'Document Processing', desc: 'AI-powered extraction from invoices, contracts, and forms. Auto-fill spreadsheets, trigger approvals, and archive documents.' },
  { icon: '🤝', title: 'CRM & App Integrations', desc: 'Connect your tools — HubSpot, Zoho, Shopify, Razorpay, Google Sheets — so data flows automatically across your stack.' },
  { icon: '📊', title: 'Reporting & Alerts', desc: 'Automated daily/weekly reports delivered to Slack, email, or WhatsApp — with custom KPIs and threshold-based alerts.' },
];

const workflowSteps = [
  { icon: '📥', label: 'Lead submits form', color: '#4B7F52' },
  { icon: '🔍', label: 'AI scores & qualifies', color: '#5a9663' },
  { icon: '💾', label: 'CRM auto-updated', color: '#6aaf72' },
  { icon: '📱', label: 'WhatsApp follow-up sent', color: '#7ac882' },
  { icon: '📅', label: 'Meeting auto-booked', color: '#96E8BC' },
];

const tools = ['n8n', 'Make.com', 'Zapier', 'OpenAI', 'WhatsApp Business API', 'HubSpot', 'Airtable', 'Google Workspace', 'Slack', 'Webhooks'];

const G = '#4B7F52', M = '#96E8BC', BG = '#050A07';

export default function BusinessAutomationPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: BG, minHeight: '100vh', color: '#fff' }}>

        {/* HERO */}
        <section className="relative pt-40 pb-28 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-[20%] right-[15%] w-[700px] h-[500px] rounded-full opacity-18" style={{ background: `radial-gradient(circle,${G},transparent 70%)`, filter: 'blur(90px)' }} />
            <div className="absolute top-[55%] left-[5%] w-[400px] h-[400px] rounded-full opacity-12" style={{ background: `radial-gradient(circle,${M},transparent 70%)`, filter: 'blur(70px)' }} />
          </div>
          <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold mb-6 uppercase tracking-widest" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.25)', color: M }}>
              Business Automation
            </div>
            <h1 className="text-[52px] sm:text-[72px] font-black tracking-tight leading-tight mb-6">
              Automate the Work.<br />
              <span style={{ background: `linear-gradient(135deg,${M},${G})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Focus on Growth.
              </span>
            </h1>
            <p className="text-[18px] text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              We build end-to-end automation systems that eliminate repetitive work — lead capture, follow-ups, document processing, reporting — all on autopilot.
            </p>

            {/* Workflow visualization */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 flex-wrap">
              {workflowSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-2"
                      style={{ background: `rgba(75,127,82,0.15)`, border: `1px solid rgba(150,232,188,0.2)` }}>
                      {step.icon}
                    </div>
                    <span className="text-[11px] text-white/40 text-center max-w-[80px]">{step.label}</span>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <svg className="w-5 h-5 hidden sm:block mb-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: 'rgba(150,232,188,0.3)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[16px] font-bold text-white transition-all hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg,${G},#6EC99A)`, boxShadow: `0 8px 32px rgba(75,127,82,0.5)` }}>
                Automate My Business →
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[15px] font-semibold text-white/70 hover:text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(150,232,188,0.15)' }}>
                See Case Studies
              </Link>
            </div>

            {/* Impact stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-14">
              {[['80%', 'Less manual work'], ['3x', 'Faster lead response'], ['1000+', 'Leads/month handled'], ['24/7', 'Runs while you sleep']].map(([val, label], i) => (
                <div key={i} className="text-center">
                  <div className="text-[28px] font-black" style={{ color: M }}>{val}</div>
                  <div className="text-[12px] text-white/35 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(150,232,188,0.08)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[11px] font-bold uppercase tracking-widest" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)', color: M }}>What We Automate</div>
              <h2 className="text-[38px] sm:text-[50px] font-black text-white">Your Entire Ops Stack</h2>
              <p className="text-[16px] text-white/40 max-w-xl mx-auto mt-4">If it's repetitive and rule-based, we can automate it.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={i} className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(150,232,188,0.08)' }}>
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-[18px] font-bold text-white mb-2 group-hover:text-[#96E8BC] transition-colors">{f.title}</h3>
                  <p className="text-[14px] text-white/40 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(150,232,188,0.08)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[11px] font-bold uppercase tracking-widest" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)', color: M }}>Tools & Platforms</div>
            <h2 className="text-[36px] font-black text-white mb-10">We Work With Your Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t, i) => (
                <span key={i} className="px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(75,127,82,0.08)', border: '1px solid rgba(150,232,188,0.15)', color: 'rgba(150,232,188,0.8)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center" style={{ borderTop: '1px solid rgba(150,232,188,0.08)' }}>
          <h2 className="text-[40px] sm:text-[56px] font-black text-white mb-4">Stop Doing It Manually.</h2>
          <p className="text-[17px] text-white/40 max-w-lg mx-auto mb-10">Book a free 30-min audit — we'll find 3 automations you can implement this week.</p>
          <Link href="/contact" className="inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl text-[17px] font-bold text-white transition-all hover:-translate-y-1"
            style={{ background: `linear-gradient(135deg,${G},#6EC99A)`, boxShadow: `0 8px 40px rgba(75,127,82,0.5)` }}>
            Get My Free Audit →
          </Link>
        </section>
      </main>
      <FooterV2 />
    </>
  );
}
