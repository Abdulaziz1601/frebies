window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header'),
        burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.menu'),
        menuItems = document.querySelectorAll('.menu__item');


    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger--active');
        menu.classList.toggle('menu--active');
        header.classList.toggle('header--active');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                burger.classList.remove('header__burger--active');
                menu.classList.remove('menu--active');
                header.classList.remove('header--active');
                document.body.style.overflow = '';
            });
        });

        if (document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

});