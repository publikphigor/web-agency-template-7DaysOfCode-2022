const mobileNavbarButton = document.querySelector(".burger");
const mobileNavbar = document.querySelector(".mobile-navbar");

const desktopDropdownButton = document.querySelector(".has-submenu");
const desktopDropdown = document.querySelector(".submenu");

const mobileDropdownButton = document.querySelector(".mobile-submenu-dropdown");
const mobileDropdown = document.querySelector(".mobile-submenu");
const dropdownListItems = document.querySelectorAll(".mobile-submenu li");
const aboutButton = document.querySelector(".about-btn");

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

dropdownListItems.forEach((item) => {
  item.addEventListener("click", openAndCloseNavbar);
});
aboutButton.addEventListener("click", openAndCloseNavbar);
mobileNavbarButton.addEventListener("click", openAndCloseNavbar);
mobileDropdownButton.addEventListener("click", openAndCloseMobileSubmenu);

desktopDropdownButton.addEventListener("mouseover", openDesktopSubmenu);
desktopDropdown.addEventListener("mouseout", closeDesktopSubmenu);

// scroll to top
const goToTopButton = document.querySelector(".go-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    goToTopButton.style.display = `block`;
  } else {
    goToTopButton.style.display = `none`;
  }
}

goToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
