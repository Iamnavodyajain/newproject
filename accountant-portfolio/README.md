# Professional Accountant Portfolio Website

A modern, responsive portfolio website built with Next.js for accounting professionals. Features beautiful animations, professional design, and comprehensive sections to showcase accounting services.

## 🌟 Features

### ✨ Modern Design
- **Professional Color Scheme**: Blues, teals, and clean whites
- **Animated Gradient Backgrounds**: Subtle movement and visual interest
- **Responsive Design**: Optimized for all devices
- **Smooth Animations**: Powered by Framer Motion

### 🧩 Components

1. **Sticky Navbar**
   - Logo and menu items (Home, About, Services, Why Choose Us, FAQ, Contact)
   - Animated underline effects on hover
   - Mobile-responsive hamburger menu

2. **Hero Section**
   - Animated gradient background with floating elements
   - Professional introduction with call-to-action buttons
   - Decorative accounting-themed illustrations (cats with calculators and glasses)

3. **About Section**
   - Professional photo placeholder (circular border)
   - Introduction paragraph with placeholder text
   - 3 animated statistics cards (Years of Experience, Clients Served, Satisfaction Rate)

4. **Services Section**
   - Grid of 8 service cards:
     - GST Return Filing
     - Tax Planning
     - Bookkeeping
     - Financial Analysis
     - Payroll Management
     - Business Registration
     - Audit & Assurance
     - Financial Consulting
   - Hover effects with gradient transitions and elevation

5. **Why Choose Us Section**
   - Comparison cards (Competitors vs Our Services)
   - Interactive percentage bars with hover animations
   - Performance metrics with animated progress bars

6. **FAQ Section**
   - Accordion-style dropdown questions
   - 5 common accounting questions with detailed answers
   - Contact call-to-action below

7. **Contact Section**
   - Social media links (LinkedIn, Twitter, Facebook, Instagram)
   - Contact form with service dropdown
   - Animated submit button with loading state

8. **Modern Footer**
   - Copyright information
   - Quick links to all sections
   - Back-to-top button
   - Minimalist design with gradient accents

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Modern icon library
- **React Icons** - Additional icon options

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd accountant-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🔧 Customization

### Replace Placeholder Content

The website includes clearly marked placeholder content that needs to be replaced:

1. **Personal Information**
   - `[ACCOUNTANT NAME]` - Replace with actual name
   - `[YOUR EMAIL]` - Replace with contact email
   - `[YOUR PHONE]` - Replace with phone number
   - `[YOUR CITY, COUNTRY]` - Replace with location
   - `[PLACEHOLDER: ...]` - Replace with actual content

2. **Professional Photo**
   - Replace the placeholder in `AboutSection.tsx` with actual headshot

3. **Social Media Links**
   - Update href attributes in `ContactSection.tsx` with actual social media profiles

### Color Customization

The website uses a professional blue-teal color scheme. To customize colors:

1. **Primary Colors**: Modify gradient classes `from-blue-600 to-teal-600`
2. **Accent Colors**: Update individual component color schemes
3. **Background Colors**: Adjust section backgrounds in component files

### Content Customization

1. **Services**: Modify the services array in `ServicesSection.tsx`
2. **FAQ**: Update questions and answers in `FAQSection.tsx`
3. **Statistics**: Change numbers and labels in `AboutSection.tsx`
4. **Performance Metrics**: Adjust percentages in `WhyChooseUsSection.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-width layouts with side-by-side content
- **Tablet**: Adjusted grid layouts and spacing
- **Mobile**: Stacked layouts with touch-friendly interactions

## 🎨 Animation Features

- **Scroll-triggered animations**: Components animate as they come into view
- **Hover effects**: Interactive elements respond to user interaction
- **Loading states**: Form submissions show loading animations
- **Floating elements**: Subtle background animations
- **Progress bars**: Animated percentage displays

## 🔍 SEO Optimization

- **Meta tags**: Professional title and description
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt text**: Image descriptions for accessibility
- **Clean URLs**: Hash-based navigation for single-page app

## 📞 Contact Form

The contact form includes:
- **Form validation**: Required field validation
- **Service selection**: Dropdown with all available services
- **Loading states**: Visual feedback during submission
- **Success messages**: User confirmation after submission

*Note: Form submission currently shows a demo alert. Integrate with your preferred backend service or email service.*

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

This project is created for professional use. Customize as needed for your accounting practice.

## 🤝 Support

For customization help or questions about implementation, please refer to the component documentation within each file.

---

**Built with ❤️ for accounting professionals**
