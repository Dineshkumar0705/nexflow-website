'use client';

import { useEffect } from 'react';

export default function PWARegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('NexFlow SW registered:', registration.scope);
          })
          .catch((error) => {
            console.log('NexFlow SW registration failed:', error);
          });
      });
    }
  }, []);

  return null;
}
