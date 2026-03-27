'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(75,127,82,0.1) 0%, transparent 70%)' }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-6" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>CAREERS</div>
            <h1 className="text-[52px] sm:text-[64px] font-black tracking-tight text-white leading-tight mb-5">
              Careers at<br />
              <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>NexFlow</span>
            </h1>
            <p className="text-[17px] text-white/45 max-w-xl mx-auto">We are building intelligent automation systems for modern businesses. While we are a small team, we are always open to collaborating with talented individuals.</p>
          </div>
        </section>

        <section className="pb-28 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-2xl mx-auto pt-12 space-y-6">
            <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="text-[24px] font-black text-white mb-3">Currently Not Hiring Full-Time Roles</h2>
              <p className="text-[15px] text-white/45 leading-relaxed">NexFlow is currently in an early stage. We are not actively hiring for full-time positions yet.</p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(75,127,82,0.06)', border: '1px solid rgba(150,232,188,0.2)' }}>
              <h3 className="text-[20px] font-black text-white mb-3">But We're Open to Collaboration 🤝</h3>
              <p className="text-[15px] text-white/50 leading-relaxed mb-6">If you're a developer, automation builder, or someone passionate about AI systems, feel free to reach out. We're open to freelance, project-based, or collaboration opportunities.</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:nexflowauto.ai@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 4px 20px rgba(75,127,82,0.35)' }}>
                  Reach Out →
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white/70 hover:text-white transition-all" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  Contact Us
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
