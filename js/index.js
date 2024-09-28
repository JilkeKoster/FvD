console.log("Hallo Wereld"); // Log een bericht naar de console voor debugging

// Scrol animatie -> Bron: https://youtu.be/huVJW23JHKQ?si=S5cjHfQjpvrDcYnQ (Geïnspireerd ook eigen gemaakt)
document.addEventListener('DOMContentLoaded', function () { // Wacht tot de HTML volledig is geladen voordat je de code uitvoert
    // Selecteer alle elementen met de class 'blog-post' en sla ze op in een constante
    const blogPosts = document.querySelectorAll('.blog-post');

    // Opties voor de IntersectionObserver instellen
    const options = {
        threshold: 0.5, // 50% van het element moet zichtbaar zijn voordat de animatie begint
    };

    // Functie die wordt uitgevoerd wanneer een element in beeld komt
    const onIntersect = (entries, observer) => {
        // Loop door elk element dat wordt geobserveerd
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Controleer of het element zichtbaar is
                entry.target.classList.add('show'); // Voeg de 'show' class toe om de animatie te starten
                observer.unobserve(entry.target); // Stop met het observeren van dit element als het zichtbaar is
            }
        });
    };

    // Maak een nieuwe IntersectionObserver aan met de onIntersect functie en de opties
    const observer = new IntersectionObserver(onIntersect, options);

    // Observeer elk 'blog-post' element
    blogPosts.forEach(post => {
        observer.observe(post); // Begin met observeren van het blog-post element
    });

// Carusel onder aan de pagina: -> Bron: https://youtu.be/C9EWifQ5xqA?si=GWrwuQ9QHoD4XL1J + https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault (Geïnspireerd ook eigen gemaakt)
    // Carusel functionaliteit
    const slider = document.querySelector('.slider-container'); // Selecteer de slider container
    let isDown = false; // Houd bij of de muisklik actief is
    let startX; // Variabele voor de startpositie van de muis
    let scrollLeft; // Variabele voor de huidige scrollpositie

    // Wanneer de muisklik omlaag gaat
    slider.addEventListener('mousedown', (e) => {
        isDown = true; // Zet isDown op true
        slider.classList.add('active'); // Voeg de 'active' class toe aan de slider
        startX = e.pageX - slider.offsetLeft; // Bepaal de startpositie van de muis
        scrollLeft = slider.scrollLeft; // Sla de huidige scrollpositie op
    });

    // Wanneer de muis de slider verlaat
    slider.addEventListener('mouseleave', () => {
        isDown = false; // Zet isDown op false
        slider.classList.remove('active'); // Verwijder de 'active' class van de slider
    });

    // Wanneer de muisklik omhoog gaat
    slider.addEventListener('mouseup', () => {
        isDown = false; // Zet isDown op false
        slider.classList.remove('active'); // Verwijder de 'active' class van de slider
    });

    // Wanneer de muis beweegt over de slider
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Stop de functie als isDown niet true is
        e.preventDefault(); // Voorkom de standaard actie van de muis
        const x = e.pageX - slider.offsetLeft; // Bepaal de huidige muispositie
        const walk = (x - startX) * 2; // Bereken hoeveel er gescrold moet worden (versterk de beweging)
        slider.scrollLeft = scrollLeft - walk; // Scroll de slider naar links
    });
});
