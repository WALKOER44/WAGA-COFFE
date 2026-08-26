document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');
    const spaSections = document.querySelectorAll('.spa-section');
    const switchButtons = document.querySelectorAll('.nav-btn-switch');

    // Function to switch SPA views
    function switchView(targetId) {
        spaSections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = 'block';
                // Trigger reflow for fade animation
                section.style.opacity = '0';
                section.style.transform = 'translateY(15px)';
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                    section.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                }, 10);
            } else {
                section.style.display = 'none';
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Navbar click handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            switchView(target);

            if (mobileMenu && navLinksContainer) {
                mobileMenu.classList.remove('is-active');
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // In-page buttons to switch view
    switchButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            switchView(target);
        });
    });

    if (mobileMenu && navLinksContainer) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navLinksContainer.classList.toggle('active');
        });
    }

    // Luxury Analog Watch Widget (Floating Corner Masterpiece)
    const watchWidget = document.createElement('div');
    watchWidget.className = 'luxury-watch-widget';
    watchWidget.innerHTML = `
        <div class="watch-dial">
            <div class="watch-center-pin"></div>
            <div class="watch-hand hour-hand" id="hour-hand"></div>
            <div class="watch-hand minute-hand" id="minute-hand"></div>
            <div class="watch-hand second-hand" id="second-hand"></div>
            <div class="watch-markers">
                <span>12</span><span>3</span><span>6</span><span>9</span>
            </div>
        </div>
        <div class="watch-brand">WAGA CHRONO</div>
    `;
    document.body.appendChild(watchWidget);

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = (seconds / 60) * 360;
        const minutesDegrees = ((minutes * 60 + seconds) / 3600) * 360;
        const hoursDegrees = (((hours % 12) * 3600 + minutes * 60 + seconds) / 43200) * 360;

        if (secondHand) secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        if (minuteHand) minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        if (hourHand) hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Interactive Order Modal Logic
    const modal = document.getElementById('order-modal');
    const modalClose = document.getElementById('modal-close');
    const modalItemName = document.getElementById('modal-item-name');
    const modalItemPrice = document.getElementById('modal-item-price');
    const modalQty = document.getElementById('modal-qty');
    const modalTotalPrice = document.getElementById('modal-total-price');
    const modalAddress = document.getElementById('modal-address');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const modalSubmitWa = document.getElementById('modal-submit-wa');

    let currentItem = { name: '', price: 0 };

    function formatIDR(amount) {
        return 'IDR ' + amount.toLocaleString('id-ID');
    }

    function updateModalTotal() {
        const qty = parseInt(modalQty.value) || 1;
        const total = currentItem.price * qty;
        modalTotalPrice.textContent = formatIDR(total);
    }

    if (modal) {
        // Use event delegation for horology items in case of dynamic views
        document.addEventListener('click', (e) => {
            const horologyItem = e.target.closest('.horology-item');
            if (horologyItem) {
                const name = horologyItem.getAttribute('data-name');
                const price = parseInt(horologyItem.getAttribute('data-price')) || 0;
                currentItem = { name, price };

                modalItemName.textContent = name;
                modalItemPrice.textContent = formatIDR(price);
                modalQty.value = 1;
                modalAddress.value = '';
                updateModalTotal();

                modal.classList.add('active');
            }
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        if (qtyMinus) {
            qtyMinus.addEventListener('click', () => {
                let qty = parseInt(modalQty.value) || 1;
                if (qty > 1) {
                    modalQty.value = qty - 1;
                    updateModalTotal();
                }
            });
        }

        if (qtyPlus) {
            qtyPlus.addEventListener('click', () => {
                let qty = parseInt(modalQty.value) || 1;
                if (qty < 99) {
                    modalQty.value = qty + 1;
                    updateModalTotal();
                }
            });
        }

        if (modalQty) {
            modalQty.addEventListener('input', () => {
                let qty = parseInt(modalQty.value);
                if (isNaN(qty) || qty < 1) modalQty.value = 1;
                updateModalTotal();
            });
        }

        if (modalSubmitWa) {
            modalSubmitWa.addEventListener('click', () => {
                const qty = parseInt(modalQty.value) || 1;
                const total = currentItem.price * qty;
                const address = modalAddress.value.trim() || 'Belum diisi (Ambil di tempat / Radius 1-2km)';

                const message = `Halo WAGA Coffee Atelier, saya ingin memesan:\n\n*Menu:* ${currentItem.name}\n*Jumlah:* ${qty}\n*Total Harga:* ${formatIDR(total)}\n*Alamat Pengiriman:* ${address}\n\nMohon diproses, terima kasih!`;
                
                const waUrl = `https://wa.me/62882003160137?text=${encodeURIComponent(message)}`;
                window.open(waUrl, '_blank');
                modal.classList.remove('active');
            });
        }
    }
});
