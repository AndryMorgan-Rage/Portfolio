// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        
        // Rediriger vers Gmail avec le contenu pré-rempli
        const subject = encodeURIComponent(`Nouveau message de ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.open(`https://mail.google.com/mail/u/0/?view=cm&to=hei.andry.3@gmail.com&subject=${subject}&body=${body}`, '_blank');
        
        // Afficher un message de confirmation
        alert('Redirection vers votre client email. Complétez et envoyez le message!');
        
        // Reset form
        contactForm.reset();
    });
}
