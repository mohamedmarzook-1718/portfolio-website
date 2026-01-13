# Mohamed Marzook E.S - Portfolio Website

A modern, cinematic scroll-driven portfolio website for Mohamed Marzook E.S, a Computer Science student and aspiring Software Engineer with strong creative and technical skills.

## 🎨 Design Philosophy

- **Modern & Cinematic**: Premium visual experience with smooth, engaging animations
- **Scroll-Driven Storytelling**: Interactive narratives that unfold as users scroll
- **Minimal & Clean**: Focus on content and user experience
- **Premium UI**: Professional, recruiter-ready design
- **Fully Responsive**: Perfect on all devices

## ⚡ Tech Stack

### Core Framework
- **React 19.2.0** - UI library
- **Next.js 16.0.10** - React framework with SSR
- **TypeScript** - Type-safe development

### Animation & Interactivity
- **Framer Motion 12.24.10** - React animation library
- **GSAP** - Professional animation library with ScrollTrigger
- **Lenis** - Smooth scrolling library
- **Three.js / React Three Fiber 9.5.0** - 3D graphics

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Radix UI** - Accessible component primitives

### Additional Libraries
- **Lucide React** - Icon library
- **Vercel Analytics** - Analytics integration

## 🚀 Key Features Implemented

### 1. **3D Hero Section** ✨
- Fullscreen hero with Three.js/React Three Fiber animations
- Animated 3D sphere with MeshDistortMaterial effects
- Particle field background with 500+ particles
- Character-by-character text reveal animations
- Parallax depth effects triggered by scroll velocity
- GSAP-powered parallax for canvas movement
- Text glow effects on load
- Magnetic button micro-interactions

### 2. **Smooth Scroll Experience** 🎯
- **Lenis Integration**: Physics-based smooth scrolling
- **GSAP ScrollTrigger**: Scroll-based animations
- Custom scroll progress tracking
- Premium scroll bar styling with hover effects
- Velocity-aware parallax

### 3. **About Section** 📖
- **Line-by-Line Animation**: Sentence-based text reveal
- Parallax background elements
- Statistics with staggered animations
- Responsive two-column layout
- Smooth transitions on scroll

### 4. **Skills Section** 💻
- **Interactive Skill Cards**: Hover effects with scale and shadow
- Category-based organization (Languages, Salesforce, Tools, Creative Suite)
- Floating background icons with animation
- Pulsing category indicators
- Responsive grid layout
- Enhanced tag hover effects

### 5. **Projects Timeline** 🎬
- **Scroll-Triggered Timeline**: Animated timeline line fill
- Alternating card layout for visual interest
- Animated timeline dots with glow effects
- Technology tags with border transitions
- Staggered animations for each project
- Responsive on mobile (single column)

### 6. **Achievements & Certifications** 🏆
- Card-based layout with premium styling
- Icon animations on hover (scale, rotate)
- Staggered grid animations
- Badge categorization (award, certification, recognition)
- Corner accent effects
- Enhanced border and glow effects

### 7. **Contact Section** 💬
- Character-by-character text animation
- Two-line heading with different accent colors
- Multiple CTA buttons with magnetic effects
- Social links integration
- Professional footer
- Responsive button layout

### 8. **Navigation** 🧭
- Smooth scroll anchor links
- Mobile-friendly responsive design
- Consistent styling across pages

### 9. **Micro-Interactions** ✨
- **Magnetic Buttons**: Mouse proximity attraction
- **Hover Effects**: Shadow, scale, and color transitions
- **Custom Cursor**: Smooth custom cursor experience
- **Scroll Indicators**: Visual scroll progress feedback

## 📦 Installation & Setup

### 1. Install Dependencies
```bash
npm install gsap lenis
# or using pnpm
pnpm install gsap lenis
# or using yarn
yarn add gsap lenis
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio in action!

### 3. Build for Production
```bash
npm run build
npm run start
```

## 🎯 Project Structure

```
components/
├── hero.tsx              # 3D hero with GSAP parallax
├── about.tsx             # Sentence-based text reveal
├── skills.tsx            # Interactive skill cards
├── projects.tsx          # Timeline with GSAP stagger
├── achievements.tsx      # Animated achievement cards
├── creative-edge.tsx     # Creative showcase section
├── contact.tsx           # Contact CTA with animations
├── navigation.tsx        # Navigation bar
├── magnetic-button.tsx   # Magnetic button component
├── custom-cursor.tsx     # Custom cursor
├── smooth-scroll.tsx     # Lenis + GSAP integration
├── scroll-indicator.tsx  # Scroll progress indicator
└── theme-provider.tsx    # Theme configuration

