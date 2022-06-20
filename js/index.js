// Counter
const counters = document.querySelectorAll(".counter");
const speed = 200;

function startCounter() {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      if (count < target) {
        if (target > 100) {
          counter.innerText = count + 10;
        } else {
          counter.innerText = count + 1;
        }
        setTimeout(updateCount, 20);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });
}

let canCount;
const statisticsSection = document.querySelector("#statistics");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter();
      }
    });
  },
  { threshold: 0.6 }
);

observer.observe(statisticsSection);

// carousel slider
const carouselSlide = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

// carousel buttons
const nextSlideButton = document.querySelector(".next-slide");
const prevSlideButton = document.querySelector(".prev-slide");

// counter and size
let counter = 1;
const slideWidth = slides[0].clientWidth;
carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// next slide function

function nextSlide() {
  if (counter >= slides.length - 1) return;
  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function prevSlide() {
  if (counter <= 0) return;
  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  counter--;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

nextSlideButton.addEventListener("click", nextSlide);
prevSlideButton.addEventListener("click", prevSlide);
setInterval(nextSlide, 3000);

// loop back to first slide
carouselSlide.addEventListener("transitionend", () => {
  if (slides[counter].classList.contains("lastClone")) {
    carouselSlide.style.transition = "none";
    counter = slides.length - 2;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
  if (slides[counter].classList.contains("firstClone")) {
    carouselSlide.style.transition = "none";
    counter = slides.length - counter;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});
