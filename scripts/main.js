// const headerSwiper = new Swiper(".header__swiper", {
//   loop: true,

//   navigation: {
//     nextEl: '.header__swiper-button-next',
//     prevEl: '.header__swiper-button-prev',
//   },
// });

const headerSwiper = new Swiper(".header__swiper", {
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const workSwiper = new Swiper(".work__swiper", {
  loop: true,
  slidesPerView: 3,
  speed: 800,
  centeredSlides: true,

  autoplay: {
    delay: 2500,
  },
});

const feedbackSwiper = new Swiper(".feedback__swiper", {
  loop: true,
  speed: 950,
  spaceBetween: 90,

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Video scripts

const radioForVideo = document.querySelector("#video__radio");

document.addEventListener("scroll", () => {
  radioForVideo.checked = false;
  document.querySelector(".video__item").muted = !radioForVideo.checked;
});

document.querySelector(".video__open-close").addEventListener("click", event => {
  if (document.querySelector("#video__radio").checked) {
    radioForVideo.checked = false;
    document.querySelector(".video__item").muted = !radioForVideo.checked;
  } else {
    console.log("true");
    document.querySelector(".video").setAttribute("style", "display: none;");
    document.querySelector(".video__item").muted = !radioForVideo.checked;
  }
});

radioForVideo.addEventListener("change", () => {
  document.querySelector(".video__item").muted = !radioForVideo.checked;
});
