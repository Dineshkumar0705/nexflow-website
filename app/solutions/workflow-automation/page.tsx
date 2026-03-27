'use client';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

export default function WorkflowAutomationPage() {
  const openCalendly = () => window.open('https://calendly.com/nexflowauto-ai/30min','_blank','noopener,noreferrer');
  return (
    <>
      <Navbar />
      <main style={{ background:'#050A07', minHeight:'100vh' }}>
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse 60% 50% at 50% 0%,rgba(75,127,82,0.15) 0%,transparent 70%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-violet-400 mb-6" style={{ background:'rgba(75,127,82,0.1)',border:'1px solid rgba(75,127,82,0.2)' }}>WORKFLOW AUTOMATION</div>
            <h1 className="text-[52px] sm:text-[68px] font-black tracking-tight text-white leading-tight mb-5">End-to-End<br /><span style={{ background:'linear-gradient(135deg,#96E8BC,#6EC99A)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Process Flow</span></h1>
            <p className="text-[17px] text-white/50 max-w-2xl mx-auto">Streamline every business process from data entry to approvals with zero manual intervention required.</p>
          </div>
        </section>
        <section className="py-16 px-6" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden mb-10" style={{ border:'1px solid rgba(255,255,255,0.07)' }}>
              <Image src="/images/workflow-steps.png" alt="Workflow Steps" width={1200} height={600} className="w-full h-auto object-cover" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {['Visual workflow builder','Multi-step automation','Conditional logic flows','Cross-tool integration','Error handling & retries','Audit trail & logging'].map((f,i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-5 py-4" style={{ background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0"/>
                  <span className="text-[14px] text-white/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-6" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[32px] sm:text-[44px] font-black text-white mb-8 text-center">The Transformation</h2>
            <div className="relative rounded-2xl overflow-hidden" style={{ border:'1px solid rgba(255,255,255,0.07)' }}>
              <Image src="/images/workflow-transformation.png" alt="Workflow Transformation" width={1200} height={600} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
        <section className="py-24 px-6 text-center" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="text-[36px] sm:text-[48px] font-black text-white mb-4">Automate Your Workflows</h2>
          <p className="text-[16px] text-white/45 max-w-lg mx-auto mb-8">Let's design an end-to-end workflow automation system for your business.</p>
          <button onClick={openCalendly} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[16px] font-bold text-white transition-all hover:-translate-y-1" style={{ background:'linear-gradient(135deg,#4B7F52,#6EC99A)',boxShadow:'0 8px 32px rgba(75,127,82,0.45)' }}>Book Demo →</button>
        </section>
      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
