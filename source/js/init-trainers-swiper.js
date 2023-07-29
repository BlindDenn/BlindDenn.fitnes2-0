import Swiper from './vendor/swiper';

const initTrainersSwiper = () => {
  var trainersSwiper = new Swiper(".trainers-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1550: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1900: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
    grabCursor: false,
    autoHeight: false,
    loop: true,
    navigation: {
      nextEl: ".trainers__swiper-button-next",
      prevEl: ".trainers__swiper-button-prev",
    },
  });
};

export {initTrainersSwiper};
