"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
   {
    title: "Real-Time Object Detection Using YOLO",
    description: "Developed an automated real-time object detection system using YOLO to analyze live camera feeds and recorded videos. The system detects and classifies objects efficiently, replacing manual monitoring with automated visual output. Designed to reduce errors and improve efficiency in surveillance and traffic monitoring applications.",
    tech: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    year: "2025",
  },
  {
    title: "Real vs AI Image Detector",
    description: "Built a deep learning web application that classifies images as real photos or AI-generated using CNN trained on CIFAKE dataset. Implemented Streamlit app supporting image uploads and URL classification with confidence scores. Gained hands-on experience with full ML pipeline: data preparation, training, evaluation, and deployment.",
    tech: ["Python", "TensorFlow/Keras", "Streamlit", "NumPy", "Pandas"],
    year: "2025",
  },
  {
    title: "Portfolio Website",
    description: "A comprehensive portfolio built as part of Naan Mudhalvan program showcasing web development skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    title: "Water Supply Network Control",
    description: "IoT-based system for monitoring and controlling water supply networks in real-time.",
    tech: ["IoT", "Python", "Sensors"],
    year: "2023",
  },
 
]

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    // Stagger animation for project items
    gsap.to(".project-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        markers: false,
      },
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="projects" ref={containerRef} className="relative min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ProjectsHeader />

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div style={{ height: lineHeight }} className="w-full bg-accent origin-top" />
          </div>

          {/* Project Items */}
          <div className="space-y-24">
            {projects.map((project, i) => (
              <ProjectItem key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsHeader() {
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
        Work
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-foreground"
      >
        Featured Projects
      </motion.h2>
    </div>
  )
}

function ProjectItem({
  title,
  description,
  tech,
  year,
  index,
}: {
  title: string
  description: string
  tech: string[]
  year: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className="project-item relative grid md:grid-cols-2 gap-8"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: index * 0.1 }}
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute left-0 md:left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-accent border-4 border-background z-10 shadow-lg shadow-accent/50"
      />

      {/* Content */}
      <div className={`pl-8 md:pl-0 ${isEven ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
        <span className="text-sm text-accent font-mono tracking-widest">{year}</span>
        <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <div className={`flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs bg-muted/50 border border-border rounded-full text-muted-foreground hover:border-accent transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Placeholder for alternate column */}
      <div className={isEven ? "md:order-2" : ""} />
    </motion.div>
  )
}
