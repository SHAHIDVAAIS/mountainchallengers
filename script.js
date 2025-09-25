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
    
    // Display filtered packages
    displayPackages(category);
}

// Load packages on page load
displayPackages();

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
    
    if (event.target == bookingModal) {
        closeBookingModal();
    }
    if (event.target == videoModal) {
        closeVideoModal();
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

console.log('Mountain Challengers - Ready for Adventure! 🏔️');
