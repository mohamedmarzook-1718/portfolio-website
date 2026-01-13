"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Salesforce",
    skills: ["Apex", "LWC", "Flows", "SOQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Linux", "Cloud Computing", "VS Code"],
  },
  {
    title: "Creative Suite",
    skills: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Photoshop"],
  },
]

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stagger animation for skill categories
    gsap.to(".skill-category", {
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
    <section id="skills" ref={containerRef} className="relative min-h-screen py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SkillsHeader />

        {/* Skills Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, i) => (
            <SkillCategory key={category.title} {...category} index={i} />
          ))}
        </div>

        {/* Floating Icons */}
        <FloatingIcons />
      </div>
    </section>
  )
}

function SkillsHeader() {
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
        Expertise
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-foreground"
      >
        Skills & Tools
      </motion.h2>
    </div>
  )
}

function SkillCategory({
  title,
  skills,
  index,
}: {
  title: string
  skills: string[]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="skill-category group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-3 h-3 rounded-full bg-accent"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <SkillTag key={skill} skill={skill} index={i} categoryIndex={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillTag({
  skill,
  index,
  categoryIndex,
  isInView,
}: {
  skill: string
  index: number
  categoryIndex: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.4,
        delay: categoryIndex * 0.1 + index * 0.05,
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
        boxShadow: "0 10px 25px rgba(0, 255, 170, 0.2)",
      }}
      className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground hover:text-accent hover:border-accent transition-all cursor-default"
    >
      {skill}
    </motion.div>
  )
}

function FloatingIcons() {
  const icons = ["</>", "{ }", "λ", "∑", "→"]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/10 text-6xl font-mono"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}
