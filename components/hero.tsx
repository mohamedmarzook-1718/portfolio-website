"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment, OrbitControls } from "@react-three/drei"
import { MagneticButton } from "./magnetic-button"
import { ScrollIndicator } from "./scroll-indicator"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Points } from "three"

gsap.registerPlugin(ScrollTrigger)

function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#d4af37"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef<Points>(null)
  const count = 500

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#d4af37" transparent opacity={0.6} />
    </points>
  )
}

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + i * 0.15,
      duration: 0.8,
    },
  }),
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.03,
      duration: 0.5,
    },
  }),
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const name = "Mohamed Marzook ES"
  const [isLoaded, setIsLoaded] = useState(false)

  // Enhanced GSAP animations
  useEffect(() => {
    if (!contentRef.current || !canvasRef.current) return

    const timer = setTimeout(() => setIsLoaded(true), 100)

    // Parallax effect for canvas
    gsap.to(canvasRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          const y = self.getVelocity() * 0.2
          gsap.set(canvasRef.current, { y })
        },
      },
    })

    // Text glow effect on load
    gsap.fromTo(
      contentRef.current?.querySelectorAll(".text-foreground"),
      { textShadow: "0 0 0px rgba(0, 255, 170, 0)" },
      {
        textShadow: "0 0 20px rgba(0, 255, 170, 0.3)",
        duration: 2,
        ease: "power2.inOut",
        delay: 1.5,
      }
    )

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      {/* 3D Canvas Background */}
      <div ref={canvasRef} className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Environment preset="night" />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00aa" />
          <AnimatedSphere />
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/40 to-background" />

      {/* Content */}
      <motion.div
        ref={contentRef}
        style={{ y, opacity, scale }}
        className="relative z-20 flex h-full flex-col items-center justify-center px-6"
      >
        {/* Animated Name */}
        <div className="overflow-hidden mb-4">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-wrap justify-center"
          >
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 tracking-wide"
        >
          Software Engineer
        </motion.p>

        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-accent text-base sm:text-lg md:text-xl mb-12 tracking-widest uppercase font-semibold"
        >
          Creative Technologist
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="flex flex-wrap gap-6 justify-center"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/50"
            >
              <span className="relative z-10">View Work</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-sm font-medium transition-all hover:bg-muted hover:border-accent"
            >
              <span>Get in Touch</span>
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </section>
  )
}
