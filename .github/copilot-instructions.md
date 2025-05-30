# Henna by Azmira Business Website - GitHub Copilot Instructions

This is a Next.js website for a henna business called "Henna by Azmira". When working on this project, please follow these guidelines:

## Project Overview
- **Business**: Henna by Azmira - Professional henna artistry services
- **Type**: Business website with digital leaflet design
- **Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
- **Design**: Elegant henna-themed UI with warm colors and smooth animations

## Code Style & Conventions

### React/Next.js
- Use functional components with hooks
- Prefer `'use client'` directive for interactive components
- Use Next.js App Router structure (`src/app/`)
- Import components with `@/components/` path alias
- Use TypeScript for all new code

### Styling
- Use Tailwind CSS utility classes
- Follow the custom henna color palette:
  - `henna-primary`: #D4A574 (warm brown)
  - `henna-secondary`: #E6B887 (light gold)
  - `henna-accent`: #F4D03F (golden yellow)
  - `henna-dark`: #8B4513 (deep brown)
  - `henna-light`: #F5E6D3 (cream)
  - `henna-text`: #3E2723 (dark brown text)
- Use predefined CSS classes: `btn-primary`, `btn-secondary`, `card`, `gradient-henna-*`
- Maintain responsive design (mobile-first approach)

### Animations
- Use Framer Motion for all animations
- Apply consistent page transitions with opacity and transform
- Use `useInView` hook for scroll-triggered animations
- Keep animations smooth and elegant (avoid jarring movements)

### Component Structure
- Export default function components
- Use proper TypeScript interfaces for props
- Include motion wrappers for animations
- Follow the existing component patterns

## File Organization

### Pages
- `src/app/page.tsx` - Home page (Hero, About, Featured Gallery, Testimonials)
- `src/app/services/page.tsx` - Services page with pricing
- `src/app/gallery/page.tsx` - Gallery with filterable categories
- `src/app/contact/page.tsx` - Contact form and business info

### Components
- Keep components focused and reusable
- Use descriptive names (e.g., `ContactForm`, `ServiceCard`)
- Place shared components in `src/components/`

## Content Guidelines

### Tone & Voice
- Professional yet warm and welcoming
- Emphasize artistry, tradition, and natural beauty
- Highlight safety (100% natural henna)
- Use inclusive and culturally respectful language

### Business Information
- Business name: "Henna by Azmira"
- Location: San Francisco Bay Area (mobile service)
- Specialties: Bridal, Arabic, Party, Kids henna
- Values: Natural ingredients, expert artistry, custom designs

### Service Categories
1. **Bridal Henna**: Intricate traditional and modern designs
2. **Arabic Henna**: Bold flowing patterns
3. **Party Henna**: Quick beautiful designs for celebrations
4. **Kids Henna**: Simple safe designs for children

## Development Guidelines

### Performance
- Optimize images and assets
- Use Next.js built-in optimizations
- Lazy load components when appropriate
- Minimize bundle size

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain good color contrast ratios

### SEO
- Use descriptive page titles and meta descriptions
- Include proper heading hierarchy (h1, h2, h3)
- Add alt text for images
- Structure content for search engines

## Common Patterns

### Page Structure
```tsx
'use client'
import { motion } from 'framer-motion'
// ... other imports

export default function PageName() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="page-transition"
    >
      {/* Page content */}
    </motion.div>
  )
}
```

### Component with Animation
```tsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ComponentName() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Component content */}
    </motion.section>
  )
}
```

## When Making Changes

1. **Design Changes**: Maintain the warm, elegant henna aesthetic
2. **Content Updates**: Keep the professional yet personal tone
3. **New Features**: Follow existing patterns and conventions
4. **Bug Fixes**: Test on multiple screen sizes
5. **Performance**: Always consider impact on loading times

## Helpful Context

- This is a showcase website for a henna artist's business
- Users are primarily potential customers looking to book services
- The site should feel trustworthy, artistic, and professional
- Mobile experience is crucial as many users will browse on phones
- The design should honor the cultural significance of henna art

Remember to maintain the existing code quality and design consistency when making any modifications!
