let items = document.querySelectorAll(".item");
let slider = document.querySelector(".slider");
let sliderWidth;
let itemWidth;
let currentPos = 0;

function init() {
  sliderWidth = slider.getBoundingClientRect().width;
  itemWidth = sliderWidth / items.length;
  document.body.style.height = `${
    sliderWidth - (window.innerWidth - window.innerHeight)
  }px`;
}

function setSliderWidth() {
  let totalWidth = 0;
  items.forEach((item) => {
    totalWidth += item.offsetWidth;
  });

  slider.style.width = `${totalWidth}px`;
}

function animate() {
  setTimeout(() => {
    init();
    setSliderWidth();
    currentPos = window.scrollY;
    slider.style.transform = `translateX(${-currentPos}px)`;
    requestAnimationFrame(animate);
  }, 150); // Delay of half a second (500 milliseconds)
}

animate(); // Start the animation loop

animate();
