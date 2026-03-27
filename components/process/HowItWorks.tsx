'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: 'We map every manual, repetitive process in your business — finding the highest-impact automation opportunities in 30 minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'System Design',
    desc: 'Our engineers design a tailored automation architecture — connecting your tools, defining triggers, and building the logic layer.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Build & Test',
    desc: 'We build, QA test, and stress-test every flow — ensuring 99.9% reliability before it ever touches your live business data.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    desc: 'We deploy, monitor, and continuously improve your automations — with monthly performance reviews and proactive enhancements.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120)); }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: '#07070f' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.35),transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
            HOW IT WORKS
          </div>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-tight text-white mb-4">
            From zero to{' '}
            <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>automated</span>
            <br />in 4 steps.
          </h2>
          <p className="text-[17px] text-white/40 max-w-lg mx-auto">Simple, structured, and proven. We make automation feel effortless.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px hidden lg:block" style={{ background: 'linear-gradient(90deg,rgba(150,232,188,0.25),rgba(75,127,82,0.3),rgba(6,182,212,0.3),rgba(16,185,129,0.3))' }} />

          {steps.map((step, i) => (
            <div key={i} className="reveal relative group" style={{ animationDelay: `${i*100}ms` }}>
              <div className="relative rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background='rgba(75,127,82,0.06)'; (e.currentTarget as HTMLDivElement).style.borderColor='rgba(75,127,82,0.15)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 20px 60px rgba(75,127,82,0.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,0.025)'; (e.currentTarget as HTMLDivElement).style.borderColor='rgba(255,255,255,0.07)'; (e.currentTarget as HTMLDivElement).style.boxShadow='none'; }}
              >
                {/* Step number badge */}
                <div className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-[#96E8BC]" style={{ background: 'rgba(75,127,82,0.12)', border: '1px solid rgba(150,232,188,0.2)' }}>
                  {step.icon}
                </div>
                <div className="absolute top-5 right-5 text-[32px] font-black opacity-[0.06] text-white leading-none">{step.number}</div>
                <h3 className="text-[17px] font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[14px] text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.15),transparent)' }} />
    </section>
  );
}
