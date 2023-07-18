import Swiper from './vendor/swiper';

const initSwiper = () => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    grabCursor: true,
    autoHeight: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export { initSwiper };
