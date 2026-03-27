'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050A07', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '600px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(75,127,82,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div className="max-w-4xl mx-auto px-6" style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '100px', marginBottom: '24px',
              background: 'rgba(75,127,82,0.1)', border: '1px solid rgba(150,232,188,0.2)',
              fontSize: '13px', fontWeight: 500, color: '#a5b4fc'
            }}>
              Legal
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)' }}>
              Last updated: March 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ paddingBottom: '100px' }}>
          <div className="max-w-3xl mx-auto px-6">
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: 'clamp(32px, 5vw, 60px)'
            }}>
              {[
                {
                  title: '1. Information We Collect',
                  content: `When you use our website or contact us, we may collect information you voluntarily provide, including your name, email address, company name, and the details of your inquiry. We may also collect usage data automatically through analytics tools (such as page views and browser type) to help us improve our website and services.`
                },
                {
                  title: '2. How We Use Your Information',
                  content: `We use the information we collect to respond to your inquiries, provide our automation services, send relevant updates about NexFlow (only where you've consented), and improve our website and service quality. We do not sell, rent, or trade your personal information to third parties.`
                },
                {
                  title: '3. Data Sharing',
                  content: `We may share your information with trusted service providers who assist us in operating our website and delivering services (for example, email platforms or scheduling tools like Calendly). These providers are bound by confidentiality obligations and are not permitted to use your data for any other purpose.`
                },
                {
                  title: '4. Cookies',
                  content: `Our website may use cookies and similar technologies to enhance your browsing experience and gather analytics. You can control cookie preferences through your browser settings. Disabling cookies may affect some features of the website.`
                },
                {
                  title: '5. Data Security',
                  content: `We take reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`
                },
                {
                  title: '6. Data Retention',
                  content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws. When your information is no longer needed, we delete or anonymize it.`
                },
                {
                  title: '7. Your Rights',
                  content: `Depending on your location, you may have the right to access, correct, or request deletion of your personal data. To exercise any of these rights, please contact us at the email address below. We will respond to your request within a reasonable timeframe.`
                },
                {
                  title: '8. Third-Party Links',
                  content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`
                },
                {
                  title: '9. Children\'s Privacy',
                  content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.`
                },
                {
                  title: '10. Changes to This Policy',
                  content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.`
                },
                {
                  title: '11. Contact Us',
                  content: `If you have any questions about this Privacy Policy or how we handle your data, please reach out to us at dineshdk7.official@gmail.com. We're happy to clarify any concerns.`
                },
              ].map((section, i) => (
                <div key={i} style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                    {section.title}
                  </h2>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                    {section.content}
                  </p>
                </div>
              ))}

              <div style={{
                marginTop: '48px', paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center'
              }}>
                <Link href="/terms" style={{ color: '#a5b4fc', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                  Terms of Service →
                </Link>
                <Link href="/contact" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '14px' }}>
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
