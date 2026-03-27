'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  { quote: "NexFlow eliminated 80% of our repetitive admin work in the first week. Our team now focuses on strategy instead of copy-pasting data all day.", author: "Sarah Mitchell", role: "Head of Operations", company: "GrowthLabs Inc.", avatar: "SM", rating: 5 },
  { quote: "The AI automation they built for our lead pipeline is phenomenal. We went from responding in 3 hours to under 2 minutes — automatically.", author: "James Okonkwo", role: "VP of Sales", company: "ScaleForce", avatar: "JO", rating: 5 },
  { quote: "We tried many tools before. NexFlow was the first team that actually understood our workflow and built something that works perfectly.", author: "Priya Anand", role: "Founder & CEO", company: "Ventura SaaS", avatar: "PA", rating: 5 },
  { quote: "ROI was positive within 3 weeks. Their CRM automation alone saved us 40+ hours per month. I recommend NexFlow to every founder I know.", author: "Lucas Fernandez", role: "Co-Founder", company: "Apex Digital", avatar: "LF", rating: 5 },
  { quote: "What sets NexFlow apart is they deliver outcomes, not just code. They tracked results and kept improving everything proactively.", author: "Natalie Chen", role: "Director of Growth", company: "Orbit Analytics", avatar: "NC", rating: 5 },
  { quote: "Best investment we made this year. Our entire onboarding, billing, and client comms are now fully automated. Zero manual work required.", author: "David Park", role: "CTO", company: "FlowStack", avatar: "DP", rating: 5 },
];

const avatarColors = ['#4B7F52','#6EC99A','#06b6d4','#10b981','#f59e0b','#ec4899'];

export default function TestimonialsV2() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => setTimeout(() => (el as HTMLElement).classList.add('visible'), i * 80)); }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: '#07070f' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.35),transparent)' }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10" style={{ background: 'radial-gradient(ellipse, rgba(75,127,82,0.6) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
            CLIENT STORIES
          </div>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-tight text-white mb-4">
            Trusted by teams who{' '}
            <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>move fast.</span>
          </h2>
          <p className="text-[17px] text-white/40 max-w-xl mx-auto">Real stories from real businesses that automated their way to growth.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal break-inside-avoid mb-5 rounded-2xl p-6 transition-all duration-300 cursor-default"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background='rgba(75,127,82,0.06)'; el.style.borderColor='rgba(150,232,188,0.2)'; el.style.transform='translateY(-3px)'; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background='rgba(255,255,255,0.025)'; el.style.borderColor='rgba(255,255,255,0.07)'; el.style.transform='translateY(0)'; }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_,j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-[15px] text-white/70 leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0" style={{ background: avatarColors[i % avatarColors.length] }}>{t.avatar}</div>
                <div>
                  <div className="text-[13px] font-semibold text-white">{t.author}</div>
                  <div className="text-[12px] text-white/40">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.15),transparent)' }} />
    </section>
  );
}
