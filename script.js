// =====================================================
// LANDING PAGE REDIRECTS
// =====================================================

// Configuration - UPDATE THESE URLs
const GUARD_APP_URL = 'visitor-management-frontend-avdc.vercel.app';  // Change to your deployed guard app URL
const ADMIN_APP_URL = 'https://sai-jazz.github.io/landing-page/';  // Change to your deployed admin app URL
const DEMO_URL = 'https://calendly.com/your-link';  // Optional: Add your demo booking link

// Get buttons
const guardLoginBtn = document.getElementById('guardLoginBtn');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const demoBtn = document.getElementById('demoBtn');

// Guard Login Redirect
if (guardLoginBtn) {
    guardLoginBtn.addEventListener('click', () => {
        console.log('🚪 Redirecting to Guard Login...');
        window.location.href = GUARD_APP_URL;
    });
}

// Admin Login Redirect
if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', () => {
        console.log('👑 Redirecting to Admin Login...');
        window.location.href = ADMIN_APP_URL;
    });
}

// Demo Button
if (demoBtn) {
    demoBtn.addEventListener('click', () => {
        console.log('📅 Booking demo...');
        if (DEMO_URL && DEMO_URL !== 'https://calendly.com/your-link') {
            window.open(DEMO_URL, '_blank');
        } else {
            alert('Demo booking coming soon! Please contact us at hello@securegate.com');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});