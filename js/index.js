var swiper = new Swiper(".slide1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    950: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  centeredSlides: true,
  loop: true,
});

const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  this.classList.toggle("on");
  $gnb.classList.toggle("on");
});
