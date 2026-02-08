// Animasi menu toggle saat diklik
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    alert('Menu button clicked! Anda bisa menambahkan fungsi menu dropdown di sini jika diperlukan.');
});

// Validasi form kontak
const contactForm = document.querySelector('.connect-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.');
        contactForm.reset();
    });
}

// Efek scroll halus untuk semua tautan internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});