const sectionTitle1 = document.querySelector(".section-title-1");
const sectionTitle2 = document.querySelector(".section-title-2");
const pickedWrapper = document.querySelector(".pick-card-wrapper");
const packageWrapper = document.querySelector(".packages-wrapper");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const featuredSections = document.querySelectorAll(".featured-section");
let featureIndex = 0;

leftArrow.addEventListener("click", () => {
  featureIndex--;
  slideFeaturedSection();
});
rightArrow.addEventListener("click", () => {
  featureIndex++;
  slideFeaturedSection();
});

function slideFeaturedSection() {
  featuredSections.forEach((section) => {
    section.classList.remove("show");
  });

  if (featureIndex < 0) {
    featureIndex = 2;
  }

  if (featureIndex > 2) {
    featureIndex = 0;
  }
  const ele = featuredSections[featureIndex];
  ele.classList.add("show");
}

// console.log(section_titles);
// console.log(window.innerHeight);

window.addEventListener("scroll", scrollEvent);

function scrollEvent() {
  let scrollValue = window.pageYOffset;

  if (scrollValue > 150) {
    sectionTitle1.classList.add("show");
    sectionTitle2.classList.remove("show");
    pickedWrapper.classList.add("slide-left");
  }

  if (scrollValue > 1330) {
    sectionTitle2.classList.add("show");
    sectionTitle1.classList.remove("show");
    packageWrapper.classList.add("slide-right");
  }

  if (scrollValue > 2000) {
    pickedWrapper.classList.remove("slide-left");
  }
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 100,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
