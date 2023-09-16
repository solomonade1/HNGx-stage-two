// components/Layout.js
"use client"
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { NavigationEvents } from './components/navigation-events'
 
import Loading from "../loading/Loading";


const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== pathname) {
        setLoading(true);
      }
    };

    const handleComplete = (url) => {
      if (url !==  pathname) {
        setLoading(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <div className="layout">
      {loading && <Loading />}
      {children}
    </div>
  );
};

export default Layout;
