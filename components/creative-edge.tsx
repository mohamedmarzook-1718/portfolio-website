"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export function CreativeEdge() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(textRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Large Background Text */}
      <motion.div
        style={{ x }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-bold text-muted/10 whitespace-nowrap pointer-events-none select-none"
      >
        CREATIVE • CODE • CRAFT •
      </motion.div>

      <motion.div style={{ opacity }} className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <CreativeHeader />

        {/* Main Content */}
        <div ref={textRef} className="mt-20 space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-2xl md:text-4xl text-foreground font-light leading-relaxed"
          >
            Where <span className="text-accent font-medium">engineering precision</span> meets{" "}
            <span className="text-accent font-medium">creative vision</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            My background in video editing and motion graphics has fundamentally shaped how I approach software
            development. I see code as a medium for storytelling — where user flows become narratives, and interfaces
            become experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            This dual perspective allows me to build applications that not only function flawlessly but also resonate
            emotionally with users through thoughtful motion, timing, and visual hierarchy.
          </motion.p>
        </div>

        {/* Creative Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {["After Effects", "Premiere Pro", "DaVinci Resolve", "Photoshop"].map((tool, i) => (
            <motion.div
              key={tool}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-muted/50 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-accent transition-all"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Canvas Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-secondary/5 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  )
}

function CreativeHeader() {
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
        Philosophy
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-foreground"
      >
        The Creative Edge
      </motion.h2>
    </div>
  )
}
