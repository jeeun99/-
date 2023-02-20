var swiper = new Swiper(".slide2", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
});
var swiper = new Swiper(".slide3", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
});

const $btn_purchase = document.querySelector(".btn_purchase");
const $btn_close = document.querySelector(".btn_close");
const $buyPage = document.querySelector(".buyPage");

$btn_purchase.addEventListener("click", () => {
  $buyPage.classList.add("on");
});
$btn_close.addEventListener("click", () => {
  $buyPage.classList.remove("on");
});
