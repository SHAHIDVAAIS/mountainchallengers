// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Hide preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hide');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 2000);
});

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Back to top functionality
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Hero Slider
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

// Initialize Testimonials Slider
const testimonialsSlider = new Swiper('.testimonials-slider', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Tour Packages Data
const packages = [
    {
        id: 1,
        category: 'trekking',
        name: 'K2 Base Camp Trek',
        duration: '20 Days',
        price: '$3,500',
        image: 'https://images.unsplash.com/photo-1582650625259-82c9c1b58f0f?auto=format&fit=crop&w=400',
        badge: 'Popular',
        features: [
            'Professional guides',
            'All meals included',
            'Camping equipment',
            'Permits included',
            'Medical support'
        ]
    },
    {
        id: 2,
        category: 'expedition',
        name: 'Nanga Parbat Expedition',
        duration: '45 Days',
        price: '$8,000',
        image: 'https://images.unsplash.com/photo-1580835845971-a393b73bf370?auto=format&fit=crop&w=400',
        badge: 'Challenge',
        features: [
            'Expert climbing guides',
            'High altitude equipment',
            'Base camp facilities',
            'Oxygen support',
            'Satellite communication'
        ]
    },
    {
        id: 3,
        category: 'cultural',
        name: 'Hunza Valley Cultural Tour',
        duration: '7 Days',
        price: '$1,200',
        image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=400',
        badge: 'Best Seller',
        features: [
            'Local cultural experiences',
            'Historical sites visit',
            'Traditional food',
            'Comfortable hotels',
            'Local guide'
        ]
    },
    {
        id: 4,
        category: 'trekking',
        name: 'Rakaposhi Base Camp',
        duration: '12 Days',
        price: '$2,200',
        image: 'https://images.unsplash.com/photo-1516548734449-91b2c0e99f67?auto=format&fit=crop&w=400',
        badge: 'Adventure',
        features: [
            'Moderate difficulty',
            'Beautiful landscapes',
            'Professional guides',
            'All meals included',
            'Photography spots'
        ]
    },
    {
        id: 5,
        category: 'trekking',
        name: 'Fairy Meadows Trek',
        duration: '5 Days',
        price: '$800',
        image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=400',
        badge: 'Easy',
        features: [
            'Beginner friendly',
            'Stunning views',
            'Comfortable camping',
            'Local cuisine',
            'Bonfire nights'
        ]
    },
    {
        id: 6,
        category: 'expedition',
        name: 'Broad Peak Expedition',
        duration: '40 Days',
        price: '$7,500',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400',
        badge: 'Extreme',
        features: [
            'Technical climbing',
            'High altitude training',
            'Full expedition support',
            'Weather monitoring',
            'Emergency evacuation'
        ]
    }
];

// Display packages
function displayPackages(filter = 'all') {
    const packagesGrid = document.getElementById('packages-grid');
    let filteredPackages = packages;
    
    if (filter !== 'all') {
        filteredPackages = packages.filter(pkg => pkg.category === filter);
    }
    
    packagesGrid.innerHTML = filteredPackages.map(pkg => `
        <div class="package-card" data-aos="fade-up">
            <div class="package-image">
                <img src="${pkg.image}" alt="${pkg.name}">
                <span class="package-badge">${pkg.badge}</span>
            </div>
            <div class="package-info">
                <h3>${pkg.name}</h3>
                <p class="package-duration">
                    <i class="fas fa-clock"></i> ${pkg.duration}
                </p>
                <ul class="package-features">
                    ${pkg.features.map(feature => `
                        <li><i class="fas fa-check"></i> ${feature}</li>
                    `).join('')}
                </ul>
                <div class="package-footer">
                    <div class="package-price">
                        ${pkg.price}
                        <span>/person</span>
                    </div>
                    <button class="btn btn-primary" onclick="openBookingModal()">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Refresh AOS animations for new elements
    AOS.refresh();
}

// Filter packages
function filterPackages(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Display filtered packages with enhanced features
    displayPackagesEnhanced(category);
}

// Gallery images
const galleryImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1582650625259-82c9c1b58f0f?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1580835845971-a393b73bf370?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1516548734449-91b2c0e99f67?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=400'
];

// Display gallery
function displayGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    galleryGrid.innerHTML = galleryImages.map((image, index) => `
        <div class="gallery-item" data-aos="zoom-in" data-aos-delay="${index * 50}">
            <img src="${image}" alt="Gallery image ${index + 1}">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
    
    // Add click event to gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            // You could implement a lightbox feature here
            console.log('Gallery item clicked:', index);
        });
    });
}

