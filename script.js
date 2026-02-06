// K-Seodang Interactive Script
// Handles navigation, animations, and user interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
            this.setAttribute('aria-label', navMenu.classList.contains('active') ? '메뉴 닫기' : '메뉴 열기');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    menuToggle.textContent = '☰';
                    menuToggle.setAttribute('aria-label', '메뉴 열기');
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-label', '메뉴 열기');
            }
        });
    }
    
    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when scrolling down
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if target is just "#"
            if (targetId === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // ===================================
    // Active Navigation Highlighting
    // ===================================
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const scrollPosition = window.pageYOffset + navbarHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial call
    
    // ===================================
    // Scroll Animation Observer
    // ===================================
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after animation has triggered
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
    
    // ===================================
    // Counter Animation for Statistics
    // ===================================
    function animateCounter(element, target, suffix = '') {
        const duration = 2000; // 2 seconds
        const start = 0;
        const increment = target / (duration / 16); // 60 FPS
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString('ko-KR') + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString('ko-KR') + suffix;
            }
        };
        
        updateCounter();
    }
    
    // Observe stat items for counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const text = entry.target.textContent.trim();
                let target, suffix = '';
                
                // Parse the target number and suffix
                if (text.includes('+')) {
                    suffix = '+';
                    target = parseInt(text.replace(/[^0-9]/g, ''));
                } else if (text.includes('만')) {
                    suffix = '만+';
                    target = parseInt(text.replace(/[^0-9]/g, ''));
                } else {
                    target = parseInt(text.replace(/[^0-9]/g, ''));
                }
                
                animateCounter(entry.target, target, suffix);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });
    
    // ===================================
    // Card Hover Effects Enhancement
    // ===================================
    const cards = document.querySelectorAll('.card, .program-card, .pillar-card, .sound-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease-out';
        });
    });
    
    // ===================================
    // Parallax Effect for Hero Section
    // ===================================
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
            }
        });
    }
    
    // ===================================
    // Dynamic Year Update
    // ===================================
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // ===================================
    // Keyboard Navigation Accessibility
    // ===================================
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-label', '메뉴 열기');
                menuToggle.focus();
            }
        }
    });
    
    // ===================================
    // Loading Animation
    // ===================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }
        }, 100);
    });
    
    // ===================================
    // Performance Optimization: Debounce
    // ===================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedScrollHandler = debounce(function() {
        highlightActiveSection();
    }, 50);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // ===================================
    // Responsive Image Loading
    // ===================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ===================================
    // Print Styles Handler
    // ===================================
    window.addEventListener('beforeprint', function() {
        // Expand all collapsed sections for printing
        const collapsedElements = document.querySelectorAll('.collapsed');
        collapsedElements.forEach(element => {
            element.classList.add('print-expanded');
        });
    });
    
    window.addEventListener('afterprint', function() {
        const expandedElements = document.querySelectorAll('.print-expanded');
        expandedElements.forEach(element => {
            element.classList.remove('print-expanded');
        });
    });
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c온고지신(溫故知新)의 지혜로 여는 AI 시대의 인성 르네상스', 
        'color: #C4403A; font-size: 20px; font-weight: bold; font-family: "Gowun Batang", serif;');
    console.log('%cK-Seodang | 한국전통서당문화진흥회', 
        'color: #003D5C; font-size: 14px; font-weight: bold;');
    console.log('%c개발자도구를 열어주셔서 감사합니다! 🎓', 
        'color: #0A6847; font-size: 12px;');
    
    // ===================================
    // Analytics Event Tracking (Placeholder)
    // ===================================
    function trackEvent(category, action, label) {
        // Placeholder for analytics tracking
        // Implement Google Analytics, Matomo, or other analytics here
        console.log('Event tracked:', category, action, label);
        
        // Example for Google Analytics (if implemented):
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         'event_category': category,
        //         'event_label': label
        //     });
        // }
    }
    
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('CTA', 'Click', buttonText);
        });
    });
    
    // Track section views
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                trackEvent('Section', 'View', sectionId);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });
    
});

// ===================================
// Service Worker Registration (PWA Support)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('ServiceWorker registered:', registration))
        //     .catch(error => console.log('ServiceWorker registration failed:', error));
    });
}
