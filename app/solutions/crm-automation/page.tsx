'use client';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

export default function CRMAutomationPage() {
  const openCalendly = () => window.open('https://calendly.com/nexflowauto-ai/30min','_blank','noopener,noreferrer');
  return (
    <>
      <Navbar />
      <main style={{ background:'#050A07', minHeight:'100vh' }}>
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse 60% 50% at 50% 0%,rgba(6,182,212,0.12) 0%,transparent 70%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-cyan-400 mb-6" style={{ background:'rgba(6,182,212,0.1)',border:'1px solid rgba(6,182,212,0.2)' }}>CRM AUTOMATION</div>
            <h1 className="text-[52px] sm:text-[68px] font-black tracking-tight text-white leading-tight mb-5">Smarter<br /><span style={{ background:'linear-gradient(135deg,#96E8BC,#4B7F52)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Customer Ops</span></h1>
            <p className="text-[17px] text-white/50 max-w-2xl mx-auto">Auto-update contacts, trigger follow-up sequences, and keep your sales pipeline clean and moving 24/7.</p>
          </div>
        </section>
        <section className="py-16 px-6" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden mb-10" style={{ border:'1px solid rgba(255,255,255,0.07)' }}>
              <Image src="/images/crm-automation-flow.png" alt="CRM Automation Flow" width={1200} height={600} className="w-full h-auto object-cover" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {['Auto contact updates','Follow-up sequences','Lead scoring','Pipeline management','CRM data sync','Activity tracking'].map((f,i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-5 py-4" style={{ background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0"/>
                  <span className="text-[14px] text-white/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-6" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[32px] sm:text-[44px] font-black text-white mb-8 text-center">Before vs After</h2>
            <div className="relative rounded-2xl overflow-hidden" style={{ border:'1px solid rgba(255,255,255,0.07)' }}>
              <Image src="/images/crm-before-after.png" alt="CRM Before After" width={1200} height={600} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
        <section className="py-24 px-6 text-center" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="text-[36px] sm:text-[48px] font-black text-white mb-4">Automate Your CRM</h2>
          <p className="text-[16px] text-white/45 max-w-lg mx-auto mb-8">Let's connect and automate your entire customer relationship workflow.</p>
          <button onClick={openCalendly} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[16px] font-bold text-white transition-all hover:-translate-y-1" style={{ background:'linear-gradient(135deg,#4B7F52,#6EC99A)',boxShadow:'0 8px 32px rgba(75,127,82,0.45)' }}>Book Demo →</button>
        </section>
      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
