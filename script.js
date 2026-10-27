// --- script.js ---

document.addEventListener('DOMContentLoaded', function() {
    
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Cek apakah user sebelumnya sudah mengaktifkan dark mode
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Terapkan tema saat halaman dimuat
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeBtn.textContent = '☀️ Light Mode';
    }

    // Fungsi ketika tombol diklik
    themeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Cek kondisi setelah diklik
        if (body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️ Light Mode';
            localStorage.setItem('darkMode', 'true'); // Simpan pilihan user
        } else {
            themeBtn.textContent = '🌙 Dark Mode';
            localStorage.setItem('darkMode', 'false');
        }
    });

});
