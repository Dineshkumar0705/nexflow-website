'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const faqs = [
  { q: 'What does Nexflow do?', a: 'Nexflow builds intelligent automation systems that help businesses eliminate repetitive work, streamline workflows, and improve operational efficiency using modern AI technologies.' },
  { q: 'What kind of automation systems do you build?', a: 'We build workflow automation, AI-powered customer support systems, document processing pipelines, CRM automation, and end-to-end operational systems tailored to your business.' },
  { q: 'Which industries do you support?', a: 'We work with healthcare, finance, e-commerce, BPO operations, customer support teams, and enterprise businesses looking to scale through automation.' },
  { q: 'How long does it take to build an automation system?', a: 'Depending on complexity, most systems take between 1–4 weeks. We focus on delivering fast, scalable, and production-ready solutions.' },
  { q: 'Do you provide custom solutions?', a: 'Yes. Every business has unique workflows, so we design custom automation systems tailored to your exact needs.' },
  { q: 'How can I get started?', a: 'You can book a demo through our website or contact us directly. We will analyze your workflow and suggest the best automation strategy.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-200" style={{ background: open ? 'rgba(75,127,82,0.06)' : 'rgba(255,255,255,0.025)', border: open ? '1px solid rgba(75,127,82,0.15)' : '1px solid rgba(255,255,255,0.07)' }}>
      <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(!open)}>
        <span className="text-[16px] font-semibold text-white">{q}</span>
        <svg className={`w-5 h-5 text-[#96E8BC] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
      </button>
      {open && <div className="px-6 pb-5 text-[14px] text-white/55 leading-relaxed">{a}</div>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(75,127,82,0.1) 0%, transparent 70%)' }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-6" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>FAQ</div>
            <h1 className="text-[52px] sm:text-[64px] font-black tracking-tight text-white leading-tight mb-5">
              Frequently Asked<br />
              <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Questions</span>
            </h1>
            <p className="text-[17px] text-white/45 max-w-xl mx-auto">Everything you need to know about NexFlow and our automation systems.</p>
          </div>
        </section>

        <section className="pb-28 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-3xl mx-auto space-y-3 pt-12">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-[15px] text-white/40 mb-4">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 4px 20px rgba(75,127,82,0.35)' }}>
              Contact Us →
            </Link>
          </div>
        </section>
      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
