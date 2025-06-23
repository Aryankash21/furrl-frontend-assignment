'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/login'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <div className="logo-wrapper">
          <img src="/logo.png" alt="Furrl Logo" className="center-logo" />
        </div>
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}
