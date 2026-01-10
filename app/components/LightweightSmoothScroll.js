'use client'

import { useEffect } from 'react'

export default function LightweightSmoothScroll({ children }) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      return
    }

    // Simple CSS-based smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    // Optional: Add momentum scrolling for iOS
    document.body.style.webkitOverflowScrolling = 'touch'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      document.body.style.webkitOverflowScrolling = 'auto'
    }
  }, [])

  return <>{children}</>
}