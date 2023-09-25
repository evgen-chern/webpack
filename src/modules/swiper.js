import Swiper from 'swiper/bundle';

const swiper = () => new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    // dynamicBullets: true,
    // type: 'fraction',
    type: 'progressbar'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  simulateTouch: true,
  autoHeight: false,
  slidesPerView: 2,
  //Отключение навигации если слайдов меньше чем указано
  watchOverflow: true,
  spaceBetween: 30,
  // slidesPerGroup: 2,
  centeredSlides: false,
  // initialSlide: 0,
  // grid: {
  //   rows: 2
  // }
  loop: false,
  freeMode: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  speed: 500,
  // direction: 'vertical'
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // }
  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: true,
  //   limitRotation: true 
  // }
  // effect: 'cube',
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.8
  // }
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true
  // }
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  
});

swiper();