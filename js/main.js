const mobileNavbarButton = document.querySelector(".burger");
const mobileNavbar = document.querySelector(".mobile-navbar");

const desktopDropdownButton = document.querySelector(".has-submenu");
const desktopDropdown = document.querySelector(".submenu");

const mobileDropdownButton = document.querySelector(".mobile-submenu-dropdown");
const mobileDropdown = document.querySelector(".mobile-submenu");

function openAndCloseNavbar() {
  mobileNavbar.classList.toggle("active");
  mobileNavbarButton.classList.toggle("active");
}

function openDesktopSubmenu() {
  desktopDropdown.classList.add("active");
  desktopDropdownButton
    .querySelector("ion-icon")
    .setAttribute("name", "remove-outline");
}

function closeDesktopSubmenu() {
  desktopDropdown.classList.remove("active");
  desktopDropdownButton
    .querySelector("ion-icon")
    .setAttribute("name", "add-outline");
}

function openAndCloseMobileSubmenu() {
  mobileDropdown.classList.toggle("active");
  let icon = mobileDropdownButton.querySelector("ion-icon");
  if (icon.getAttribute("name") === "add-outline") {
    icon.setAttribute("name", "remove-outline");
  } else {
    icon.setAttribute("name", "add-outline");
  }
}

mobileNavbarButton.addEventListener("click", openAndCloseNavbar);

mobileDropdownButton.addEventListener("click", openAndCloseMobileSubmenu);
desktopDropdownButton.addEventListener("mouseover", openDesktopSubmenu);
desktopDropdown.addEventListener("mouseout", closeDesktopSubmenu);

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
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      startCounter();
    }
  });
});

observer.observe(statisticsSection);
