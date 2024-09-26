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

// Carusel
const slider = document.querySelector('.slider-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // De hoeveelheid om te scrollen
    slider.scrollLeft = scrollLeft - walk;
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

// Scrol animatie
document.addEventListener('DOMContentLoaded', function () {
    // Selecteer alle elementen met de class 'blog-post'
    const blogPosts = document.querySelectorAll('.blog-post');

    // Opties voor de IntersectionObserver
    const options = {
        threshold: 0.5, // 50% van het element moet in beeld zijn voordat de animatie start
    };

    // Functie die wordt aangeroepen wanneer een element in beeld komt
    const onIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop met observeren nadat het element zichtbaar is geworden
            }
        });
    };

    // Maak een nieuwe IntersectionObserver aan
    const observer = new IntersectionObserver(onIntersect, options);

    // Observeer elke 'blog-post'
    blogPosts.forEach(post => {
        observer.observe(post);
    });
});

