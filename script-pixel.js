document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Terminal text animation
    const terminalElements = document.querySelectorAll('[data-text]');
    terminalElements.forEach(element => {
        const text = element.getAttribute('data-text');
        const speed = parseInt(element.getAttribute('data-speed')) || 50;
        
        let index = 0;
        element.textContent = '';
        element.classList.add('terminal-text');

        function typeText() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, speed);
            }
        }

        typeText();
    });

    // Floating logo animation with random delays
    const logoElement = document.querySelector('.atelier-glow');
    if (logoElement) {
        const delays = [0, 1, 2, 3, 4, 5];
        const randomDelay = delays[Math.floor(Math.random() * delays.length)];
        const randomDuration = 8 + Math.random() * 4; // 8-12 seconds
        
        logoElement.style.animationDuration = randomDuration + 's';
        logoElement.style.animationDelay = randomDelay + 's';
    }

    // Create multiple floating logos if image exists
    const container = document.body;
    const logoImage = 'WAGA-COFFE.webp';
    
    for (let i = 0; i < 3; i++) {
        const floatingLogo = document.createElement('div');
        floatingLogo.className = 'atelier-glow';
        floatingLogo.style.backgroundImage = `url('${logoImage}')`;
        floatingLogo.style.left = Math.random() * 100 + '%';
        floatingLogo.style.animationDuration = (8 + Math.random() * 4) + 's';
        floatingLogo.style.animationDelay = (Math.random() * 6) + 's';
        container.appendChild(floatingLogo);
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
