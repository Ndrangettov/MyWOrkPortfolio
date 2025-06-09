document.addEventListener('DOMContentLoaded', function() {
    function createParticles() {
        const container = document.querySelector('.particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            const size = Math.random() * 10 + 5;
            
            const delay = Math.random() * 15;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDelay = `${delay}s`;
            
            container.appendChild(particle);
        }
    }

    function animateSkills() {
        const skills = document.querySelectorAll('.skill');
        
        skills.forEach(skill => {
            const width = skill.getAttribute('data-width');
            skill.style.setProperty('--skill-width', width);
            
            const bar = skill.querySelector('.skill-bar');
            if (bar) {
                bar.style.width = width;
            }
        });
    }
    
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    if (entry.target.id === 'about') {
                        animateSkills();
                    }
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-section').forEach(section => {
            section.classList.add('pre-animate');
            observer.observe(section);
        });
    }
    
    createParticles();
    setupSmoothScroll();
    setupScrollAnimations();
});