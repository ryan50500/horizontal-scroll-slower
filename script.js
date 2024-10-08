let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".slide");
let carouselWidth;
let slideWidth;
let currentPos = 0;

function init() {
  carouselWidth = carousel.getBoundingClientRect().width;
  slideWidth = carouselWidth / slides.length;
  document.body.style.height = `${
    carouselWidth - (window.innerWidth - window.innerHeight)
  }px`;
}

function setCarouselWidth() {
  let totalWidth = 0;
  slides.forEach((slide) => {
    totalWidth += slide.offsetWidth;
  });

  carousel.style.width = `${totalWidth}px`;
}

function animate() {
  init();
  setCarouselWidth();
  currentPos = window.scrollY;
  carousel.style.transform = `translateX(${-currentPos}px)`;
  requestAnimationFrame(animate);
}

animate();
