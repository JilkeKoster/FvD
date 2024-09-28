console.log("Hallo Wereld");

// Combineer alle event listeners voor DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const popupMenu = document.querySelector('.popup-menu');
    const menuIcon = document.querySelector('.menu-icon');

    // SVG voor kruis (X)
    const crossIcon = `
        <line x1="18" y1="6" x2="6" y2="18" stroke="black" stroke-width="2"/>
        <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2"/>
    `;

    // SVG voor hamburgermenu
    const burgerIcon = `
        <rect width="18" height="2" x="3" y="17" rx="1" ry="1"/>
        <rect width="18" height="2" x="3" y="11" rx="1" ry="1"/>
        <rect width="18" height="2" x="3" y="5" rx="1" ry="1"/>
    `;

    // Klik event voor het toggelen van het menu
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        popupMenu.classList.toggle('active');

        if (menuToggle.classList.contains('active')) {
            menuIcon.innerHTML = crossIcon;
        } else {
            menuIcon.innerHTML = burgerIcon;
        }
    });

    // Sluit het menu als je buiten klikt
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !popupMenu.contains(event.target)) {
            menuToggle.classList.remove('active');
            popupMenu.classList.remove('active');
            menuIcon.innerHTML = burgerIcon;
        }
    });

    // Dark Mode
    const darkModeToggle = document.querySelector('nav ul li:nth-child(2)');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    // Geluid
    const thirdListItem = document.getElementById('play-sound');
    const audio = new Audio('audio/sprookjesbos.mp3');

    thirdListItem.addEventListener('click', function() {
        if (!audio.paused && audio.currentTime > 0) {
            audio.pause();
            audio.currentTime = 0;
        } else {
            audio.play();
        }
    });

    // BlingBling
    const fireworksTrigger = document.getElementById('fireworks-trigger');

    fireworksTrigger.addEventListener('click', function() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});
