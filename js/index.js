var swiper = new Swiper(".slide1", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    961: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  centeredSlides: true,
  loop: true,
});

const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", () => {
  $ham.classList.toggle("on");
  $gnb.classList.toggle("on");
});
