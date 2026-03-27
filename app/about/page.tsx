'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const services = [
  'Business workflow automation',
  'Lead capture and follow-up automation',
  'Customer support automation',
  'Document processing and data extraction',
  'AI-powered operational systems',
];
const industries = [
  'Healthcare operations',
  'Business process outsourcing (BPO)',
  'E-commerce businesses',
  'Customer support teams',
  'Professional services and consulting firms',
];

export default function AboutPage() {
  const openCalendly = () => window.open('https://calendly.com/nexflowauto-ai/30min', '_blank', 'noopener,noreferrer');

  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* HERO */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(75,127,82,0.12) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-6" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>ABOUT NEXFLOW</div>
            <h1 className="text-[52px] sm:text-[68px] font-black tracking-tight text-white leading-tight mb-6">
              Building the Future of<br />
              <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Business Automation</span>
            </h1>
            <p className="text-[18px] text-white/50 max-w-2xl mx-auto leading-relaxed">
              Nexflow is a technology company focused on building intelligent automation systems that help businesses streamline workflows and improve operational efficiency.
            </p>
          </div>
        </section>

        {/* MISSION + VISION */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To help businesses operate smarter by building intelligent automation systems that simplify workflows, reduce repetitive work, and improve operational efficiency.' },
              { icon: '👁️', title: 'Our Vision', text: 'To create a future where businesses operate seamlessly through intelligent automation systems — freeing teams to focus on what truly matters.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="text-[22px] font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>WHAT WE DO</div>
              <h2 className="text-[36px] sm:text-[48px] font-black text-white mb-4">Our Services</h2>
              <p className="text-[16px] text-white/45 max-w-lg mx-auto">Nexflow designs and develops automation solutions using AI and modern workflow systems.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-5 py-4 transition-all duration-200 hover:border-[rgba(150,232,188,0.3)]" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-2 h-2 rounded-full bg-[#4B7F52] flex-shrink-0" />
                  <span className="text-[14px] text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>OUR APPROACH</div>
            <h2 className="text-[36px] sm:text-[48px] font-black text-white mb-6">How We Think</h2>
            <p className="text-[17px] text-white/50 leading-relaxed">
              We identify inefficiencies and design automation systems that integrate naturally into your existing workflows — without disrupting what already works.
            </p>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>INDUSTRIES</div>
              <h2 className="text-[36px] sm:text-[48px] font-black text-white mb-4">Industries We Support</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-5 py-4 transition-all duration-200 hover:border-violet-500/30" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0" />
                  <span className="text-[14px] text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-5" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>FOUNDER</div>
              <h2 className="text-[36px] sm:text-[48px] font-black text-white">The Person Behind NexFlow</h2>
            </div>
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[320px] md:h-auto">
                  <Image src="/images/profile-v3.jpg" alt="Dinesh Kumar" fill className="object-cover object-top" priority />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-[28px] font-black text-white mb-1">Dinesh Kumar</h3>
                  <p className="text-[14px] font-semibold mb-4" style={{ color: '#96E8BC' }}>Founder · NexFlow</p>
                  <p className="text-[14px] text-white/50 leading-relaxed mb-6">
                    I build intelligent automation systems that help businesses eliminate repetitive work and scale efficiently using modern AI technologies.
                  </p>
                  <div className="flex gap-4 mb-6">
                    <a href="mailto:dineshdk7.official@gmail.com" className="text-[13px] text-[#96E8BC] hover:text-[#6EC99A] transition-colors">Email</a>
                    <a href="https://www.linkedin.com/in/denu0705/" target="_blank" rel="noopener" className="text-[13px] text-[#96E8BC] hover:text-[#6EC99A] transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/dinesh_kumaroff7" target="_blank" rel="noopener" className="text-[13px] text-[#96E8BC] hover:text-[#6EC99A] transition-colors">Instagram</a>
                  </div>
                  <button onClick={openCalendly} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white w-fit transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 4px 20px rgba(75,127,82,0.35)' }}>
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="text-[36px] sm:text-[52px] font-black text-white mb-4">Automation for Smart Businesses</h2>
          <p className="text-[17px] text-white/45 max-w-lg mx-auto mb-8">Let's talk about how we can automate your workflows.</p>
          <button onClick={openCalendly} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[16px] font-bold text-white transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 32px rgba(75,127,82,0.45)' }}>
            Book Demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </section>

      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
