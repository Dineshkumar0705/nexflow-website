'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';

const automations = [
  { icon: '📋', title: 'Task & Project Automation', desc: 'Auto-create tasks, assign owners, set deadlines, and send reminders based on project triggers — so nothing slips through the cracks.' },
  { icon: '📄', title: 'Document Generation', desc: 'Generate proposals, SOWs, contracts, and internal reports automatically from templates using data from your existing systems.' },
  { icon: '🔔', title: 'Internal Notification Workflows', desc: 'Route the right information to the right team members automatically — via Slack, email, or your team\'s communication tool of choice.' },
  { icon: '📊', title: 'Operations Reporting', desc: 'Compile daily or weekly ops reports automatically by pulling data from multiple tools and formatting it consistently.' },
  { icon: '🔄', title: 'Approval & Review Workflows', desc: 'Automate multi-step approval processes for expenses, content, contracts, and requests — with escalation if deadlines are missed.' },
  { icon: '🤝', title: 'Vendor & Supplier Workflows', desc: 'Automate purchase order generation, vendor communication, invoice matching, and approval routing to streamline procurement.' },
];

const challenges = [
  { problem: 'Repetitive manual task creation', solution: 'Template-based automation creates and assigns tasks the moment a trigger fires.' },
  { problem: 'Slow internal approvals', solution: 'Automated approval chains with built-in escalation keep decisions moving.' },
  { problem: 'Information silos between teams', solution: 'Cross-system notifications and data sync keep everyone aligned automatically.' },
  { problem: 'Inconsistent report quality', solution: 'Standardized automated reporting pulls the same data in the same format every time.' },
];

export default function OperationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>
        <section style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-5%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'radial-gradient(ellipse, rgba(75,127,82,0.1) 0%, rgba(75,127,82,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', borderRadius: '100px', marginBottom: '28px', background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(75,127,82,0.15)', fontSize: '13px', fontWeight: 600, color: '#a5b4fc' }}>
                <span style={{ fontSize: '20px' }}>⚙️</span> Operations
              </div>
              <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Automate Your{' '}
                <span style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Business Operations
                </span>
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '40px' }}>
                Turn your operations into a well-oiled machine. Automate task management, approvals, reporting, document generation, and internal communication workflows.
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
            <div style={{ textAlign: 'center', marginBottom: '56px' }}><h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>What We Automate in Operations</h2></div>
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
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '18px' }}>Make Your Operations Unstoppable</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', marginBottom: '36px', lineHeight: 1.7 }}>Let's identify the operational workflows that can be automated for immediate impact.</p>
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
