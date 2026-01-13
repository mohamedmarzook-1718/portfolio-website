# 🚀 Portfolio Website - Quick Start Guide

## ⚡ Installation (5 minutes)

### 1. Install Dependencies
```bash
npm install gsap lenis
```

### 2. Start Development Server
```bash
npm run dev
```

**Open**: http://localhost:3000

## 🎨 Quick Customization (Next Steps)

### Change Your Name & Role
**File**: `components/hero.tsx` (Line ~67)
```javascript
const name = "Your Name Here"
// Then update the subtitles in the JSX
```

### Update About Section
**File**: `components/about.tsx` (Line ~14-18)
```javascript
const paragraphs = [
  "Your story paragraph 1...",
  "Your story paragraph 2...",
  "Your story paragraph 3...",
]
```

### Add Your Skills
**File**: `components/skills.tsx` (Line ~13-28)
```javascript
const skillCategories = [
  {
    title: "Your Category",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
  },
  // Add more categories...
]
```

### Add Your Projects
**File**: `components/projects.tsx` (Line ~13-38)
```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Brief project description...",
    tech: ["Tech1", "Tech2", "Tech3"],
    year: "2024",
  },
  // Add more projects...
]
```

### Add Your Achievements
**File**: `components/achievements.tsx` (Line ~10-26)
```javascript
const achievements = [
  {
    title: "Your Achievement",
    description: "Achievement details...",
    icon: "🏆", // Use any emoji
    type: "award", // award, certification, or recognition
  },
  // Add more achievements...
]
```

### Update Contact Links
**File**: `components/contact.tsx` (Line ~100-115)
```javascript
<a href="https://your-github.com" target="_blank">
  {/* Update links */}
</a>
```

## 🎨 Change Color Scheme

**File**: `app/globals.css` (Line ~8-40)
```css
:root {
  /* Change the accent colors */
  --accent: oklch(0.75 0.18 165);          /* Primary color */
  --accent-secondary: oklch(0.7 0.2 320);  /* Secondary color */
  
  /* Or use standard hex colors */
  --accent: #00ffaa;        /* Cyan green */
  --accent-secondary: #ff00ff; /* Magenta */
}
```

## 📱 Responsive Layout

All components automatically adapt:
- **Mobile** (< 640px): Single column, touch-optimized
- **Tablet** (640px - 1024px): 2-column layouts
- **Desktop** (> 1024px): Full-featured experience

No extra work needed! Built with Tailwind's responsive utilities.

## 🎬 Animation Customization

### Adjust Animation Speed
Find duration in transition props:
```javascript
transition={{ duration: 0.8 }} // Change from 0.8 to your value
```

### Change Stagger Timing
```javascript
stagger: 0.15 // Increase for slower stagger, decrease for faster
```

### Modify Scroll Trigger
```javascript
scrollTrigger: {
  start: "top center",  // When animation starts
  end: "bottom center", // When animation ends
  scrub: 0.5,          // Smooth scroll sync (0-1)
}
```

## 🔗 Update Navigation Links

**File**: `components/navigation.tsx`

Update the menu links to match your sections. Ensure section IDs match:
```html
<a href="#about">About</a>        <!-- matches id="about" -->
<a href="#skills">Skills</a>      <!-- matches id="skills" -->
<a href="#projects">Projects</a>  <!-- matches id="projects" -->
```

## 📸 Add Images

1. Place images in `public/` folder
2. Use Next.js Image component:
```javascript
import Image from 'next/image'

<Image 
  src="/your-image.jpg" 
  alt="Description" 
  width={800} 
  height={600}
/>
```

## 🚀 Deploy

### On Vercel (Recommended)
```bash
# Push to GitHub
git push

# Vercel automatically deploys
```

### On Other Platforms
```bash
npm run build
# Deploy the `.next` folder or follow platform instructions
```

## ❓ Common Issues & Solutions

### Q: Smooth scroll not working?
**A**: Make sure you installed Lenis:
```bash
npm install lenis
```

### Q: Animations look choppy?
**A**: 
1. Check browser hardware acceleration is enabled
2. Reduce animation complexity if on older devices
3. Use Chrome DevTools Performance tab to profile

### Q: Build errors?
**A**: 
```bash
# Clear and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Q: How do I add more sections?
**A**: 
1. Create `components/your-section.tsx`
2. Add animations following existing patterns
3. Import in `app/page.tsx`
4. Add scroll anchor ID to section

## 📚 Component Structure

Each section component follows this pattern:
```javascript
"use client"
import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function YourSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    // GSAP animations here
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={ref} className="...">
      {/* Framer Motion animations */}
    </section>
  )
}
```

## 🎯 Best Practices

✅ Keep animations under 1 second for better UX  
✅ Use stagger delays (0.05s - 0.2s) between items  
✅ Test on mobile devices regularly  
✅ Update metadata in `app/layout.tsx` for SEO  
✅ Use semantic HTML for accessibility  
✅ Keep components modular and reusable  

## 📖 Documentation Files

- **PORTFOLIO_README.md** - Comprehensive documentation
- **lib/animation-config.ts** - All animation configurations
- **app/globals.css** - Global styles and keyframes

## 🆘 Need Help?

1. Check component comments for detailed explanations
2. Read PORTFOLIO_README.md for full documentation
3. Review animation-config.ts for all settings
4. Check official docs:
   - [Framer Motion](https://www.framer.com/motion/)
   - [GSAP](https://greensock.com/gsap/)
   - [Next.js](https://nextjs.org/docs)
   - [Tailwind CSS](https://tailwindcss.com/)

## 🎉 You're Ready!

Your portfolio is now:
- ✅ Fast & optimized
- ✅ Fully responsive
- ✅ Beautifully animated
- ✅ Easy to customize
- ✅ Recruiter-ready

Happy building! 🚀
