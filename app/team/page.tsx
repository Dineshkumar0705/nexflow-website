'use client';

import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';

const team = [
  {
    name: 'Dinesh Kumar',
    role: 'Founder · NexFlow',
    desc: 'Specializing in AI systems, automation workflows, and full-stack development. Focused on building scalable automation solutions for modern businesses.',
    email: 'dineshdk7.official@gmail.com',
    linkedin: 'https://www.linkedin.com/in/denu0705/',
    instagram: 'https://www.instagram.com/dinesh_kumaroff7',
    image: '/images/profile-v3.jpg',
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(75,127,82,0.1) 0%, transparent 70%)' }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#96E8BC] mb-6" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>THE TEAM</div>
            <h1 className="text-[52px] sm:text-[64px] font-black tracking-tight text-white leading-tight mb-5">
              Meet the People<br />
              <span style={{ background: 'linear-gradient(135deg,#96E8BC,#4B7F52)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Behind NexFlow</span>
            </h1>
            <p className="text-[17px] text-white/45 max-w-xl mx-auto">The people building intelligent automation systems for modern businesses.</p>
          </div>
        </section>

        <section className="pb-28 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto pt-12 flex justify-center">
            {team.map((member, i) => (
              <div key={i} className="w-full max-w-sm rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="relative h-[300px]">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" priority />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[22px] font-black text-white mb-1">{member.name}</h3>
                  <p className="text-[13px] font-semibold mb-4" style={{ color: '#96E8BC' }}>{member.role}</p>
                  <p className="text-[14px] text-white/45 leading-relaxed mb-5">{member.desc}</p>
                  <div className="flex justify-center gap-3">
                    {[
                      { label: 'Email', href: `mailto:${member.email}` },
                      { label: 'LinkedIn', href: member.linkedin },
                      { label: 'Instagram', href: member.instagram },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener" className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-[#96E8BC] hover:text-[#96E8BC] transition-colors" style={{ background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)' }}>
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterV2 />
      <BackToTop />
    </>
  );
}
