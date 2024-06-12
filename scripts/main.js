// const headerSwiper = new Swiper(".header__swiper", {
//   loop: true,

//   navigation: {
//     nextEl: '.header__swiper-button-next',
//     prevEl: '.header__swiper-button-prev',
//   },
// });

const headerSwiper = new Swiper('.header__swiper', {
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