// Load gallery on page load
displayGallery();

// Booking Modal
function openBookingModal() {
    document.getElementById('booking-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    document.getElementById('booking-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Video Modal
function playIntroVideo() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('intro-video');
    // Example video URL - replace with actual video
    video.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('intro-video');
    video.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// View destination details
function viewDestination(destination) {
    // You could implement a detailed destination view here
    console.log('Viewing destination:', destination);
    alert(`Detailed information about ${destination} coming soon!`);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const bookingModal = document.getElementById('booking-modal');
    const videoModal = document.getElementById('video-modal');
    const virtualModal = document.getElementById('virtual-tour-modal');
    
    if (event.target == bookingModal) {
        closeBookingModal();
    }
    if (event.target == videoModal) {
        closeVideoModal();
    }
    if (event.target == virtualModal) {
        closeVirtualTour();
    }
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Show success message (in real implementation, send to server)
    showNotification('Message sent successfully! We will contact you soon.');
    this.reset();
});

// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Show success message
    showNotification('Booking request submitted! We will contact you within 24 hours.');
    closeBookingModal();
    this.reset();
});

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // Show success message
    showNotification('Successfully subscribed to newsletter!');
    this.reset();
});

// Notification function
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax && scrolled < window.innerHeight) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading for images (optional enhancement)
const lazyImages = document.querySelectorAll('img[data-lazy]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.lazy;
            img.removeAttribute('data-lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Counter animation for statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 20);
}

// Trigger counter animation when in view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statElements = entry.target.querySelectorAll('.stat h4');
            statElements.forEach(stat => {
                const value = parseInt(stat.textContent);
                animateCounter(stat, value);
            });
            statObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statObserver.observe(statsSection);
}

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone);
}

// Enhanced form validation
document.querySelectorAll('form').forEach(form => {
    form.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#e74c3c';
                showNotification('Please enter a valid email address', 'error');
            } else {
                this.style.borderColor = '';
            }
        });
    });
    
    form.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = '#e74c3c';
                showNotification('Please enter a valid phone number', 'error');
            } else {
                this.style.borderColor = '';
            }
        });
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if all required libraries are loaded
    if (typeof AOS !== 'undefined') {
        console.log('Mountain Challengers website loaded successfully!');
    }
    
    // Add smooth reveal animations to sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        sectionObserver.observe(section);
    });
});

// Service Worker for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    }
}

// Weather Widget Toggle
function toggleWeatherWidget() {
    const widget = document.getElementById('weather-widget');
    widget.classList.toggle('active');
    
    // Simulate fetching weather data
    if (widget.classList.contains('active')) {
        updateWeatherData();
    }
}

// Update Weather Data (Simulated)
function updateWeatherData() {
    const locations = [
        { name: 'Gilgit', temp: Math.floor(Math.random() * 15) + 15, condition: 'Clear' },
        { name: 'Hunza', temp: Math.floor(Math.random() * 10) + 10, condition: 'Partly Cloudy' },
        { name: 'Skardu', temp: Math.floor(Math.random() * 10) + 8, condition: 'Sunny' }
    ];
    
    const weatherCards = document.querySelectorAll('.weather-card');
    weatherCards.forEach((card, index) => {
        if (locations[index]) {
            card.querySelector('.temp').textContent = `${locations[index].temp}°C`;
            card.querySelector('.condition').textContent = locations[index].condition;
        }
    });
}

// Show weather widget on page load after delay
setTimeout(() => {
    toggleWeatherWidget();
}, 3000);

// Currency Converter
function toggleCurrencyWidget() {
    const content = document.getElementById('currency-content');
    content.classList.toggle('active');
}

