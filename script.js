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