// eslint-disable-next-line import/extensions
import Swiper from './swiper-bundle.min.js';

const initSlider = () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper', {
    // Optional parameters

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"></span>`;
      },
    },
    breakpoints: {
      // when window width is >= 320px
      1024: {
        slidesPerView: 3,
        spaceBetween: '1.786%',
      },

    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
  });
};

export default initSlider;
