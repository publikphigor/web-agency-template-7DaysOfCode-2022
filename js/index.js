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
