let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

if (menu && navbar) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });
}

const backToTop = document.createElement('button');
backToTop.type = 'button';
backToTop.className = 'back-to-top';
backToTop.setAttribute('aria-label', 'Voltar ao início');
backToTop.title = 'Voltar ao início';
backToTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
document.body.appendChild(backToTop);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const pageLoader = document.querySelector('.page-loader');

if (pageLoader) {
    const minimumDisplayTime = 650;
    const loaderStartedAt = performance.now();

    const hidePageLoader = () => {
        const remainingDisplayTime = Math.max(
            0,
            minimumDisplayTime - (performance.now() - loaderStartedAt)
        );

        window.setTimeout(() => {
            pageLoader.classList.add('is-hidden');
            pageLoader.addEventListener('transitionend', () => pageLoader.remove(), { once: true });
            window.setTimeout(() => pageLoader.remove(), 400);
        }, remainingDisplayTime);
    };

    if (document.readyState === 'complete') {
        hidePageLoader();
    } else {
        window.addEventListener('load', hidePageLoader, { once: true });
    }
}

function updateScrollControls() {
    if (menu && navbar) {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }

    backToTop.classList.toggle('is-visible', window.scrollY > 450);
}

window.addEventListener('scroll', updateScrollControls, { passive: true });
updateScrollControls();

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('has-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(
        '.about, .features, .pricing, .trainers, .banner, .review, .blogs, .article-hero, .article-body'
    ).forEach(section => {
        section.classList.add('reveal');
        revealObserver.observe(section);
    });
}

if (typeof Swiper !== 'undefined') {
    if (document.querySelector('.home-slider')) {
        new Swiper('.home-slider', {
            spaceBetween: 20,
            speed: 800,
            effect: 'fade',
            grabCursor: true,
            rewind: true,
            centeredSlides: true,
            autoplay: prefersReducedMotion.matches ? false : {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.home-slider .swiper-pagination',
                clickable: true,
            },
        });
    }

    if (document.querySelector('.review-slider')) {
        new Swiper('.review-slider', {
            spaceBetween: 20,
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
            },
        });
    }

    if (document.querySelector('.blogs-slider')) {
        new Swiper('.blogs-slider', {
            spaceBetween: 20,
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.blogs-slider .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                991: { slidesPerView: 3 },
            },
        });
    }
}