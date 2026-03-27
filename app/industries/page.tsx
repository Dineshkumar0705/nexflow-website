'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';

const industries = [
  {
    href: '/industries/healthcare',
    icon: '🏥',
    title: 'Healthcare',
    subtitle: 'Patient care, not paperwork',
    desc: 'Automate patient intake, scheduling, compliance, billing, and follow-up workflows so clinical teams can focus entirely on care.',
    highlights: ['Patient intake', 'Appointment reminders', 'Compliance workflows', 'Billing automation'],
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(6,182,212,0.06) 100%)',
    borderColor: 'rgba(16,185,129,0.2)',
  },
  {
    href: '/industries/ecommerce',
    icon: '🛒',
    title: 'E-Commerce',
    subtitle: 'Sell more, operate less',
    desc: 'From order processing and cart recovery to inventory management and customer retention — automate your entire store back-office.',
    highlights: ['Order fulfillment', 'Cart recovery', 'Inventory sync', 'Customer segmentation'],
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(239,68,68,0.06) 100%)',
    borderColor: 'rgba(245,158,11,0.2)',
  },
  {
    href: '/industries/finance',
    icon: '💰',
    title: 'Finance',
    subtitle: 'Precision at scale',
    desc: 'Automate billing, document processing, client onboarding, compliance workflows, and financial reporting with zero manual error.',
    highlights: ['Invoice automation', 'KYC onboarding', 'Compliance reporting', 'Payment follow-ups'],
    accentColor: '#4B7F52',
    gradient: 'linear-gradient(135deg, rgba(75,127,82,0.1) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(150,232,188,0.2)',
  },
  {
    href: '/industries/education',
    icon: '🎓',
    title: 'Education',
    subtitle: 'More teaching, less admin',
    desc: 'Handle enrollment, communication sequences, progress tracking, payment collection, and certificate delivery automatically.',
    highlights: ['Student enrollment', 'Drip sequences', 'Progress tracking', 'Certificate delivery'],
    accentColor: '#6EC99A',
    gradient: 'linear-gradient(135deg, rgba(75,127,82,0.12) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(150,232,188,0.2)',
  },
  {
    href: '/industries/customer-support',
    icon: '🎧',
    title: 'Customer Support',
    subtitle: 'Faster resolutions, happier customers',
    desc: 'Triage tickets, send first responses, escalate complex issues, and collect feedback — all automatically — so agents handle what matters.',
    highlights: ['AI ticket triage', 'Auto responses', 'Escalation flows', 'CSAT collection'],
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(6,182,212,0.2)',
  },
  {
    href: '/industries/operations',
    icon: '⚙️',
    title: 'Operations',
    subtitle: 'Run your business on autopilot',
    desc: 'Automate task management, internal approvals, document generation, ops reporting, and vendor workflows across your organization.',
    highlights: ['Task automation', 'Approval workflows', 'Document generation', 'Ops reporting'],
    accentColor: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(75,127,82,0.06) 100%)',
    borderColor: 'rgba(236,72,153,0.2)',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse, rgba(75,127,82,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.25, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="max-w-5xl mx-auto px-6 text-center" style={{ position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '100px', marginBottom: '28px', background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(75,127,82,0.15)', fontSize: '12px', fontWeight: 600, color: '#a5b4fc', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Industries We Serve
            </div>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.05, color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Automation Built for{' '}
              <span style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Your Industry
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Every industry has unique workflows, constraints, and compliance requirements. We build automation systems that understand and respect your specific context.
            </p>
          </div>
        </section>

        {/* Industry grid */}
        <section style={{ paddingTop: '20px', paddingBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {industries.map((ind) => (
                <Link key={ind.href} href={ind.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    borderRadius: '20px', padding: '36px 32px',
                    background: ind.gradient, border: `1px solid ${ind.borderColor}`,
                    height: '100%', position: 'relative', overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer'
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${ind.accentColor}20`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                  >
                    {/* Glow orb */}
                    <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: `radial-gradient(circle, ${ind.accentColor}25 0%, transparent 70%)`, pointerEvents: 'none' }} />

                    <div style={{ fontSize: '40px', marginBottom: '20px' }}>{ind.icon}</div>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>{ind.title}</h2>
                    <p style={{ fontSize: '13px', color: ind.accentColor, marginBottom: '14px', fontWeight: 600 }}>{ind.subtitle}</p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '24px' }}>{ind.desc}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                      {ind.highlights.map(h => (
                        <span key={h} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 500 }}>{h}</span>
                      ))}
                    </div>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: ind.accentColor }}>
                      Explore {ind.title}
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: '80px', paddingBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(75,127,82,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-3xl mx-auto px-6" style={{ position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Don't See Your Industry?
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: 1.7 }}>
              We build custom automation systems for any business with repetitive workflows. If you have a process, we can automate it. Let's talk.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 36px', borderRadius: '14px', fontWeight: 700, fontSize: '16px', color: '#fff', textDecoration: 'none', background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 12px 40px rgba(75,127,82,0.4)' }}>
                Book a Free Discovery Call
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 28px', borderRadius: '14px', fontWeight: 600, fontSize: '16px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
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
