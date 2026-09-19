'use client'

import Link from 'next/link'
import Navbar from '@/components/navbar/Navbar'
import FooterV2 from '@/components/footer/FooterV2'

export default function WebDevelopmentPage() {
  const serviceCards = [
    { id: 1, title: 'Business Websites', desc: 'Fast, SEO-optimized marketing sites that convert visitors into customers.' },
    { id: 2, title: 'Web Applications', desc: 'Complex web apps with real-time data, dashboards, and advanced interactivity.' },
    { id: 3, title: 'SaaS Platforms', desc: 'Multi-tenant platforms with billing, auth, and enterprise-grade features.' },
    { id: 4, title: 'E-Commerce Stores', desc: 'Full-featured shops with inventory, payments, and order management.' },
    { id: 5, title: 'API & Backend', desc: 'Scalable backends, microservices, and REST/GraphQL APIs for any scale.' },
    { id: 6, title: 'UI/UX Design', desc: 'Beautiful, accessible interfaces designed for conversion and engagement.' },
  ]

  const processSteps = [
    { num: '01', title: 'Discovery & Planning', desc: 'Understand your goals and users' },
    { num: '02', title: 'Design & Wireframes', desc: 'Create clickable prototypes' },
    { num: '03', title: 'Development Sprint', desc: 'Build with latest tech' },
    { num: '04', title: 'Testing & QA', desc: 'Thorough cross-browser tests' },
    { num: '05', title: 'Deployment', desc: 'Go live on production' },
    { num: '06', title: 'Support & Scale', desc: 'Monitor and optimize' },
  ]

  const techStack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Stripe', 'Vercel', 'AWS', 'Prisma', 'Redis']

  return (
    <div style={{ background: '#131313', color: 'white', minHeight: '100vh' }}>
      <Navbar />

      {/* HERO SECTION */}
      <section style={{ paddingTop: '160px', paddingBottom: '128px', background: '#131313' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            {/* LEFT SIDE */}
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(91,124,136,0.15)',
                border: '1px solid #5B7C88',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                marginBottom: '24px',
                letterSpacing: '0.5px'
              }}>
                Websites & Web Apps
              </div>

              <h1 style={{
                fontSize: '56px',
                fontWeight: '700',
                lineHeight: '1.15',
                marginBottom: '24px',
                letterSpacing: '-1px'
              }}>
                Websites & Web Apps<br />
                <span style={{
                  background: 'linear-gradient(135deg, #B3E1E8 0%, #5B7C88 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Built to Scale
                </span>
              </h1>

              <p style={{
                fontSize: '18px',
                color: '#B3E1E8',
                marginBottom: '32px',
                lineHeight: '1.6',
                maxWidth: '450px'
              }}>
                Enterprise-grade web solutions designed for performance, security, and user engagement. From startups to Fortune 500 companies.
              </p>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <button style={{
                  background: '#5B7C88',
                  color: 'white',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#8FBAC7';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#5B7C88';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                  }}
                >
                  Start a Project
                </button>
                <button style={{
                  background: 'transparent',
                  color: '#B3E1E8',
                  border: '1px solid #5B7C88',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(91,124,136,0.1)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#B3E1E8'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#5B7C88'
                  }}
                >
                  See Portfolio
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#B3E1E8', marginBottom: '4px' }}>50+</div>
                  <div style={{ fontSize: '12px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Projects Delivered</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#B3E1E8', marginBottom: '4px' }}>&lt;1s</div>
                  <div style={{ fontSize: '12px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Load Time</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#B3E1E8', marginBottom: '4px' }}>98%</div>
                  <div style={{ fontSize: '12px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Client Satisfaction</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#B3E1E8', marginBottom: '4px' }}>10+</div>
                  <div style={{ fontSize: '12px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tech Stack Tools</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - BROWSER MOCKUP */}
            <div style={{ position: 'relative' }}>
              <div style={{
                background: '#161616',
                border: '1px solid #5B7C88',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(91,124,136,0.15)'
              }}>
                {/* Browser Chrome */}
                <div style={{
                  background: '#1A1A1A',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid #5B7C88'
                }}>
                  <div style={{ width: '12px', height: '12px', background: '#FF5F57', borderRadius: '50%' }}></div>
                  <div style={{ width: '12px', height: '12px', background: '#FFBD2E', borderRadius: '50%' }}></div>
                  <div style={{ width: '12px', height: '12px', background: '#28C940', borderRadius: '50%' }}></div>
                  <div style={{ marginLeft: 'auto', fontSize: '12px', color: '#8FBAC7' }}>analytics.nexflow.io</div>
                </div>

                {/* Dashboard Content */}
                <div style={{ padding: '24px', background: '#131313', minHeight: '420px' }}>
                  {/* Sidebar */}
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ width: '160px' }}>
                      <div style={{ fontSize: '12px', color: '#8FBAC7', marginBottom: '20px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Menu</div>
                      <div style={{ fontSize: '13px', color: '#B3E1E8', marginBottom: '12px', cursor: 'pointer', paddingLeft: '8px', borderLeft: '2px solid #5B7C88' }}>Dashboard</div>
                      <div style={{ fontSize: '13px', color: '#8FBAC7', marginBottom: '12px', cursor: 'pointer' }}>Analytics</div>
                      <div style={{ fontSize: '13px', color: '#8FBAC7', marginBottom: '12px', cursor: 'pointer' }}>Users</div>
                      <div style={{ fontSize: '13px', color: '#8FBAC7', cursor: 'pointer' }}>Settings</div>
                    </div>

                    {/* Main Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Performance Metrics</div>
                      
                      {/* Stats Row */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                        {[
                          { label: 'Revenue', value: '$124.5K' },
                          { label: 'Users', value: '8,432' },
                          { label: 'Conversion', value: '3.2%' },
                          { label: 'Churn', value: '0.8%' }
                        ].map((stat, i) => (
                          <div key={i} style={{
                            background: 'rgba(91,124,136,0.1)',
                            border: '1px solid #5B7C88',
                            padding: '12px',
                            borderRadius: '6px'
                          }}>
                            <div style={{ fontSize: '10px', color: '#8FBAC7', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#B3E1E8' }}>{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Chart Placeholder */}
                      <div style={{
                        background: 'rgba(91,124,136,0.08)',
                        border: '1px solid #5B7C88',
                        borderRadius: '6px',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '8px',
                        padding: '12px'
                      }}>
                        {[45, 60, 55, 75, 65, 80].map((h, i) => (
                          <div key={i} style={{
                            flex: 1,
                            height: `${h}%`,
                            background: `linear-gradient(180deg, #B3E1E8 0%, #5B7C88 100%)`,
                            borderRadius: '2px'
                          }}></div>
                        ))}
                      </div>

                      {/* Activity List */}
                      <div style={{ marginTop: '20px', fontSize: '12px', color: '#8FBAC7' }}>
                        <div>• User signup: 12 new</div>
                        <div>• API calls: 45.2K</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#131313' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px' }}>What We Build</h2>
            <p style={{ fontSize: '16px', color: '#B3E1E8', maxWidth: '600px', margin: '0 auto' }}>Six core service areas that drive digital transformation for modern businesses</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {serviceCards.map((card) => (
              <div
                key={card.id}
                style={{
                  background: 'rgba(91,124,136,0.08)',
                  border: '1px solid #5B7C88',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = '#B3E1E8';
                  el.style.background = 'rgba(179,225,232,0.05)';
                  el.style.boxShadow = '0 10px 40px rgba(179,225,232,0.1)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = '#5B7C88';
                  el.style.background = 'rgba(91,124,136,0.08)';
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `linear-gradient(135deg, #5B7C88 0%, #8FBAC7 100%)`,
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}></div>

                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '11px',
                  color: '#8FBAC7',
                  fontWeight: '600',
                  opacity: 0.6
                }}>
                  0{card.id}
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontSize: '14px', color: '#B3E1E8', lineHeight: '1.5', marginBottom: '16px' }}>{card.desc}</p>

                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  fontSize: '18px',
                  color: '#5B7C88'
                }}>
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#131313' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '64px', textAlign: 'center', letterSpacing: '-1px' }}>Our 6-Step Process</h2>

          <div style={{ display: 'flex', gap: '8px', overflow: 'x', justifyContent: 'space-between' }}>
            {processSteps.map((step, idx) => (
              <div key={idx} style={{ flex: 1, position: 'relative' }}>
                <div style={{
                  background: 'rgba(91,124,136,0.1)',
                  border: '1px solid #5B7C88',
                  borderRadius: '8px',
                  padding: '24px 16px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #B3E1E8 0%, #5B7C88 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px'
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '12px', color: '#B3E1E8' }}>{step.desc}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    right: '-20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '24px',
                    color: '#5B7C88'
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#131313' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '16px', textAlign: 'center', letterSpacing: '-1px' }}>Built With Best-In-Class Tech</h2>
          <p style={{ fontSize: '16px', color: '#B3E1E8', maxWidth: '600px', margin: '0 auto 48px', textAlign: 'center' }}>Modern tools that power fast, secure, and scalable applications</p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(91,124,136,0.1)',
                  border: '1px solid #5B7C88',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(179,225,232,0.15)';
                  el.style.borderColor = '#B3E1E8';
                  el.style.boxShadow = '0 0 20px rgba(179,225,232,0.2)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(91,124,136,0.1)';
                  el.style.borderColor = '#5B7C88';
                  el.style.boxShadow = 'none'
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: `linear-gradient(135deg, #5B7C88 0%, #8FBAC7 100%)`,
        marginBottom: '96px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#131313' }}>Ready to Ship?</h2>
          <p style={{ fontSize: '18px', color: '#1A1A1A', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Let's build something great together. Schedule your free consultation with our team.
          </p>
          <button style={{
            background: 'white',
            color: '#5B7C88',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
            }}
          >
            Get Started
          </button>
        </div>
      </section>

      <FooterV2 />
    </div>
  )
}
