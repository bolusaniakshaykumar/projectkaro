# ProjectKaro - Asset Management Guide

## 📁 Public Folder Structure

The `public` folder is located at:
```
/Users/kumar/Documents/projects/projectkaro/public/
```

### Recommended Folder Structure:
```
public/
├── logo.png              # Main logo (PNG format)
├── logo.svg              # Logo in SVG format (scalable)
├── favicon.ico           # Browser tab icon
├── images/               # Folder for images
│   ├── hero-bg.jpg
│   └── ...
├── robots.txt            # SEO - Search engine crawling rules
└── sitemap.xml           # SEO - Site structure for search engines
```

## 🖼️ How to Use Images from Public Folder

In Next.js, files in the `public` folder are served from the root URL.

### Example Usage:

**1. In React/TSX Components:**
```tsx
import Image from 'next/image';

// For logo
<Image src="/logo.png" alt="ProjectKaro Logo" width={200} height={50} />

// For other images
<img src="/images/hero-bg.jpg" alt="Hero Background" />
```

**2. In CSS:**
```css
.hero {
  background-image: url('/images/hero-bg.jpg');
}
```

**3. In HTML:**
```html
<link rel="icon" href="/favicon.ico" />
```

## 🔍 Google Search Console Verification

### Step 1: Get Your Verification Code
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://projectkaro.com)
3. Choose "HTML tag" verification method
4. Copy the verification code (looks like: `abc123xyz456...`)

### Step 2: Add to Your Website
The meta tag has already been added to `/src/app/layout.tsx`:

```tsx
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

**Replace `YOUR_VERIFICATION_CODE_HERE` with your actual verification code.**

### Step 3: Verify
1. Deploy your website
2. Go back to Google Search Console
3. Click "Verify"

## 📝 Logo Placement Recommendations

### Logo Sizes:
- **Main Logo (PNG)**: 400x100px or 800x200px (2x for retina)
- **Favicon**: 32x32px or 64x64px
- **SVG Logo**: Scalable, preferred for modern browsers

### Where to Place:
1. **Main logo**: `public/logo.png` or `public/logo.svg`
2. **Favicon**: `public/favicon.ico`
3. **Apple Touch Icon**: `public/apple-touch-icon.png` (180x180px)
4. **OG Image** (for social sharing): `public/og-image.jpg` (1200x630px)

## 🎨 Current Logo Implementation

The ProjectKaro logo in the header currently uses text with custom styling:
- Font: **Orbitron** (bold, futuristic)
- Style: Gradient (purple → blue)
- Location: `/src/components/Header/Header.tsx`

### To Replace with Image Logo:
Edit `/src/components/Header/Header.tsx`:

```tsx
import Image from 'next/image';

// Replace the text logo with:
<Link href="/" className={styles.logo}>
  <Image 
    src="/logo.png" 
    alt="ProjectKaro" 
    width={180} 
    height={45}
    priority
  />
</Link>
```

## 🚀 Quick Commands

### Create image folders:
```bash
mkdir -p public/images
```

### Add your logo:
```bash
# Copy your logo file to the public folder
cp /path/to/your/logo.png public/logo.png
```

## 📌 Important Notes

1. **No `/public` prefix needed** when referencing files in code
   - ✅ Correct: `/logo.png`
   - ❌ Wrong: `/public/logo.png`

2. **Files are cached** - If you update a logo, you may need to:
   - Clear browser cache
   - Restart dev server
   - Use versioned filenames (e.g., `logo-v2.png`)

3. **Optimize images** before adding:
   - Use tools like TinyPNG, ImageOptim
   - Recommended formats: WebP, PNG, SVG
   - Keep file sizes under 200KB for logos

## 🔗 Useful Links

- [Next.js Static Files Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets)
- [Google Search Console](https://search.google.com/search-console)
- [Favicon Generator](https://realfavicongenerator.net/)
