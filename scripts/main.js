const headerSwiper = new Swiper(".header__swiper", {
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
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
const resultsText = document.querySelectorAll(".results__point");

let iteration = 0;

let addText = (block, text, c = 1) => {
  setTimeout(() => {
    block.innerHTML = text.slice(0, c);
    c++;

    if (c <= text.length) {
      addText(block, text, c);
    }
  }, 100);
};

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

          let cBlock = text[iteration].querySelector(".gold-text");
          addText(cBlock, element.value);

          text[iteration + 1].classList.remove("qustions__table-parameter-off");

          resultsText[iteration].querySelector(".gold-text").innerHTML =
            element.value;

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

          resultsText[iteration].querySelector(".gold-text").innerHTML =
            element.value;

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
        document.querySelector(".qustions__input").value = "Не знаю";
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

        let cBlock = text[iteration].querySelector(".gold-text");
        addText(cBlock, element.value);

        resultsText[iteration].querySelector(".gold-text").innerHTML =
          el.querySelector(".qustions__card-radio").value;

        text[iteration + 1].classList.remove("qustions__table-parameter-off");

        iteration++;

        if (iteration !== 0) {
          document
            .querySelector(".qustions__back")
            .classList.add("qustions__back-on");
        }
      } else {
        document.querySelector(".qustions__input").value = "Не знаю";

        resultsText[iteration].querySelector(".gold-text").innerHTML =
          el.querySelector(".qustions__card-radio").value;

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

        resultsText[iteration].querySelector(".gold-text").innerHTML =
          document.querySelector(".qustions__input").value;

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

        resultsText[iteration].querySelector(".gold-text").innerHTML =
          document.querySelector(".qustions__input").value;

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
  text[iteration].classList.add("qustions__table-parameter-off");

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
let mBtn = document.querySelector(".inputs-container").querySelector(".submit");
let mAgree = document
  .querySelector(".inputs-container")
  .querySelector(".agree-checkbox");

let btnActive = (arr, bool, btn, animation = false) => {
  bool = !new Set(arr).has(0);

  btn.disabled = !bool;

  if (animation) {
    if (bool) {
      btn.classList.add("submit-active");
    } else {
      btn.classList.remove("submit-active");
    }
  }
};

document.querySelectorAll(".subquestions__form-radio").forEach((e) => {
  if (e.checked) {
    canSend[0] = 1;
  }
});

document.querySelectorAll(".subquestions__input").forEach((e) => {
  if (e.getAttribute("type") === "tel") {
    canSend[2] = Number(e.value.length === 18);
  } else {
    canSend[1] = Number(e.value.length > 0);
  }
});

canSend[3] = Number(mAgree.checked);

boolSend = !new Set(canSend).has(0);

btnActive(canSend, boolSend, mBtn, true);

document.querySelectorAll(".subquestions__form-radio").forEach((e) => {
  e.addEventListener("click", () => {
    canSend[0] = 1;
    btnActive(canSend, boolSend, mBtn, true);
  });
});

document.querySelectorAll(".subquestions__input").forEach((e) => {
  e.addEventListener("keyup", () => {
    if (e.getAttribute("type") === "tel") {
      canSend[2] = Number(e.value.length === 18);

      document.querySelectorAll(".input-tel").forEach((element) => {
        element.value = e.value;
      });
    } else {
      canSend[1] = Number(e.value.length > 0);

      if (e.getAttribute("name") === "name") {
        document.querySelectorAll(".name-input").forEach((element) => {
          element.value = e.value;
        });
      }
    }

    btnActive(canSend, boolSend, mBtn, true);
  });
});

mAgree.addEventListener("change", () => {
  canSend[3] = Number(mAgree.checked);
  btnActive(canSend, boolSend, mBtn, true);

  document.querySelectorAll(".agree-checkbox").forEach((element) => {
    element.checked = mAgree.checked;
  });
});

mBtn.addEventListener("click", (event) => {
  document
    .querySelector(".subquestions__form")
    .setAttribute("style", "display: none;");
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
});

// Present Form

const pForm = document.querySelector(".present__form");

let pFormTrue = [0, 0];
let pBool = false;
let pBtn = pForm.querySelector(".submit");
let pAgree = pForm.querySelector(".agree-checkbox");

pFormTrue[1] = Number(pAgree.checked);

document.querySelectorAll(".present__form-input").forEach((e) => {
  if (e.getAttribute("type") === "tel") {
    e.addEventListener("keyup", () => {
      pFormTrue[0] = Number(e.value.length === 18);

      btnActive(pFormTrue, pBool, pBtn);
    });
  }
});

pAgree.addEventListener("change", () => {
  pFormTrue[1] = Number(pAgree.checked);

  btnActive(pFormTrue, pBool, pBtn);
});

// Exit Form

const eForm = document.querySelector(".exit__form");

let eFormTrue = [0, 0];
let eBool = false;
let eBtn = eForm.querySelector(".submit");
let eAgree = eForm.querySelector(".agree-checkbox");

eFormTrue[1] = Number(eAgree.checked);

document.querySelectorAll(".exit__form-input").forEach((e) => {
  if (e.getAttribute("type") === "tel") {
    e.addEventListener("keyup", () => {
      eFormTrue[0] = Number(e.value.length === 18);

      btnActive(eFormTrue, eBool, eBtn);
    });
  }
});

eAgree.addEventListener("change", () => {
  eFormTrue[1] = Number(eAgree.checked);

  btnActive(eFormTrue, eBool, eBtn);
});

// POP-ON form

const popForm = document.querySelector(".pop-on__form");

let popFormTrue = [0, 0];
let popBool = false;
let popBtn = popForm.querySelector(".submit");
let popAgree = popForm.querySelector(".agree-checkbox");

popFormTrue[1] = Number(popAgree.checked);

document.querySelectorAll(".pop-on__form-input").forEach((e) => {
  if (e.getAttribute("type") === "tel") {
    e.addEventListener("keyup", () => {
      popFormTrue[0] = Number(e.value.length === 18);

      btnActive(popFormTrue, popBool, popBtn);
    });
  }
});

popAgree.addEventListener("change", () => {
  popFormTrue[1] = Number(popAgree.checked);

  btnActive(popFormTrue, popBool, popBtn);
});

// Zoom

Fancybox.bind("[data-fancybox]", {});

// Masks

$(".input-tel").mask("+7 (999) 999-99-99");

// POP-ON

document.querySelector(".menu__btn").addEventListener("click", () => {
  document.querySelector(".pop-on").classList.toggle("pop-on-on");
  document.body.classList.toggle("body-pop");
});

document.querySelector(".pop-on__close").addEventListener("click", () => {
  document.querySelector(".pop-on").classList.remove("pop-on-on");
  document.body.classList.remove("body-pop");
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("pop-on")) {
    document.querySelector(".pop-on").classList.remove("pop-on-on");
    document.body.classList.remove("body-pop");
  }
});

// POP-THANKS

document.querySelector(".pop-thanks__close").addEventListener("click", () => {
  document.querySelector(".pop-thanks").classList.remove("pop-on-on");
  document.body.classList.remove("body-pop");
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("pop-thanks")) {
    document.querySelector(".pop-thanks").classList.remove("pop-on-on");
    document.body.classList.remove("body-pop");
  }
});

