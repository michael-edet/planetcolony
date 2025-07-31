 // Mobile Menu Toggle
 const hamburger = document.querySelector('.hamburger');
 const mobileMenu = document.querySelector('.mobile-menu');
 const closeMenu = document.querySelector('.close-menu');
 const overlay = document.querySelector('.overlay');
 
 hamburger.addEventListener('click', () => {
     mobileMenu.classList.add('active');
     overlay.classList.add('active');
     document.body.style.overflow = 'hidden';
 });
 
 closeMenu.addEventListener('click', () => {
     closeMobileMenu();
 });
 
 overlay.addEventListener('click', () => {
     closeMobileMenu();
 });
 
 function closeMobileMenu() {
     mobileMenu.classList.remove('active');
     overlay.classList.remove('active');
     document.body.style.overflow = 'auto';
 }
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             // Close mobile menu if open
             closeMobileMenu();
             
             window.scrollTo({
                 top: target.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });
 
 // Sticky header effect
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);
 });
 
 // Newsletter form submission
 const newsletterForm = document.querySelector('.newsletter-form');
 if (newsletterForm) {
     newsletterForm.addEventListener('submit', (e) => {
         e.preventDefault();
         const emailInput = newsletterForm.querySelector('input[type="email"]');
         if (emailInput.value) {
             alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our next update soon.`);
             emailInput.value = '';
         }
     });
 }
 
 // Close dropdown when clicking outside
 document.addEventListener('click', (e) => {
     const portfolioMenu = document.querySelector('.portfolio-menu');
     if (!portfolioMenu.contains(e.target)) {
         const dropdown = portfolioMenu.querySelector('.portfolio-dropdown');
         dropdown.style.opacity = '0';
         dropdown.style.visibility = 'hidden';
         dropdown.style.transform = 'translateY(10px)';
     }
 });
// Community section animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animated counter for members
            const memberCount = document.getElementById('memberCount');
            let currentCount = 25000;
            let targetCount = 25683;
            let increment = Math.ceil((targetCount - currentCount) / 50);
            
            const counter = setInterval(() => {
                currentCount += increment;
                if (currentCount >= targetCount) {
                    currentCount = targetCount;
                    clearInterval(counter);
                }
                memberCount.textContent = currentCount.toLocaleString() + '+';
            }, 50);
            
            // Feature card hover animations
            const featureCards = document.querySelectorAll('.feature-card');
            
            featureCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    const icon = card.querySelector('.feature-icon');
                    icon.style.transform = 'scale(1.1)';
                    icon.style.backgroundColor = 'rgba(29, 185, 84, 0.2)';
                });
                
                card.addEventListener('mouseleave', () => {
                    const icon = card.querySelector('.feature-icon');
                    icon.style.transform = 'scale(1)';
                    icon.style.backgroundColor = 'rgba(29, 185, 84, 0.1)';
                });
            });
            
            // Testimonial animation
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            
            testimonialCards.forEach((card, index) => {
                // Delay for staggered animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 300 + (index * 150));
            });
        })

// Sports section animations
const sportsCards = document.querySelectorAll('.sports-card');
sportsCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 150 * index);
});

// Add this to your existing script.js or entertainment page script
document.addEventListener('DOMContentLoaded', function() {
    // Artist carousel functionality
    const carousel = document.querySelector('.artist-carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const artistSlides = document.querySelectorAll('.artist-slide');
    
    let currentSlide = 0;
    const slideWidth = artistSlides[0].offsetWidth + 30; // width + gap
    
    // Update carousel position
    function updateCarousel() {
        carousel.scrollTo({
            left: currentSlide * slideWidth,
            behavior: 'smooth'
        });
    }
    
    // Next slide
    nextBtn.addEventListener('click', function() {
        if (currentSlide < artistSlides.length - 1) {
            currentSlide++;
            updateCarousel();
        }
    });
    
    // Previous slide
    prevBtn.addEventListener('click', function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });
    
    // Discover buttons functionality
    const discoverBtns = document.querySelectorAll('.discover-btn');
    discoverBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const artistName = this.closest('.artist-slide').querySelector('h4').textContent;
            alert(`Discovering ${artistName}'s music...`);
        });
    });
    
    // Testimonial card animations
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
    
    // Feature card hover animations
    const featureCards = document.querySelectorAll('.promotion-features .feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1)';
        });
    });
});
// Music Distribution Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate metric counters
    const metricValues = document.querySelectorAll('.metric-value');
    const revenueBars = document.querySelectorAll('.bar-fill');
    const distributionSection = document.querySelector('.distribution-section');
    
    function animateMetrics() {
        const rect = distributionSection.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75) &&
            (rect.bottom >= window.innerHeight * 0.25);
        
        if (isVisible) {
            // Animate metric counters
            metricValues.forEach(element => {
                const target = parseInt(element.getAttribute('data-target'));
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);
                
                let current = start;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    element.textContent = Math.floor(current).toLocaleString();
                }, 16);
            });
            
            // Animate revenue bars
            revenueBars.forEach(bar => {
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateMetrics);
        }
    }
    
    // Run animation when section is in view
    window.addEventListener('scroll', animateMetrics);
    
    // Testimonial carousel
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialSlides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-rotate testimonials
    let carouselInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const carouselContainer = document.querySelector('.testimonial-carousel');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, 5000);
    });
    
    // Show first slide initially
    showSlide(0);
});