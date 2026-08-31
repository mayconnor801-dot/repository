window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    if (cards.length > 1) {
        setInterval(() => {
            // Remueve la clase active
            cards[currentIndex].classList.remove('active');
            
            // Calcula el siguiente índice
            currentIndex = (currentIndex + 1) % cards.length;
            
            // Añade la clase active
            cards[currentIndex].classList.add('active');
        }, 3500);
    }
});