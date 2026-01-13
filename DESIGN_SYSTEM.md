# 🎨 Portfolio Design System

## Color Palette

### Primary Colors
```
Accent (Primary):          #00ffaa (cyan-green)
  oklch(0.75 0.18 165)
  Used for: Primary CTAs, highlights, glow effects

Accent Secondary:          #ff00aa (pink-purple)  
  oklch(0.7 0.2 320)
  Used for: Secondary highlights, decorative elements
```

### Background Colors
```
Background (Dark):         #1a1a1a (deep navy)
  oklch(0.09 0.01 240)
  Used for: Main background, deep elements

Card/Elevated:             #1f1f2e
  oklch(0.12 0.01 240)
  Used for: Cards, modals, elevated surfaces

Muted/Secondary:           #2d2d3d
  oklch(0.18 0.01 240)
  Used for: Muted backgrounds, hover states
```

### Text Colors
```
Foreground (Light):        #f8f8f8 (off-white)
  oklch(0.97 0 0)
  Used for: Primary text, headings

Muted Text:                #a0a0a0
  oklch(0.65 0 0)
  Used for: Secondary text, descriptions

Border:                    #404050
  oklch(0.25 0.01 240)
  Used for: Borders, dividers
```

### Glow & Effects
```
Accent Glow:               rgba(0, 255, 170, 0.3)
Accent Glow Small:         rgba(0, 255, 170, 0.2)
Secondary Glow:            rgba(255, 0, 170, 0.2)
```

---

## Typography Hierarchy

### Display Headings
```
H1: 9xl (8rem / 128px)    - Hero main title
    weight: 700 (bold)
    tracking: -0.02em
    
H2: 7xl (4.5rem / 72px)   - Section titles
    weight: 700 (bold)
    tracking: -0.01em
    
H3: 5xl (3rem / 48px)     - Subsection titles
    weight: 700 (bold)
    
H4: 3xl (1.875rem / 30px) - Card titles
    weight: 600 (semibold)
```

### Body Text
```
Large Paragraph: 2xl (1.5rem / 24px)
  weight: 400 (normal)
  line-height: 1.6
  color: muted-foreground

Standard Paragraph: xl (1.25rem / 20px)
  weight: 400 (normal)
  line-height: 1.6
  color: muted-foreground

Small Text: sm (0.875rem / 14px)
  weight: 400 (normal)
  color: muted-foreground
  
Caption: xs (0.75rem / 12px)
  weight: 500 (medium)
  letter-spacing: 0.1em
  text-transform: uppercase
```

### Font Families
```
Sans Serif (Primary):
"Inter", "Geist", "Geist Fallback", system-ui, sans-serif

Monospace (Code/Data):
"Geist Mono", "Geist Mono Fallback", monospace
```

---

## Spacing System

### Margin & Padding Values
```
Micro:      0.25rem (4px)    - xs
Extra Small: 0.5rem (8px)    - sm
Small:      0.75rem (12px)   - md
Medium:     1rem (16px)      - lg
Large:      1.5rem (24px)    - xl
Extra:      2rem (32px)      - 2xl
Double:     3rem (48px)      - 3xl
Triple:     4rem (64px)      - 4xl
```

### Section Spacing
```
Vertical Section Padding:  8rem (128px)
Horizontal Section Padding: 1.5rem (24px) mobile
                           2rem (32px) tablet+

Grid Gaps:
  Components: 12px (0.75rem)
  Cards:      32px (2rem)
  Sections:   64px (4rem)
```

---

## Component Sizing

### Buttons
```
Primary Button:
  Padding: 1rem 2rem (16px 32px)
  Height: 3rem (48px)
  Border Radius: 9999px (fully rounded)
  Font Size: sm (14px)
  Font Weight: 600 (semibold)

Secondary Button:
  Same as Primary but with border instead of fill
```

### Cards
```
Small Card:
  Width: auto / max-content
  Padding: 1.5rem (24px)
  Border Radius: 1rem (16px)
  
Large Card:
  Width: 100% / max width
  Padding: 2rem (32px)
  Border Radius: 1.5rem (24px)
```

### Icons
```
Small Icons: 16px x 16px
Medium Icons: 24px x 24px
Large Icons: 32px x 32px
Extra Large Icons: 48px+ x 48px+

Floaty Icons (Background): 96px+ x 96px+
```

---

## Animation Timings

### Duration
```
Quick:      0.2s   - Quick interactions
Short:      0.4s   - Short animations
Medium:     0.6s   - Default animations
Long:       0.8s   - Entrance/exit animations
Extra Long: 1.2s   - Page transitions
```

### Stagger Delays
```
Tight:      0.05s  - Rapid stagger
Normal:     0.1s   - Standard stagger
Wide:       0.15s  - Slower stagger
Extra:      0.2s   - Very slow stagger
```

### Easing Functions
```
Smooth:              [0.25, 0.4, 0.25, 1]
Ease Out:            [0.25, 0.46, 0.45, 0.94]
Ease In Out:         [0.4, 0, 0.2, 1]
Back:                [0.68, -0.55, 0.265, 1.55]
Quart:               [0.76, 0, 0.24, 1]

Default easing: ease: [0.25, 0.4, 0.25, 1]
```

---