document.getElementById('amount-input')?.addEventListener('input', convertCurrency);
document.getElementById('currency-from')?.addEventListener('change', convertCurrency);

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount-input').value) || 0;
    const from = document.getElementById('currency-from').value;
    
    // Simulated exchange rates to PKR
    const rates = {
        'USD': 285,
        'EUR': 310,
        'GBP': 360
    };
    
    const converted = amount * rates[from];
    document.getElementById('converted-amount').textContent = `${converted.toLocaleString()} PKR`;
}

// Altitude Acclimatization Calculator
function calculateAcclimatization() {
    const currentAlt = parseInt(document.getElementById('current-alt').value);
    const targetAlt = parseInt(document.getElementById('target-alt').value);
    const fitnessLevel = document.getElementById('fitness-level').value;
    
    if (!currentAlt || !targetAlt) {
        showNotification('Please enter both altitude values', 'error');
        return;
    }
    
    const altDiff = targetAlt - currentAlt;
    let days = Math.ceil(altDiff / 500); // Basic calculation: 500m per day
    
    // Adjust based on fitness level
    if (fitnessLevel === 'beginner') {
        days = Math.ceil(days * 1.5);
    } else if (fitnessLevel === 'advanced') {
        days = Math.ceil(days * 0.8);
    }
    
    const resultContent = document.querySelector('.result-content');
    resultContent.innerHTML = `
        <h4>Recommended Acclimatization Plan</h4>
        <p><strong>Total Days Required:</strong> ${days} days</p>
        <p><strong>Daily Ascent:</strong> ${Math.floor(altDiff / days)}m</p>
        <p><strong>Rest Days:</strong> Every ${Math.floor(days / 3)} days</p>
        <div class="acclimatization-tips">
            <h5>Important Tips:</h5>
            <ul>
                <li>Stay hydrated - drink 3-4 liters of water daily</li>
                <li>Climb high, sleep low principle</li>
                <li>Monitor for altitude sickness symptoms</li>
                <li>Consider acetazolamide if recommended by doctor</li>
            </ul>
        </div>
    `;
    
    // Show the result
    document.getElementById('calc-result').style.display = 'block';
}

// AI Chatbot
let chatOpen = false;

