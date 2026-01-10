'use client'

import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, image, technologies, github, demo, onViewDetails }) {
  return (
    <motion.div 
      className="project-card flex flex-col h-full rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 backdrop-blur-sm overflow-hidden hover:border-orange-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl dark:shadow-none"
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="relative h-64 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="project-overlay absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 z-10 transition-colors duration-500 opacity-0"
          whileHover={{ opacity: 1 }}
        />
        <Image
          src={image}
          alt={title}
          width={400}
          height={256}
          className="project-image w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          onError={(e) => {
            console.log(`Project image failed to load: ${title}`)
            e.target.style.display = 'none'
            const placeholder = e.target.parentElement.querySelector('.image-placeholder')
            if (placeholder) placeholder.style.display = 'flex'
          }}
          loading="lazy"
        />
        
        {/* Image placeholder */}
        <div className="image-placeholder absolute inset-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center hidden">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Project Image</p>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <motion.h3 
          className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        
        {/* Technology Tags */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-8 mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className={`px-3 py-1 text-xs font-medium rounded-full border transition-all hover:scale-105 ${
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
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={onViewDetails}
            className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-slate-900 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary border border-transparent dark:border-white/10 group/btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 text-white transition-all duration-300 rounded-xl bg-slate-900 dark:bg-white/5 hover:bg-slate-700 dark:hover:bg-white/10 border border-transparent dark:border-white/10 group/icon"
            aria-label="GitHub Repository"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </motion.a>
          
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 text-white transition-all duration-300 rounded-xl bg-slate-900 dark:bg-white/5 hover:bg-slate-700 dark:hover:bg-white/10 border border-transparent dark:border-white/10 group/icon"
            aria-label="Live Demo"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}