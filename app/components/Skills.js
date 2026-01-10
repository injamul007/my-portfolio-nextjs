'use client'

import { 
  Code, 
  Database, 
  Wrench, 
  Server, 
  Webhook, 
  Globe, 
  Key,
  Terminal
} from 'lucide-react'

// DevIcons imports - colorful tech icons
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiMongodb, 
  DiGit, 
  DiGithubBadge, 
  DiFirebase, 
  DiPhotoshop 
} from 'react-icons/di'

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma
} from 'react-icons/si'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-500/5 via-transparent to-purple-500/5",
      borderColor: "hover:border-blue-500/30",
      skills: [
        { name: "HTML5", icon: DiHtml5, color: "text-orange-600", hoverColor: "hover:border-orange-500/30", hoverRing: "group-hover/icon:ring-orange-400/50" },
        { name: "CSS3", icon: DiCss3, color: "text-blue-600", hoverColor: "hover:border-blue-600/30", hoverRing: "group-hover/icon:ring-blue-600/50" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500", hoverColor: "hover:border-cyan-500/30", hoverRing: "group-hover/icon:ring-cyan-400/50" },
        { name: "JavaScript", icon: DiJavascript1, color: "text-yellow-500", hoverColor: "hover:border-yellow-500/30", hoverRing: "group-hover/icon:ring-yellow-400/50" },
        { name: "React", icon: DiReact, color: "text-blue-500", hoverColor: "hover:border-blue-500/30", hoverRing: "group-hover/icon:ring-blue-400/50" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-slate-700 dark:text-white", hoverColor: "hover:border-gray-500/30", hoverRing: "group-hover/icon:ring-gray-400/50" },
        { name: "Firebase", icon: DiFirebase, color: "text-orange-500", hoverColor: "hover:border-orange-600/30", hoverRing: "group-hover/icon:ring-orange-600/50" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-500/5 via-transparent to-pink-500/5",
      borderColor: "hover:border-purple-500/30",
      skills: [
        { name: "Node.js", icon: DiNodejs, color: "text-green-600", hoverColor: "hover:border-green-500/30", hoverRing: "group-hover/icon:ring-green-400/50" },
        { name: "Express.js", icon: SiExpress, color: "text-slate-700 dark:text-white", hoverColor: "hover:border-yellow-400/30", hoverRing: "group-hover/icon:ring-yellow-300/50" },
        { name: "MongoDB", icon: DiMongodb, color: "text-green-600", hoverColor: "hover:border-green-600/30", hoverRing: "group-hover/icon:ring-green-500/50" },
        { name: "REST API", icon: Globe, color: "text-purple-500 dark:text-purple-400", hoverColor: "hover:border-purple-400/30", hoverRing: "group-hover/icon:ring-purple-400/50" },
        { name: "JWT", icon: Key, color: "text-indigo-500 dark:text-indigo-400", hoverColor: "hover:border-indigo-400/30", hoverRing: "group-hover/icon:ring-indigo-400/50" }
      ]
    },
    {
      title: "Dev Tools",
      icon: Wrench,
      gradient: "from-orange-500 to-orange-600",
      hoverGradient: "from-orange-500/5 via-transparent to-red-500/5",
      borderColor: "hover:border-orange-500/30",
      skills: [
        { name: "Git", icon: DiGit, color: "text-red-500", hoverColor: "hover:border-red-500/30", hoverRing: "group-hover/icon:ring-red-400/50" },
        { name: "GitHub", icon: DiGithubBadge, color: "text-slate-700 dark:text-white", hoverColor: "hover:border-white/30", hoverRing: "group-hover/icon:ring-white/50" },
        { name: "VS Code", icon: Terminal, color: "text-blue-500", hoverColor: "hover:border-blue-400/30", hoverRing: "group-hover/icon:ring-blue-400/50" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500", hoverColor: "hover:border-orange-400/30", hoverRing: "group-hover/icon:ring-orange-400/50" },
        { name: "Vercel", icon: SiVercel, color: "text-slate-700 dark:text-white", hoverColor: "hover:border-white/30", hoverRing: "group-hover/icon:ring-white/50" },
        { name: "Netlify", icon: SiNetlify, color: "text-teal-500", hoverColor: "hover:border-teal-400/30", hoverRing: "group-hover/icon:ring-teal-400/50" },
        { name: "Photoshop", icon: DiPhotoshop, color: "text-blue-600", hoverColor: "hover:border-blue-600/30", hoverRing: "group-hover/icon:ring-blue-600/50" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500", hoverColor: "hover:border-purple-400/30", hoverRing: "group-hover/icon:ring-purple-400/50" }
      ]
    }
  ]

  return (
    <motion.section 
      className="py-14 relative overflow-hidden bg-slate-50 dark:bg-slate-900 dark:bg-transparent" 
      id="skills"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0B0F19] to-black opacity-95 dark:block hidden"></div>
      <div className="absolute inset-0 bg-background-light dark:hidden block"></div>
      
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-md"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            My Tech Arsenal
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            variants={cardVariants}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
            variants={cardVariants}
          >
            Technologies I use to build modern web applications.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`skill-card group relative bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-3xl p-8 transition-all duration-300 overflow-hidden ${category.borderColor} hover:shadow-xl dark:hover:shadow-none`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${category.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  variants={cardVariants}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg shadow-${category.gradient.split('-')[1]}-500/20`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="text-white w-6 h-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">{category.title}</h3>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className={`flex flex-col items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 ${skill.hoverColor} transition-all duration-300 icon-float group/icon`}
                      variants={iconVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className={`w-12 h-12 rounded-full bg-white dark:bg-[#1c1c1c] flex items-center justify-center shadow-sm dark:shadow-inner ring-1 ring-slate-200 dark:ring-white/10 ${skill.hoverRing} transition-all`}
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <skill.icon className={`w-6 h-6 group-hover/icon:scale-110 transition-transform ${skill.color}`} />
                      </motion.div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}