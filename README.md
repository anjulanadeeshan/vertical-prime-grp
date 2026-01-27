# Vertical Prime Group - Education Gateway

A modern, responsive website for Vertical Prime Group, your trusted gateway for Sri Lankan students to study at Lincoln University College, Malaysia.

## 🚀 Features

- **Hero Section**: Eye-catching landing with dynamic CTAs
- **Trust Bar**: Displays key recognitions (UGC Sri Lanka, 5-Star SETARA, ACU, WHO Listed)
- **About Section**: Information about Vertical Prime Group and Lincoln University
- **Featured Programs**: Interactive grid showcasing popular courses
- **Student Life**: Sri Lankan perspective on life in Malaysia
- **Admission Process**: Step-by-step guide for applications
- **Document Checklist**: Interactive checklist for required documents
- **Intake Countdown**: Live countdown to next intake
- **WhatsApp Widget**: Floating widget for instant communication
- **Professional Design**: Modern, responsive layout with smooth animations

## 🛠️ Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: SVG icons and emojis
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
vertical-prime-grp/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── TrustBar.jsx
│   │   ├── AboutSection.jsx
│   │   ├── FeaturedPrograms.jsx
│   │   ├── StudentLife.jsx
│   │   ├── AdmissionProcess.jsx
│   │   ├── ProfessionalFeatures.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the primary color scheme:
```javascript
colors: {
  primary: {
    red: '#E31E24',  // Main brand color
    dark: '#0F0F0F',
  },
}
```

### Content
All content can be updated in the respective component files in the `src/components/` directory.

### Images
Replace placeholder images with actual campus photos and student testimonials for better engagement.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔧 Key Components

### Hero Section
- Dynamic tagline with primary and secondary CTAs
- Statistics display and background patterns

### Trust Bar
- Recognition badges with hover effects

### Featured Programs
- Card-based layout with gradient overlays and animations

### WhatsApp Widget
- Fixed position floating button with tooltip

### Document Checklist
- Interactive checkboxes with progress bar

## 📞 Contact Information

Update the contact details in the Footer component:
- Phone: +94 71 234 5678
- Email: info@verticalprime.lk
- Location: Colombo, Sri Lanka

## 🌟 Future Enhancements

- Integration with actual WhatsApp Business API
- Form submission to backend
- Student login portal
- Blog section
- Multi-language support (Sinhala, Tamil, English)

## 📄 License

© 2026 Vertical Prime Group. All rights reserved.

---

Built with ❤️ for Sri Lankan students pursuing global education
