// ============================================
// Mobile Navigation Toggle
// ============================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for sticky navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Interactive Baybayin Characters
// ============================================

const charItems = document.querySelectorAll('.char-item');

charItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Add pulse animation
        this.style.animation = 'pulse 0.5s ease-in-out';
    });

    item.addEventListener('click', function() {
        const char = this.getAttribute('data-char');
        const translation = this.getAttribute('data-translation');
        
        // Create a temporary notification
        showCharacterInfo(char, translation);
    });
});

function showCharacterInfo(char, translation) {
    // Remove existing notification if any
    const existing = document.querySelector('.char-notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'char-notification';
    notification.innerHTML = `
        <div class="char-notification-content">
            <div class="char-notification-char">${char}</div>
            <div class="char-notification-text">${translation}</div>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #1E3A8A 0%, #0D9488 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: fadeInScale 0.3s ease-out;
        text-align: center;
    `;

    const content = notification.querySelector('.char-notification-content');
    content.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    `;

    const charDisplay = notification.querySelector('.char-notification-char');
    charDisplay.style.cssText = `
        font-size: 5rem;
        font-family: 'Poppins', sans-serif;
    `;

    const text = notification.querySelector('.char-notification-text');
    text.style.cssText = `
        font-size: 1.5rem;
        font-weight: 600;
        color: #D4AF37;
    `;

    document.body.appendChild(notification);

    // Add fade in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    if (!document.querySelector('#char-notification-style')) {
        style.id = 'char-notification-style';
        document.head.appendChild(style);
    }

    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeInScale 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);

    // Also remove on click
    notification.addEventListener('click', () => {
        notification.style.animation = 'fadeInScale 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

// ============================================
// Scroll Animations
// ============================================

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

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll('.feature-card, .step, .benefit-item, .audience-card, .char-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Navbar Background on Scroll
// ============================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#FFFFFF';
        navbar.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Form Validation (for future forms)
// ============================================

// This can be expanded when forms are added
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// Console Welcome Message
// ============================================

console.log('%cStrokeSense', 'font-size: 24px; font-weight: bold; color: #1E3A8A;');
console.log('%cLearn Baybayin the Smart and Fun Way', 'font-size: 14px; color: #0D9488;');
console.log('%cPreserving Filipino heritage through modern technology.', 'font-size: 12px; color: #1F2937;');
