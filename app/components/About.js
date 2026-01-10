'use client'

import Image from 'next/image'
import { Brain, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  const StackTag = ({ name }) => {
    return (
      <motion.span 
        className={`px-3 py-1 text-xs font-medium rounded-full border transition-all hover:scale-105 ${
          name === 'Tailwind' || name === 'CSS3' ? 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20' :
          name === 'React' || name === 'Next.js' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' :
          name === 'Node.js' ? 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20' :
          name === 'Express.js' ? 'bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20' :
          name === 'MongoDB' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
          name === 'JavaScript' || name === 'JS' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
          name === 'HTML5' || name === 'HTML' ? 'bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20' :
          name === 'TypeScript' ? 'bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20' :
          'bg-slate-100 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/20'
        }`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {name}
      </motion.span>
    )
  }

  return (
    <motion.section 
      className="py-14 lg:py-22" 
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Who I Am
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Me</span>
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            Focused on building intuitive frontend experiences with growing backend skills.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="relative w-full h-full min-h-[500px] flex items-center justify-center"
            variants={imageVariants}
          >
            <motion.div 
              className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-200 dark:bg-slate-800"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://i.ibb.co.com/XZ5BPv6v/gemini-2-5-flash-image-Create-a-portrait-style-image-in-an-illustrator-vector-art-style-but-keep-the.jpg"
                alt="About Me"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('About image failed to load')
                  e.target.style.display = 'none'
                }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
          
          <div className="flex flex-col gap-12 text-center lg:text-left">
            <motion.div 
              className="space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              variants={itemVariants}
            >
              <motion.p variants={itemVariants}>
                I am Injamul Hoque, a dedicated Junior MERN Stack Developer passionate about building seamless and user-friendly web applications. I focus on creating intuitive frontend interfaces, while also having practical experience in backend development, including creating APIs and performing CRUD operations, which makes me a versatile developer.
              </motion.p>
              <motion.ul className="space-y-2" variants={itemVariants}>
                <motion.li variants={itemVariants}>• Committed to writing clean, scalable, and efficient code</motion.li>
                <motion.li variants={itemVariants}>• Enjoy collaborating in team environments and sharing ideas</motion.li>
                <motion.li variants={itemVariants}>• Love playing football and chess to develop strategic thinking</motion.li>
                <motion.li variants={itemVariants}>• Passionate about traveling to explore new cultures and gain fresh perspectives</motion.li>
                <motion.li variants={itemVariants}>• Constantly learning new technologies to enhance my MERN stack skills</motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Brain className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                What I Bring to Projects
              </h3>
              <ul className="space-y-3">
                {[
                  "Clear communication & team collaboration",
                  "Attention to detail in UI/UX implementation",
                  "Performance optimization & SEO best practices",
                  "Problem-Solving and innovation",
                  "Adaptability to New Technologies"
                ].map((skill, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Skills</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Frontend Development",
                    percentage: 70,
                    tags: ["Tailwind", "JS", "React", "Next.js"]
                  },
                  {
                    title: "Backend Development", 
                    percentage: 55,
                    tags: ["Node.js", "Express.js", "MongoDB"]
                  }
                ].map((skill, index) => (
                  <motion.div key={skill.title} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.title}</span>
                      <motion.span 
                        className={`text-sm font-semibold ${
                          skill.title === "Frontend Development" 
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500" 
                            : "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1 + index * 0.2 }}
                      >
                        {skill.percentage}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full ${
                          skill.title === "Frontend Development"
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                            : "bg-gradient-to-r from-green-500 to-emerald-500"
                        }`}
                        variants={skillBarVariants}
                        custom={skill.percentage}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      />
                    </div>
                    <motion.div 
                      className="flex flex-wrap gap-2 mt-3"
                      variants={containerVariants}
                    >
                      {skill.tags.map((tag) => (
                        <StackTag key={tag} name={tag} />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pt-6 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
                  variants={itemVariants}
                >
                  {[
                    { number: "6+", label: "Projects Done" },
                    { number: "MERN", label: "Stack Projects" },
                    { number: "1300+", label: "GitHub Commits" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={stat.label} 
                      className="text-center sm:text-left"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span 
                        className="block text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {stat.number}
                      </motion.span>
                      <span className="text-xs sm:text-sm text-slate-500">{stat.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}