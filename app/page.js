'use client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Debug modal state changes
  useEffect(() => {
    console.log('Modal state changed:', isModalOpen)
  }, [isModalOpen])

  useEffect(() => {
    // Sync with pre-applied theme from script on mount only
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = savedTheme === 'dark' || (!savedTheme)
    
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    // Update DOM and save preference when darkMode changes
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 dark:block hidden bg-hero-glow"></div>
      <div className="fixed top-[-10%] right-[-5%] w-[300px] h-[300px] sm:right-[-10%] sm:w-[500px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} isModalOpen={isModalOpen} />
      
      <main className="relative pt-32 flex flex-col min-h-screen z-10 overflow-x-hidden" id="home">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12">
          <Hero />
          <About />
        </div>
        <Skills />
        <ProjectsSection onModalStateChange={setIsModalOpen} />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}