## Shadow Effects

### Elevation System
```
Subtle Shadow:
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

Medium Shadow:
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15)

Glow Small:
  box-shadow: 0 0 15px rgba(0, 255, 170, 0.2)

Glow Medium:
  box-shadow: 0 0 30px rgba(0, 255, 170, 0.3)

Glow Large:
  box-shadow: 0 0 60px rgba(0, 255, 170, 0.2)

Glow Heavy:
  box-shadow: 0 20px 40px rgba(0, 255, 170, 0.3),
              0 0 60px rgba(0, 255, 170, 0.2)
```

---

## Border Radius

### Border Radius Values
```
None:       0px         - Sharp corners
Small:      0.5rem      - 8px
Default:    0.75rem     - 12px
Medium:     1rem        - 16px
Large:      1.5rem      - 24px
Full:       9999px      - Completely rounded

Cards:      1rem (16px)
Buttons:    9999px (fully rounded)
Small UI:   0.75rem (12px)
```

---

## Breakpoints

### Responsive Sizes
```
Mobile:         0px          (default)
Small Phone:    320px        (min-device-width)
Tablet:         640px (sm)   - Tailwind
Tablet Plus:    768px (md)   - Tailwind
Desktop:        1024px (lg)  - Tailwind
Large Desktop:  1280px (xl)  - Tailwind
```

### Layout Patterns
```
Mobile (< 640px):
  - Single column layouts
  - Full width elements
  - Stacked components
  - Larger touch targets (48px+)

Tablet (640px - 1024px):
  - Two column grids
  - Flexible layouts
  - Medium spacing

Desktop (> 1024px):
  - Multi-column layouts
  - Full featured experience
  - Maximum content width: 1280px (80rem)
```

---

## Accessibility Features

### Color Contrast
```
AAA Compliance: Contrast ratio 7:1 minimum
AA Compliance: Contrast ratio 4.5:1 minimum

Background (dark navy) + Text (off-white): 
  Contrast ratio: 15.5:1 ✅ Exceeds AAA

Accent + Dark Background:
  Contrast ratio: 4.8:1 ✅ Exceeds AA
```

### Focus States
```
Focus Outline:      2px solid var(--accent)
Focus Outline Offset: 2px
Keyboard Navigation: Full support with visible focus

Hover States:
  Cursor: pointer
  Visual feedback: Color, scale, shadow changes
```

### Text Sizing
```
Minimum Font Size: 12px (xs)
Line Height: 1.5 to 1.8 for readability
Letter Spacing: Normal to wide (0.02em - 0.1em)
Max Line Length: 80 characters (65-70 optimal)
```

---

## Animation Classes (CSS)

### Utility Classes
```
.shadow-glow:
  box-shadow: 0 0 30px rgba(0, 255, 170, 0.3),
              0 0 60px rgba(0, 255, 170, 0.15)

.shadow-glow-sm:
  box-shadow: 0 0 15px rgba(0, 255, 170, 0.2)

.text-glow:
  text-shadow: 0 0 20px rgba(0, 255, 170, 0.3)

.scroll-reveal:
  animation: reveal linear forwards
  animation-timeline: view()
```

### Keyframe Animations
```
@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 170, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 170, 0.5); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

---

## Component States

### Button States
```
Default:
  background: var(--accent)
  color: var(--accent-foreground)
  
Hover:
  box-shadow: 0 20px 40px rgba(0, 255, 170, 0.3)
  scale: 1.02 (slightly larger)
  
Active:
  opacity: 0.9
  
Disabled:
  opacity: 0.5
  cursor: not-allowed
```

### Card States
```
Default:
  background: var(--background)
  border: 1px solid var(--border)
  
Hover:
  border-color: var(--accent)
  transform: translateY(-4px)
  box-shadow: 0 10px 30px rgba(0, 255, 170, 0.2)
  
Focus:
  outline: 2px solid var(--accent)
  outline-offset: 2px
```

---

## Best Practices

### Color Usage
- ✅ Use accent sparingly for emphasis
- ✅ Maintain sufficient contrast ratios
- ✅ Use color consistently across sections
- ✅ Consider colorblind-friendly palettes

### Typography
- ✅ Limit font sizes to maximum 5 different sizes
- ✅ Keep line length readable (50-80 chars)
- ✅ Use sufficient line-height (1.5+)
- ✅ Avoid text-only styling (use weight, size)

### Spacing
- ✅ Use consistent spacing multiples
- ✅ Maintain white space for readability
- ✅ Create visual hierarchy with spacing
- ✅ Align elements to spacing grid

### Animation
- ✅ Keep animations under 1 second
- ✅ Use easing for natural motion
- ✅ Avoid excessive animations
- ✅ Respect prefers-reduced-motion

---

## Implementation Examples

### Styled Button
```jsx
<button className="px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium transition-all hover:shadow-glow">
  Click Me
</button>
```

### Styled Card
```jsx
<div className="p-8 bg-background border border-border rounded-2xl hover:border-accent transition-all">
  Content
</div>
```

### Animated Text
```jsx
<motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
  className="text-6xl font-bold text-foreground"
>
  Heading
</motion.h1>
```

---

This design system ensures **consistency, accessibility, and premium visual appeal** across the entire portfolio website.
