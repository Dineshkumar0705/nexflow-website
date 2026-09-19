'use client'

import Link from 'next/link'
import Navbar from '@/components/navbar/Navbar'
import FooterV2 from '@/components/footer/FooterV2'

export default function AndroidDevelopmentPage() {
  const featureCards = [
    { id: 1, title: 'Native Android', desc: 'High-performance apps using Kotlin & Java with full hardware access.' },
    { id: 2, title: 'Cross-Platform (Flutter)', desc: 'Single codebase for Android & iOS with beautiful Material Design.' },
    { id: 3, title: 'E-Commerce Apps', desc: 'Complete shopping experiences with payments, inventory, and reviews.' },
    { id: 4, title: 'Location & Tracking', desc: 'GPS-powered apps with maps, geofencing, and real-time tracking.' },
    { id: 5, title: 'Push Notifications', desc: 'Engagement-driving notifications with Firebase Cloud Messaging.' },
    { id: 6, title: 'API Integration', desc: 'Seamless backend integration with REST APIs and GraphQL.' },
  ]

  const processSteps = [
    { num: '01', title: 'Requirements & Wireframes', desc: 'Define scope and user flows' },
    { num: '02', title: 'UI Design (Material 3)', desc: 'Modern, accessible interfaces' },
    { num: '03', title: 'Sprint Development', desc: 'Agile 2-week sprints' },
    { num: '04', title: 'Device Testing', desc: 'Real devices, tablets, configurations' },
    { num: '05', title: 'Play Store Launch', desc: 'Submission & approval' },
    { num: '06', title: 'Maintenance & Updates', desc: 'Ongoing support' },
  ]

  const techStack = ['Flutter', 'Kotlin', 'Java', 'Firebase', 'Google Maps API', 'Retrofit', 'Room DB', 'Jetpack Compose', 'SQLite', 'Play Store', 'FCM Push', 'REST APIs']

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
                Mobile Development
              </div>

              <h1 style={{
                fontSize: '56px',
                fontWeight: '700',
                lineHeight: '1.15',
                marginBottom: '24px',
                letterSpacing: '-1px'
              }}>
                Android Apps That<br />
                <span style={{
                  background: 'linear-gradient(135deg, #B3E1E8 0%, #5B7C88 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Users Actually Love
                </span>
              </h1>

              <p style={{
                fontSize: '18px',
                color: '#B3E1E8',
                marginBottom: '32px',
                lineHeight: '1.6',
                maxWidth: '450px'
              }}>
                Market-leading Android apps that drive engagement, retention, and revenue. From fintech to logistics to social.
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
                  Request Demo
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
                  See Case Studies
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - PHONE MOCKUPS */}
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'flex-start' }}>
              {/* PHONE 1 - Dashboard/Home */}
              <div style={{
                width: '220px',
                background: '#1A1A1A',
                borderRadius: '32px',
                border: '2px solid #5B7C88',
                padding: '12px',
                boxShadow: '0 20px 60px rgba(91,124,136,0.2)',
                overflow: 'hidden',
                transform: 'translateY(-20px)'
              }}>
                {/* Status Bar */}
                <div style={{
                  background: '#131313',
                  padding: '8px 12px',
                  fontSize: '10px',
                  borderRadius: '24px',
                  marginBottom: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#8FBAC7'
                }}>
                  <span>9:41</span>
                  <span>●●●●●</span>
                </div>

                {/* App Content */}
                <div style={{
                  background: '#161616',
                  borderRadius: '24px',
                  padding: '16px',
                  height: '420px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px' }}>Dashboard</div>

                  {/* Balance Card */}
                  <div style={{
                    background: `linear-gradient(135deg, #5B7C88 0%, #8FBAC7 100%)`,
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px',
                    color: '#131313'
                  }}>
                    <div style={{ fontSize: '10px', opacity: 0.8, marginBottom: '4px' }}>Balance</div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>$4,250.50</div>
                  </div>

                  {/* Quick Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                    <div style={{
                      background: 'rgba(91,124,136,0.15)',
                      borderRadius: '8px',
                      padding: '8px',
                      fontSize: '11px'
                    }}>
                      <div style={{ color: '#8FBAC7', marginBottom: '2px' }}>Income</div>
                      <div style={{ color: '#B3E1E8', fontWeight: '700' }}>$8.2K</div>
                    </div>
                    <div style={{
                      background: 'rgba(91,124,136,0.15)',
                      borderRadius: '8px',
                      padding: '8px',
                      fontSize: '11px'
                    }}>
                      <div style={{ color: '#8FBAC7', marginBottom: '2px' }}>Spent</div>
                      <div style={{ color: '#B3E1E8', fontWeight: '700' }}>$3.9K</div>
                    </div>
                  </div>

                  {/* Transactions */}
                  <div style={{ fontSize: '11px', color: '#8FBAC7', fontWeight: '600', marginBottom: '8px' }}>Recent</div>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontSize: '10px', marginBottom: '6px' }}>
                      <div style={{ color: '#B3E1E8' }}>Spotify</div>
                      <div style={{ color: '#8FBAC7' }}>-$12.99</div>
                    </div>
                    <div style={{ fontSize: '10px' }}>
                      <div style={{ color: '#B3E1E8' }}>Salary</div>
                      <div style={{ color: '#B3E1E8' }}>+$3,500</div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingTop: '12px',
                    borderTop: '1px solid #5B7C88',
                    marginTop: '12px',
                    fontSize: '12px',
                    color: '#8FBAC7'
                  }}>
                    <div>●</div>
                    <div>○</div>
                    <div>○</div>
                  </div>
                </div>
              </div>

              {/* PHONE 2 - Product Detail */}
              <div style={{
                width: '220px',
                background: '#1A1A1A',
                borderRadius: '32px',
                border: '2px solid #5B7C88',
                padding: '12px',
                boxShadow: '0 20px 60px rgba(91,124,136,0.2)',
                overflow: 'hidden',
                transform: 'translateY(20px)'
              }}>
                {/* Status Bar */}
                <div style={{
                  background: '#131313',
                  padding: '8px 12px',
                  fontSize: '10px',
                  borderRadius: '24px',
                  marginBottom: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#8FBAC7'
                }}>
                  <span>9:41</span>
                  <span>●●●●●</span>
                </div>

                {/* App Content */}
                <div style={{
                  background: '#161616',
                  borderRadius: '24px',
                  padding: '16px',
                  height: '420px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ fontSize: '12px', color: '#8FBAC7' }}>←</div>
                    <div style={{ fontSize: '12px', fontWeight: '600' }}>Order #5234</div>
                    <div style={{ fontSize: '12px', color: '#8FBAC7' }}>⋮</div>
                  </div>

                  {/* Product Image Placeholder */}
                  <div style={{
                    background: `linear-gradient(135deg, #5B7C88 0%, #8FBAC7 100%)`,
                    borderRadius: '12px',
                    height: '100px',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px'
                  }}>
                    📦
                  </div>

                  {/* Product Info */}
                  <div style={{ fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Wireless Headphones</div>
                  <div style={{ fontSize: '11px', color: '#B3E1E8', marginBottom: '12px' }}>$129.99</div>

                  {/* Status Timeline */}
                  <div style={{ fontSize: '10px', color: '#8FBAC7', fontWeight: '600', marginBottom: '8px' }}>Status</div>
                  <div style={{ fontSize: '9px', lineHeight: '1.6', color: '#B3E1E8', marginBottom: '12px' }}>
                    <div>✓ Order Placed</div>
                    <div>✓ Processing</div>
                    <div>⬤ Shipped (2 days)</div>
                    <div>○ Delivered</div>
                  </div>

                  {/* Action Button */}
                  <div style={{
                    background: '#5B7C88',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px',
                    fontSize: '11px',
                    fontWeight: '600',
                    textAlign: 'center',
                    marginTop: 'auto'
                  }}>
                    Track Package
                  </div>

                  {/* Bottom Nav */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingTop: '8px',
                    borderTop: '1px solid #5B7C88',
                    marginTop: '8px',
                    fontSize: '12px',
                    color: '#8FBAC7'
                  }}>
                    <div>○</div>
                    <div>●</div>
                    <div>○</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#131313' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-1px' }}>Core Features</h2>
            <p style={{ fontSize: '16px', color: '#B3E1E8', maxWidth: '600px', margin: '0 auto' }}>Capabilities that set market-leading apps apart from the rest</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {featureCards.map((card) => (
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

      {/* STATS SECTION */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#131313' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <div style={{
            background: 'rgba(91,124,136,0.1)',
            border: '1px solid #5B7C88',
            borderRadius: '16px',
            padding: '64px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '700', color: '#B3E1E8', marginBottom: '8px' }}>30+</div>
              <div style={{ fontSize: '13px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Apps Delivered</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '700', color: '#B3E1E8', marginBottom: '8px' }}>4.8★</div>
              <div style={{ fontSize: '13px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Play Store Rating</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '700', color: '#B3E1E8', marginBottom: '8px' }}>6 wks</div>
              <div style={{ fontSize: '13px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Dev Time</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '700', color: '#B3E1E8', marginBottom: '8px' }}>&lt;0.1%</div>
              <div style={{ fontSize: '13px', color: '#8FBAC7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Crash Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#131313' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '64px', textAlign: 'center', letterSpacing: '-1px' }}>Development Process</h2>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
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
          <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '16px', textAlign: 'center', letterSpacing: '-1px' }}>Modern Android Stack</h2>
          <p style={{ fontSize: '16px', color: '#B3E1E8', maxWidth: '600px', margin: '0 auto 48px', textAlign: 'center' }}>Latest frameworks, libraries, and tools for professional-grade Android development</p>

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
          <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#131313' }}>Launch Your Android App</h2>
          <p style={{ fontSize: '18px', color: '#1A1A1A', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            From concept to Play Store. Get expert guidance on every step of the journey.
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
            Schedule Consultation
          </button>
        </div>
      </section>

      <FooterV2 />
    </div>
  )
}
