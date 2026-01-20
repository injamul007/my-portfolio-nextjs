'use client'

import { useState, useEffect } from 'react'
import { Home, User, Code2, FolderOpen, Mail, Menu, Sun, Moon, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ darkMode, toggleTheme, isModalOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const sections = ['home', 'about', 'skills', 'projects', 'contact']

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.4) current = id
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)

  // ✅ CLEAN SCROLL — SAME AS FOOTER
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    setActiveSection(sectionId)
    closeMobileMenu()

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const getLinkClasses = (sectionId) => {
    const base =
      'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer'
    const active =
      'bg-surface-light/50 dark:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10'
    const inactive =
      'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'

    return `${base} ${activeSection === sectionId ? active : inactive}`
  }

  const getMobileLinkClasses = (sectionId) => {
    const base = 'mobile-link flex items-center gap-3 text-3xl transition-colors cursor-pointer'

    if (activeSection === sectionId) {
      const colors = {
        home: 'text-blue-500',
        about: 'text-emerald-500',
        skills: 'text-blue-500',
        projects: 'text-orange-500',
        contact: 'text-pink-500',
      }
      return `${base} ${colors[sectionId]}`
    }

    return `${base} text-slate-900 dark:text-white`
  }

  return (
    <>
      <AnimatePresence>
        {!isModalOpen && (
          <motion.nav
            className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 sm:px-8 lg:px-16"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between w-full max-w-7xl">
              {/* Logo */}
              <motion.div
                className="w-12 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-2xl font-bold italic tracking-tighter text-slate-900 dark:text-white"
                >
                  IH
                </button>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full glass light-glass shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                {sections.map((sec, index) => (
                  <motion.button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    className={getLinkClasses(sec)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.1 }}
                  >
                    {{
                      home: <Home className="w-4 h-4 text-primary" />,
                      about: <User className="w-4 h-4 text-emerald-400" />,
                      skills: <Code2 className="w-4 h-4 text-blue-400" />,
                      projects: <FolderOpen className="w-4 h-4 text-orange-400" />,
                      contact: <Mail className="w-4 h-4 text-pink-400" />,
                    }[sec]}
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </motion.button>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.div
                className="md:hidden px-4 py-2 bg-white dark:bg-slate-900 shadow-lg rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <motion.button
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Menu className="w-6 h-6 text-slate-700 dark:text-white" />
                </motion.button>
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-white dark:bg-slate-900 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={closeMobileMenu}
              className="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-full dark:bg-gray-700 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {sections.map((sec, index) => (
              <motion.button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className={getMobileLinkClasses(sec)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {{
                  home: <Home className="w-8 h-8" />,
                  about: <User className="w-8 h-8" />,
                  skills: <Code2 className="w-8 h-8" />,
                  projects: <FolderOpen className="w-8 h-8" />,
                  contact: <Mail className="w-8 h-8" />,
                }[sec]}
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
