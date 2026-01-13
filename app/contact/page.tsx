"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { MagneticButton } from "@/components/magnetic-button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mohamedmarzook-1718", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mohamedmarzookes", icon: "linkedin" },
  { name: "Email", href: "mailto:mohamedmarzook1718@gmail.com", icon: "email" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-sm text-accent tracking-widest uppercase mb-4 block">Contact</span>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
                {"Let's Work"}
                <br />
                <span className="text-accent">Together</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {`Have a project in mind or just want to chat? I'd love to hear from you. Let's create something
                amazing together.`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-32 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Form */}
            <ContactForm
              formState={formState}
              setFormState={setFormState}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
              onSubmit={handleSubmit}
            />

            {/* Info */}
            <ContactInfo />
          </div>
        </section>
      </main>
    </SmoothScroll>
  )
}

function ContactForm({
  formState,
  setFormState,
  isSubmitting,
  isSubmitted,
  onSubmit,
}: {
  formState: { name: string; email: string; message: string }
  setFormState: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>
  isSubmitting: boolean
  isSubmitted: boolean
  onSubmit: (e: React.FormEvent) => void
}) {
  const ref = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6"
        >
          <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">{"Thanks for reaching out. I'll get back to you soon."}</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      ref={ref}
      onSubmit={onSubmit}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
          rows={6}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <MagneticButton>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium transition-all hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </MagneticButton>
    </motion.form>
  )
}

function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      {/* Info */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
        <p className="text-muted-foreground leading-relaxed">
          {`I'm currently available for freelance work and full-time opportunities. If you have a project that needs
          some creative and technical love, I'd love to hear about it.`}
        </p>
      </div>

      {/* Location */}
      <div>
        <h4 className="text-sm text-accent uppercase tracking-wide mb-3">Location</h4>
        <p className="text-foreground">India</p>
      </div>

      {/* Social Links */}
      <div>
        <h4 className="text-sm text-accent uppercase tracking-wide mb-4">Connect</h4>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <MagneticButton key={link.name}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-12 h-12 bg-muted border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-accent transition-all"
              >
                {link.icon === "github" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {link.icon === "linkedin" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {link.icon === "email" && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </a>
            </MagneticButton>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="p-6 bg-muted/50 border border-border rounded-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-foreground font-medium">Currently Available</span>
        </div>
        <p className="text-sm text-muted-foreground">Open to freelance projects and full-time opportunities.</p>
      </div>
    </motion.div>
  )
}
