import Swiper from './vendor/swiper';

const initReviewsSwiper = () => {
  var reviewSwiper = new Swiper('.reviews-swiper', {
    spaceBetween: 20,
    grabCursor: true,
    autoHeight: false,
    loop: false,
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
  });
};

export {initReviewsSwiper};
