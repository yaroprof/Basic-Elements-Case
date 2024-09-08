document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('fullscreen');
        if (sidebar.classList.contains('fullscreen')) {
            menuToggle.style.right = '20px';
            menuToggle.style.top = '20px';
        } else {
            menuToggle.style.right = 'initial';
            menuToggle.style.left = '50%';
            menuToggle.style.transform = 'translateX(-50%)';
        }
    });
});



// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('menu-toggle');
//     const sidebar = document.querySelector('sidebar');

//     menuToggle.addEventListener('click', () => {
//         sidebar.classList.toggle('fullscreen');
//         // menuToggle.classList.toggle('active'); // Додаємо або прибираємо клас 'active'
//     });
    
// });
