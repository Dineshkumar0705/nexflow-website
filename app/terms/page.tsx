'use client';
import Navbar from '@/components/navbar/Navbar';
import FooterV2 from '@/components/footer/FooterV2';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';

export default function TermsPage() {
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
              fontSize: '13px', fontWeight: 500, color: '#c4b5fd'
            }}>
              Legal
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
              Terms of Service
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
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '40px' }}>
                By accessing or using NexFlow's website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
              </p>

              {[
                {
                  title: '1. Services',
                  content: `NexFlow provides automation consulting, design, and implementation services to businesses. The specific scope of services for each client engagement is defined in a separate project agreement or statement of work. These Terms govern your general use of our website and initial service interactions.`
                },
                {
                  title: '2. Use of Website',
                  content: `You may use our website for lawful purposes only. You agree not to use the site in any way that violates applicable laws, infringes on the rights of others, or interferes with the normal operation of the website. Unauthorized access to our systems or any attempt to disrupt our services is strictly prohibited.`
                },
                {
                  title: '3. Intellectual Property',
                  content: `All content on this website — including text, graphics, logos, and code — is the property of NexFlow or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.`
                },
                {
                  title: '4. Client Engagements',
                  content: `When you engage NexFlow for automation services, the terms of that engagement — including deliverables, timelines, pricing, and ownership of work product — will be set out in a separate agreement. In the event of a conflict between these Terms and a specific client agreement, the client agreement shall prevail.`
                },
                {
                  title: '5. Confidentiality',
                  content: `Both parties agree to keep confidential any proprietary or sensitive information shared during a service engagement. NexFlow will not disclose your business processes, data, or strategies to third parties without your consent, except as required by law.`
                },
                {
                  title: '6. Disclaimer of Warranties',
                  content: `Our website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components. Use of our website is at your own risk.`
                },
                {
                  title: '7. Limitation of Liability',
                  content: `To the fullest extent permitted by law, NexFlow shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim arising from a service engagement shall not exceed the fees paid by you for that specific engagement.`
                },
                {
                  title: '8. Third-Party Services',
                  content: `Our services may involve the use of third-party tools, platforms, or APIs (such as CRMs, automation platforms, or communication tools). We are not responsible for the availability, accuracy, or terms of those third-party services. Your use of such services is subject to their own terms and conditions.`
                },
                {
                  title: '9. Termination',
                  content: `We reserve the right to terminate or restrict your access to our website at any time, for any reason, without notice. If you engage NexFlow for services, termination of those services will be governed by the terms of your specific client agreement.`
                },
                {
                  title: '10. Governing Law',
                  content: `These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the appropriate courts.`
                },
                {
                  title: '11. Changes to These Terms',
                  content: `We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website after any changes constitutes acceptance of the updated Terms.`
                },
                {
                  title: '12. Contact',
                  content: `For questions about these Terms of Service, please contact us at dineshdk7.official@gmail.com. We're happy to discuss any concerns you have before engaging our services.`
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
                <Link href="/privacy" style={{ color: '#c4b5fd', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                  Privacy Policy →
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