app/
├── layout.tsx            # Root layout with metadata
├── page.tsx              # Home page
├── globals.css           # Global styles, animations, effects
├── about/page.tsx        # About standalone page
├── projects/page.tsx     # Projects standalone page
├── skills/page.tsx       # Skills standalone page
└── contact/page.tsx      # Contact standalone page
```

## 🎬 Animation Techniques Used

### GSAP ScrollTrigger
```javascript
// Scroll-triggered stagger animations
gsap.to(".skill-category", {
  scrollTrigger: { trigger: containerRef.current, start: "top center" },
  y: 0,
  opacity: 1,
  stagger: 0.15,
  duration: 0.8,
})
```

### Framer Motion
```javascript
// Staggered children animations
{sentences.map((sentence, i) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15 + i * 0.1,
    }}
  >
    {sentence}
  </motion.span>
))}
```

### Lenis Smooth Scroll
```javascript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  smooth: true,
})
```

## 🎨 Color Palette

**Premium Dark Theme**:
- **Background**: `oklch(0.09 0.01 240)` - Deep navy black
- **Foreground**: `oklch(0.97 0 0)` - Off white
- **Accent**: `oklch(0.75 0.18 165)` - Vibrant cyan-green
- **Accent Secondary**: `oklch(0.7 0.2 320)` - Pink-purple
- **Muted**: `oklch(0.18 0.01 240)` - Light navy
- **Border**: `oklch(0.25 0.01 240)` - Subtle gray

## 🛠️ Customization Guide

### 1. Update Portfolio Content

**Hero Section** (`components/hero.tsx`):
```javascript
const name = "Your Name Here"
// Change subtitle and role
```

**About Section** (`components/about.tsx`):
```javascript
const paragraphs = [
  "Your story here...",
  "Add your accomplishments...",
]
```

**Skills** (`components/skills.tsx`):
```javascript
const skillCategories = [
  {
    title: "Your Category",
    skills: ["Skill 1", "Skill 2", ...]
  }
]
```

**Projects** (`components/projects.tsx`):
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project details...",
    tech: ["Tech1", "Tech2"],
    year: "2024"
  }
]
```

### 2. Modify Colors

Edit `app/globals.css`:
```css
:root {
  --accent: oklch(0.75 0.18 165);        /* Change primary color */
  --accent-secondary: oklch(0.7 0.2 320); /* Change secondary color */
  /* Modify other colors as needed */
}
```

### 3. Customize Animations

**Animation Duration**:
```javascript
transition={{ duration: 0.8 }} // Change duration in seconds
```

**Stagger Timing**:
```javascript
stagger: 0.15 // Increase/decrease delay between items
```

**Easing Functions**:
```javascript
ease: [0.25, 0.4, 0.25, 1] // Custom cubic bezier
```

**ScrollTrigger Settings**:
```javascript
scrollTrigger: {
  trigger: ref.current,
  start: "top center",    // Trigger start position
  end: "center center",   // Trigger end position
  scrub: 0.5,            // Smooth scroll sync
}
```

### 4. Add New Sections

1. Create component in `components/your-section.tsx`
2. Import in `app/page.tsx`
3. Add to main render
4. Create page file if needed in `app/your-section/page.tsx`

## 📱 Responsive Breakpoints

All components use Tailwind's responsive utilities:
- **sm** (640px) - Small phones
- **md** (768px) - Tablets
- **lg** (1024px) - Desktops
- **xl** (1280px) - Large screens

## ⚙️ Performance Optimization

- **Next.js Image Optimization**: Use next/image for images
- **Code Splitting**: Automatic with Next.js
- **CSS Purging**: Tailwind removes unused CSS
- **Animation Performance**: Hardware-accelerated transforms
- **Smooth Scrolling**: Optimized with GSAP ticker

## 📊 SEO & Analytics

### Metadata (in `app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Profession",
  description: "Your portfolio description",
  keywords: ["keyword1", "keyword2"],
}
```

### Vercel Analytics:
Already integrated and tracking page views, performance metrics.

## 🚀 Deployment

### Deploy on Vercel (Recommended)
```bash
# Already set up, just push to GitHub
git push
# Automatically deploys on commit
```

### Deploy on Other Platforms

**Netlify**:
```bash
npm run build
# Deploy the .next folder
```

**AWS Amplify**:
```bash
amplify add hosting
amplify push
```

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Lenis Documentation](https://lenis.darkroom.engineering/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js Documentation](https://nextjs.org/docs)

## ✨ Awwwards-Style Features Implemented

✅ Premium cinematic animations  
✅ Smooth scroll-driven interactions  
✅ 3D graphics integration with Three.js  
✅ Micro-interactions (magnetic buttons, hover effects)  
✅ Professional typography with reveal effects  
✅ Minimal, clean modern design  
✅ Fully responsive (mobile-first)  
✅ Fast performance & optimized  
✅ SEO optimized with Next.js  
✅ Accessibility focused (Radix UI)  
✅ Premium color palette & styling  
✅ Smooth scrollbar  

## 🐛 Troubleshooting

### Smooth scroll not working?
- Ensure Lenis package is installed: `npm install lenis`
- Check browser console for errors
- Clear browser cache

### Animations choppy?
- Reduce animation complexity
- Check hardware acceleration enabled
- Use Chrome DevTools Performance tab to profile

### Build errors?
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check Node version: `node --version` (requires v18+)

## 📝 License

This portfolio website is the proprietary work of Mohamed Marzook E.S.

## 👤 Author

**Mohamed Marzook E.S**
- Computer Science Student
- Software Engineer & Creative Technologist
- Passionate about building digital experiences

---

**Crafted with passion, creativity, and modern web technologies** ✨

For questions or customization help, refer to the component documentation in each file.
