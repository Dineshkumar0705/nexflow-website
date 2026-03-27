'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';

const solutions = [
  {
    id: 'ai-automation',
    href: '/solutions/ai-automation',
    badge: 'Most Popular',
    badgeColor: '#4B7F52',
    icon: '🤖',
    title: 'AI Automation',
    subtitle: 'Intelligent systems that think and act',
    desc: 'Deploy AI agents that handle decision-making, content generation, data extraction, and complex multi-step workflows — all without human input.',
    highlights: ['AI decision layers', 'Natural language processing', 'Document intelligence', 'Smart routing'],
    accentColor: '#4B7F52',
    gradient: 'linear-gradient(135deg, rgba(75,127,82,0.12) 0%, rgba(75,127,82,0.08) 100%)',
    borderColor: 'rgba(75,127,82,0.15)',
  },
  {
    id: 'workflow-automation',
    href: '/solutions/workflow-automation',
    badge: null,
    icon: '⚡',
    title: 'Workflow Automation',
    subtitle: 'End-to-end process automation',
    desc: 'Map, optimize, and automate every step of your business processes — from lead intake to invoice generation — in a single connected system.',
    highlights: ['Process mapping', 'Multi-step flows', 'Trigger & action logic', 'Error handling'],
    accentColor: '#6EC99A',
    gradient: 'linear-gradient(135deg, rgba(75,127,82,0.12) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(150,232,188,0.2)',
  },
  {
    id: 'crm-automation',
    href: '/solutions/crm-automation',
    badge: null,
    icon: '🔗',
    title: 'CRM Automation',
    subtitle: 'Keep your pipeline always current',
    desc: 'Sync, update, and enrich your CRM automatically. Every contact, deal, and task stays accurate without anyone touching a keyboard.',
    highlights: ['Auto data enrichment', 'Deal stage automation', 'Follow-up sequences', 'CRM sync'],
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(6,182,212,0.2)',
  },
  {
    id: 'lead-automation',
    href: '/solutions/lead-automation',
    badge: null,
    icon: '🎯',
    title: 'Lead Automation',
    subtitle: 'Fill your pipeline on autopilot',
    desc: 'Capture, score, route, and follow up with leads automatically — across every channel — so your team only touches conversations that are ready to close.',
    highlights: ['Multi-channel capture', 'AI lead scoring', 'Instant routing', 'Nurture sequences'],
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(16,185,129,0.2)',
  },
  {
    id: 'automation-systems',
    href: '/solutions/automation-systems',
    badge: 'Enterprise',
    badgeColor: '#f59e0b',
    icon: '🏗️',
    title: 'Automation Systems',
    subtitle: 'Full-stack infrastructure, built to scale',
    desc: 'Complete automation architecture designed for your business — strategy, integrations, AI layers, monitoring, and documentation all included.',
    highlights: ['System architecture', 'Custom integrations', 'AI orchestration', 'Live dashboards'],
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(245,158,11,0.2)',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
            width: '900px', height: '600px',
            background: 'radial-gradient(ellipse, rgba(75,127,82,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.3,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

          <div className="max-w-5xl mx-auto px-6 text-center" style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 18px', borderRadius: '100px', marginBottom: '28px',
              background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(75,127,82,0.15)',
              fontSize: '12px', fontWeight: 600, color: '#a5b4fc', letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              What We Build
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.05,
              color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em'
            }}>
              Solutions Built for{' '}
              <span style={{
                background: 'linear-gradient(135deg,#4B7F52,#6EC99A,#06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>
                Real Businesses
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 48px' }}>
              Every solution is designed end-to-end — from strategy and design to build, integration, and ongoing optimization.
            </p>

            {/* Stats strip */}
            <div style={{
              display: 'inline-flex', gap: '0', borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)'
            }}>
              {[
                { label: 'Solutions', value: '5' },
                { label: 'Industries', value: '6+' },
                { label: 'Integrations', value: '30+' },
              ].map((s, i) => (
                <div key={s.label} style={{
                  padding: '16px 32px', textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '2px' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured solution (AI Automation) */}
        <section style={{ paddingBottom: '40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6 pt-16">
            <Link href={solutions[0].href} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                position: 'relative', borderRadius: '24px', overflow: 'hidden',
                background: solutions[0].gradient,
                border: `1px solid ${solutions[0].borderColor}`,
                padding: 'clamp(36px,5vw,60px)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px rgba(150,232,188,0.2)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                {/* Glow orb */}
                <div style={{
                  position: 'absolute', top: '-60px', right: '-60px',
                  width: '300px', height: '300px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(150,232,188,0.2) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center' }}
                  className="flex-col lg:flex-row">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '40px' }}>{solutions[0].icon}</span>
                      <span style={{
                        padding: '4px 12px', borderRadius: '100px', fontSize: '11px',
                        fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                        background: `${solutions[0].accentColor}22`, color: solutions[0].accentColor,
                        border: `1px solid ${solutions[0].accentColor}44`
                      }}>
                        {solutions[0].badge}
                      </span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                      {solutions[0].title}
                    </h2>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', marginBottom: '20px', fontWeight: 500 }}>
                      {solutions[0].subtitle}
                    </p>
                    <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '28px' }}>
                      {solutions[0].desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                      {solutions[0].highlights.map(h => (
                        <span key={h} style={{
                          padding: '6px 14px', borderRadius: '8px', fontSize: '13px',
                          color: 'rgba(255,255,255,0.65)', fontWeight: 500,
                          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'
                        }}>{h}</span>
                      ))}
                    </div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '12px 24px', borderRadius: '12px', fontWeight: 700,
                      fontSize: '14px', color: '#fff',
                      background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                      boxShadow: '0 6px 24px rgba(75,127,82,0.4)'
                    }}>
                      Explore AI Automation
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Solution grid */}
        <section style={{ paddingTop: '24px', paddingBottom: '80px' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {solutions.slice(1).map((sol) => (
                <Link key={sol.id} href={sol.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    borderRadius: '20px', padding: '32px 28px',
                    background: sol.gradient, border: `1px solid ${sol.borderColor}`,
                    height: '100%', position: 'relative', overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${sol.accentColor}22`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                  >
                    {/* Corner glow */}
                    <div style={{
                      position: 'absolute', top: '-40px', right: '-40px',
                      width: '160px', height: '160px', borderRadius: '50%',
                      background: `radial-gradient(circle, ${sol.accentColor}22 0%, transparent 70%)`,
                      pointerEvents: 'none'
                    }} />

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <span style={{ fontSize: '32px' }}>{sol.icon}</span>
                      {sol.badge && (
                        <span style={{
                          padding: '3px 10px', borderRadius: '100px', fontSize: '10px',
                          fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                          background: `${sol.accentColor}22`, color: sol.accentColor,
                          border: `1px solid ${sol.accentColor}44`
                        }}>
                          {sol.badge}
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                      {sol.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: sol.accentColor, marginBottom: '14px', fontWeight: 600 }}>
                      {sol.subtitle}
                    </p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '24px' }}>
                      {sol.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                      {sol.highlights.map(h => (
                        <span key={h} style={{
                          padding: '4px 12px', borderRadius: '6px', fontSize: '12px',
                          color: 'rgba(255,255,255,0.55)', fontWeight: 500,
                          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'
                        }}>{h}</span>
                      ))}
                    </div>

                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '13px', fontWeight: 700, color: sol.accentColor
                    }}>
                      Learn more
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process overview */}
        <section style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                How Every Project Works
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto' }}>
                A clear, structured process from first conversation to live system.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', position: 'relative' }}>
              {[
                { num: '01', icon: '💬', title: 'Discovery Call', desc: 'We learn your workflow, tools, and biggest bottlenecks.' },
                { num: '02', icon: '🗺️', title: 'System Design', desc: 'We map the full architecture before writing a single line.' },
                { num: '03', icon: '⚙️', title: 'Build & Integrate', desc: 'We build in stages, testing each connection thoroughly.' },
                { num: '04', icon: '🚀', title: 'Launch & Optimize', desc: 'We go live, monitor, and keep improving over time.' },
              ].map((step, i) => (
                <div key={step.num} style={{
                  padding: '32px 28px',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em',
                    color: 'rgba(75,127,82,0.6)', marginBottom: '16px', textTransform: 'uppercase'
                  }}>{step.num}</div>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{step.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: '80px', paddingBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: '600px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(75,127,82,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Not Sure Which Solution<br />Is Right for You?
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: 1.7 }}>
              Book a free 30-minute discovery call. We'll map your current workflows, identify the highest-leverage automation opportunities, and recommend exactly what to build first.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '16px 36px', borderRadius: '14px', fontWeight: 700,
                  fontSize: '16px', color: '#fff', textDecoration: 'none',
                  background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                  boxShadow: '0 12px 40px rgba(75,127,82,0.4)'
                }}>
                Book a Free Discovery Call
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '16px 28px', borderRadius: '14px', fontWeight: 600,
                  fontSize: '16px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'
                }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
