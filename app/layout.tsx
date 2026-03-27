import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/premium.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // Only load weights actually used — reduces font network request
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'NexFlow — AI, SaaS & IT Services',
  description: 'NexFlow builds AI-powered solutions, SaaS platforms, and full-stack products — from websites and Android apps to intelligent chatbots, CRM dashboards, and business automation systems.',
  keywords: [
    'AI services', 'SaaS development', 'web development', 'Android app development',
    'AI chatbot', 'CRM dashboard', 'business automation', 'NexFlow'
  ],
  authors: [{ name: 'NexFlow' }],
  openGraph: {
    title: 'NexFlow — AI, SaaS & IT Services',
    description: 'Build Smarter. Ship Faster. Scale Further.',
    url: 'https://nexflowauto.ai',
    siteName: 'NexFlow',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexFlow — AI, SaaS & IT Services',
    description: 'Build Smarter. Ship Faster. Scale Further.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#4B7F52',   // updated to new green brand color
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4B7F52" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="NexFlow" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.className} antialiased`}
        style={{ background: '#050A07', color: '#fff' }}
      >
        {children}
      </body>
    </html>
  );
}
