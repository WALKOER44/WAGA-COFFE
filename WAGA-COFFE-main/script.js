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
});
