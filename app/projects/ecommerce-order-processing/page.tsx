'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const outcomes = [
  { value: '3x', label: 'Faster Operations', icon: '🚀' },
  { value: '99.8%', label: 'Order Accuracy', icon: '✅' },
  { value: '0', label: 'Manual Touchpoints', icon: '🤖' },
  { value: '45min', label: 'Avg Processing Time', icon: '⏱️' },
];

const workflow = [
  { step: '01', title: 'Order Placed', desc: 'Customer places order on any channel — website, WhatsApp, or marketplace. Webhook triggers instantly.', color: '#8b5cf6' },
  { step: '02', title: 'Inventory Check', desc: 'System auto-checks stock across warehouses, flags low inventory, and confirms availability in real-time.', color: '#06b6d4' },
  { step: '03', title: 'Auto Invoice', desc: 'Invoice generated, payment link sent, and GST calculation completed — zero manual input required.', color: '#22c55e' },
  { step: '04', title: 'Fulfillment & Track', desc: 'Shipping partner assigned, label printed, and customer notified with live tracking link — automatically.', color: '#f59e0b' },
];

const stack = ['Zapier', 'Webhooks', 'Razorpay', 'Google Sheets', 'Shiprocket API', 'WhatsApp API', 'Node.js'];

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 65%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[13px] text-white/30 mb-8">
              <Link href="/projects" className="hover:text-white/60 transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-white/60">E-commerce Order Processing</span>
            </div>
            <div className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold mb-5" style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', color: '#a78bfa' }}>CASE STUDY · WORKFLOW AUTOMATION</div>
            <h1 className="text-[48px] sm:text-[60px] font-black text-white tracking-tight leading-tight mb-4">
              E-commerce Order<br /><span style={{ background: 'linear-gradient(135deg,#a78bfa,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Processing</span>
            </h1>
            <p className="text-[16px] text-white/40 max-w-2xl leading-relaxed mb-10">End-to-end order automation from placement to delivery — inventory sync, auto-invoicing, payment processing, and real-time shipping updates without a single manual step.</p>

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

        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex px-4 py-1.5 rounded-full text-[11px] font-bold mb-3" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa' }}>HOW IT WORKS</div>
              <h2 className="text-[32px] font-black text-white">Order to door, fully automated</h2>
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

        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[24px] font-black text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {stack.map(t => (
                <span key={t} className="px-4 py-2 rounded-xl text-[13px] font-semibold text-white/60" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="text-[32px] font-black text-white mb-4">Automate your order operations?</h2>
          <p className="text-[15px] text-white/40 max-w-md mx-auto mb-8">We build end-to-end e-commerce automation systems for D2C brands, distributors, and marketplaces.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#6d28d9,#a78bfa)', boxShadow: '0 8px 24px rgba(139,92,246,0.3)' }}>
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
