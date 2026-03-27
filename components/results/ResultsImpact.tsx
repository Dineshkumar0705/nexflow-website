'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500,  suffix: '+',  label: 'Automations Deployed',  sublabel: 'across all clients',       icon: '⚙️' },
  { value: 10,   suffix: 'x',  label: 'Average Speed Increase', sublabel: 'vs manual processes',      icon: '⚡' },
  { value: 98,   suffix: '%',  label: 'Client Satisfaction',    sublabel: 'net promoter score',       icon: '★' },
  { value: 2,    suffix: 'M+', label: 'Hours Saved for Clients',sublabel: 'and counting',             icon: '⏱' },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, index, animate }: { stat: typeof stats[0]; index: number; animate: boolean }) {
  const count = useCountUp(stat.value, 1800 + index * 200, animate);
  return (
    <div className="relative text-center group">
      <div className="text-4xl mb-4">{stat.icon}</div>
      <div className="text-[56px] sm:text-[68px] font-black tracking-tight leading-none mb-2">
        <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
          {count}{stat.suffix}
        </span>
      </div>
      <div className="text-[17px] font-bold text-white mb-1">{stat.label}</div>
      <div className="text-[13px] text-white/35">{stat.sublabel}</div>
    </div>
  );
}

export default function ResultsImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setAnimate(true); observer.disconnect(); }},
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: '#050A07' }}>
      {/* Gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(150,232,188,0.25) 0%, transparent 70%)' }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.4),transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
            RESULTS THAT MATTER
          </div>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-tight text-white mb-4">
            Numbers don't lie.
          </h2>
          <p className="text-[17px] text-white/40 max-w-lg mx-auto">
            Real metrics from real clients. Every number here is earned.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} animate={animate} />
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-20 p-8 rounded-2xl text-center" style={{ background: 'rgba(75,127,82,0.06)', border: '1px solid rgba(75,127,82,0.12)' }}>
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
          </div>
          <p className="text-[18px] font-semibold text-white mb-2">"NexFlow cut our manual data entry by 94% in the first month."</p>
          <p className="text-[14px] text-white/40">— Operations Director, SaaS Company</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.15),transparent)' }} />
    </section>
  );
}
