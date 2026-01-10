'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Don't initialize Lenis if user prefers reduced motion
      return
    }

    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 0.8, // Reduced from 1.2 for better performance
      easing: (t) => 1 - Math.pow(1 - t, 3), // Simpler easing function
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // Reduced sensitivity
      smoothTouch: false, // Keep disabled for mobile performance
      touchMultiplier: 1.5, // Reduced from 2
      infinite: false,
      wrapper: window,
      content: document.documentElement,
    })

    // Optimized animation frame loop with throttling
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}