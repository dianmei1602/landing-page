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