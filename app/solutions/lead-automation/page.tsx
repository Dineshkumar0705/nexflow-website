'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: '🎯',
    title: 'Multi-Channel Lead Capture',
    desc: 'Automatically capture leads from web forms, landing pages, social media, ads, and third-party platforms into a single unified pipeline.'
  },
  {
    icon: '🧠',
    title: 'AI-Powered Lead Scoring',
    desc: 'Rank every inbound lead by fit and intent using behavioral signals, firmographic data, and engagement history — no manual review needed.'
  },
  {
    icon: '🔁',
    title: 'Instant Lead Routing',
    desc: 'Route leads to the right sales rep, team, or nurture sequence the moment they enter your system, based on rules you define.'
  },
  {
    icon: '📩',
    title: 'Automated Follow-Up Sequences',
    desc: 'Trigger personalized email and SMS sequences that adapt based on lead behavior — opens, clicks, replies, and page visits.'
  },
  {
    icon: '📊',
    title: 'Pipeline Visibility',
    desc: 'Track every lead through every stage of your funnel with real-time dashboards. No spreadsheets, no guessing.'
  },
  {
    icon: '🔗',
    title: 'CRM & Tool Integrations',
    desc: 'Connect seamlessly with HubSpot, Salesforce, GoHighLevel, Pipedrive, and your existing marketing stack.'
  },
];

const steps = [
  { num: '01', title: 'Capture', desc: 'Leads enter from every channel — ads, organic, referrals, events.' },
  { num: '02', title: 'Enrich & Score', desc: 'AI appends data, scores intent, and flags high-priority leads.' },
  { num: '03', title: 'Route', desc: 'Leads land with the right owner or sequence instantly.' },
  { num: '04', title: 'Convert', desc: 'Automated follow-ups run until a meeting is booked or deal is won.' },
];

export default function LeadAutomationPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
            width: '700px', height: '700px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(75,127,82,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '100px', marginBottom: '24px',
                background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(75,127,82,0.15)',
                fontSize: '13px', fontWeight: 500, color: '#a5b4fc'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4B7F52', display: 'inline-block' }} />
                Lead Automation
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: '24px' }}>
                Your Pipeline,{' '}
                <span style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Always Full
                </span>
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '40px' }}>
                Stop chasing leads manually. NexFlow automates your entire lead lifecycle — from first touch to booked meeting — so your team focuses only on closing.
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
                  Book a Free Strategy Call
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

        {/* Flow Image */}
        <section style={{ paddingBottom: '80px' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)'
            }}>
              <Image
                src="/images/lead-automation-flow.png"
                alt="Lead Automation Flow"
                width={1200} height={630}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section style={{ paddingTop: '40px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                How Lead Automation Works
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto' }}>
                A four-stage system that keeps your pipeline moving without lifting a finger.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {steps.map((step) => (
                <div key={step.num} style={{
                  padding: '32px 28px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '36px', fontWeight: 800, marginBottom: '16px',
                    background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                  }}>{step.num}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                Everything You Need to Fill Your Pipeline
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '540px', margin: '0 auto' }}>
                Built to replace manual prospecting with a fully automated, scalable lead engine.
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
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,127,82,0.35)'; (e.currentTarget as HTMLElement).style.background = 'rgba(75,127,82,0.06)'; }}
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

        {/* Transformation Image */}
        <section style={{ paddingTop: '20px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#fff' }}>
                The Transformation
              </h2>
            </div>
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)'
            }}>
              <Image
                src="/images/lead-automation-transformation.png"
                alt="Lead Automation Transformation"
                width={1200} height={630}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: '80px', paddingBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-3xl mx-auto px-6" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
              Ready to Automate Your Lead Pipeline?
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: 1.7 }}>
              Let's build a system that captures, qualifies, and converts leads — around the clock.
            </p>
            <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 36px', borderRadius: '14px', fontWeight: 700,
                fontSize: '16px', color: '#fff', textDecoration: 'none',
                background: 'linear-gradient(135deg,#4B7F52,#6EC99A)',
                boxShadow: '0 12px 40px rgba(75,127,82,0.4)'
              }}>
              Schedule a Free Consultation
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
