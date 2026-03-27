'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const solutions = [
  {
    title: 'AI Automation',
    href: '/solutions/ai-automation',
    desc: 'Deploy intelligent agents that understand context, make decisions, and execute complex tasks without human input.',
    tags: ['GPT-4', 'Decision Trees', 'NLP'],
    color: '#4B7F52',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
      </svg>
    ),
  },
  {
    title: 'Workflow Automation',
    href: '/solutions/workflow-automation',
    desc: 'Streamline end-to-end business processes — from data entry to approvals — with zero manual intervention.',
    tags: ['Zapier', 'Make', 'n8n'],
    color: '#6EC99A',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
  },
  {
    title: 'CRM Automation',
    href: '/solutions/crm-automation',
    desc: 'Auto-update contacts, trigger follow-up sequences, and keep your sales pipeline clean and moving — 24/7.',
    tags: ['HubSpot', 'Salesforce', 'Pipedrive'],
    color: '#06b6d4',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    ),
  },
  {
    title: 'Lead Automation',
    href: '/solutions/lead-automation',
    desc: 'Capture, qualify, score, and route leads automatically — so your sales team only speaks to the ones ready to buy.',
    tags: ['Lead Scoring', 'Email Seq.', 'CRM Sync'],
    color: '#10b981',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
      </svg>
    ),
  },
  {
    title: 'Automation Systems',
    href: '/solutions/automation-systems',
    desc: 'Full-stack custom automation infrastructure — designed to scale with your business from 10 to 10,000 users.',
    tags: ['Custom API', 'Scalable', 'Enterprise'],
    color: '#f59e0b',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/>
      </svg>
    ),
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80)); }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: '#050A07' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.35),transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
              OUR SOLUTIONS
            </div>
            <h2 className="text-[40px] sm:text-[52px] font-black tracking-tight text-white leading-tight">
              Every automation<br />
              <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>you'll ever need.</span>
            </h2>
          </div>
          <Link href="/solutions" className="reveal inline-flex items-center gap-2 text-[14px] font-semibold text-[#96E8BC] hover:text-[#96E8BC] transition-colors self-start lg:self-end">
            View all solutions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>

        {/* Big featured card + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured (first item, big) */}
          <Link href={solutions[0].href} className="reveal lg:col-span-1 lg:row-span-2 group relative rounded-2xl p-8 flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(75,127,82,0.08)', border: '1px solid rgba(150,232,188,0.2)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background='rgba(75,127,82,0.13)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 20px 60px rgba(150,232,188,0.2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background='rgba(75,127,82,0.08)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='none'; }}
          >
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#96E8BC]" style={{ background: 'rgba(150,232,188,0.2)', border: '1px solid rgba(150,232,188,0.25)' }}>{solutions[0].icon}</div>
              <div className="inline-flex px-2.5 py-1 rounded-md text-[11px] font-bold text-[#96E8BC] mb-4" style={{ background: 'rgba(75,127,82,0.12)' }}>FEATURED</div>
              <h3 className="text-[26px] font-black text-white mb-3">{solutions[0].title}</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">{solutions[0].desc}</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">{solutions[0].tags.map(t => <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-[#96E8BC]" style={{ background: 'rgba(75,127,82,0.1)' }}>{t}</span>)}</div>
              <svg className="w-5 h-5 text-[#96E8BC] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
          </Link>

          {/* Other 4 in a grid */}
          {solutions.slice(1).map((sol, i) => (
            <Link key={sol.href} href={sol.href}
              className="reveal group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor=`${sol.color}35`; (e.currentTarget as HTMLAnchorElement).style.background=`${sol.color}08`; (e.currentTarget as HTMLAnchorElement).style.boxShadow=`0 16px 48px ${sol.color}12`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(255,255,255,0.07)'; (e.currentTarget as HTMLAnchorElement).style.background='rgba(255,255,255,0.025)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='none'; }}
            >
              <div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${sol.color}18`, border: `1px solid ${sol.color}25`, color: sol.color }}>{sol.icon}</div>
                <h3 className="text-[17px] font-bold text-white mb-2">{sol.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">{sol.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-1.5">{sol.tags.slice(0,2).map(t => <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-medium text-white/40" style={{ background: 'rgba(255,255,255,0.05)' }}>{t}</span>)}</div>
                <svg className="w-4 h-4 text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(75,127,82,0.15),transparent)' }} />
    </section>
  );
}
