import Swiper from 'swiper';
// import 'swiper/css';
import {Navigation} from 'swiper/modules';

const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation],
  slidesPerView: 1,

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev'
  },
});

export {reviewsSlider};
