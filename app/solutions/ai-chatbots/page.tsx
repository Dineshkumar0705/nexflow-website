'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';

export default function AIChatbotsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const chatMessages = [
    { type: 'user', text: 'Do you offer web development?' },
    { type: 'bot', text: 'Yes! We build websites, web apps, and SaaS platforms. Want to see examples?' },
    { type: 'user', text: 'Yes please, and pricing?' },
    { type: 'bot', text: 'I\'ll connect you with our team. Can I get your name?' },
    { type: 'user', text: 'Dinesh, and email?' },
  ];

  return (
    <div style={{ backgroundColor: '#050A07', color: 'white', minHeight: '100vh' }}>
      <Navbar />

      {/* HERO SECTION */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          {/* LEFT: Content */}
          <div>
            <div style={{
              display: 'inline-block',
              backgroundColor: 'rgba(75, 127, 82, 0.15)',
              border: `1px solid #4B7F52`,
              borderRadius: '24px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '8px',
              paddingBottom: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
            }}>
              AI Chatbots & Assistants
            </div>

            <h1 style={{
              fontSize: '52px',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '24px',
            }}>
              Your AI That Never<br />
              <span style={{ background: 'linear-gradient(90deg, #96E8BC 0%, #6EC99A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Sleeps or Misses a Lead
              </span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#D0D0D0',
              marginBottom: '32px',
              lineHeight: '1.6',
              maxWidth: '480px',
            }}>
              Deploy enterprise-grade AI chatbots across web, WhatsApp, and mobile in minutes. Qualify leads, capture data, and nurture relationships 24/7 automatically.
            </p>

            {/* STATS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#96E8BC', marginBottom: '8px' }}>500+</div>
                <div style={{ fontSize: '14px', color: '#A0A0A0' }}>Queries/day</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#6EC99A', marginBottom: '8px' }}>&lt;2s</div>
                <div style={{ fontSize: '14px', color: '#A0A0A0' }}>Response Time</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#4B7F52', marginBottom: '8px' }}>94%</div>
                <div style={{ fontSize: '14px', color: '#A0A0A0' }}>Customer Sat</div>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <button style={{
                backgroundColor: '#4B7F52',
                color: 'white',
                paddingLeft: '32px',
                paddingRight: '32px',
                paddingTop: '14px',
                paddingBottom: '14px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5A9160';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(75, 127, 82, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4B7F52';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                Start Free Trial
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: '#96E8BC',
                paddingLeft: '32px',
                paddingRight: '32px',
                paddingTop: '14px',
                paddingBottom: '14px',
                borderRadius: '8px',
                border: `1px solid #6EC99A`,
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(108, 201, 154, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              >
                See Demo
              </button>
            </div>
          </div>

          {/* RIGHT: Chat Mockup */}
          <div style={{
            backgroundColor: 'rgba(75, 127, 82, 0.08)',
            border: '1px solid rgba(108, 201, 154, 0.2)',
            borderRadius: '16px',
            padding: '24px',
            backdropFilter: 'blur(10px)',
          }}>
            {/* Chat Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(108, 201, 154, 0.15)',
              marginBottom: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#4B7F52',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  position: 'relative',
                }}>
                  🤖
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#96E8BC',
                    borderRadius: '50%',
                    border: '2px solid #050A07',
                  }} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>NexFlow AI</div>
                  <div style={{ fontSize: '12px', color: '#96E8BC' }}>Online</div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px', maxHeight: '300px', overflowY: 'auto' }}>
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div style={{
                    maxWidth: '75%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: msg.type === 'user'
                      ? 'rgba(150, 232, 188, 0.15)'
                      : 'rgba(75, 127, 82, 0.15)',
                    border: msg.type === 'user'
                      ? '1px solid #96E8BC'
                      : '1px solid rgba(75, 127, 82, 0.4)',
                    fontSize: '14px',
                    lineHeight: '1.4',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#6EC99A',
                  animation: 'pulse 1.4s infinite',
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#6EC99A',
                  animation: 'pulse 1.4s infinite 0.2s',
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#6EC99A',
                  animation: 'pulse 1.4s infinite 0.4s',
                }} />
              </div>
            </div>

            {/* Input Box */}
            <div style={{
              display: 'flex',
              gap: '8px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(108, 201, 154, 0.15)',
            }}>
              <input
                type="text"
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(108, 201, 154, 0.08)',
                  border: '1px solid rgba(108, 201, 154, 0.2)',
                  borderRadius: '6px',
                  padding: '10px 12px',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button style={{
                backgroundColor: '#4B7F52',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                paddingLeft: '16px',
                paddingRight: '16px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5A9160';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4B7F52';
              }}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
      </section>

      {/* CHANNELS SECTION */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px', backgroundColor: 'rgba(75, 127, 82, 0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '60px', textAlign: 'center' }}>
            Deploy Everywhere
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              {
                icon: '🌐',
                title: 'Website Widget',
                features: ['Customizable appearance', 'Zero code integration', 'Lead capture forms', 'Mobile responsive'],
              },
              {
                icon: '💬',
                title: 'WhatsApp Business',
                features: ['Template-based messaging', 'Media support', 'Customer threads', 'Broadcast campaigns'],
              },
              {
                icon: '📱',
                title: 'Mobile App',
                features: ['iOS & Android SDKs', 'Push notifications', 'Offline messaging', 'Geo-targeting'],
              },
            ].map((channel, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(75, 127, 82, 0.08)',
                  border: '1px solid rgba(108, 201, 154, 0.15)',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(75, 127, 82, 0.12)';
                  e.currentTarget.style.borderColor = '#96E8BC';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(75, 127, 82, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(75, 127, 82, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(108, 201, 154, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  display: 'block',
                }}>
                  {channel.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>
                  {channel.title}
                </h3>
                <ul style={{ marginBottom: '24px' }}>
                  {channel.features.map((feat, j) => (
                    <li key={j} style={{ fontSize: '14px', color: '#D0D0D0', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#96E8BC' }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="#" style={{ color: '#96E8BC', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '60px', textAlign: 'center' }}>
            Powerful Features
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '⚡', title: 'GPT-4 Powered' },
              { icon: '📚', title: 'Knowledge Base Training' },
              { icon: '🎯', title: 'Lead Qualification' },
              { icon: '🔗', title: 'CRM Auto-sync' },
              { icon: '🌍', title: 'Multi-language' },
              { icon: '📊', title: 'Analytics Dashboard' },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(75, 127, 82, 0.08)',
                  border: '1px solid rgba(108, 201, 154, 0.15)',
                  borderRadius: '12px',
                  padding: '24px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  setHoveredFeature(i);
                  e.currentTarget.style.backgroundColor = 'rgba(75, 127, 82, 0.15)';
                  e.currentTarget.style.borderColor = '#6EC99A';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(108, 201, 154, 0.15)';
                }}
                onMouseLeave={(e) => {
                  setHoveredFeature(null);
                  e.currentTarget.style.backgroundColor = 'rgba(75, 127, 82, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(108, 201, 154, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(75, 127, 82, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '16px',
                  transition: 'all 0.3s ease',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px', backgroundColor: 'rgba(75, 127, 82, 0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '60px', textAlign: 'center' }}>
            How It Works
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { num: '1', icon: '📚', title: 'Train on your data', desc: 'Upload docs, FAQs, or connect APIs' },
              { num: '2', icon: '🚀', title: 'Deploy to channels', desc: 'Go live on web, WhatsApp, mobile' },
              { num: '3', icon: '💬', title: 'Bot handles queries', desc: 'Responds 24/7 with high accuracy' },
              { num: '4', icon: '📈', title: 'Leads auto-synced', desc: 'Data flows to CRM automatically' },
            ].map((step, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{
                  backgroundColor: 'rgba(75, 127, 82, 0.08)',
                  border: '1px solid rgba(108, 201, 154, 0.15)',
                  borderRadius: '12px',
                  padding: '32px 20px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#4B7F52',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    margin: '0 auto 16px',
                    fontWeight: '700',
                  }}>
                    {step.num}
                  </div>
                  <div style={{ fontSize: '24px', marginBottom: '12px' }}>{step.icon}</div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#A0A0A0' }}>
                    {step.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div style={{
                    position: 'absolute',
                    right: '-12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '20px',
                    color: '#6EC99A',
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '60px', textAlign: 'center' }}>
            Built on Modern Tech
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
          }}>
            {['GPT-4', 'LangChain', 'OpenAI API', 'WhatsApp API', 'Python', 'FastAPI', 'Pinecone', 'Firebase', 'Webhooks', 'React Widget'].map((tech, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(108, 201, 154, 0.1)',
                  border: '1px solid rgba(108, 201, 154, 0.3)',
                  borderRadius: '8px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(108, 201, 154, 0.2)';
                  e.currentTarget.style.borderColor = '#96E8BC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(108, 201, 154, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(108, 201, 154, 0.3)';
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
        paddingLeft: '40px',
        paddingRight: '40px',
        background: 'linear-gradient(135deg, rgba(75, 127, 82, 0.15) 0%, rgba(108, 201, 154, 0.1) 100%)',
        borderTop: '1px solid rgba(108, 201, 154, 0.2)',
        borderBottom: '1px solid rgba(108, 201, 154, 0.2)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '24px' }}>
            Deploy Your AI Bot in 7 Days
          </h2>
          <p style={{ fontSize: '18px', color: '#D0D0D0', marginBottom: '32px', lineHeight: '1.6' }}>
            From setup to first conversation, our platform makes it fast and simple.
          </p>
          <button style={{
            backgroundColor: '#4B7F52',
            color: 'white',
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingTop: '16px',
            paddingBottom: '16px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5A9160';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(75, 127, 82, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4B7F52';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            Get Started
          </button>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
