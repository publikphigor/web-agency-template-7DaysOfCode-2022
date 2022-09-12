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

const tl1 = gsap.timeline({ repeat: -1, repeatDelay: 10 });
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
  scale: 0,
  opacity: 0.5,
  duration: 1,
});

tl1.from(".hero-text-container p", {
  y: 300,
  opacity: 0,
  duration: 0.5,
});

tl1.from(".hero-buttons", {
  y: 300,
  opacity: 0,
  duration: 0.5,
});

let tl2 = gsap.timeline();
ScrollTrigger.create({
  trigger: "#about",
  start: "top 95%",
  end: `${document.querySelector("#about").offsetHeight} 5%`,
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

let tl3 = gsap.timeline();
ScrollTrigger.create({
  trigger: ".about-subsection",
  start: "top 95%",
  end: "bottom 5%",
  onEnter: () => {
    tl3.from("[data-mission]", {
      x: 500,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: Power3.out,
    });

    tl3.from("[data-mission-img]", {
      y: -300,
      opacity: 0,
      duration: 0.5,
      ease: Power3.out,
    });
  },

  onEnterBack: () => {
    tl3.from("[data-mission]", {
      x: -500,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: Power3.out,
    });

    tl3.from("[data-mission-img]", {
      opacity: 0,
      duration: 1,
      ease: Power3.out,
    });
  },
});

let tl4 = gsap.timeline();
ScrollTrigger.create({
  trigger: "#statistics",
  start: "top 95%",
  end: "bottom 5%",
  onEnter: () => {
    tl4.from("#statistics", {
      height: 0,
      opacity: 0,
      duration: 1,
    });
  },

  onEnterBack: () => {
    tl4.from("#statistics", {
      height: 0,
      opacity: 0,
      duration: 1,
    });
  },
});

let tl5 = gsap.timeline();
ScrollTrigger.create({
  trigger: ".cta",
  start: "top 95%",
  end: "bottom 5%",
  onEnter: () => {
    tl5.from(".cta", {
      width: 0,
      opacity: 0,
      duration: 1,
    });
  },

  onEnterBack: () => {
    tl5.from(".cta", {
      width: 0,
      opacity: 0,
      duration: 1,
    });
  },
});

let tl6 = gsap.timeline();
ScrollTrigger.create({
  trigger: "#testimonial-container",
  start: "top 95%",
  end: "bottom 5%",
  onEnter: () => {
    tl6.from("#testimonial-container", {
      y: 300,
      opacity: 0,
      duration: 0.5,
    });
  },

  onEnterBack: () => {
    tl6.from("#testimonial-container", {
      y: -300,
      opacity: 0,
      duration: 0.5,
    });
  },
});

let tl7 = gsap.timeline();
gsap.set("footer li", { y: 100, opacity: 0 });
ScrollTrigger.create({
  trigger: "footer",
  start: "top 90%",
  end: "bottom 5%",
  onEnter: () => {
    tl7.from("[data-footer-sect]", {
      x: -500,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
      ease: Power4.out,
    });
    tl7.fromTo(
      "footer p",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: Power4.out,
      }
    );

    tl7.fromTo(
      "footer li",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: Power3.out,
      }
    );

    tl7.fromTo(
      ".newsletter input",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: Power2.out,
      }
    );
  },
});
