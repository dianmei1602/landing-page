const menuIcon = document.querySelector('.menu box-icon');
    const menuDiv = document.querySelector('.menu');
    const navElement = document.querySelector('nav');

    menuDiv.addEventListener('click', () => {
        if (menuIcon.getAttribute('name') === 'menu') {
            menuIcon.setAttribute('name', 'window-close');
            navElement.classList.add('open'); // Tambahkan kelas 'open'
        } else {
            menuIcon.setAttribute('name', 'menu');
            navElement.classList.remove('open'); // Hapus kelas 'open'
        }
    });
// WINDOW SCROLL
function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);
setActiveNav();

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('h-scroll');
    } else {
        header.classList.remove('h-scroll');
    }
});

// SMTP GMAIL
document.getElementById("leadForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Mencegah reload halaman
  
    // Ambil data dari form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMessage = document.getElementById("statusMessage");
  
    // Validasi sederhana
    if (!name || !email || !message) {
      statusMessage.textContent = "Harap isi semua kolom!";
      statusMessage.style.color = "red";
      return;
    }
  
    // Kirim data ke backend
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (!response.ok) throw new Error("Gagal mengirim data!");
  
      statusMessage.textContent = "Pesan berhasil dikirim!";
      statusMessage.style.color = "green";
  
      // Reset form
      document.getElementById("leadForm").reset();
    } catch (error) {
      statusMessage.textContent = "Terjadi kesalahan, coba lagi!";
      statusMessage.style.color = "red";
    }
  });
  