var swiper = new Swiper(".slide1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
