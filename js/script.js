console.log("Hallo Wereld"); // Log een boodschap naar de console voor debugging

// Hambuger menu -> Techniek gebruikt ook bij Programeren
// Combineer alle event listeners voor DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () { // Voer deze functie uit nadat de HTML volledig is geladen
    // Menu-instellingen
    const menuToggle = document.querySelector('.menu-toggle'); // Selecteer de knop om het menu te toggelen
    const popupMenu = document.querySelector('.popup-menu'); // Selecteer het popup-menu
    const menuIcon = document.querySelector('.menu-icon'); // Selecteer het menu-icoon

    // SVG voor het kruis (X)
    const crossIcon = `
        <line x1="18" y1="6" x2="6" y2="18" stroke="black" stroke-width="2"/> 
        <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2"/> 
    `;

    // SVG voor het hamburgermenu
    const burgerIcon = `
        <rect width="18" height="2" x="3" y="17" rx="1" ry="1"/> 
        <rect width="18" height="2" x="3" y="11" rx="1" ry="1"/> 
        <rect width="18" height="2" x="3" y="5" rx="1" ry="1"/> 
    `;

    // Klik event voor het toggelen van het menu
    menuToggle.addEventListener('click', function() {
        // Toggle de 'active' class op de menu-toggle en het popup-menu
        menuToggle.classList.toggle('active');
        popupMenu.classList.toggle('active');

        // Verander het menu-icoon naar een kruis of hamburgermenu afhankelijk van de status
        if (menuToggle.classList.contains('active')) {
            menuIcon.innerHTML = crossIcon; // Zet het icoon naar kruis
        } else {
            menuIcon.innerHTML = burgerIcon; // Zet het icoon terug naar hamburgermenu
        }
    });

    // Sluit het menu als je buiten klikt
    document.addEventListener('click', function(event) {
        // Controleer of de klik buiten het menu of de toggle was
        if (!menuToggle.contains(event.target) && !popupMenu.contains(event.target)) {
            menuToggle.classList.remove('active'); // Verwijder de 'active' class van de toggle
            popupMenu.classList.remove('active'); // Verwijder de 'active' class van het popup-menu
            menuIcon.innerHTML = burgerIcon; // Zet het icoon terug naar hamburgermenu
        }
    });

    // Dark Mode -> Bron: https://youtu.be/wodWDIdV9BY?si=YeAQkwO5TRM3A5ap + https://developer.mozilla.org/en-US/docs/Web/API/Element/classList + https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage (Geïnspireerd ook eigen gemaakt)
    const darkModeToggle = document.querySelector('nav ul li:nth-child(2)'); // Selecteer de tweede li in de navigatie
    const body = document.body; // Verkrijg de body van het document

    // Controleer of dark mode eerder is ingeschakeld en pas dit toe
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode'); // Voeg de 'dark-mode' class toe aan de body
    }

    // Voeg een klik event toe voor de dark mode toggle
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode'); // Toggle de 'dark-mode' class op de body

        // Sla de voorkeur op in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled'); // Sla in dat dark mode is ingeschakeld
        } else {
            localStorage.setItem('dark-mode', 'disabled'); // Sla in dat dark mode is uitgeschakeld
        }
    });

    // Geluid -> Techniek gebruikt ook bij Programeren
    const thirdListItem = document.getElementById('play-sound'); // Selecteer het derde li-element
    const audio = new Audio('audio/sprookjesbos.mp3'); // Maak een nieuw audio-element aan

    // Voeg een klik-event toe aan het derde li-element
    thirdListItem.addEventListener('click', function() {
        // Controleer of het nummer al speelt
        if (!audio.paused && audio.currentTime > 0) {
            audio.pause(); // Pauzeer het nummer als het speelt
            audio.currentTime = 0; // Zet het nummer terug naar het begin
        } else {
            audio.play(); // Speel het nummer af
        }
    });

    // Vuurwerk-effect -> Bron: https://youtu.be/hq_tKbSzAiY?si=pIt_AIdtApSarWIW (Geïnspireerd ook eigen gemaakt)
    const fireworksTrigger = document.getElementById('fireworks-trigger'); // Selecteer het element voor vuurwerk

    // Voeg een klik-event toe voor het vuurwerk-effect
    fireworksTrigger.addEventListener('click', function() {
        confetti({ // Genereer confetti
            particleCount: 100, // Aantal deeltjes
            spread: 70, // Verspreiding van de deeltjes
            origin: { y: 0.6 } // Beginpositie van de deeltjes
        });
    });
});
