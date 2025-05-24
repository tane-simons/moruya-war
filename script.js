window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    const transparency = scrollY/100;

    header.style.backgroundColor = `rgba(18, 18, 18, ${transparency})`;
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });

    const bookingCTA = card.querySelector('.booking-cta');
    if (bookingCTA) {
        bookingCTA.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
});