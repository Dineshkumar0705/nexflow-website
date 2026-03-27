'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';

const automations = [
  { icon: '📦', title: 'Order Processing & Fulfillment', desc: 'Automatically sync orders from your store, trigger fulfillment workflows, and update customers in real time — no manual intervention needed.' },
  { icon: '📧', title: 'Abandoned Cart Recovery', desc: 'Send intelligent multi-step follow-up sequences to recover abandoned carts with personalized messaging based on cart contents and user behavior.' },
  { icon: '🔄', title: 'Returns & Refunds Automation', desc: 'Handle return requests, refund approvals, and inventory restocking automatically — faster resolution means happier customers.' },
  { icon: '📊', title: 'Inventory Sync & Alerts', desc: 'Keep inventory levels accurate across all channels in real time and trigger restock alerts or purchase orders automatically.' },
  { icon: '⭐', title: 'Review Collection Sequences', desc: 'Send post-purchase review requests at the right time, on the right channel — and route negative feedback internally before it goes public.' },
  { icon: '🎯', title: 'Customer Segmentation & Campaigns', desc: 'Auto-segment customers by purchase behavior, lifetime value, or product interest and trigger the right marketing flows automatically.' },
];

const challenges = [
  { problem: 'Order processing errors', solution: 'Automated syncing eliminates manual data entry between store and fulfillment.' },
  { problem: 'High cart abandonment', solution: 'Smart recovery sequences re-engage customers at the right moment.' },
  { problem: 'Inventory discrepancies', solution: 'Real-time sync keeps stock accurate across all sales channels.' },
  { problem: 'Slow customer support responses', solution: 'Automated triage and routing cut first response time drastically.' },
];

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>
        <section style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-5%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', borderRadius: '100px', marginBottom: '28px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', fontSize: '13px', fontWeight: 600, color: '#fbbf24' }}>
                <span style={{ fontSize: '20px' }}>🛒</span> E-Commerce
              </div>
              <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Automate Your{' '}
                <span style={{ background: 'linear-gradient(135deg,#f59e0b,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Store Operations
                </span>
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '40px' }}>
                From order processing to cart recovery, inventory management to customer retention — automate the repetitive tasks that slow your e-commerce growth.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', color: '#fff', textDecoration: 'none', background: 'linear-gradient(135deg,#f59e0b,#ef4444)', boxShadow: '0 8px 28px rgba(245,158,11,0.3)' }}>
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
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>Common Challenges We Solve</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {challenges.map((c) => (
                <div key={c.problem} style={{ padding: '28px', borderRadius: '16px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,100,100,0.7)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Challenge</div>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginBottom: '16px' }}>{c.problem}</p>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#fbbf24', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Our Solution</div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{c.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>What We Automate in E-Commerce</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {automations.map((a) => (
                <div key={a.title} style={{ padding: '28px', borderRadius: '16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.3s, background 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.3)'; (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.05)'; }}
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
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '18px' }}>Ready to Scale Your Store?</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', marginBottom: '36px', lineHeight: 1.7 }}>Let's identify the automations that will have the biggest impact on your e-commerce operations.</p>
            <Link href="https://calendly.com/nexflowauto-ai/30min" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 32px', borderRadius: '13px', fontWeight: 700, fontSize: '15px', color: '#fff', textDecoration: 'none', background: 'linear-gradient(135deg,#f59e0b,#ef4444)', boxShadow: '0 10px 32px rgba(245,158,11,0.3)' }}>
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
