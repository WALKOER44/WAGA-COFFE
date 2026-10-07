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

    // Menu order modal
    const modal = document.getElementById('order-modal');
    const modalClose = document.getElementById('modal-close');
    const modalSubmit = document.getElementById('modal-submit-wa');
    const qtyInput = document.getElementById('modal-qty');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const modalItemName = document.getElementById('modal-item-name');
    const modalItemPrice = document.getElementById('modal-item-price');
    const modalTotalPrice = document.getElementById('modal-total-price');
    const modalAddress = document.getElementById('modal-address');

    let currentPrice = 0;

    document.querySelectorAll('.horology-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.getAttribute('data-name');
            const price = parseInt(item.getAttribute('data-price'));
            
            currentPrice = price;
            modalItemName.textContent = name;
            modalItemPrice.textContent = `IDR ${price.toLocaleString('id-ID')}`;
            qtyInput.value = 1;
            updateTotal();
            modal.classList.add('active');
            modalAddress.value = '';
        });
    });

    function updateTotal() {
        const qty = parseInt(qtyInput.value) || 1;
        const total = currentPrice * qty;
        modalTotalPrice.textContent = `IDR ${total.toLocaleString('id-ID')}`;
    }

    qtyInput.addEventListener('change', updateTotal);
    qtyMinus.addEventListener('click', () => {
        if (qtyInput.value > 1) qtyInput.value--;
        updateTotal();
    });
    qtyPlus.addEventListener('click', () => {
        if (qtyInput.value < 99) qtyInput.value++;
        updateTotal();
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    modalSubmit.addEventListener('click', () => {
        const name = modalItemName.textContent;
        const qty = qtyInput.value;
        const address = modalAddress.value || 'Lokasi tidak disebutkan';
        const total = modalTotalPrice.textContent;

        const message = `Halo, saya ingin memesan:\n\n${name}\nJumlah: ${qty}\nTotal: ${total}\n\nAlamat pengiriman:\n${address}`;
        const waNumber = '6285156477734';
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(waUrl, '_blank');
        modal.classList.remove('active');
    });
});
