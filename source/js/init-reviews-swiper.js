import Swiper from './vendor/swiper';

const initReviewsSwiper = () => {
  var reviewSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    grabCursor: true,
    autoHeight: false,
    loop: false,
    navigation: {
      nextEl: ".reviews_swiper-button-next",
      prevEl: ".reviews_swiper-button-prev",
    },
  });
};

export { initReviewsSwiper };
