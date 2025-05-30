# Image Handling Guide - Henna by Azmira Website

## ✅ **Supported Image Formats**

Your Next.js website supports all major image formats:

### **Recommended Formats**
- **JPEG/JPG** - Best for photos and henna design images
- **PNG** - Best for logos and images with transparency
- **WebP** - Modern format with excellent compression
- **AVIF** - Next-generation format with superior compression
- **SVG** - Perfect for icons and vector graphics

### **Also Supported**
- **GIF** - For animations
- **BMP** - Basic bitmap format
- **ICO** - Icon format

## 📁 **File Structure**

```
public/
├── images/
│   ├── logo.png ✅ (Already integrated)
│   ├── gallery/
│   │   ├── bridal-1.jpg
│   │   ├── arabic-1.jpg
│   │   └── party-1.jpg
│   ├── hero/
│   │   └── hero-bg.jpg
│   └── about/
│       └── artist-photo.jpg
```

## 🚀 **How to Add Images**

### **Step 1: Place Images in Public Folder**
```bash
# Place your images in:
/home/muhaimeen/Personal/Azmira Henna Website/Henna/public/images/
```

### **Step 2: Use Next.js Image Component**
```tsx
import Image from 'next/image'

// Example: Gallery image
<Image
  src="/images/gallery/bridal-1.jpg"
  alt="Beautiful bridal henna design"
  width={400}
  height={300}
  className="rounded-lg shadow-lg"
/>

// Example: Hero background
<Image
  src="/images/hero/hero-bg.jpg"
  alt="Henna art background"
  fill
  className="object-cover"
  priority
/>
```

## 🎨 **Current Logo Integration**

The logo.png has been successfully integrated into:

1. **Navigation Bar**
   - 40x40px size
   - Appears next to "Henna by Azmira" text
   - Responsive scaling on hover

2. **Hero Section**
   - 80x80px size
   - Centered above main heading
   - Elegant drop shadow effect

3. **Site Metadata**
   - Used as favicon
   - Apple touch icon
   - Browser tab icon

## 💡 **Best Practices for Your Henna Website**

### **Image Optimization Tips**
1. **Resize images** before uploading (recommended max: 1920px width)
2. **Use appropriate formats**:
   - Henna design photos → JPEG (good compression)
   - Logo/graphics → PNG or SVG
   - Modern browsers → WebP
3. **Always include `alt` text** for accessibility
4. **Use `priority` prop** for above-the-fold images

### **Recommended Dimensions**
- **Logo**: 200x200px (will be scaled down)
- **Gallery images**: 800x600px
- **Hero background**: 1920x1080px
- **Thumbnails**: 400x300px

### **File Naming Convention**
```
logo.png
bridal-henna-1.jpg
arabic-design-1.jpg
party-henna-simple.jpg
hero-background.jpg
```

## 🔧 **Advanced Usage Examples**

### **Gallery Grid Image**
```tsx
<Image
  src="/images/gallery/bridal-design-1.jpg"
  alt="Intricate bridal henna design with traditional patterns"
  width={400}
  height={300}
  className="rounded-lg object-cover hover:scale-105 transition-transform"
  loading="lazy"
/>
```

### **Hero Background with Overlay**
```tsx
<div className="relative h-screen">
  <Image
    src="/images/hero/henna-background.jpg"
    alt="Beautiful henna art background"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/20"></div>
</div>
```

### **Responsive Artist Photo**
```tsx
<Image
  src="/images/about/azmira-photo.jpg"
  alt="Azmira, professional henna artist"
  width={300}
  height={400}
  className="rounded-lg shadow-xl"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## ⚡ **Performance Benefits**

Next.js automatically:
- **Converts** images to WebP/AVIF when supported
- **Generates** multiple sizes for responsive design
- **Lazy loads** images outside viewport
- **Prevents** layout shift during loading
- **Optimizes** file sizes by 20-80%

## 🎯 **Quick Start Checklist**

- [x] Logo integrated in navigation and hero
- [x] Favicon configured
- [ ] Add gallery images for portfolio
- [ ] Add hero background image
- [ ] Add artist photo for about section
- [ ] Optimize all images for web

Remember: All images are automatically optimized by Next.js, so you get the best performance without extra work!
