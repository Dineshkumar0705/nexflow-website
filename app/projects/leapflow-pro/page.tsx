'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const features = [
  {
    icon: '🎯',
    title: 'Smart Lead Capture',
    desc: 'Capture leads from calls, walk-ins, or manual entry in seconds. Auto-assign lead scores based on interaction patterns and real-time activity.',
    color: '#06b6d4',
  },
  {
    icon: '📊',
    title: 'Pipeline Analytics',
    desc: 'Visual funnel with stage-by-stage conversion rates, win/loss tracking, monthly revenue charts, and team performance breakdowns.',
    color: '#8b5cf6',
  },
  {
    icon: '🔔',
    title: 'Smart Follow-up Reminders',
    desc: 'Never miss a follow-up. AI-powered reminders based on lead status, deal age, and priority. One tap to call, WhatsApp, or email.',
    color: '#22c55e',
  },
  {
    icon: '📱',
    title: 'Offline-First Design',
    desc: 'Works fully offline — data syncs automatically when you reconnect. Designed for field sales reps in areas with low connectivity.',
    color: '#f59e0b',
  },
  {
    icon: '🔗',
    title: 'CRM Sync',
    desc: 'Two-way sync with Flowra CRM — every lead captured on mobile instantly appears in the web dashboard with full activity history.',
    color: '#4B7F52',
  },
  {
    icon: '📞',
    title: 'One-Touch Outreach',
    desc: 'Call, WhatsApp, or email any lead directly from the app. Auto-log the interaction with timestamp, duration, and outcome.',
    color: '#ef4444',
  },
];

const screens = [
  { label: 'Lead List', file: '/images/projects/leapflow-pro/lead-list.png' },
  { label: 'Lead Detail', file: '/images/projects/leapflow-pro/lead-detail.png' },
  { label: 'Analytics', file: '/images/projects/leapflow-pro/analytics.png' },
  { label: 'Pipeline', file: '/images/projects/leapflow-pro/pipeline.png' },
];

