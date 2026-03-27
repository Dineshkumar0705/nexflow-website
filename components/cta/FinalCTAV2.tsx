'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function FinalCTAV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => setTimeout(() => (el as HTMLElement).classList.add('visible'), i * 120)); }),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: '#050A07' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.4),transparent)' }} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(75,127,82,0.5) 0%, transparent 70%)' }} />
      </div>
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-8" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B7F52] opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-[#4B7F52]"/></span>
          Ready when you are
        </div>

        <h2 className="reveal text-[44px] sm:text-[60px] lg:text-[72px] font-black tracking-tight leading-tight mb-6">
          <span className="text-white">Stop doing</span><br/>
          <span style={{ background: 'linear-gradient(135deg,#96E8BC 0%,#6EC99A 50%,#67e8f9 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', backgroundSize:'200% 200%', animation:'gradient-x 4s ease infinite' }}>
            work that machines
          </span><br/>
          <span className="text-white">can do for you.</span>
        </h2>

        <p className="reveal text-[18px] sm:text-[20px] text-white/45 max-w-2xl mx-auto leading-relaxed mb-10">
          Book a free 30-minute strategy call. We'll map your biggest automation opportunities and show you exactly what's possible — zero obligation.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 40px rgba(75,127,82,0.55), 0 0 0 1px rgba(150,232,188,0.25)' }}
          >
            Book Free Strategy Call
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/50 hover:text-white/80 transition-colors">
            See case studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Trust signals */}
        <div className="reveal flex items-center justify-center gap-6 flex-wrap text-[13px] text-white/30">
          {['Free 30-min call', 'No credit card', 'Results in days', 'Cancel anytime'].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#4B7F52]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
