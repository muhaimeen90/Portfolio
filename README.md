# Henna by Azmira - Business Website

A beautiful, modern website for Henna by Azmira business featuring an interactive digital leaflet design with elegant henna-themed styling and smooth animations.

## Features

- **Modern Design**: Clean, elegant UI with warm henna-inspired color palette
- **Interactive Navigation**: Smooth page transitions with Framer Motion animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Four Main Sections**:
  - **Home**: Hero section, about, featured gallery, and testimonials
  - **Services**: Service cards with detailed pricing packages
  - **Gallery**: Filterable image grid by categories (bridal, arabic, party, kids)
  - **Contact**: Contact form, business info, FAQ, and social media links

## Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom henna color theme
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter + Playfair Display)

## Color Palette

- **Primary**: `#D4A574` - Warm henna brown
- **Secondary**: `#E6B887` - Light henna gold
- **Accent**: `#F4D03F` - Golden yellow
- **Dark**: `#8B4513` - Deep brown
- **Light**: `#F5E6D3` - Cream
- **Text**: `#3E2723` - Dark brown

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd henna-business-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── gallery/           # Gallery page
│   └── contact/           # Contact page
└── components/            # Reusable UI components
    ├── Navigation.tsx     # Main navigation component
    ├── Hero.tsx           # Home page hero section
    ├── About.tsx          # About section
    ├── FeaturedGallery.tsx # Featured gallery section
    ├── Testimonials.tsx   # Testimonials section
    ├── PageHeader.tsx     # Page header component
    ├── ServiceCard.tsx    # Service card component
    ├── PricingSection.tsx # Pricing packages section
    ├── GalleryFilter.tsx  # Gallery category filter
    ├── GalleryGrid.tsx    # Gallery image grid
    ├── ContactForm.tsx    # Contact form
    ├── ContactInfo.tsx    # Contact information
    └── SocialMediaLinks.tsx # Social media links
```

## Customization

### Colors
Update the color palette in `tailwind.config.js` under the `extend.colors` section.

### Content
- Update service information in `src/app/services/page.tsx`
- Modify gallery items in `src/app/gallery/page.tsx` 
- Update contact details in `src/components/ContactInfo.tsx`
- Change social media links in `src/components/SocialMediaLinks.tsx`

### Styling
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in the global CSS file

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: hello@hennabyazmira.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for Henna by Azmira Business
