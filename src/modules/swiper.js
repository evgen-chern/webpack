import Swiper from 'swiper/bundle';
const wrapper = document.querySelector('.wrapper');
const swiper =  new Swiper('.page', {
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",
  direction: "vertical",
  slidesPerView: 'auto',
  parallax: true,
  mousewheel: {
    sensitivity: 1,
  },
  watchOverflow: true,
  speed: 700,
  observer: true,
  observeParents: true,
  observeSlideChildrens: true,
  pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'page__bullet',
    bulletActiveClass: 'page__bullet_active',
  },
  scrollbar: {
    el: '.page__scroll',
    dragClass: 'page__drag-scroll',
    draggable: true
  },
  init: false,
  on: {
    init: function() {
      menuSlider();
      wrapper.classList.add('loaded');
    },
    slideChange: function() {
      menuSliderRemove();
      menuLinks[swiper.realIndex].classList.add('active');
    }
  },
});

let menuLinks = document.querySelectorAll('.menu__link');
function menuSlider() {
  if(menuLinks.length > 0) {
      menuLinks[swiper.realIndex].classList.add('active');
      for (let i = 0; i < menuLinks.length; i++) {
          const menuLink = menuLinks[i];
          menuLink.addEventListener("click", () => {
              menuSliderRemove()
              swiper.slideTo(i, 800);
              menuLink.classList.add('active');
          })
      }
  }
}

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.menu__link.active');
  if(menuLinkActive){
      menuLinkActive.classList.remove('active');
  }
} 

swiper.init();

const innerSwiper = new Swiper('.inner__swiper', {
  wrapperClass: "inner__wrapper",
  slideClass: "inner__slide",
  slidesPerView: 'auto',
  watchOverflow: true,
  speed: 700,
  observer: true,
  observeParents: true,
  observeSlideChildrens: true,
  pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'page__bullet',
    bulletActiveClass: 'page__bullet_active',
  },
  init: false,
});

innerSwiper.init()




