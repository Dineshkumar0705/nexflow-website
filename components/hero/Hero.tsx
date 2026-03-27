'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const pillTags = ['Web Apps', 'Android Apps', 'AI Chatbots', 'CRM Systems', 'SaaS Products', 'Business Automation'];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number; hue: number }> = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        hue: 140 + Math.random() * 30,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 65%, 65%, ${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(75,127,82,${0.12 * (1 - dist/110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, [mounted]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: '#050A07' }}>

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(75,127,82,0.7) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'mesh-move 18s ease-in-out infinite' }} />
        <div className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(150,232,188,0.5) 0%, transparent 70%)', filter: 'blur(90px)', animation: 'mesh-move-2 22s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-[30%] w-[400px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(110,201,154,0.6) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ background: 'rgba(75,127,82,0.12)', border: '1px solid rgba(150,232,188,0.25)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#96E8BC' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#4B7F52' }} />
            </span>
            <span className="text-[13px] font-medium" style={{ color: '#96E8BC' }}>AI · SaaS · IT Services — All Under One Roof</span>
          </div>

          {/* Headline */}
          <h1 className={`text-[52px] sm:text-[64px] lg:text-[80px] font-black tracking-tight leading-[1.06] mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="text-white">Build Smarter.</span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #96E8BC 0%, #4B7F52 50%, #6EC99A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundSize: '200% 200%', animation: 'gradient-x 4s ease infinite' }}>
              Ship Faster.
            </span>
            <br />
            <span className="text-white">Scale</span>{' '}
            <span style={{ background: 'linear-gradient(135deg, #6EC99A, #96E8BC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Further.</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-[18px] sm:text-[20px] text-white/55 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            NexFlow delivers AI-powered solutions, SaaS platforms, and full-stack development — from websites and Android apps to intelligent chatbots, CRM dashboards, and business automation systems.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg,#4B7F52,#6EC99A)', boxShadow: '0 8px 32px rgba(75,127,82,0.5), 0 0 0 1px rgba(150,232,188,0.2)' }}
            >
              Start Your Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-[16px] font-semibold text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(150,232,188,0.15)', backdropFilter: 'blur(8px)' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              View Our Work
            </Link>
          </div>

          {/* Trust pills */}
          <div className={`flex items-center justify-center gap-3 flex-wrap mb-16 transition-all duration-700 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {pillTags.map((tag, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[12px] px-3 py-1 rounded-full"
                style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.15)', color: 'rgba(150,232,188,0.7)' }}>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Platform preview mockup */}
        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="absolute -inset-8 rounded-3xl opacity-25 blur-3xl" style={{ background: 'linear-gradient(135deg,rgba(75,127,82,0.5),rgba(150,232,188,0.2))' }} />

          <div className="relative rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(150,232,188,0.1)', backdropFilter: 'blur(16px)' }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-white/[0.05]" style={{ background: 'rgba(0,0,0,0.4)' }}>
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 h-6 rounded-md flex items-center px-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-[11px] text-white/25">nexflow.ai — your digital growth platform</span>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

              {[
                { label: 'Web & App Dev', icon: '🌐', desc: 'Websites · Web Apps · Android', pct: 78 },
                { label: 'AI Solutions',  icon: '🤖', desc: 'Chatbots · Assistants · AI SaaS', pct: 85 },
                { label: 'CRM & Automation', icon: '⚡', desc: 'Dashboards · Workflows · Leads', pct: 70 },
              ].map((svc, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(75,127,82,0.06)', border: '1px solid rgba(150,232,188,0.1)' }}>
                  <div className="text-2xl mb-2">{svc.icon}</div>
                  <div className="text-[13px] font-semibold text-white/85 mb-1">{svc.label}</div>
                  <div className="text-[11px] text-white/35 mb-3">{svc.desc}</div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(150,232,188,0.1)' }}>
                    <div className="h-1.5 rounded-full animate-pulse" style={{ width: `${svc.pct}%`, background: 'linear-gradient(90deg,#4B7F52,#96E8BC)' }} />
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2 rounded-xl p-5" style={{ background: 'rgba(75,127,82,0.04)', border: '1px solid rgba(150,232,188,0.08)' }}>
                <div className="text-[12px] font-semibold text-white/40 mb-4">Active Projects Pipeline</div>
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  {['Scope', 'Design', 'Build', 'QA Test', 'Deploy', 'Live ✓'].map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className="px-3 py-1.5 rounded-lg text-[11px] font-medium" style={{
                        background: i === 5 ? 'rgba(150,232,188,0.15)' : 'rgba(75,127,82,0.15)',
                        border: `1px solid ${i === 5 ? 'rgba(150,232,188,0.4)' : 'rgba(75,127,82,0.3)'}`,
                        color: i === 5 ? '#96E8BC' : '#6EC99A'
                      }}>{step}</div>
                      {i < 5 && <svg className="w-3 h-3 text-white/15 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>}
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1.5 h-12">
                  {[45,60,40,75,55,85,65,90,70,88,80,95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 11 ? 'linear-gradient(to top,#4B7F52,#96E8BC)' : 'rgba(75,127,82,0.2)' }} />
                  ))}
                </div>
              </div>

              <div className="sm:col-span-1 rounded-xl p-4 space-y-2" style={{ background: 'rgba(75,127,82,0.04)', border: '1px solid rgba(150,232,188,0.08)' }}>
                <div className="text-[11px] font-semibold text-white/40 mb-3">Recent Deliveries</div>
                {[
                  { label: 'E-commerce App', type: 'Web App' },
                  { label: 'AI Sales Bot',   type: 'Chatbot' },
                  { label: 'CRM Dashboard',  type: 'Dashboard' },
                  { label: 'Android App',    type: 'Mobile' },
                  { label: 'SaaS Platform',  type: 'SaaS' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#96E8BC' }} />
                      <span className="text-[11px] text-white/50 truncate">{item.label}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(150,232,188,0.08)', color: 'rgba(150,232,188,0.5)' }}>{item.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #050A07, transparent)' }} />
    </section>
  );
}
