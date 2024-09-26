console.log("Hallo Wereld");

// Menu
document.addEventListener('DOMContentLoaded', function () {
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
        // Toggle de "active" class
        menuToggle.classList.toggle('active');
        popupMenu.classList.toggle('active');
        
        // Verander de SVG naar een kruis als het menu actief is, anders naar het hamburger menu
        if (menuToggle.classList.contains('active')) {
            menuIcon.innerHTML = crossIcon; // Zet de SVG naar het kruis
        } else {
            menuIcon.innerHTML = burgerIcon; // Zet de SVG terug naar het hamburgermenu
        }
    });

    // Sluit het menu als je buiten klikt
    document.addEventListener('click', function(event) {
        // Controleer of je buiten het menu of de toggle klikt
        if (!menuToggle.contains(event.target) && !popupMenu.contains(event.target)) {
            menuToggle.classList.remove('active');
            popupMenu.classList.remove('active');
            menuIcon.innerHTML = burgerIcon; // Zorg ervoor dat de SVG teruggaat naar het hamburger icoon
        }
    });
});

// Dark Mode
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('nav ul li:nth-child(2)'); // Selecteer de tweede li
    const body = document.body;

    // Controleer of dark mode is opgeslagen in localStorage en pas deze toe
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Voeg click event listener toe voor de dark mode toggle
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        
        // Sla de voorkeur van de gebruiker op in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});


// Geluid
// Selecteer het derde li-element
const thirdListItem = document.getElementById('play-sound');

// Maak een nieuw audio-element aan
const audio = new Audio('audio/sprookjesbos.mp3');

// Voeg een klik-event toe aan het derde li-element
thirdListItem.addEventListener('click', function() {
    // Controleer of het nummer speelt (audio is niet gepauzeerd en de huidige tijd is groter dan 0)
    if (!audio.paused && audio.currentTime > 0) {
        audio.pause();  // Pauzeer het nummer
        audio.currentTime = 0;  // Zet het terug naar het begin
    } else {
        audio.play();  // Speel het nummer af
    }
});

// BlingBling
// Selecteer het vierde li-element
const fireworksTrigger = document.getElementById('fireworks-trigger');

// Voeg een klik-event toe voor het vuurwerk-effect
fireworksTrigger.addEventListener('click', function() {
    // Gebruik canvas-confetti voor een vuurwerk-effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

