"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    title: "1st Prize - Reels Making Competition",
    description: "Won first place for creative storytelling and editing skills in video content creation.",
    icon: "🏆",
    type: "award",
  },
  {
    title: "Salesforce Trailhead Superbadges",
    description: "Completed multiple superbadges demonstrating advanced Salesforce development capabilities.",
    icon: "⚡",
    type: "certification",
  },
  {
    title: "AgentBlazer Champion",
    description: "Recognized as a champion in the Salesforce AgentBlazer community program.",
    icon: "🌟",
    type: "recognition",
  },
  {
    title: "Python Certifications",
    description: "Certified in Python programming from Infosys and MSME certification programs.",
    icon: "🐍",
    type: "certification",
  },
  {
    title: "Cyber Security Course",
    description: "Completed an online Cyber Security course covering fundamentals of security, network defenses, and best practices.",
    icon: "🔒",
    type: "certification",
  },
  {
    title: "Android App Development Workshop (Kotlin)",
    description: "Completed a hands-on workshop building Android apps using Kotlin and modern Android tooling.",
    icon: "📱",
    type: "workshop",
  },
]

export function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stagger animation for achievement cards
    gsap.to(".achievement-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        markers: false,
      },
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="achievements" ref={containerRef} className="relative min-h-screen py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AchievementsHeader />

        {/* Achievements Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, i) => (
            <AchievementCard key={achievement.title} {...achievement} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementsHeader() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="flex items-center gap-6">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : { width: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="h-px bg-accent"
      />
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm text-accent tracking-widest uppercase"
      >
        Recognition
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-foreground"
      >
        Achievements & Certifications
      </motion.h2>
    </div>
  )
}

function AchievementCard({
  title,
  description,
  icon,
  type,
  index,
}: {
  title: string
  description: string
  icon: string
  type: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="achievement-card relative p-8 bg-background border border-border rounded-2xl overflow-hidden transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ y: -5, scale: 1.02, borderColor: "var(--accent)" }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ opacity: 0.15 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.span
            className="text-4xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {icon}
          </motion.span>
          <motion.span
            className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full capitalize font-medium border border-accent/30"
            whileHover={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
          >
            {type}
          </motion.span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Corner Accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full"
        whileHover={{ opacity: 0.2 }}
      />
    </motion.div>
  )
}
