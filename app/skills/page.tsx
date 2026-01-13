"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import Link from "next/link"

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages for building applications",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Salesforce Development",
    description: "Enterprise CRM development expertise",
    skills: [
      { name: "Apex", level: 80 },
      { name: "Lightning Web Components", level: 75 },
      { name: "SOQL", level: 85 },
      { name: "Flows", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development and deployment tools",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Linux", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Cloud Computing", level: 70 },
    ],
  },
  {
    title: "Creative Suite",
    description: "Video editing and motion graphics",
    skills: [
      { name: "After Effects", level: 85 },
      { name: "Premiere Pro", level: 90 },
      { name: "DaVinci Resolve", level: 80 },
      { name: "Photoshop", level: 85 },
    ],
  },
]

export default function SkillsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const backgroundX = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-32 px-6 overflow-hidden">
          <motion.div
            style={{ x: backgroundX }}
            className="absolute top-1/2 -translate-y-1/2 left-0 text-[15vw] font-bold text-muted/5 whitespace-nowrap pointer-events-none"
          >
            SKILLS • TOOLS • EXPERTISE •
          </motion.div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-sm text-accent tracking-widest uppercase mb-4 block">Expertise</span>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
                Skills &
                <br />
                <span className="text-accent">Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A diverse toolkit spanning programming, enterprise development, and creative production.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Sections */}
        <section ref={containerRef} className="pb-32 px-6">
          <div className="max-w-6xl mx-auto space-y-32">
            {skillCategories.map((category, i) => (
              <SkillSection key={category.title} {...category} index={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-foreground mb-6"
            >
              See these skills in action
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  )
}

function SkillSection({
  title,
  description,
  skills,
  index,
}: {
  title: string
  description: string
  skills: { name: string; level: number }[]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="grid md:grid-cols-2 gap-12 items-start"
    >
      {/* Header */}
      <div className={index % 2 === 1 ? "md:order-2" : ""}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : { width: 0 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-accent mb-6"
        />
        <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Skills */}
      <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillBar({
  name,
  level,
  index,
  isInView,
}: {
  name: string
  level: number
  index: number
  isInView: boolean
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
        />
      </div>
    </div>
  )
}
// Add this at the end of the file for export statement validation
export { SkillSection, SkillBar }