'use client';

import Link from 'next/link';

const footerLinks = {
  Services: [
    { label: 'Web & SaaS Development',  href: '/solutions/web-development' },
    { label: 'Android App Development', href: '/solutions/android-development' },
    { label: 'AI Chatbots & Assistants', href: '/solutions/ai-chatbots' },
    { label: 'CRM Dashboards',          href: '/solutions/crm-dashboards' },
    { label: 'Business Automation',     href: '/solutions/business-automation' },
    { label: 'Integrated AI Systems',   href: '/solutions/integrated-systems' },
  ],
  Company: [
    { label: 'About Us',   href: '/about' },
    { label: 'Our Team',   href: '/team' },
    { label: 'Projects',   href: '/projects' },
    { label: 'Industries', href: '/industries' },
    { label: 'Careers',    href: '/careers' },
    { label: 'Contact',    href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'FAQ',              href: '/faq' },
  ],
};

const techStack = ['Next.js', 'React', 'Flutter', 'Node.js', 'GPT-4', 'Python', 'Firebase', 'PostgreSQL'];

export default function FooterV2() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#030806', borderTop: '1px solid rgba(150,232,188,0.07)' }}>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(150,232,188,0.35),transparent)' }} />

      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(ellipse, rgba(75,127,82,0.6) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/[0.05]">

          {/* Brand column — spans 2 */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 w-fit">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)' }}>
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                  <path d="M20 4L8 18h8l-4 10 16-16h-8L20 4z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-[18px] font-bold text-white tracking-tight">
                  Nex<span style={{ background:'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Flow</span>
                </span>
                <div className="text-[10px] text-white/25 font-medium tracking-widest uppercase -mt-0.5">AI · SaaS · IT Services</div>
              </div>
            </Link>

            <p className="text-[14px] text-white/38 leading-relaxed max-w-xs mb-6">
              Building AI-powered SaaS products, intelligent applications, and business automation systems that help companies grow faster and operate smarter.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:nexflowauto.ai@gmail.com" className="flex items-center gap-2.5 text-[13px] text-white/40 hover:text-[#96E8BC] transition-colors group">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.1)' }}>
                  <svg className="w-3.5 h-3.5" style={{ color: '#96E8BC' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                nexflowauto.ai@gmail.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              <a href="https://www.linkedin.com/in/denu0705/" target="_blank" rel="noopener" aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(75,127,82,0.08)', border: '1px solid rgba(150,232,188,0.1)' }}>
                <svg className="w-4 h-4" style={{ color: 'rgba(150,232,188,0.6)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nexflow.ai" target="_blank" rel="noopener" aria-label="Instagram"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(75,127,82,0.08)', border: '1px solid rgba(150,232,188,0.1)' }}>
                <svg className="w-4 h-4" style={{ color: 'rgba(150,232,188,0.6)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="mailto:nexflowauto.ai@gmail.com" aria-label="Email"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(75,127,82,0.08)', border: '1px solid rgba(150,232,188,0.1)' }}>
                <svg className="w-4 h-4" style={{ color: 'rgba(150,232,188,0.6)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <div className="text-[11px] font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(150,232,188,0.4)' }}>{category}</div>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-[14px] text-white/38 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Tech stack column */}
          <div className="lg:col-span-1">
            <div className="text-[11px] font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(150,232,188,0.4)' }}>Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="text-[12px] px-2.5 py-1 rounded-lg"
                  style={{ background: 'rgba(75,127,82,0.08)', border: '1px solid rgba(150,232,188,0.1)', color: 'rgba(150,232,188,0.55)' }}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(75,127,82,0.06)', border: '1px solid rgba(150,232,188,0.1)' }}>
              <div className="text-[12px] font-semibold text-white/50 mb-2">Ready to build?</div>
              <Link href="/contact"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
                style={{ color: '#96E8BC' }}>
                Get a free quote
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[13px] text-white/22">
            © {new Date().getFullYear()} NexFlow. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-white/22">
            <span>AI · SaaS · Web · Mobile · Automation</span>
            <span className="hidden sm:block">·</span>
            <span>Built for businesses that move fast</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-white/22">
            <span>Made with</span>
            <span style={{ color: '#4B7F52' }}>♥</span>
            <span>by NexFlow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
