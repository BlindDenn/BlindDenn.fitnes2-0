import Swiper from './vendor/swiper';

const initTrainersSwiper = () => {
  var trainersSwiper = new Swiper(".trainers-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      556: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1066: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // 1500: {
      //   slidesPerView: 5,
      //   spaceBetween: 40,
      // },
    },
    grabCursor: true,
    autoHeight: false,
    loop: true,
    navigation: {
      nextEl: ".trainers__swiper-button-next",
      prevEl: ".trainers__swiper-button-prev",
    },
  });
};

export { initTrainersSwiper };
