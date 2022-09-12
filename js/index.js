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
setInterval(nextSlide, 7000);

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

// ===== GSAP Animations
const heroSmallText = document.querySelector(".hero-text-container .small-caps");
const heroBigText = document.querySelector(".hero-text-container .main-header");
const heroParas = document.querySelector(".hero-text-container p");
gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top 20%",
    end: "bottom center",
  },
});

tl1.from(".hero-text-container", {
  height: 0,
  duration: 0.5,
});

tl1.from(heroSmallText, {
  y: 300,
  opacity: 0,
  duration: 0.5,
});

tl1.from(heroBigText, {
  x: -500,
  opacity: 0,
  duration: 0.5,
});

tl1.from(".hero-image-container", {
  scale: 0.2,
  opacity: 0.5,
  duration: 1,
});

tl1.from(".hero-text-container p", {
  y: 500,
  opacity: 0,
  duration: 0.5,
});

let tl2 = gsap.timeline();
ScrollTrigger.create({
  trigger: "#about",
  start: "top 70%",
  end: `${document.querySelector("#about").offsetHeight} 10%`,
  markers: true,
  onEnter: () => {
    tl2.from(".abt_img", {
      y: 300,
      duration: 0.5,
    });

    tl2.from("[data-abt-heading]", {
      y: 300,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
    });

    tl2.from("[data-abt-para]", {
      y: 300,
      stagger: 0.2,
      opacity: 0,
      duration: 0.5,
    });
  },
  onEnterBack: () => {
    tl2.from("[data-abt-para]", {
      y: -300,
      stagger: 0.2,
      opacity: 0,
      duration: 0.5,
    });

    tl2.from(".abt_img", {
      y: -300,
      opacity: 0,
      duration: 0.5,
    });

    tl2.from("[data-abt-heading]", {
      y: -300,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    });
  },
});

// tl2.from(".about-image-container", {
//   left: 300,
//   opacity: 0,
//   duration: 0.5,
// });
