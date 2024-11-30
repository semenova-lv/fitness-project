import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const juruSlider = new Swiper('.juri__slider', {
  modules: [Navigation],
  loop: 'true',
  spaceBetween: 40,

  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    }
  },
});

const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation],
  slidesPerView: 1,

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev'
  },
});


juruSlider.init();
reviewsSlider.init();
