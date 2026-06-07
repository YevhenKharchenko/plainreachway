import Swiper from 'swiper';
import 'swiper/css/bundle';

let faqSwiper;

faqSwiper = new Swiper('.faq-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 12,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 6,
      spaceBetween: 0,
      allowTouchMove: false,
      grabCursor: false,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.faq-swiper-container').classList.add('show');
    },
  },
});
