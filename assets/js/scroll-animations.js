// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    // Configuration de l'observateur
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Créer l'observateur
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Appliquer la classe d'animation
                entry.target.classList.add('animate-in');
                // Arrêter l'observation après l'animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Ajouter les animations aux titres
    document.querySelectorAll('section h2').forEach((el) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Ajouter des animations au contenu À propos
    document.querySelectorAll('.about-text p').forEach((el, index) => {
        el.classList.add('animation-slideInLeft');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    // Ajouter des animations aux highlight items
    document.querySelectorAll('.highlight-item').forEach((el, index) => {
        el.classList.add('animation-slideInRight');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    // Ajouter des animations aux catégories de compétences
    document.querySelectorAll('.skill-category').forEach((el, index) => {
        el.classList.add('animation-scaleIn');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    // Ajouter des animations aux cartes de projets
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('animation-slideInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    // Ajouter des animations aux cartes de contact
    document.querySelectorAll('.contact-card').forEach((el, index) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

// Ajouter des animations aux formulaires
    document.querySelectorAll('.form-group').forEach((el, index) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Ajouter des animations aux tech tags
    document.querySelectorAll('.tech-tag').forEach((el, index) => {
        el.classList.add('animation-scaleIn');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.08}s`;
        observer.observe(el);
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});


