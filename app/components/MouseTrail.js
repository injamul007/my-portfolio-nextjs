'use client'

import { useEffect, useRef } from 'react'

export default function MouseTrail() {
  const trailRef = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })
  const animationId = useRef(null)

  useEffect(() => {
    const trail = []
    const trailLength = 8
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div')
      dot.className = 'mouse-trail-dot'
      dot.style.cssText = `
        position: fixed;
        width: ${6 - i * 0.5}px;
        height: ${6 - i * 0.5}px;
        background: #14B8A6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: ${0.8 - i * 0.1};
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
      `
      document.body.appendChild(dot)
      trail.push({
        element: dot,
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
      })
    }
    
    trailRef.current = trail

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const trail = trailRef.current
      if (trail.length === 0) return

      // Update first dot to follow mouse directly
      trail[0].targetX = mousePos.current.x
      trail[0].targetY = mousePos.current.y

      // Update remaining dots to follow previous dot with delay
      for (let i = 1; i < trail.length; i++) {
        trail[i].targetX = trail[i - 1].x
        trail[i].targetY = trail[i - 1].y
      }

      // Smooth interpolation for all dots
      trail.forEach((dot, index) => {
        const speed = 0.15 - index * 0.01
        dot.x += (dot.targetX - dot.x) * speed
        dot.y += (dot.targetY - dot.y) * speed
        
        dot.element.style.left = `${dot.x}px`
        dot.element.style.top = `${dot.y}px`
      })

      animationId.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (animationId.current) {
        cancelAnimationFrame(animationId.current)
      }
      // Clean up trail elements
      trailRef.current.forEach(dot => {
        if (dot.element && dot.element.parentNode) {
          dot.element.parentNode.removeChild(dot.element)
        }
      })
      trailRef.current = []
    }
  }, [])

  return null // This component doesn't render anything in React
}