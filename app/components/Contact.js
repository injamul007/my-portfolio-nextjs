'use client'

import ContactForm from './ContactForm'
import { Mail, MapPin, Smartphone, MessageCircle, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "injamul007hoque@gmail.com",
      href: "mailto:injamul007hoque@gmail.com",
      isLink: true,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-500/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-500/10"
    },
    {
      icon: Smartphone,
      label: "Mobile Number",
      value: "+880 1682653172",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-500/10"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Number",
      value: "+880 1682653172",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-500/10"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open to entry-level opportunities",
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-100 dark:bg-teal-500/10"
    }
  ]

  return (
    <motion.section 
      className="py-14 relative overflow-hidden" 
      id="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div className="flex flex-col items-center text-center mb-16" variants={itemVariants}>
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-md"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            Interested in an entry-level opportunity or want to connect? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div className="space-y-8 lg:sticky lg:top-32" variants={itemVariants}>
            <motion.div 
              className="bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-3xl p-8 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.label} 
                    className="flex items-start gap-4"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0 ${item.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">{item.label}</p>
                      {item.isLink ? (
                        <motion.a
                          href={item.href}
                          className="text-lg text-slate-900 dark:text-white font-medium hover:text-primary transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.value}
                        </motion.a>
                      ) : (
                        <p className="text-lg text-slate-900 dark:text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <h4 className="text-xl font-bold mb-4 relative z-10">Connect With Me</h4>
              <p className="text-blue-100 mb-6 relative z-10">Check out my projects and professional updates on GitHub and LinkedIn.</p>
              <div className="flex gap-4 relative z-10">
                <motion.a 
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm" 
                  href="https://www.linkedin.com/in/injamulhoque007/" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </motion.a>
                <motion.a 
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm" 
                  href="https://x.com/InjamulHoq86366" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </motion.a>
                <motion.a 
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm" 
                  href="https://github.com/injamul007" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}