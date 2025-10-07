document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Banner button scrolls to contact section
    const bannerBtn = document.querySelector('.banner button');
    if (bannerBtn) {
        bannerBtn.addEventListener('click', function () {
            const contact = document.getElementById('contact');
            if (contact) {
                contact.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Simple gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            const overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.8)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = 1000;

            const imgLarge = document.createElement('img');
            imgLarge.src = this.src;
            imgLarge.alt = this.alt;
            imgLarge.style.maxWidth = '90vw';
            imgLarge.style.maxHeight = '90vh';
            imgLarge.style.boxShadow = '0 0 30px #000';

            overlay.appendChild(imgLarge);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});
