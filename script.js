// Menunggu seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Interaktivitas Tombol "Pesan Sekarang"
    const tombolPesan = document.querySelectorAll('.btn-pesan');

    tombolPesan.forEach((tombol) => {
        tombol.addEventListener('click', (e) => {
            // Mengambil nama paket wisata dari elemen kartu terdekat
            const kartuPaket = e.target.closest('.paket-card');
            const namaPaket = kartuPaket.querySelector('h3').innerText;
            const hargaPaket = kartuPaket.querySelector('.harga').innerText;

            // Menampilkan konfirmasi sederhana
            const konfirmasi = confirm(`Apakah Anda yakin ingin memesan:\n${namaPaket}\n cleanHarga: ${hargaPaket}?`);

            if (konfirmasi) {
                alert(`Terima kasih! Pemesanan untuk ${namaPaket} berhasil diproses. Tim kami akan segera menghubungi Anda.`);
            }
        });
    });

    // 2. Navigasi Smooth Scroll (Efek Pergerakan Halus Saat Menu Diklik)
    const linkNavigasi = document.querySelectorAll('nav a[href^="#"]');

    linkNavigasi.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Efek Perubahan Warna Header Saat Di-scroll
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
        }
    });

});