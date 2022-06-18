const mobileNavbarButton = document.querySelector('.burger');
const mobileNavbar = document.querySelector('.mobile-navbar');

const desktopDropdownButton = document.querySelector('.has-submenu');
const desktopDropdown = document.querySelector('.submenu');

const mobileDropdownButton = document.querySelector('.mobile-submenu-dropdown');
const mobileDropdown = document.querySelector('.mobile-submenu');

function openAndCloseNavbar () {
    mobileNavbar.classList.toggle('active');
    mobileNavbarButton.classList.toggle('active');
}

function openDesktopSubmenu () {
    desktopDropdown.classList.add('active');
}

function closeDesktopSubmenu () {
    desktopDropdown.classList.remove('active');
}

function openAndCloseMobileSubmenu () {
    mobileDropdown.classList.toggle('active');
}

mobileNavbarButton.addEventListener('click', openAndCloseNavbar);

mobileDropdownButton.addEventListener('click', openAndCloseMobileSubmenu);
desktopDropdownButton.addEventListener('mouseover', openDesktopSubmenu);
desktopDropdown.addEventListener('mouseout', closeDesktopSubmenu);