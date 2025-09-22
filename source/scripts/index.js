/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const headerLogo = document.querySelector('.header__logo');
const userMenu = document.querySelector('.user-menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  headerLogo.classList.toggle('header__logo--hidden');
  userMenu.classList.toggle('user-menu--active');
  if (mobileMenu.open) {
    mobileMenu.close();
  } else {
    mobileMenu.show();
  }
});