const techStack = [
  { label: 'Language', items: ['Kotlin', 'Jetpack Compose'] },
  { label: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Room DB'] },
  { label: 'Networking', items: ['Retrofit', 'OkHttp', 'Gson'] },
  { label: 'Backend', items: ['Firebase', 'REST API', 'Push Notifications'] },
];

const appStats = [
  { value: '5x', label: 'Faster Lead Response' },
  { value: '< 2s', label: 'App Load Time' },
  { value: '100%', label: 'Offline Support' },
  { value: '4.8★', label: 'Internal Rating' },
];

export default function LeapFlowProPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* ─── Hero ─── */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 65%)' }} />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[13px] text-white/30 mb-8">
              <Link href="/projects" className="hover:text-white/60 transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-white/60">LeapFlow Pro</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider" style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(103,232,249,0.25)', color: '#67e8f9' }}>
                    MOBILE APP
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-white/40" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Android · Kotlin
                  </span>
                </div>

                <h1 className="text-[52px] sm:text-[64px] font-black tracking-tight text-white leading-[1.05] mb-4">
                  LeapFlow<br />
                  <span style={{ background: 'linear-gradient(135deg,#67e8f9,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Pro</span>
                </h1>

                <p className="text-[18px] font-medium mb-2" style={{ color: '#67e8f9' }}>Lead management & analytics in your pocket</p>
                <p className="text-[15px] text-white/35 leading-relaxed mb-8">
                  A native Android app purpose-built for sales field teams — real-time lead capture, AI-powered follow-up reminders, pipeline analytics, offline support, and instant sync with your CRM dashboard.
                </p>

                {/* App stats */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  {appStats.map(s => (
                    <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div className="text-[20px] font-black text-white">{s.value}</div>
                      <div className="text-[10px] text-white/30 mt-1 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#0891b2,#67e8f9)', boxShadow: '0 8px 24px rgba(6,182,212,0.35)' }}>
                    Build Similar App →
                  </Link>
                  <Link href="/solutions/android-development" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white/60 transition-all hover:text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Android Services
                  </Link>
                </div>
              </div>

              {/* Right: Phone mockup group */}
              <div className="flex justify-center items-center relative">
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent)' }} />
                  {/* Primary phone */}
                  <div className="relative z-10 w-[240px] rounded-[40px] overflow-hidden mx-auto" style={{ border: '2px solid rgba(103,232,249,0.2)', boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)', background: '#0a1015' }}>
                    {/* Status bar */}
                    <div className="h-10 flex items-center justify-between px-5 pt-1" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <span className="text-[10px] text-white/50 font-medium">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </div>
                    </div>
                    {/* App header */}
                    <div className="px-4 py-3" style={{ background: 'rgba(6,182,212,0.08)' }}>
                      <div className="text-[12px] font-black text-white">LeapFlow Pro</div>
                      <div className="text-[10px] text-cyan-400/70">12 active leads</div>
                    </div>
                    {/* Mock lead cards */}
                    {[
                      { name: 'Arjun Sharma', company: 'Tata Consultancy', score: 94, status: 'Hot', color: '#22c55e' },
                      { name: 'Priya Nair', company: 'Infosys', score: 87, status: 'Warm', color: '#f59e0b' },
                      { name: 'Vikram Singh', company: 'HDFC Bank', score: 72, status: 'New', color: '#06b6d4' },
                      { name: 'Ananya Rao', company: 'Reliance Jio', score: 68, status: 'New', color: '#06b6d4' },
                    ].map((lead, i) => (
                      <div key={i} className="mx-3 mb-2 rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-[11px] font-bold text-white">{lead.name}</div>
                            <div className="text-[9px] text-white/35">{lead.company}</div>
                          </div>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ background: `${lead.color}20`, color: lead.color }}>{lead.status}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-1 flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full" style={{ width: `${lead.score}%`, background: lead.color }} />
                          </div>
                          <span className="text-[9px] font-bold text-white/50">{lead.score}</span>
                        </div>
                      </div>
                    ))}
                    {/* Bottom nav */}
                    <div className="flex justify-around py-3 mt-1" style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      {['🏠', '👥', '📊', '⚙️'].map((icon, i) => (
                        <div key={i} className={`text-[16px] ${i === 1 ? 'opacity-100' : 'opacity-30'}`}>{icon}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── App Screenshots ─── */}
        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-3" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(103,232,249,0.2)', color: '#67e8f9' }}>APP SCREENS</div>
              <h2 className="text-[32px] sm:text-[42px] font-black text-white">Designed for the field, not the desk</h2>
            </div>

            {/* Phone screens row */}
            <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
              {screens.map((s, i) => (
                <div key={i} className="flex-shrink-0 w-[160px]">
                  <div className="rounded-[28px] overflow-hidden mb-3 relative" style={{ border: '1.5px solid rgba(103,232,249,0.15)', boxShadow: '0 16px 40px rgba(0,0,0,0.6)', aspectRatio: '9/19', background: '#0a1520' }}>
                    <Image
                      src={s.file}
                      alt={s.label}
                      fill
                      className="object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      unoptimized
                    />
                    {/* Fallback */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                      <div className="text-[28px] mb-2">📱</div>
                      <div className="text-[10px] text-white/30 text-center">{s.label}</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-white/40 text-center font-medium">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-[12px] text-white/20 mt-4">
              Add screenshots to: /public/images/projects/leapflow-pro/
            </p>
          </div>
        </section>

        {/* ─── Features ─── */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-3" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(103,232,249,0.2)', color: '#67e8f9' }}>FEATURES</div>
              <h2 className="text-[32px] sm:text-[48px] font-black text-white mb-3">Close more deals, from anywhere</h2>
              <p className="text-[15px] text-white/35 max-w-lg mx-auto">Every feature built around how real field sales teams actually work.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${f.color}35`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${f.color}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="text-[32px] mb-4">{f.icon}</div>
                  <h3 className="text-[16px] font-black text-white mb-2">{f.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-3" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(103,232,249,0.2)', color: '#67e8f9' }}>TECH STACK</div>
              <h2 className="text-[32px] sm:text-[40px] font-black text-white">Native Android. Zero compromises.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techStack.map((layer, i) => (
                <div key={i} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-[11px] font-bold tracking-widest mb-3" style={{ color: '#67e8f9' }}>{layer.label.toUpperCase()}</div>
                  <div className="flex flex-col gap-2">
                    {layer.items.map(item => (
                      <span key={item} className="text-[13px] text-white/60 font-medium flex items-center gap-2">
                        <span style={{ color: '#06b6d4' }}>▸</span> {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-3xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden" style={{ background: 'rgba(6,182,212,0.07)', border: '1px solid rgba(103,232,249,0.15)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="text-[32px] sm:text-[48px] font-black text-white mb-4">Need a field sales app?</h2>
              <p className="text-[16px] text-white/40 max-w-lg mx-auto mb-8 leading-relaxed">NexFlow builds native Android apps for sales and operations teams — from lead capture to full CRM integration.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-bold text-white transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#0891b2,#67e8f9)', boxShadow: '0 8px 32px rgba(6,182,212,0.35)' }}>
                  Build My App →
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-semibold text-white/50 transition-all hover:text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  ← Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
