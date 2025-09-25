# Mountain Challengers - Adventure Tourism Website

🏔️ A modern, fully-responsive website for Mountain Challengers - a premier trekking and expedition company operating in Gilgit-Baltistan, Northern Pakistan.

## 🌟 Features

### Modern Design
- **Responsive Layout**: Perfectly adapts to all screen sizes (desktop, tablet, mobile)
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging scroll effects
- **Interactive UI**: Modern navigation with mobile hamburger menu
- **Beautiful Hero Slider**: Auto-playing image carousel with fade effects
- **Parallax Scrolling**: Dynamic visual effects for enhanced user experience

### Advanced Functionality
- **Dynamic Package Filtering**: Filter tour packages by category (Trekking, Expeditions, Cultural)
- **Interactive Gallery**: Grid layout with hover effects
- **Booking System**: Modal-based booking form with validation
- **Contact Forms**: Multiple contact points with form validation
- **Newsletter Signup**: Email subscription system
- **Testimonial Slider**: Auto-rotating customer reviews
- **Back to Top Button**: Smooth scroll navigation
- **WhatsApp Integration**: Direct chat widget for instant communication

### SEO & Performance
- **SEO Optimized**: Meta tags, semantic HTML, and structured data
- **Fast Loading**: Optimized CSS and JavaScript
- **Lazy Loading**: Images load as needed
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 File Structure

```
website/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling with animations
├── script.js           # JavaScript for all interactive features
└── README.md          # Documentation (this file)
```

## 🚀 How to Use

### Quick Start
1. Open `index.html` in any modern web browser
2. The website is ready to use immediately - no build process required!

### Local Development
To run locally with a web server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Or using Node.js (if installed)
npx serve

# Then open http://localhost:8000 in your browser
```

## 🎨 Customization Guide

### 1. Company Information
Edit in `index.html`:
- Line 27: Update company name in navigation
- Lines 231-251: Update contact information
- Lines 315-335: Update footer content

### 2. Colors & Theme
Edit in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Main brand color */
    --secondary-color: #e74c3c;   /* Accent color */
    --accent-color: #3498db;      /* Secondary accent */
    /* ... other color variables */
}
```

### 3. Tour Packages
Edit in `script.js` (lines 115-190):
```javascript
const packages = [
    {
        id: 1,
        category: 'trekking',
        name: 'Your Package Name',
        duration: 'X Days',
        price: '$X,XXX',
        // ... other details
    }
];
```

### 4. Gallery Images
Edit in `script.js` (lines 271-280):
```javascript
const galleryImages = [
    'your-image-url-1.jpg',
    'your-image-url-2.jpg',
    // ... add more images
];
```

### 5. Social Media Links
Update links in `index.html`:
- Lines 235-240: Contact section social links
- Lines 320-325: Footer social links

### 6. WhatsApp Number
Edit in `index.html` (line 366):
```html
<a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: ES6+ features
- **Libraries**:
  - Font Awesome 6.4.0 (icons)
  - AOS 2.3.1 (scroll animations)
  - Swiper 10 (sliders)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 Future Enhancements

Consider adding:
- Backend integration for form submissions
- Payment gateway for online bookings
- Blog section for travel stories
- User dashboard for booking management
- Multi-language support
- Live chat integration
- Weather API integration
- Interactive maps with tour routes

## 🤝 Contact

For any queries or support:
- **Email**: info@mountainchallengers.pk
- **Phone**: +92 5813 457890
- **Address**: Main Bazaar, Karimabad, Hunza, Gilgit-Baltistan, Pakistan

## 📄 License

This website template is created for Mountain Challengers. All rights reserved.

---

**Built with ❤️ for adventure seekers and mountain lovers!**
