window.addEventListener('scroll', () => {
    const homeHeader = document.getElementById('home-header');
    const scrollY = window.scrollY;
    const transparency = scrollY/100;

    homeHeader.style.backgroundColor = `rgba(18, 18, 18, ${transparency})`;
});

document.querySelectorAll('.events-card').forEach(card => {
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

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
    if(navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '=';
        document.body.classList.remove('no-scroll');
    } else {
        navMenu.classList.add('active');
        hamburger.innerHTML = '&times;';
        document.body.classList.add('no-scroll');
    }
});

document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '&times;';
    });
});