function toggleChatbot() {
    const chatbot = document.getElementById('ai-chatbot');
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatbot.classList.add('active');
        document.querySelector('.chatbot-toggle').style.display = 'none';
        document.querySelector('.chat-notification').style.display = 'none';
    } else {
        chatbot.classList.remove('active');
        document.querySelector('.chatbot-toggle').style.display = 'flex';
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    const messagesContainer = document.getElementById('chatbot-messages');
    messagesContainer.innerHTML += `
        <div class="user-message">
            <p>${message}</p>
        </div>
    `;
    
    // Clear input
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "I'd be happy to help you plan your adventure! Our most popular trek is the K2 Base Camp expedition.",
            "For beginners, I recommend starting with the Fairy Meadows trek. It's beautiful and not too challenging.",
            "The best time to visit is from May to October when the weather is most favorable.",
            "We provide all necessary equipment including tents, sleeping bags, and cooking gear.",
            "Our packages include meals, accommodation, guides, and permits. Would you like to know more about a specific package?"
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        messagesContainer.innerHTML += `
            <div class="bot-message">
                <p>${randomResponse}</p>
            </div>
        `;
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

// Enter key support for chat
document.getElementById('chat-input')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// Enhanced Package Display with Difficulty Meter
function displayPackagesEnhanced(filter = 'all') {
    const packagesGrid = document.getElementById('packages-grid');
    let filteredPackages = packages;
    
    if (filter !== 'all') {
        filteredPackages = packages.filter(pkg => pkg.category === filter);
    }
    
    packagesGrid.innerHTML = filteredPackages.map(pkg => {
        const difficulty = pkg.category === 'expedition' ? 5 : 
                          pkg.category === 'trekking' ? 3 : 1;
        
        return `
        <div class="package-card" data-aos="fade-up">
            ${pkg.id % 2 === 0 ? `<div class="virtual-tour-badge" onclick="openVirtualTour('${pkg.name}', ${pkg.id})"><i class="fas fa-vr-cardboard"></i> 360° Tour</div>` : ''}
            <div class="package-image">
                <img src="${pkg.image}" alt="${pkg.name}">
                <span class="package-badge">${pkg.badge}</span>
            </div>
            <div class="package-info">
                <h3>${pkg.name}</h3>
                <p class="package-duration">
                    <i class="fas fa-clock"></i> ${pkg.duration}
                </p>
                <div class="difficulty-meter">
                    ${Array.from({length: 5}, (_, i) => 
                        `<div class="difficulty-bar ${i < difficulty ? 'active' : ''}"></div>`
                    ).join('')}
                    <span style="margin-left: 10px; font-size: 0.9rem;">
                        ${difficulty === 5 ? 'Expert' : difficulty === 3 ? 'Moderate' : 'Easy'}
                    </span>
                </div>
                <ul class="package-features">
                    ${pkg.features.map(feature => `
                        <li><i class="fas fa-check"></i> ${feature}</li>
                    `).join('')}
                </ul>
                <div class="package-footer">
                    <div class="package-price">
                        ${pkg.price}
                        <span>/person</span>
                    </div>
                    <button class="btn btn-primary" onclick="openBookingModal()">Book Now</button>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    // Refresh AOS animations for new elements
    AOS.refresh();
}

// Replace the old displayPackages with enhanced version
displayPackagesEnhanced();

// Typing animation for page title
const titleText = "Spantik Adventure";
let titleIndex = 0;
const brandSpan = document.querySelector('.nav-brand span');

function typeTitle() {
    if (titleIndex < titleText.length && brandSpan) {
        brandSpan.textContent = titleText.slice(0, titleIndex + 1);
        titleIndex++;
        setTimeout(typeTitle, 100);
    }
}

// Start typing animation after page load
setTimeout(typeTitle, 1000);

// 360° Virtual Tour Functionality
let currentPanorama = 0;
let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let currentZoom = 1;

// Panorama images for different locations
const panoramaImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=2000',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000',
    'https://images.unsplash.com/photo-1484950088900-7c31c4b9db0b?auto=format&fit=crop&w=2000'
];

function openVirtualTour(packageName, packageId) {
    const modal = document.getElementById('virtual-tour-modal');
    const title = document.getElementById('tour-title');
    const viewer = document.getElementById('panorama-viewer');
    
    // Set title
    title.textContent = `360° Virtual Tour - ${packageName}`;
    
    // Ensure panorama viewer has the correct structure
    if (!viewer.querySelector('#panorama-image')) {
        const img = document.createElement('img');
        img.id = 'panorama-image';
        img.src = '';
        img.alt = '360 View';
        viewer.insertBefore(img, viewer.firstChild);
    }
    
    // Ensure controls exist
    if (!viewer.querySelector('.panorama-controls')) {
        const controls = document.createElement('div');
        controls.className = 'panorama-controls';
        controls.innerHTML = `
            <button onclick="panLeft()"><i class="fas fa-chevron-left"></i></button>
            <button onclick="resetView()"><i class="fas fa-compress"></i></button>
            <button onclick="panRight()"><i class="fas fa-chevron-right"></i></button>
        `;
        viewer.appendChild(controls);
    }
    
    // Ensure info panel exists
    if (!viewer.querySelector('.panorama-info')) {
        const info = document.createElement('div');
        info.className = 'panorama-info';
        info.innerHTML = `
            <p><i class="fas fa-mouse"></i> Click and drag to look around</p>
            <p><i class="fas fa-search-plus"></i> Scroll to zoom</p>
        `;
        viewer.appendChild(info);
    }
    
    // Load first panorama
    loadPanorama(0);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Initialize dragging after a short delay to ensure elements are ready
    setTimeout(() => {
        initPanoramaDrag();
    }, 100);
}

function closeVirtualTour() {
    const modal = document.getElementById('virtual-tour-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function loadPanorama(index) {
    const viewer = document.getElementById('panorama-viewer');
    
    // Remove any existing loading indicator
    const existingLoading = viewer.querySelector('.panorama-loading');
    if (existingLoading) existingLoading.remove();
    
    // Add loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'panorama-loading';
    loadingDiv.innerHTML = '<i class="fas fa-spinner"></i><p>Loading 360° View...</p>';
    viewer.appendChild(loadingDiv);
    
    // Get or create image element
    let image = document.getElementById('panorama-image');
    if (!image) {
        image = document.createElement('img');
        image.id = 'panorama-image';
        image.alt = '360 View';
        viewer.appendChild(image);
    }
    
    // Load new image
    image.src = panoramaImages[index];
    image.onload = function() {
        // Remove loading
        const loading = viewer.querySelector('.panorama-loading');
        if (loading) loading.remove();
        
        // Reset position
        image.style.left = '0px';
        currentZoom = 1;
        image.style.transform = `scale(${currentZoom})`;
        image.style.display = 'block';
    };
    
    // Update active button
    document.querySelectorAll('.spot-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    currentPanorama = index;
}

function changeView(index) {
    loadPanorama(index);
}

function panLeft() {
    const image = document.getElementById('panorama-image');
    const currentLeft = parseInt(image.style.left || 0);
    const newLeft = Math.min(0, currentLeft + 100);
    image.style.left = newLeft + 'px';
    image.style.transition = 'left 0.3s ease';
}

function panRight() {
    const image = document.getElementById('panorama-image');
    const viewer = document.getElementById('panorama-viewer');
    const currentLeft = parseInt(image.style.left || 0);
    const maxScroll = viewer.offsetWidth - image.offsetWidth;
    const newLeft = Math.max(maxScroll, currentLeft - 100);
    image.style.left = newLeft + 'px';
    image.style.transition = 'left 0.3s ease';
}

function resetView() {
    const image = document.getElementById('panorama-image');
    image.style.left = '0px';
    currentZoom = 1;
    image.style.transform = `scale(${currentZoom})`;
    image.style.transition = 'all 0.3s ease';
}

function initPanoramaDrag() {
    const viewer = document.getElementById('panorama-viewer');
    const image = document.getElementById('panorama-image');
    
    // Check if already initialized
    if (viewer.dataset.dragInitialized === 'true') return;
    viewer.dataset.dragInitialized = 'true';
    
    // Mouse events
    viewer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - viewer.offsetLeft;
        scrollLeft = parseInt(image.style.left || 0);
        viewer.style.cursor = 'grabbing';
        image.style.transition = 'none';
        e.preventDefault();
    });
    
    viewer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - viewer.offsetLeft;
        const walk = (x - startX) * 1.5;
        const currentLeft = scrollLeft + walk;
        
        // Limit scrolling
        const maxScroll = viewer.offsetWidth - image.offsetWidth * currentZoom;
        const newLeft = Math.max(maxScroll, Math.min(0, currentLeft));
        image.style.left = newLeft + 'px';
    });
    
    viewer.addEventListener('mouseup', () => {
        isDragging = false;
        viewer.style.cursor = 'move';
    });
    
    viewer.addEventListener('mouseleave', () => {
        isDragging = false;
        viewer.style.cursor = 'move';
    });
    
    // Touch events for mobile
    let touchStart = 0;
    
    viewer.addEventListener('touchstart', (e) => {
        touchStart = e.touches[0].clientX;
        scrollLeft = parseInt(image.style.left || 0);
        image.style.transition = 'none';
    });
    
    viewer.addEventListener('touchmove', (e) => {
        if (!touchStart) return;
        const touchCurrent = e.touches[0].clientX;
        const walk = (touchCurrent - touchStart) * 1.5;
        const currentLeft = scrollLeft + walk;
        
        const maxScroll = viewer.offsetWidth - image.offsetWidth * currentZoom;
        const newLeft = Math.max(maxScroll, Math.min(0, currentLeft));
        image.style.left = newLeft + 'px';
    });
    
    viewer.addEventListener('touchend', () => {
        touchStart = 0;
    });
    
    // Scroll zoom
    viewer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        currentZoom = Math.min(3, Math.max(1, currentZoom + delta));
        image.style.transform = `scale(${currentZoom})`;
        image.style.transition = 'transform 0.1s ease';
    });
}


console.log('Spantik Adventure - Ready for Your Next Journey! 🏔️');
