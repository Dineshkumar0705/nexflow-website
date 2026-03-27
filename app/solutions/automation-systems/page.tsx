'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: '🏗️',
    title: 'End-to-End System Design',
    desc: 'We architect automation from the ground up — strategy, tools, integrations, and workflows — built around your business goals.'
  },
  {
    icon: '⚡',
    title: 'Multi-System Orchestration',
    desc: 'Connect your CRM, ERP, marketing tools, databases, and APIs into a single coordinated automation layer.'
  },
  {
    icon: '🤖',
    title: 'AI Decision Layers',
    desc: 'Embed AI-driven decision points into your workflows: smart routing, dynamic content, predictive actions, anomaly detection.'
  },
  {
    icon: '📈',
    title: 'Scalable Infrastructure',
    desc: 'Built to grow with you. Whether you process 100 or 1,000,000 records, the system performs without bottlenecks.'
  },
  {
    icon: '🔒',
    title: 'Security & Compliance Ready',
    desc: 'All systems are designed with data security, auditability, and compliance requirements built in from day one.'
  },
  {
    icon: '🛠️',
    title: 'Ongoing Optimization',
    desc: 'We monitor, tune, and improve your automation systems over time — ensuring they evolve as your business does.'
  },
];

const deliverables = [
  { title: 'Strategy Blueprint', desc: 'A clear map of your automation architecture before a single line of code is written.' },
  { title: 'Custom Integrations', desc: 'Native connections between all tools in your stack — no duct-tape solutions.' },
  { title: 'Live Dashboards', desc: 'Real-time visibility into system health, throughput, errors, and performance.' },
  { title: 'Documentation & Training', desc: 'Full runbooks and team training so your people can operate the system confidently.' },
];

export default function AutomationSystemsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
            width: '700px', height: '700px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(75,127,82,0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '100px', marginBottom: '24px',
                background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(75,127,82,0.25)',
                fontSize: '13px', fontWeight: 500, color: '#c4b5fd'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6EC99A', display: 'inline-block' }} />
                Automation Systems
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: '24px' }}>
                Full-Stack Automation,{' '}
                <span style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Built to Last
                </span>
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '40px' }}>
                Not a collection of disconnected tools — a unified automation system designed specifically for your business, built by experts who understand both technology and operations.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px', borderRadius: '12px', fontWeight: 600,
                    fontSize: '15px', color: '#fff', textDecoration: 'none',
                    background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                    boxShadow: '0 8px 32px rgba(75,127,82,0.35)'
                  }}>
                  Book a System Audit
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px', borderRadius: '12px', fontWeight: 600,
                    fontSize: '15px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Image */}
        <section style={{ paddingBottom: '80px' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)'
            }}>
              <Image
                src="/images/automation-before-after.png"
                alt="Automation Systems Before and After"
                width={1200} height={630}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ paddingTop: '40px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                What's Included in Every System
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto' }}>
                We don't just automate tasks — we engineer complete operational systems.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {features.map((f) => (
                <div key={f.title} style={{
                  padding: '32px 28px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'border-color 0.3s, background 0.3s'
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,127,82,0.35)'; (e.currentTarget as HTMLElement).style.background = 'rgba(75,127,82,0.05)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)'; }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{f.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                What You Get
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto' }}>
                Every engagement delivers tangible, documented, production-ready systems.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {deliverables.map((d, i) => (
                <div key={d.title} style={{
                  padding: '28px 24px',
                  borderRadius: '16px',
                  background: 'rgba(75,127,82,0.06)',
                  border: '1px solid rgba(75,127,82,0.12)',
                  display: 'flex', gap: '16px', alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: 800, color: '#fff', flexShrink: 0
                  }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{d.title}</h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                Our Build Process
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { step: 'Discovery', desc: 'We audit your current processes, tools, and pain points to identify the highest-leverage automation opportunities.' },
                { step: 'Architecture', desc: 'We design a full system blueprint — tools, integrations, data flows, and decision logic — before building anything.' },
                { step: 'Build & Integrate', desc: 'We build the system in stages, connecting each tool and testing thoroughly before moving to the next.' },
                { step: 'Launch & Handoff', desc: 'We deploy, monitor the launch, then hand off with full documentation and team training.' },
              ].map((item, i) => (
                <div key={item.step} style={{
                  display: 'flex', gap: '24px', padding: '32px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '15px', fontWeight: 800, color: '#fff', flexShrink: 0
                  }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{item.step}</h3>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: '80px', paddingBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-3xl mx-auto px-6" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
              Let's Build Your Automation System
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: 1.7 }}>
              Start with a free discovery call. We'll map out what's possible and what makes sense for your business right now.
            </p>
            <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 36px', borderRadius: '14px', fontWeight: 700,
                fontSize: '16px', color: '#fff', textDecoration: 'none',
                background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                boxShadow: '0 12px 40px rgba(75,127,82,0.4)'
              }}>
              Start with a Free Discovery Call
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
