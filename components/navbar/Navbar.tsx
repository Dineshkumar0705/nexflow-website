'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  {
    label: 'Services', href: '/solutions',
    children: [
      { label: 'Web & SaaS Development',  href: '/solutions/web-development',   desc: 'Sites, web apps & SaaS platforms' },
      { label: 'Android App Development', href: '/solutions/android-development', desc: 'Native & cross-platform mobile apps' },
      { label: 'AI Chatbots',             href: '/solutions/ai-chatbots',        desc: 'WhatsApp, web & app AI assistants' },
      { label: 'CRM Dashboards',          href: '/solutions/crm-dashboards',     desc: 'Custom CRM & business dashboards' },
      { label: 'Business Automation',     href: '/solutions/business-automation', desc: 'Workflows, leads & ops on autopilot' },
    ],
  },
  { label: 'Projects',   href: '/projects' },
  { label: 'Industries', href: '/industries' },
  { label: 'About',      href: '/about' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu  = (label: string) => { if (timerRef.current) clearTimeout(timerRef.current); setActiveMenu(label); };
  const closeMenu = () => { timerRef.current = setTimeout(() => setActiveMenu(null), 120); };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl border-b shadow-[0_4px_32px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}
      style={scrolled ? { background: 'rgba(5,10,7,0.92)', borderColor: 'rgba(150,232,188,0.07)' } : {}}>

      <nav className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.92)', padding: '3px' }}>
            <Image src="/logo/logo.png" alt="NexFlow" fill className="object-contain" priority />
          </div>
          <div>
            <span className="text-[17px] font-bold tracking-tight text-white">
              Nex<span style={{ background:'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Flow</span>
            </span>
            <div className="text-[9px] text-white/25 font-medium tracking-widest uppercase -mt-0.5 hidden sm:block">AI · SaaS · IT Services</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" onMouseEnter={() => openMenu(link.label)} onMouseLeave={closeMenu}>
                <button className={`flex items-center gap-1 px-4 py-2 rounded-xl text-[14px] font-medium transition-all duration-200 ${activeMenu===link.label?'text-white bg-white/[0.06]':'text-white/60 hover:text-white hover:bg-white/[0.04]'}`}>
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu===link.label?'rotate-180':''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[290px] rounded-2xl overflow-hidden transition-all duration-200 ${activeMenu===link.label?'opacity-100 translate-y-0 pointer-events-auto':'opacity-0 -translate-y-2 pointer-events-none'}`}
                  style={{ background:'rgba(5,10,7,0.97)', backdropFilter:'blur(20px)', border:'1px solid rgba(150,232,188,0.1)', boxShadow:'0 24px 64px rgba(0,0,0,0.7)' }}
                  onMouseEnter={() => openMenu(link.label)} onMouseLeave={closeMenu}>
                  <div className="p-2">
                    {link.children.map(child => (
                      <Link key={child.href} href={child.href} className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors group"
                        style={{ ':hover': { background: 'rgba(75,127,82,0.1)' } } as React.CSSProperties}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(75,127,82,0.1)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                        <div className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ background: '#4B7F52' }} />
                        <div>
                          <div className="text-[13px] font-medium text-white/80 group-hover:text-white">{child.label}</div>
                          <div className="text-[12px] text-white/30 mt-0.5">{child.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className="px-4 py-2 rounded-xl text-[14px] font-medium text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200">{link.label}</Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="text-[14px] font-medium text-white/55 hover:text-white transition-colors px-3 py-2">Contact</Link>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background:'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow:'0 4px 20px rgba(75,127,82,0.4)' }}>
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen
            ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen?'max-h-[700px] opacity-100':'max-h-0 opacity-0'}`}
        style={{ background:'rgba(5,10,7,0.98)', backdropFilter:'blur(20px)', borderBottom:menuOpen?'1px solid rgba(150,232,188,0.07)':'none' }}>
        <div className="px-6 py-4 space-y-0.5">
          {navLinks.map(link => (
            <div key={link.label}>
              <Link href={link.href} className="block px-4 py-3 rounded-xl text-[15px] font-medium text-white/75 hover:text-white hover:bg-white/[0.04] transition-colors" onClick={() => setMenuOpen(false)}>{link.label}</Link>
              {link.children && (
                <div className="ml-4">
                  {link.children.map(c => (
                    <Link key={c.href} href={c.href} className="block px-4 py-2 rounded-lg text-[13px] text-white/40 hover:text-white/70 transition-colors" onClick={() => setMenuOpen(false)}>{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-white/[0.05] mt-2">
            <Link href="/contact"
              className="block w-full text-center px-5 py-3 rounded-xl text-[14px] font-semibold text-white"
              style={{ background:'linear-gradient(135deg,#4B7F52,#6EC99A)' }}
              onClick={() => setMenuOpen(false)}>
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
