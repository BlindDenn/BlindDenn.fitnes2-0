import Swiper from './vendor/swiper';

let visibleSlides = [];

const getVisibleSlides = () => {
  visibleSlides = document.querySelectorAll('.slide-visible');
};

const addTabIndex = (arr) => {
  arr.forEach((item) => item.firstElementChild.setAttribute('tabindex', 0));
};

const clearTabIndex = (actualSwiper) => {
  actualSwiper.slides
      .filter((item) => item.firstElementChild.hasAttribute('tabindex'))
      .forEach((item) => item.firstElementChild.removeAttribute('tabindex'));
};

const onEventTabReassign = (actualSwiper) => {
  clearTabIndex(actualSwiper);
  getVisibleSlides();
  addTabIndex(visibleSlides);
};

const initTrainersSwiper = () => {
  var trainersSwiper = new Swiper('.trainers-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    grabCursor: false,
    autoHeight: false,
    loop: true,
    navigation: {
      nextEl: '.trainers__swiper-button-next',
      prevEl: '.trainers__swiper-button-prev',
    },
    watchSlidesProgress: true,
    slideVisibleClass: 'slide-visible',
    on: {
      init() {
        getVisibleSlides();
        addTabIndex(visibleSlides);
      },
    },
  });

  trainersSwiper.on('transitionEnd', () => onEventTabReassign(trainersSwiper));
  trainersSwiper.on('breakpoint', () => onEventTabReassign(trainersSwiper));

};

export {initTrainersSwiper};
