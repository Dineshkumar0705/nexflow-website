import Navbar       from '@/components/navbar/Navbar';
import Hero         from '@/components/hero/Hero';
import WhyNexflow   from '@/components/value/WhyNexflow';
import Solutions    from '@/components/solutions/Solutions';
import HowItWorks   from '@/components/process/HowItWorks';
import FinalCTAV2   from '@/components/cta/FinalCTAV2';
import FooterV2     from '@/components/footer/FooterV2';
import BackToTop    from '@/components/ui/BackToTop';
import PWARegister  from '@/components/pwa/PWARegister';
import AppDownloadBanner from '@/components/ui/AppDownloadBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyNexflow />
        <Solutions />
        <HowItWorks />
        <FinalCTAV2 />
      </main>
      <FooterV2 />
      <BackToTop />
      <PWARegister />
      <AppDownloadBanner />
    </>
  );
}
