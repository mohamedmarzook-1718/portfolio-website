"use client"

import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { Projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen pt-24">
        <Projects />
      </main>
    </SmoothScroll>
  )
}
