'use client';

import { useEffect, useState } from 'react';

export default function AppDownloadBanner() {
  const [show, setShow] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Only show on mobile, and only once (use sessionStorage)
    const dismissed = sessionStorage.getItem('appBannerDismissed');
    if (dismissed) return;

    const ua = navigator.userAgent.toLowerCase();
    const android = /android/.test(ua);
    const mobile = /mobile|tablet|android|iphone|ipad/.test(ua);

    if (mobile) {
      setIsAndroid(android);
      // Slight delay so it doesn't pop immediately
      setTimeout(() => setShow(true), 1500);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('appBannerDismissed', 'true');
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        borderTop: '1px solid rgba(150,232,188,0.25)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #4B7F52, #6EC99A)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: '22px',
        }}
      >
        ⚡
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>
          NexFlow App
        </div>
        <div style={{ color: '#9ca3af', fontSize: '12px', marginTop: '2px' }}>
          Get a faster experience on {isAndroid ? 'Android' : 'mobile'}
        </div>
      </div>

      {/* CTA */}
      {isAndroid && (
        <a
          href="https://play.google.com/store/apps/details?id=ai.nexflow.app"
          style={{
            background: 'linear-gradient(135deg, #4B7F52, #6EC99A)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Download
        </a>
      )}

      {/* Dismiss */}
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          background: 'none',
          border: 'none',
          color: '#6b7280',
          cursor: 'pointer',
          padding: '4px',
          fontSize: '18px',
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        ×
      </button>
    </div>
  );
}
