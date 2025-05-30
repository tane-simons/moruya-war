window.addEventListener('scroll', () => {
    const homeHeader = document.getElementById('home-header');
    const scrollY = window.scrollY;
    const transparency = scrollY/100;
    if (homeHeader) {
        homeHeader.style.backgroundColor = `rgba(18, 18, 18, ${transparency})`;
    }
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

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const cta = document.getElementById('events-child-cta');
    const screenWidth = window.innerWidth;
    if (screenWidth > 820) {
        if (scrollY > 350) {
            cta.style.position = 'fixed'
            cta.style.bottom = '5vw';
            cta.style.right = '5vw';
            cta.style.transition = 'all 0.2s ease';
        } else {
            cta.style.position = 'relative';
            cta.style.bottom = '0';
            cta.style.right = '0';
            cta.style.transition = 'background-color 0.2s ease, color 0.2s ease';
        }
    } else {
        if (scrollY > 260) {
            cta.style.position = 'fixed'
            cta.style.bottom = '-1rem';
            cta.style.right = '5vw';
            cta.style.width = '90vw';
            cta.style.padding = '1rem 0';
            cta.style.boxShadow = '0 1rem 4rem var(--secondary-color)';
            cta.style.transition = 'background-color 0.2s ease, color 0.2s ease, right 0.2s ease';
        } else {
            cta.style.position = 'relative';
            cta.style.right = '0';
            cta.style.padding = '1rem 2rem';
            cta.style.width = 'fit-content';
            cta.style.boxShadow = '0 0.2rem 1rem var(--secondary-color)';
            cta.style.transition = 'background-color 0.3s ease, color 0.3s ease, right 0.3s ease';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const concertMapEl = document.getElementById('concert-map');
    const celebrationsMapEl = document.getElementById('celebrations-map');

    if (concertMapEl) {
        var concertMap = L.map('concert-map').setView([-35.9107, 150.0778], 17);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(concertMap);
        L.marker([-35.9107, 150.0778]).addTo(concertMap)
            .bindPopup('RSL Memorial Hall')
            .openPopup();
    }

    if (celebrationsMapEl) {
        var celebrationsMap = L.map('celebrations-map').setView([-35.9, 150.1], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(celebrationsMap);
        L.marker([-35.9101, 150.0810]).addTo(celebrationsMap)
            .bindPopup('CBD Tour Meeting Point')
            .openPopup();
        L.marker([-35.9011, 150.1365]).addTo(celebrationsMap)
        .bindPopup('Moruya Bunkers')
        .openPopup();
        L.marker([-35.9044, 150.1147]).addTo(celebrationsMap)
        .bindPopup('Moruya Granite Quarry')
        .openPopup();
    }
});