'use client';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';

const features = [
  { icon: '📊', title: 'Custom CRM Systems', desc: 'Purpose-built CRM platforms with contact management, deal pipelines, activity logs, and team assignment — no bloated off-the-shelf software.' },
  { icon: '📈', title: 'Analytics Dashboards', desc: 'Real-time business intelligence dashboards with KPIs, charts, and filters — built to answer your specific business questions.' },
  { icon: '🔁', title: 'Pipeline Management', desc: 'Visual deal pipelines with drag-and-drop stages, probability scoring, and automated follow-up triggers at every step.' },
  { icon: '📧', title: 'Email & Follow-up Automation', desc: 'Automated drip campaigns, follow-up sequences, and task reminders built directly into your CRM workflow.' },
  { icon: '🔗', title: 'Third-Party Integrations', desc: 'Connect with HubSpot, Zoho, Gmail, WhatsApp, Stripe, and your existing tools — no data silos.' },
  { icon: '👥', title: 'Team & Role Management', desc: 'Multi-user access with role-based permissions, activity tracking, and manager-level reporting views.' },
];

const metrics = [
  { label: 'Total Leads', value: '2,847', change: '+12.4%', up: true },
  { label: 'Deals Closed', value: '184', change: '+8.2%', up: true },
  { label: 'Avg Deal Size', value: '₹1.2L', change: '+5.7%', up: true },
  { label: 'Response Time', value: '1.4h', change: '-32%', up: true },
];

const G = '#4B7F52', M = '#96E8BC', BG = '#050A07';

export default function CRMDashboardsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: BG, minHeight: '100vh', color: '#fff' }}>

        {/* HERO */}
        <section className="relative pt-40 pb-28 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-[20%] left-0 w-[700px] h-[600px] rounded-full opacity-18" style={{ background: `radial-gradient(circle,${G},transparent 70%)`, filter: 'blur(90px)' }} />
            <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full opacity-12" style={{ background: `radial-gradient(circle,${M},transparent 70%)`, filter: 'blur(70px)' }} />
          </div>
          <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold mb-6 uppercase tracking-widest" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.25)', color: M }}>
                CRM & Dashboards
              </div>
              <h1 className="text-[52px] sm:text-[72px] font-black tracking-tight leading-tight mb-6">
                Your Business,<br />
                <span style={{ background: `linear-gradient(135deg,${M},${G})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Fully Visible
                </span>
              </h1>
              <p className="text-[18px] text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
                Custom CRM systems and analytics dashboards that give your team a single source of truth — built around how you actually work.
              </p>
            </div>

            {/* Dashboard preview mockup */}
            <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(150,232,188,0.1)' }}>
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: 'rgba(150,232,188,0.08)', background: 'rgba(0,0,0,0.4)' }}>
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-4 h-5 rounded flex items-center px-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-[10px] text-white/20">crm.yourcompany.com / dashboard</span>
                </div>
              </div>
              {/* Dashboard body */}
              <div className="p-6">
                {/* Metric cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {metrics.map((m, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(75,127,82,0.06)', border: '1px solid rgba(150,232,188,0.1)' }}>
                      <div className="text-[11px] text-white/35 mb-1">{m.label}</div>
                      <div className="text-[20px] font-black text-white">{m.value}</div>
                      <div className="text-[11px] font-semibold mt-1" style={{ color: M }}>{m.change} ↑</div>
                    </div>
                  ))}
                </div>
                {/* Charts row */}
                <div className="grid sm:grid-cols-3 gap-3">
                  {/* Bar chart */}
                  <div className="sm:col-span-2 rounded-xl p-4" style={{ background: 'rgba(75,127,82,0.04)', border: '1px solid rgba(150,232,188,0.07)' }}>
                    <div className="text-[11px] text-white/35 mb-3">Monthly Revenue Pipeline</div>
                    <div className="flex items-end gap-2 h-20">
                      {[55,72,48,85,60,90,75,88,65,95,82,100].map((h,i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, background: i===11 ? `linear-gradient(to top,${G},${M})` : 'rgba(75,127,82,0.2)' }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {['Jan','Apr','Jul','Oct','Dec'].map(m => <span key={m} className="text-[9px] text-white/20">{m}</span>)}
                    </div>
                  </div>
                  {/* Pipeline stages */}
                  <div className="rounded-xl p-4" style={{ background: 'rgba(75,127,82,0.04)', border: '1px solid rgba(150,232,188,0.07)' }}>
                    <div className="text-[11px] text-white/35 mb-3">Deal Pipeline</div>
                    {[['New Lead','847',65],['Qualified','412',48],['Proposal','198',32],['Closed','184',100]].map(([stage,count,pct],i) => (
                      <div key={i} className="mb-2.5">
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] text-white/40">{stage}</span>
                          <span className="text-[10px] font-bold" style={{ color: M }}>{count}</span>
                        </div>
                        <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div className="h-1 rounded-full" style={{ width:`${pct}%`, background: `linear-gradient(90deg,${G},${M})` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[16px] font-bold text-white transition-all hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg,${G},#6EC99A)`, boxShadow: `0 8px 32px rgba(75,127,82,0.5)` }}>
                Build My CRM →
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[15px] font-semibold text-white/70 hover:text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(150,232,188,0.15)' }}>
                See Live Examples
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(150,232,188,0.08)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[11px] font-bold uppercase tracking-widest" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)', color: M }}>Capabilities</div>
              <h2 className="text-[38px] sm:text-[50px] font-black text-white">Everything Your Team Needs</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={i} className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(150,232,188,0.08)' }}>
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-[18px] font-bold text-white mb-2 group-hover:text-[#96E8BC] transition-colors">{f.title}</h3>
                  <p className="text-[14px] text-white/40 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center" style={{ borderTop: '1px solid rgba(150,232,188,0.08)' }}>
          <h2 className="text-[40px] sm:text-[56px] font-black text-white mb-4">Stop Guessing. Start Knowing.</h2>
          <p className="text-[17px] text-white/40 max-w-lg mx-auto mb-10">Get a custom CRM and dashboard built exactly for your business in weeks.</p>
          <Link href="/contact" className="inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl text-[17px] font-bold text-white transition-all hover:-translate-y-1"
            style={{ background: `linear-gradient(135deg,${G},#6EC99A)`, boxShadow: `0 8px 40px rgba(75,127,82,0.5)` }}>
            Request a Free Demo →
          </Link>
        </section>
      </main>
      <FooterV2 />
    </>
  );
}
