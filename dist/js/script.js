window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__items'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
  });

  // video-play

  const play = document.querySelectorAll('.play'),
    videoWrapper = document.querySelector('.promo__video-wrapper'),
    wrapper = document.querySelector('.wrapper'),
    close = document.querySelector('.close');

  play.forEach((val) => {
    val.addEventListener('click', () => {
      videoWrapper.style.display = 'block';
      wrapper.innerHTML =
        '<iframe src="https://www.youtube.com/embed/KvUgaHTNit4?autoplay=1&amp;mute=1&amp;enablejsapi=1&amp;fs=1&amp;modestbranding=1" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';
    });
  });

  close.addEventListener('click', () => {
    let iframe = document.querySelector('iframe');
    videoWrapper.style.display = 'none';
    iframe.remove();
  });
});

$('.slider-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: true,
  dots: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000
});

