document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Banner button scrolls to contact section
    const bannerBtn = document.querySelector('.banner button');
    if (bannerBtn) {
        bannerBtn.addEventListener('click', function() {
            const contact = document.getElementById('contact');
            if (contact) {
                window.scrollTo({
                    top: contact.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    }
});
