# NexFlow — Integration Guide

## What Was Added

### 1. PWA Support (Progressive Web App)
Files added to `public/`:
- `manifest.json` — makes your site installable on Android home screen
- `sw.js` — service worker for offline support & caching
- `offline.html` — offline fallback page

Files added to `components/pwa/`:
- `PWARegister.tsx` — registers the service worker

### 2. Android WebView App
Full Android Studio project at `NexFlowApp/` — opens the live website in a native app.

### 3. UI Upgrades
Files added to `components/ui/`:
- `BackToTop.tsx` — floating back-to-top button
- `AppDownloadBanner.tsx` — mobile banner linking to Android app

---

## How to Activate (add to your layout.tsx)

Open `app/layout.tsx` and make these changes:

### Step 1 — Add PWA meta tags inside `<head>`:
```tsx
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#6366f1" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="NexFlow" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### Step 2 — Import and add components before `</body>`:
```tsx
import PWARegister from '@/components/pwa/PWARegister';
import BackToTop from '@/components/ui/BackToTop';
import AppDownloadBanner from '@/components/ui/AppDownloadBanner';

// Inside your layout body:
<PWARegister />
<BackToTop />
<AppDownloadBanner />
```

### Full layout.tsx example:
```tsx
import type { Metadata } from 'next';
import PWARegister from '@/components/pwa/PWARegister';
import BackToTop from '@/components/ui/BackToTop';
import AppDownloadBanner from '@/components/ui/AppDownloadBanner';

export const metadata: Metadata = {
  // ... your existing metadata
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* PWA meta tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="NexFlow" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
        <PWARegister />
        <BackToTop />
        <AppDownloadBanner />
      </body>
    </html>
  );
}
```

---

## Android App — How to Build

1. Open **Android Studio**
2. Click **File → Open** and select the `NexFlowApp/` folder
3. Wait for Gradle sync to complete
4. Click **Run ▶** to test on an emulator or your phone
5. To generate an APK: **Build → Build Bundle(s) / APK(s) → Build APK(s)**

### How sync works:
The app loads `https://nexflow-automation.vercel.app/` in a WebView.
**Any update you make to your website is automatically reflected in the app** — no app update needed.

### When to update the app itself:
Only when you want to change app-specific things like:
- App icon or name
- Splash screen
- Offline page content
- Push notifications (future feature)

---

## App Icon
Replace `app/src/main/res/drawable/ic_logo.xml` with your actual logo.
Add mipmap folders with properly sized icons (48/72/96/144/192dp) for a polished launcher icon.
