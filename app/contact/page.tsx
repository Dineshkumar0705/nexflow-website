'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    emailjs.sendForm('service_tbp5qyc', 'template_ogs9k23', form.current, 'hEigIm3UAqIgnfI7M')
      .then(() => { setSent(true); setLoading(false); form.current?.reset(); })
      .catch(() => { alert('Failed to send message. Please try again.'); setLoading(false); });
  };

  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* HERO */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(75,127,82,0.12) 0%, transparent 70%)' }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-6" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>GET IN TOUCH</div>
            <h1 className="text-[44px] sm:text-[62px] font-black tracking-tight text-white leading-tight mb-5">
              Let's Build Your<br />
              <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Automation System</span>
            </h1>
            <p className="text-[17px] text-white/50 max-w-xl mx-auto">Let's discuss how intelligent automation can improve your business operations.</p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

            {/* Founder card — full image visible */}
            <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Full image, no cropping */}
              <div style={{ position: 'relative', width: '100%', background: 'rgba(0,0,0,0.3)' }}>
                <Image
                  src="/images/profile-v3.jpg"
                  alt="Dinesh Kumar"
                  width={600}
                  height={700}
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0' }}
                  priority
                />
                {/* Subtle gradient overlay at bottom for text readability */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
                  background: 'linear-gradient(to top, rgba(10,10,20,0.85), transparent)'
                }} />
              </div>

              <div className="p-6">
                <h3 className="text-[22px] font-black text-white mb-1">Dinesh Kumar</h3>
                <p className="text-[13px] font-semibold mb-4" style={{ color: '#96E8BC' }}>Founder &amp; CEO · NexFlow</p>
                <p className="text-[14px] text-white/45 leading-relaxed mb-5">
                  Building intelligent automation systems that help businesses eliminate repetitive work and scale efficiently. Let's connect and explore what's possible.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:dineshdk7.official@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium text-[#96E8BC] hover:text-[#6EC99A] transition-colors"
                    style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    Email
                  </a>
                  <a href="https://www.linkedin.com/in/denu0705/" target="_blank" rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium text-[#96E8BC] hover:text-[#6EC99A] transition-colors"
                    style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/dinesh_kumaroff7" target="_blank" rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium text-[#96E8BC] hover:text-[#6EC99A] transition-colors"
                    style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Instagram
                  </a>
                </div>

                {/* Book a call CTA */}
                <a href="https://calendly.com/nexflowauto-ai/30min" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 mt-5 w-full justify-center py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 4px 20px rgba(75,127,82,0.35)' }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  Book a Free Call
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="text-[24px] font-black text-white mb-2">Send a Message</h2>
              <p className="text-[14px] text-white/45 mb-7">Tell us about your automation needs and we'll get back to you shortly.</p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-[20px] font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[14px] text-white/45">We'll get back to you soon.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-[13px] text-[#96E8BC] hover:text-[#6EC99A]">Send another</button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  {[
                    { name: 'name',    type: 'text',  label: 'Your Name',      required: true },
                    { name: 'email',   type: 'email', label: 'Email Address',   required: true },
                    { name: 'company', type: 'text',  label: 'Company Name',   required: false },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wider mb-1.5">{field.label}</label>
                      <input name={field.name} type={field.type} required={field.required}
                        className="w-full px-4 py-3 rounded-xl text-[14px] text-white placeholder-white/20 outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(75,127,82,0.5)'}
                        onBlur={e  => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wider mb-1.5">Your Message</label>
                    <textarea name="message" required rows={5}
                      className="w-full px-4 py-3 rounded-xl text-[14px] text-white placeholder-white/20 outline-none resize-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(75,127,82,0.5)'}
                      onBlur={e  => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full py-3.5 rounded-xl text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 4px 20px rgba(75,127,82,0.4)' }}>
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}

              {/* Direct contact info below form */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                <a href="mailto:dineshdk7.official@gmail.com" className="flex items-center gap-3 text-[13px] text-white/40 hover:text-white/70 transition-colors">
                  <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(75,127,82,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg className="w-3.5 h-3.5 text-[#96E8BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </span>
                  dineshdk7.official@gmail.com
                </a>
                <a href="https://www.instagram.com/dinesh_kumaroff7" target="_blank" rel="noopener" className="flex items-center gap-3 text-[13px] text-white/40 hover:text-white/70 transition-colors">
                  <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(75,127,82,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg className="w-3.5 h-3.5 text-[#96E8BC]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </span>
                  @dinesh_kumaroff7
                </a>
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
