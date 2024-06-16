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
  slidesPerView: 1,
  speed: 800,
  centeredSlides: true,
  slidesPerView: "auto",

  autoplay: {
    delay: 2500,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

const feedbackSwiper = new Swiper(".feedback__swiper", {
  loop: true,
  speed: 950,
  spaceBetween: 90,
  slidesPerView: "auto",

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

document
  .querySelector(".video__open-close")
  .addEventListener("click", (event) => {
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

// Main form

const formItems = document.querySelectorAll(".qustions__item");
const titles = document.querySelectorAll(".qustions__title");
const point = document.querySelectorAll(".iteration__point");
const text = document.querySelectorAll(".qustions__table-parameter");

let iteration = 0;

formItems.forEach((el, ind) => {
  if (el.classList.contains("qustions__images")) {
    el.querySelectorAll("input").forEach((element) => {
      element.addEventListener("click", () => {
        if (iteration !== formItems.length - 1) {
          formItems[iteration].classList.remove("qustions__item-on");
          formItems[iteration + 1].classList.add("qustions__item-on");

          titles[iteration].classList.remove("qustions__title-on");
          titles[iteration + 1].classList.add("qustions__title-on");

          point[point.length - iteration - 1].classList.add(
            "iteration__point-viseted"
          );
          point[point.length - iteration - 2].classList.add(
            "iteration__point-active"
          );

          text[iteration].querySelector(".gold-text").innerHTML = element.value;
          text[iteration + 1].classList.remove("qustions__table-parameter-off")

          iteration++;

          if (iteration !== 0) {
            document
              .querySelector(".qustions__back")
              .classList.add("qustions__back-on");
          }
        } else {
          titles[iteration].classList.remove("qustions__title-on");
          document
            .querySelector(".qustions__back")
            .classList.remove("qustions__back-on");

          document
            .querySelector(".subquestions-block")
            .classList.remove("subquestions-off");

          document.querySelector(".lock").classList.remove("lock-off");

          document
            .querySelector(".qustions__block")
            .setAttribute("style", "display: none;");
          point.forEach((cPoint) => {
            cPoint.setAttribute(
              "class",
              "iteration__point iteration__point-viseted"
            );
          });
        }
      });
    });
  } else if (el.classList.contains("qustions__field")) {
    const cInput = el.querySelector(".qustions__input");

    el.querySelector(".qustions__card-radio").addEventListener("click", () => {
      if (iteration !== formItems.length - 1) {
        formItems[iteration].classList.remove("qustions__item-on");
        formItems[iteration + 1].classList.add("qustions__item-on");

        titles[iteration].classList.remove("qustions__title-on");
        titles[iteration + 1].classList.add("qustions__title-on");

        point[point.length - iteration - 1].classList.add(
          "iteration__point-viseted"
        );
        point[point.length - iteration - 2].classList.add(
          "iteration__point-active"
        );

        text[iteration].querySelector(".gold-text").innerHTML = element.value;
        text[iteration + 1].classList.remove("qustions__table-parameter-off")

        iteration++;

        if (iteration !== 0) {
          document
            .querySelector(".qustions__back")
            .classList.add("qustions__back-on");
        }
      } else {
        titles[iteration].classList.remove("qustions__title-on");
        document
          .querySelector(".qustions__back")
          .classList.remove("qustions__back-on");

        document
          .querySelector(".subquestions-block")
          .classList.remove("subquestions-off");

        document.querySelector(".lock").classList.remove("lock-off");

        document
          .querySelector(".qustions__block")
          .setAttribute("style", "display: none;");
        point.forEach((cPoint) => {
          cPoint.setAttribute(
            "class",
            "iteration__point iteration__point-viseted"
          );
        });
      }
    });

    el.querySelector(".qustions__field-next").addEventListener("click", () => {
      if (iteration !== formItems.length - 1) {
        formItems[iteration].classList.remove("qustions__item-on");
        formItems[iteration + 1].classList.add("qustions__item-on");

        titles[iteration].classList.remove("qustions__title-on");
        titles[iteration + 1].classList.add("qustions__title-on");

        point[point.length - iteration - 1].classList.add(
          "iteration__point-viseted"
        );
        point[point.length - iteration - 2].classList.add(
          "iteration__point-active"
        );

        iteration++;

        if (iteration !== 0) {
          document
            .querySelector(".qustions__back")
            .classList.add("qustions__back-on");
        }
      } else {
        titles[iteration].classList.remove("qustions__title-on");
        document
          .querySelector(".qustions__back")
          .classList.remove("qustions__back-on");

        document
          .querySelector(".subquestions-block")
          .classList.remove("subquestions-off");

        document.querySelector(".lock").classList.remove("lock-off");

        document
          .querySelector(".qustions__block")
          .setAttribute("style", "display: none;");
        point.forEach((cPoint) => {
          cPoint.setAttribute(
            "class",
            "iteration__point iteration__point-viseted"
          );
        });
      }
    });

    cInput.addEventListener("input", () => {
      if (cInput.value == "") {
        el.querySelector(".qustions__field-next").disabled = true;
      } else {
        el.querySelector(".qustions__field-next").disabled = false;
      }
    });
  }
});

//// Back btn

document.querySelector(".qustions__back").addEventListener("click", () => {
  formItems[iteration].classList.remove("qustions__item-on");
  formItems[iteration - 1].classList.add("qustions__item-on");

  titles[iteration].classList.remove("qustions__title-on");
  titles[iteration - 1].classList.add("qustions__title-on");

  point[point.length - iteration - 1].classList.remove(
    "iteration__point-active"
  );
  point[point.length - iteration].classList.remove("iteration__point-viseted");

  text[iteration].querySelector(".gold-text").innerHTML = "";
  text[iteration - 1].querySelector(".gold-text").innerHTML = "";
  text[iteration].classList.add("qustions__table-parameter-off")

  iteration--;

  if (iteration === 0) {
    document
      .querySelector(".qustions__back")
      .classList.remove("qustions__back-on");
  }
});

//// SendEmail

let canSend = [0, 0, 0, 0];
let boolSend = false;

let canISend = () => {
  canSend.forEach((e) => {
    boolSend = !!e;
  });

  console.log(boolSend);

  if (boolSend) {
    document
      .querySelector(".inputs-container")
      .querySelector(".submit").disabled = false;
    document
      .querySelector(".inputs-container")
      .querySelector(".submit")
      .classList.add("submit-active");
  } else {
    document
      .querySelector(".inputs-container")
      .querySelector(".submit").disabled = true;
    document
      .querySelector(".inputs-container")
      .querySelector(".submit")
      .classList.remove("submit-active");
  }
};

document.querySelectorAll(".subquestions__form-radio").forEach((e) => {
  e.addEventListener("click", () => {
    canSend[0] = 1;

    canISend();
  });
});

document.querySelectorAll(".subquestions__input").forEach((e, ind) => {
  e.addEventListener("input", () => {
    if (e.value == "") {
      if (e.getAttribute("type") == "tel") {
        canSend[2] = 0;
      } else {
        canSend[1] = 0;
      }
      
      canISend();
    } else {
      if (e.getAttribute("type") == "tel") {
        canSend[2] = 0;
      } else {
        canSend[1] = 0;
      }

      canISend();
    }
  })
})

const agreeSubqustions = document.querySelector(".inputs-container").querySelector(".agree-checkbox");

agreeSubqustions.addEventListener("change", () => {
  if (agreeSubqustions.checked) {
    canSend[3] = 1;
  } else {
    canSend[3] = 0;
  }
  canISend();
})

document.querySelector(".inputs-container").querySelector(".submit").addEventListener("click", event => {
  event.preventDefault();

  document.querySelector(".lock").classList.remove("lock__animation");
  document.querySelector(".thanks").classList.remove("thanks-off");
  document.querySelector(".results").classList.remove("results-off");
  document.querySelector(".present").classList.remove("present-off");
  document.querySelector(".banner").classList.remove("banner-off");
  document.querySelector(".exit").classList.remove("exit-off");
  document.querySelector(".work").classList.remove("work-off");
  document.querySelector(".example").classList.remove("example-off");
  document.querySelector(".quality").classList.remove("quality-off");
  document.querySelector(".feedback").classList.remove("feedback-off");
  document.querySelector(".youtube").classList.remove("youtube-off");
  document.querySelector(".other").classList.remove("other-off");
})

// Present Form

const pForm = document.querySelector(".present__form");

let pFormTrue = [0, 0];

document.querySelectorAll(".present__form-input").forEach(e => {
  e.addEventListener("input", () => {
    if (e.value == "") {
      pFormTrue[0] = 0
    } else {
      pFormTrue[0] = 1
    }
    if (pFormTrue[0] == 1 && pFormTrue[1] == 1) {
      pForm.querySelector(".submit").disabled = false
    } else {
      pForm.querySelector(".submit").disabled = true
    }
  })
})

pForm.querySelector(".agree-checkbox").addEventListener("change", () => {
  pFormTrue[1] = Boolean(pForm.querySelector(".agree-checkbox").checked)
  if (pFormTrue[0] == 1 && pFormTrue[1] == 1) {
    pForm.querySelector(".submit").disabled = false
  } else {
    pForm.querySelector(".submit").disabled = true
  }
})


// Exit Form

const eForm = document.querySelector(".exit__form");

let eFormTrue = [0, 0];

document.querySelectorAll(".exit__form-input").forEach(e => {
  if (e.getAttribute("type") == "tel") {
    e.addEventListener("input", () => {
      if (e.value == "") {
        eFormTrue[0] = 0
      } else {
        eFormTrue[0] = 1
      }
      if (eFormTrue[0] == 1 && eFormTrue[1] == 1) {
        eForm.querySelector(".submit").disabled = false
      } else {
        eForm.querySelector(".submit").disabled = true
      }
    })
  }
})

eForm.querySelector(".agree-checkbox").addEventListener("change", () => {
  eFormTrue[1] = Boolean(eForm.querySelector(".agree-checkbox").checked)
  if (eFormTrue[0] == 1 && eFormTrue[1] == 1) {
    eForm.querySelector(".submit").disabled = false
  } else {
    eForm.querySelector(".submit").disabled = true
  }
})