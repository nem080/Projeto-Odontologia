// document.querySelector('.menu-toggle').addEventListener('click', function () {
//     document.querySelector('.menu-mobile').classList.toggle('active');
// });

// Abrir/fechar menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu-mobile').classList.toggle('active');
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', function (event) {
    const menuMobile = document.querySelector('.menu-mobile');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menuToggle.contains(event.target) && !menuMobile.contains(event.target)) {
        menuMobile.classList.remove('active');
    }
});

// Fechar menu ao clicar em qualquer item do menu
document.querySelectorAll('.menu-mobile ul li a').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.menu-mobile').classList.remove('active');
    });
});
