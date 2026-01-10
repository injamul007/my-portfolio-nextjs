'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProjectsSection({ onModalStateChange }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
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
  
  const projects = [
    {
      title: "💰 LoanLink — Microloan Request & Approval Tracker System",
      description: "LoanLink is a modern and responsive Microloan Management Platform where users can explore loan options, apply for loans, and track application status. The system is built using MERN Stack technologies and supports role-based access for Admin, Manager, and Borrower.",
      image: "https://i.ibb.co.com/JWNBtgLR/Screenshot-2026-01-06-103745.png",
      technologies: ["Tailwind", "React", "Firebase", "Node.js", "Express.js", "MongoDB", "Stripe"],
      github: "https://github.com/injamul007/b12-a11-loanlink-microloan-request-system-client-side",
      demo: "https://loanlink-loan-management-systm.web.app/",
      features: [
        "Role-based access control (Admin, Manager, Borrower)",
        "Loan application and approval workflow",
        "Real-time application status tracking",
        "Secure payment integration with Stripe",
        "Responsive dashboard for all user types",
        "Document upload and verification system"
      ]
    },
    {
      title: "🎓 SkilledHub — Online Learning Platform",
      description: "SkilledHub is a modern and responsive Online Learning Platform where learners can explore, share, and enroll in various courses built with the latest MERN Stack technologies.",
      image: "https://i.ibb.co.com/jPGpbDhk/Screenshot-2026-01-06-104648.png",
      technologies: ["Tailwind", "React", "Firebase", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/injamul007/b12-a10-online-learning-platform-client",
      demo: "https://skilledhub-online-learning-platform.netlify.app/",
      features: [
        "Course creation and management system",
        "Interactive learning modules",
        "Progress tracking and certificates",
        "User authentication and profiles",
        "Mobile-responsive design"
      ]
    },
    {
      title: "🐦‍🔥 Dragon News — Modern News Portal with Firebase Authentication",
      description: "Dragon News is a dynamic and responsive news platform focused on delivering all types of national and international news in a clean and organized interface.",
      image: "https://i.ibb.co.com/qTN9VQB/Screenshot-2026-01-06-105359.png",
      technologies: ["Tailwind", "React", "Firebase"],
      github: "https://github.com/injamul007/dragon-news-with-firebase-project",
      demo: "https://dragon-news-project-25503.web.app/category/0",
      features: [
        "Real-time news updates",
        "Category-based news filtering",
        "User authentication system",
        "Bookmark and save articles",
        "Clean and modern UI design",
        "Mobile-first responsive layout"
      ]
    },
    {
      title: "🏗️ 3D Model Hub — 3D Asset Management Platform",
      description: "3D Model Hub is a modern, responsive, and feature-rich web application designed to upload, manage, explore, and preview 3D models. Inspired by platforms like Sketchfab.",
      image: "https://i.ibb.co.com/qLHphmWD/Screenshot-2026-01-06-110256.png",
      technologies: ["Tailwind", "React", "Firebase", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/injamul007/3d-models-client-side-deploy-netlify",
      demo: "https://3d-models-of-arch.netlify.app/",
      features: [
        "3D model upload and preview",
        "Advanced search and filtering",
        "User portfolio management",
        "Model categorization system",
        "Interactive 3D viewer",
        "Community features and ratings"
      ]
    },
    {
      title: "🎮 GameHub - A Game Library",
      description: "GameHub is an online gaming library where users can browse games, explore detailed information about each title, and install or download the ones they like. It is a modern, urban, and vibrant (SPA) built with React Router and Firebase Authentication.",
      image: "https://i.ibb.co.com/ymMN3tRq/Screenshot-2026-01-06-105614.png",
      technologies: ["Tailwind", "React", "Firebase"],
      github: "https://github.com/injamul007/GameHub-with-Authtentication-Assignment-09",
      demo: "https://gamehub-a-gaming-library.web.app/",
      features: [
        "Extensive game library browser",
        "Detailed game information pages",
        "User authentication and profiles",
        "Game rating and review system",
        "Advanced search and filtering",
        "Wishlist and favorites functionality"
      ]
    },
    {
      title: "🦸 Hero Apps Application",
      description: "Hero Apps Application is a modern and interactive web application. This project is designed to showcase a variety of applications with detailed information, ratings, and reviews, all presented in an intuitive and visually appealing interface.",
      image: "https://i.ibb.co.com/FkFKZ4D9/Screenshot-2026-01-06-111413.png",
      technologies: ["Tailwind", "React"],
      github: "https://github.com/injamul007/b12-a08-hero-io-apps-with-react-router",
      demo: "https://b12-a8-hero-io-apps-injamul007.netlify.app/",
      features: [
        "App showcase and discovery",
        "Detailed app information and reviews",
        "Rating and feedback system",
        "Modern and intuitive interface",
        "Responsive design for all devices",
        "Fast and smooth navigation"
      ]
    }
  ]

  const handleViewDetails = (project) => {
    console.log('Opening modal - hiding navbar')
    setSelectedProject(project)
    setIsModalOpen(true)
    onModalStateChange?.(true)
  }

  const handleCloseModal = () => {
    console.log('Closing modal - showing navbar')
    setIsModalOpen(false)
    setSelectedProject(null)
    onModalStateChange?.(false)
  }

  return (
    <motion.section 
      className="py-14 relative overflow-hidden" 
      id="projects"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-background-light dark:bg-background-dark opacity-95"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div className="flex flex-col items-center text-center mb-16" variants={itemVariants}>
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-md"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Recent Works
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            A selection of personal projects built while learning and working with modern web technologies.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                onViewDetails={() => handleViewDetails(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.section>
  )
}