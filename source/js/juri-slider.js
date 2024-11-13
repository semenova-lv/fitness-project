import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const slider = new Swiper('.juri__slider', {
  modules: [Navigation],
  loop: 'true',

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
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
});

export {slider};
