'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, FileText, Code, CheckCircle, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen || !project) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed position outside scrollable content */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 rounded-full flex items-center justify-center group transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          style={{
            zIndex: 999999,
            position: 'absolute',
            top: '16px',
            right: '16px'
          }}
        >
          <X className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh]">
          {/* Header */}
          <div className="relative">
            <div className="h-48 sm:h-64 md:h-80 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log(`Modal image failed to load: ${project.title}`)
                  e.target.style.display = 'none'
                  const placeholder = e.target.parentElement.querySelector('.modal-image-placeholder')
                  if (placeholder) placeholder.style.display = 'flex'
                }}
                loading="lazy"
              />
              {/* Image Placeholder */}
              <div className="modal-image-placeholder absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center hidden">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Image not available</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {project.title}
            </h2>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                Project Overview
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition-all hover:scale-105 ${
                      tech === 'Tailwind' || tech === 'CSS3' ? 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20' :
                      tech === 'React' || tech === 'Next.js' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' :
                      tech === 'Node.js' ? 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20' :
                      tech === 'Express.js' ? 'bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20' :
                      tech === 'MongoDB' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
                      tech === 'Firebase' ? 'bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/20' :
                      tech === 'JavaScript' || tech === 'JS' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
                      tech === 'HTML5' || tech === 'HTML' ? 'bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20' :
                      tech === 'Stripe' ? 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20' :
                      tech === 'Framer Motion' ? 'bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-500/20' :
                      tech === 'TypeScript' ? 'bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20' :
                      'bg-slate-100 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/20'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Key Features
              </h3>
              <div className="space-y-3">
                {(project.features || [
                  "Modern UI/UX Design",
                  "Responsive Layout", 
                  "User Authentication",
                  "Full-Stack Implementation",
                  "Secure Data Management"
                ]).map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/5"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
              <a
                href={project.github}
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-slate-900 dark:bg-slate-600 hover:bg-slate-700 dark:hover:bg-slate-500 text-white font-semibold rounded-xl border border-slate-300 dark:border-white/10 transition-all duration-300 hover:scale-[1.02]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                View Source Code
              </a>
              
              <a
                href={project.demo}
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}