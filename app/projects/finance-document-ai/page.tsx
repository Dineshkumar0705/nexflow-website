'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const outcomes = [
  { value: '90%', label: 'Manual Work Reduced', icon: '🎯' },
  { value: '< 3s', label: 'Per Document', icon: '⚡' },
  { value: '99.2%', label: 'Extraction Accuracy', icon: '✅' },
  { value: '500+', label: 'Doc Types Supported', icon: '📄' },
];

const capabilities = [
  { icon: '📋', title: 'Invoice Processing', desc: 'Auto-extract vendor, amount, GST, line items, and due date from any invoice format — PDF, image, or scan.', color: '#06b6d4' },
  { icon: '📊', title: 'Financial Report Analysis', desc: 'Parse P&L statements, balance sheets, and MIS reports. Extract key metrics and flag anomalies instantly.', color: '#22c55e' },
  { icon: '📝', title: 'Contract Extraction', desc: 'Identify parties, payment terms, renewal dates, and clauses from legal and commercial contracts.', color: '#8b5cf6' },
  { icon: '🏦', title: 'Bank Statement Parsing', desc: 'Auto-categorise transactions, detect duplicates, and reconcile with internal ledger entries automatically.', color: '#f59e0b' },
  { icon: '🔍', title: 'Fraud Detection', desc: 'AI-powered anomaly detection on document metadata, amounts, and patterns — flags suspicious entries in real-time.', color: '#ef4444' },
  { icon: '📤', title: 'Auto Ledger Entry', desc: 'Extracted data maps directly to accounting system fields — Tally, Zoho Books, or custom ERP — zero re-entry.', color: '#4B7F52' },
];

const stack = ['AI OCR', 'OpenAI GPT-4', 'Python', 'FastAPI', 'Tally Integration', 'Zoho Books API', 'AWS S3', 'LangChain'];

export default function FinanceDocumentAIPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 65%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[13px] text-white/30 mb-8">
              <Link href="/projects" className="hover:text-white/60 transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-white/60">Finance Document AI</span>
            </div>
            <div className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold mb-5" style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)', color: '#67e8f9' }}>CASE STUDY · AI + DOCUMENT PROCESSING</div>
            <h1 className="text-[48px] sm:text-[60px] font-black text-white tracking-tight leading-tight mb-4">
              Finance Document<br /><span style={{ background: 'linear-gradient(135deg,#67e8f9,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI Processing</span>
            </h1>
            <p className="text-[16px] text-white/40 max-w-2xl leading-relaxed mb-10">AI-powered document intelligence for finance teams — extract, validate, and auto-post data from invoices, contracts, bank statements, and financial reports in under 3 seconds.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {outcomes.map(o => (
                <div key={o.label} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-[24px] mb-1">{o.icon}</div>
                  <div className="text-[28px] font-black text-white">{o.value}</div>
                  <div className="text-[11px] text-white/35 mt-1 leading-tight">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex px-4 py-1.5 rounded-full text-[11px] font-bold mb-3" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#67e8f9' }}>CAPABILITIES</div>
              <h2 className="text-[32px] font-black text-white">Every finance document, handled by AI</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${c.color}35`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${c.color}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="text-[28px] mb-3">{c.icon}</div>
                  <h3 className="text-[16px] font-black text-white mb-2">{c.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[24px] font-black text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {stack.map(t => (
                <span key={t} className="px-4 py-2 rounded-xl text-[13px] font-semibold text-white/60" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="text-[32px] font-black text-white mb-4">Ready to automate your finance ops?</h2>
          <p className="text-[15px] text-white/40 max-w-md mx-auto mb-8">We build custom AI document processing pipelines for CA firms, NBFCs, startups, and enterprise finance teams.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#0891b2,#67e8f9)', boxShadow: '0 8px 24px rgba(6,182,212,0.3)' }}>
              Build Similar System →
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-semibold text-white/40 transition-all hover:text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              ← Back to Projects
            </Link>
          </div>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
