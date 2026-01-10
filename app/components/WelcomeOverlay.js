'use client'

import { useEffect, useState } from 'react'

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Auto-dismiss after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(() => setIsVisible(false), 300) // fade out duration
    }, 700) // total display time

    return () => clearTimeout(timer)
  }, [])

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
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <h1
  className="
    text-4xl md:text-5xl lg:text-6xl 
    font-extralight 
    text-slate-800 dark:text-slate-100 
    tracking-wide 
    opacity-0 translate-y-3 
    animate-[slideUp_0.6s_ease-out_forwards]
    transition-all duration-700 ease-out
  "
>
  Welcome to my Portfolio
</h1>

      </div>
    </div>
  )
}
