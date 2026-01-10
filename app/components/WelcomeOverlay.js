'use client'

import { useState, useEffect } from 'react'

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Check if welcome has been shown in this session
    const hasShownWelcome = sessionStorage.getItem('welcomeShown')
    
    if (hasShownWelcome) {
      setIsVisible(false)
      return
    }

    // Mark as shown immediately to prevent multiple triggers
    sessionStorage.setItem('welcomeShown', 'true')

    // Auto-dismiss after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false)
      // Remove from DOM after fade out
      setTimeout(() => {
        setIsVisible(false)
      }, 300) // Match fade out duration
    }, 1200) // Total display time

    return () => clearTimeout(timer)
  }, [])

  // Don't render if not visible
  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ pointerEvents: isAnimating ? 'all' : 'none' }}
    >
      <div 
        className={`text-center transform transition-all duration-700 ease-out ${
          isAnimating 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-4 opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 tracking-wide animate-[slideUp_0.6s_ease-out_forwards] opacity-0 translate-y-3">
          Welcome
        </h1>
      </div>
    </div>
  )
}