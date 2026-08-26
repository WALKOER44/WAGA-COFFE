document.addEventListener('DOMContentLoaded', () => {
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
        document.querySelectorAll('.horology-item').forEach(item => {
            item.addEventListener('click', () => {
                const name = item.getAttribute('data-name');
                const price = parseInt(item.getAttribute('data-price')) || 0;
                currentItem = { name, price };

                modalItemName.textContent = name;
                modalItemPrice.textContent = formatIDR(price);
                modalQty.value = 1;
                modalAddress.value = '';
                updateModalTotal();

                modal.classList.add('active');
            });
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
