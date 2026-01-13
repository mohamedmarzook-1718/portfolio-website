"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    // Update ScrollTrigger on Lenis scroll
    let lastScrollVelocity = 0
    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update()
      lastScrollVelocity = e.velocity
    })

    // Integrate with GSAP's ticker for smooth animation loop
    const unsubscribe = gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Clean up
    return () => {
      unsubscribe()
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
