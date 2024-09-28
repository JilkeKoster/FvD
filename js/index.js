console.log("Hallo Wereld");

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
});
