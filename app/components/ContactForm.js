'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, User, Mail, Send, FileText } from 'lucide-react'

export default function ContactForm() {
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('Sorry, there was an error sending your message. Please try again later or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isMounted) {
    return (
      <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl dark:shadow-none">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
              <div className={`${i === 4 ? 'h-32' : 'h-14'} bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse`}></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl dark:shadow-none">
      {/* Status Messages */}
      {submitStatus && (
        <div className={`mb-6 p-4 rounded-xl border ${
            submitStatus === 'success' 
              ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-800 dark:text-green-400' 
              : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-400'
          }`}>
          <div className="flex items-start gap-3">
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-medium">{statusMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">Your Name<sup className='text-red-500 text-[14px]'>*</sup></label>
          <div className="relative">
            <input 
              className="block w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <User className="absolute right-4 top-4 w-5 h-5 text-slate-400" />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Your Email<sup className='text-red-500 text-[14px]'>*</sup></label>
          <div className="relative">
            <input 
              className="block w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
              id="email" 
              name="email" 
              placeholder="john@example.com" 
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Mail className="absolute right-4 top-4 w-5 h-5 text-slate-400" />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="subject">Subject<sup className='text-red-500 text-[14px]'>*</sup></label>
          <div className="relative">
            <input 
              className="block w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
              id="subject" 
              name="subject" 
              placeholder="What's this about?" 
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
            <FileText className="absolute right-4 top-4 w-5 h-5 text-slate-400" />
          </div>
          {errors.subject && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.subject}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">Your Message<sup className='text-red-500 text-[14px]'>*</sup></label>
          <div className="relative">
            <textarea 
              className="block w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none" 
              id="message" 
              name="message" 
              placeholder="How can I help you?" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>

        <button 
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}