// To php

let userID = Math.round(Math.random() * 10000);

const mainForm = document.querySelector(".subquestions__form");

mainForm.addEventListener("submit", mainFormSand);

async function mainFormSand(event) {
  event.preventDefault();

  const mainFormData = new FormData(mainForm);
  let cText = document.querySelector(".qustions__input").value;
  let nameWithId = `${mainFormData.get("name")} id(${userID})`;

  mainFormData.append("PM", cText);
  mainFormData.append("name", nameWithId);

  let response = await fetch("php/mail.php", {
    method: "POST",
    body: mainFormData,
    mode: "no-cors",
  });

  if (response.ok) {
    console.log("Main Email was send");
  } else {
    console.log("Main Email Has ERROR!");
  }
}

const presentForm = document.querySelector(".present__form");

presentForm.addEventListener("submit", presentFormSand);

async function presentFormSand(event) {
  event.preventDefault();

  const presentFormData = new FormData(presentForm);
  let cText = document.querySelector(".qustions__input").value;
  let nameWithId = `${presentFormData.get("name")} id(${userID})`;

  presentFormData.append("PM", cText);
  presentFormData.append("name", nameWithId);

  let response = await fetch("php/mail.php", {
    method: "POST",
    body: presentFormData,
    mode: "no-cors",
  });

  if (response.ok) {
    document.querySelector(".pop-thanks").classList.toggle("pop-on-on");
    document.body.classList.toggle("body-pop");
    console.log("Present Email was send");
  } else {
    console.log("Present Email Has ERROR!");
  }
}

const exitForm = document.querySelector(".exit__form");

exitForm.addEventListener("submit", exitFormSand);

async function exitFormSand(event) {
  event.preventDefault();

  const exitFormData = new FormData(exitForm);
  let cText = document.querySelector(".qustions__input").value;
  let nameWithId = `${exitFormData.get("name")} id(${userID})`;

  exitFormData.append("PM", cText);
  exitFormData.append("name", nameWithId);

  let response = await fetch("php/mail.php", {
    method: "POST",
    body: exitFormData,
    mode: "no-cors",
  });

  if (response.ok) {
    document.querySelector(".pop-thanks").classList.toggle("pop-on-on");
    document.body.classList.toggle("body-pop");
    console.log("Exit Email was send");
  } else {
    console.log("Exit Email Has ERROR!");
  }
}

popForm.addEventListener("submit", popFormSand);

async function popFormSand(event) {
  event.preventDefault();

  const popFormData = new FormData(popForm);
  let cText = document.querySelector(".qustions__input").value;
  let nameWithId = `${popFormData.get("name")} id(${userID})`;

  popFormData.append("PM", cText);
  popFormData.append("name", nameWithId);

  let response = await fetch("php/mail.php", {
    method: "POST",
    body: popFormData,
    mode: "no-cors",
  });

  if (response.ok) {
    document.querySelector(".pop-on").classList.remove("pop-on-on");
    document.querySelector(".pop-thanks").classList.toggle("pop-on-on");
    console.log("Pop Email was send");
  } else {
    console.log("Pop Email Has ERROR!");
  }
}

// Header opacity

if (window.pageYOffset === 0) {
  document.querySelector(".header__menu").classList.add("header__menu-off");
} else {
  document.querySelector(".header__menu").classList.remove("header__menu-off");
}

window.addEventListener("scroll", (event) => {
  if (window.pageYOffset === 0) {
    document.querySelector(".header__menu").classList.add("header__menu-off");
  } else {
    if (
      document.querySelector(".header__menu").getBoundingClientRect().bottom >=
      document.querySelector(".header").getBoundingClientRect().bottom
    ) {
      document.querySelector(".header__menu").classList.add("header__menu-off");
    } else {
      document
        .querySelector(".header__menu")
        .classList.remove("header__menu-off");
    }
  }
});
