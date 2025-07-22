# Professional Accountant Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, specifically designed for accounting professionals. Features beautiful animations, interactive components, and a professional design optimized for conversion.

## 🌟 Features

### Design & User Experience
- **Modern Professional Design** - Clean, trustworthy aesthetic using blues, teals, and whites
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Interactive Components** - Hover effects, progress bars, and accordion FAQ section

### Sections Included
1. **Sticky Navigation Bar** - Smooth scrolling navigation with mobile hamburger menu
2. **Hero Section** - Animated gradient background with accounting-themed illustrations
3. **About Section** - Professional photo placeholder and animated statistics cards
4. **Services Section** - 8 service cards with icons and hover animations
5. **Why Choose Us** - Comparison cards and animated progress indicators
6. **FAQ Section** - 5 accordion-style dropdowns with smooth animations
7. **Contact Section** - Contact form with service dropdown and social media links
8. **Footer** - Clean design with quick links and back-to-top button

### Technical Features
- **Next.js 15** - Latest React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Framer Motion** - Smooth animations and micro-interactions
- **Lucide React** - Beautiful, consistent icons throughout
- **SEO Optimized** - Proper metadata and semantic HTML structure
- **Performance Optimized** - Fast loading and smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd accountant-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### 1. Personal Information
Replace all placeholder content marked with `[Your Name]` and `PLACEHOLDER:` comments:

**Key files to update:**
- `src/components/Navbar.js` - Logo and business name
- `src/components/Hero.js` - Name and tagline
- `src/components/About.js` - Personal introduction and photo
- `src/components/Contact.js` - Contact information and social links
- `src/components/Footer.js` - Copyright and contact details
- `src/app/layout.js` - Website metadata and SEO information

### 2. Professional Photo
Replace the placeholder in the About section:
- Add your professional photo to the `public` folder
- Update the photo section in `src/components/About.js`

### 3. Services
Customize the services offered in `src/components/Services.js`:
- Modify the `services` array
- Update service names, descriptions, and icons
- The same services list is used in the contact form dropdown

### 4. Colors & Branding
The website uses a professional blue/teal color scheme. To customize:
- Update colors in `src/app/globals.css`
- Modify gradient classes throughout components
- Change the logo colors in navigation and footer

### 5. Content & Copy
Update all text content to match your business:
- FAQ questions and answers
- Service descriptions
- About section biography
- Contact form labels and messages

### 6. Social Media Links
Update social media links in `src/components/Contact.js`:
- Replace `href="#"` with actual social media URLs
- Add or remove social platforms as needed

## 📁 Project Structure

```
accountant-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.js            # Root layout with metadata
│   │   └── page.js              # Main page component
│   └── components/
│       ├── Navbar.js            # Navigation component
│       ├── Hero.js              # Hero section with animations
│       ├── About.js             # About section with stats
│       ├── Services.js          # Services grid
│       ├── WhyChooseUs.js       # Comparison and metrics
│       ├── FAQ.js               # Accordion FAQ section
│       ├── Contact.js           # Contact form and info
│       └── Footer.js            # Footer with links
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                   # This file
```

## 🎯 Key Components Explained

### Animations
- **Scroll-triggered animations** - Components animate when they come into view
- **Hover effects** - Cards lift and change colors on hover
- **Progress bars** - Animate to show percentages when visible
- **Floating elements** - Subtle movement in hero section

### Interactive Elements
- **Accordion FAQ** - Click to expand/collapse answers
- **Contact Form** - Functional form with validation (requires backend integration)
- **Smooth Scrolling** - Navigation links smoothly scroll to sections
- **Mobile Menu** - Hamburger menu for mobile devices

### Responsive Design
- **Mobile-first approach** - Optimized for mobile devices
- **Breakpoint system** - Uses Tailwind's responsive utilities
- **Flexible layouts** - Grid systems adapt to screen sizes

## 🔧 Customization Examples

### Adding a New Service
```javascript
// In src/components/Services.js
{
  name: "Your New Service",
  icon: YourIcon, // Import from lucide-react
  description: "Description of your service",
  gradient: "from-purple-500 to-purple-600"
}
```

### Changing Color Scheme
```css
/* In src/app/globals.css */
.hero-gradient {
  background: linear-gradient(135deg, #your-color1, #your-color2, #your-color3);
}
```

### Adding New FAQ
```javascript
// In src/components/FAQ.js
{
  question: "Your question here?",
  answer: "Your detailed answer here..."
}
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
- **Netlify** - Connect GitHub repository
- **AWS Amplify** - Deploy from Git repository
- **Traditional Hosting** - Use `npm run build` and upload the `out` folder

## 📞 Support & Customization

This portfolio website is designed to be easily customizable for any accounting professional. All placeholder content is clearly marked for easy replacement.

### Need Help?
- Check the component files for `PLACEHOLDER:` comments
- Review the customization guide above
- Ensure all personal information is updated before going live

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to launch your professional online presence?** Simply replace the placeholder content with your information and deploy!
