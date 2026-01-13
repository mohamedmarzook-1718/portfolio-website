"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const paragraphs = [
  "I'm a Computer Science student with a passion for building digital experiences that merge creativity with technical excellence.",
  "My journey spans from crafting clean, performant code to creating visual stories through video editing and motion design.",
  "I believe the best solutions come from understanding both the art and science of technology — where aesthetic meets algorithm.",
]

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    // GSAP ScrollTrigger for parallax elements
    gsap.to(".stat-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom center",
        end: "center center",
        markers: false,
      },
      y: -20,
      duration: 0.5,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-secondary blur-3xl" />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader label="About" title="Who I Am" />

        {/* Paragraphs with stagger animation */}
        <div className="mt-20 space-y-12">
          {paragraphs.map((text, i) => (
            <AnimatedParagraph key={i} text={text} index={i} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem number="Student" label="Computer Science" />
          <StatItem number="10+" label="Projects Completed" />
          <StatItem number="5+" label="Technologies" />
          <StatItem number="∞" label="Curiosity" />
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="flex flex-col md:flex-row md:items-center gap-6">
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

function AnimatedParagraph({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // Split text into sentences for reveal effect
  const sentences = text.split(/(?<=[.!?])\s+/)

  return (
    <motion.p
      ref={ref}
      className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
    >
      {sentences.map((sentence, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + i * 0.1,
            ease: "easeOut",
          }}
        >
          {sentence}{" "}
        </motion.span>
      ))}
    </motion.p>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="stat-item text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{number}</div>
      <div className="text-sm text-muted-foreground tracking-wide">{label}</div>
    </motion.div>
  )
}
