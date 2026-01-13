"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { MagneticButton } from "@/components/magnetic-button"
import Link from "next/link"

const timeline = [
  {
    year: "2021",
    title: "Started Computer Science",
    description: "Began my journey in Computer Science, diving deep into programming fundamentals and algorithms.",
  },
  {
    year: "2022",
    title: "First Projects",
    description: "Built my first web applications and discovered my passion for creative coding and UI/UX.",
  },
  {
    year: "2023",
    title: "Salesforce Journey",
    description: "Started learning Salesforce development, earning multiple certifications and superbadges.",
  },
  {
    year: "2024",
    title: "Creative Expansion",
    description: "Combined technical skills with video editing and motion graphics to create immersive experiences.",
  },
]

const internshipHighlights = [
  { title: "Python Development", description: "Built desktop applications using Python and Tkinter" },
  { title: "Database Management", description: "Worked with SQL databases for data-driven applications" },
  { title: "UI/UX Design", description: "Designed user interfaces focusing on accessibility and usability" },
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent blur-3xl" />
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="text-sm text-accent tracking-widest uppercase mb-4 block">About Me</span>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
                The Story
                <br />
                <span className="text-accent">Behind the Code</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl"
            >
              {`I'm Mohamed Marzook E.S, a Computer Science student with an insatiable curiosity for technology and creativity. 
              My journey is defined by the intersection of clean code and compelling storytelling.`}
            </motion.p>
          </div>
        </section>

        {/* Journey Timeline */}
        <section ref={containerRef} className="py-32 px-6 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <SectionHeader label="Journey" title="My Timeline" />

            <div className="mt-20 relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-16">
                {timeline.map((item, i) => (
                  <TimelineItem key={item.year} {...item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader label="Experience" title="Internship Highlights" />

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {internshipHighlights.map((item, i) => (
                <HighlightCard key={item.title} {...item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-8"
            >
              Want to know more?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <MagneticButton>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  View Projects
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-sm font-medium hover:bg-muted"
                >
                  Get in Touch
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  )
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="flex items-center gap-6">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : { width: 0 }}
        transition={{ duration: 0.8 }}
        className="h-px bg-accent"
      />
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm text-accent tracking-widest uppercase"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-foreground"
      >
        {title}
      </motion.h2>
    </div>
  )
}

function TimelineItem({
  year,
  title,
  description,
  index,
}: {
  year: string
  title: string
  description: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8 }}
      className={`relative grid md:grid-cols-2 gap-8 pl-12 md:pl-0 ${isEven ? "" : "md:text-right"}`}
    >
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        className="absolute left-4 md:left-1/2 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-accent border-4 border-background z-10"
      />

      <div className={isEven ? "md:pr-16" : "md:order-2 md:pl-16"}>
        <span className="text-accent font-mono text-sm">{year}</span>
        <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className={isEven ? "md:order-2" : ""} />
    </motion.div>
  )
}

function HighlightCard({ title, description, index }: { title: string; description: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all"
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
        <span className="text-accent text-xl font-bold">{index + 1}</span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
