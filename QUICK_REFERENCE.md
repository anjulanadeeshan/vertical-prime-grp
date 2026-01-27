# Quick Reference Guide - Vertical Prime Group Website

## 🎯 Important Information to Update

### 1. Contact Numbers (Replace Placeholder)
**Current Placeholder**: +94 71 234 5678

**Files to Update**:
- `src/components/LincolnUniversity.jsx` (Line ~25)
- `src/components/Footer.jsx` (Line ~115)
- `src/components/ProfessionalFeatures.jsx` (WhatsAppWidget component)

### 2. Social Media Links

**YouTube Channel**:
- Current: https://www.youtube.com/@NilameyiManikeyi
- Update in: `src/components/YouTubeChannel.jsx` (Line ~155)

**Instagram**:
- Current: https://www.instagram.com/nilameyimanikeyi
- Update in: `src/components/YouTubeChannel.jsx` (Line ~170)

**Facebook**:
- Update in: `src/components/Footer.jsx` (Line ~32)

### 3. Email Address
**Current**: info@verticalprime.lk
- Update in: `src/components/Footer.jsx` (Line ~120)

### 4. Office Address
**Current**: Colombo, Sri Lanka
- Update in: `src/components/Footer.jsx` (Line ~108)

## 📋 Website Sections Overview

### Section 1: Hero Section
- **Purpose**: Introduce Vertical Prime Group
- **Key Message**: Multi-company business group with educational focus
- **CTAs**: "Explore Our Agencies", "View Programs"

### Section 2: Educational Agencies
- **Agencies Shown**: Rendid, Wisdom Education Center
- **Features**: Logos, descriptions, trust badges
- **CTA**: "Apply Now" → scrolls to Lincoln University

### Section 3: Lincoln University
- **Tabs**: Overview, Programs, Facilities
- **Content**: University info, program listings, facilities
- **CTA**: WhatsApp contact button

### Section 4: YouTube Channel
- **Featured**: Nilameyi Manikeyi
- **Content**: Channel info, stats, content categories
- **CTAs**: Subscribe buttons for YouTube & Instagram

## 🎨 Customization Tips

### Change Colors
The website uses Tailwind CSS. Main color classes:
- **Primary Red**: `bg-red-600`, `text-red-600`, `from-red-600`
- **Gradients**: `bg-gradient-to-r from-red-600 to-rose-600`

### Add New Agency
1. Open `src/components/EducationalAgencies.jsx`
2. Add new object to `agencies` array (Line ~7)
3. Include: id, name, logo, tagline, description, badges, color, gradient

### Modify Programs
1. Open `src/components/LincolnUniversity.jsx`
2. Edit `programs` array (Line ~7)
3. Update fields array for each program level

### Update Stats
1. **Hero Section**: `src/components/HeroSection.jsx` (Line ~6)
2. **Lincoln University**: `src/components/LincolnUniversity.jsx` (Line ~17)
3. **YouTube Channel**: `src/components/YouTubeChannel.jsx` (Line ~6)

## 🔧 Technical Commands

### Development
```bash
npm run dev
```
Runs on: http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 WhatsApp Integration

### Format
```
https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]?text=[MESSAGE]
```

### Example
```
https://wa.me/94712345678?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20Lincoln%20University%20College%20programs.
```

### Update Locations:
1. `src/components/LincolnUniversity.jsx` - Main university section
2. `src/components/Footer.jsx` - Footer quick link
3. `src/components/ProfessionalFeatures.jsx` - Floating widget

## 🖼️ Adding New Images

### Agency Logos
1. Place image in `src/assets/`
2. Import in component: `import logo from '../assets/logo.png'`
3. Use in JSX: `<img src={logo} alt="..." />`

### Current Assets
- `logo.png` - Vertical Prime Group logo
- `rendid.PNG` - Rendid logo
- `wec.jpeg` - Wisdom Education Center logo
- `nilamei-manikei.jpeg` - YouTube channel logo

## 🎯 Navigation Structure

### Header Links
1. Home → `#home`
2. Our Agencies → `#agencies`
3. Lincoln University → `#lincoln-university`
4. Student Life → `#youtube-channel`
5. Contact → `#contact`

### Smooth Scrolling
All internal links use anchor tags with smooth scroll behavior.

## 📊 Key Features

### Animations
- Powered by Framer Motion
- Entrance animations on scroll
- Hover effects on cards
- Floating background elements

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Mobile menu for small screens

### Performance
- Lazy loading for images
- Optimized animations
- Minimal dependencies

## 🚀 Deployment Checklist

- [ ] Update all placeholder phone numbers
- [ ] Add real social media links
- [ ] Update email address
- [ ] Add actual office address
- [ ] Test all WhatsApp links
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Verify form submissions (if added)
- [ ] Test in different browsers

## 📞 Support

For technical issues or customization requests, refer to:
- `WEBSITE_DOCUMENTATION.md` - Full documentation
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

---

**Quick Start**: `npm run dev` → Open http://localhost:5173
**Build**: `npm run build` → Deploy `dist` folder
