'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';

const automations = [
  { icon: '🧾', title: 'Invoice & Billing Automation', desc: 'Generate, send, and track invoices automatically. Trigger payment reminders, reconcile payments, and update your accounting system without manual work.' },
  { icon: '📑', title: 'Document Processing & Extraction', desc: 'Extract data from financial documents, contracts, and reports using AI — and route the right information to the right systems instantly.' },
  { icon: '✅', title: 'Compliance & Audit Workflows', desc: 'Automate compliance checklists, document collection, and audit trail generation so your team is always ready for review.' },
  { icon: '🔍', title: 'KYC / Onboarding Automation', desc: 'Streamline client onboarding with automated document collection, identity verification workflows, and status notifications.' },
  { icon: '📈', title: 'Financial Reporting', desc: 'Pull data from multiple sources, format it, and generate standardized reports automatically — daily, weekly, or on demand.' },
  { icon: '🔔', title: 'Payment & Collection Alerts', desc: 'Trigger intelligent follow-ups for overdue invoices, payment confirmations, and collections workflows without manual outreach.' },
];

const challenges = [
  { problem: 'Manual data entry across systems', solution: 'Automated document extraction and system sync eliminate re-entry entirely.' },
  { problem: 'Slow client onboarding', solution: 'Automated KYC and document collection cuts onboarding time drastically.' },
  { problem: 'Compliance documentation gaps', solution: 'Automated audit trails ensure every step is recorded and accessible.' },
  { problem: 'Late payment follow-ups', solution: 'Intelligent collection sequences run automatically on schedule.' },
];

export default function FinancePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>
        <section style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-5%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'radial-gradient(ellipse, rgba(75,127,82,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', borderRadius: '100px', marginBottom: '28px', background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(75,127,82,0.15)', fontSize: '13px', fontWeight: 600, color: '#a5b4fc' }}>
                <span style={{ fontSize: '20px' }}>💰</span> Finance
              </div>
              <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Automate{' '}
                <span style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Financial Operations
                </span>
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '40px' }}>
                Reduce manual work in billing, compliance, reporting, and client onboarding — so your finance team focuses on analysis and decisions, not data entry.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', color: '#fff', textDecoration: 'none', background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 28px rgba(75,127,82,0.35)' }}>
                  Book a Free Consultation
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>Get in Touch</Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}><h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>Common Challenges We Solve</h2></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {challenges.map((c) => (
                <div key={c.problem} style={{ padding: '28px', borderRadius: '16px', background: 'rgba(75,127,82,0.04)', border: '1px solid rgba(75,127,82,0.1)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,100,100,0.7)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Challenge</div>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginBottom: '16px' }}>{c.problem}</p>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#a5b4fc', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Our Solution</div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{c.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}><h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>What We Automate in Finance</h2></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {automations.map((a) => (
                <div key={a.title} style={{ padding: '28px', borderRadius: '16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.3s, background 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(150,232,188,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(75,127,82,0.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)'; }}>
                  <div style={{ fontSize: '28px', marginBottom: '14px' }}>{a.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{a.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: '80px', paddingBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <div className="max-w-2xl mx-auto px-6">
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '18px' }}>Automate Your Financial Ops</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', marginBottom: '36px', lineHeight: 1.7 }}>Book a call to explore how automation can streamline your finance workflows and reduce operational costs.</p>
            <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 32px', borderRadius: '13px', fontWeight: 700, fontSize: '15px', color: '#fff', textDecoration: 'none', background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 10px 32px rgba(75,127,82,0.35)' }}>
              Schedule a Free Discovery Call
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </section>
      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
