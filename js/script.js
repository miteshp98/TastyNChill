"use strict";

const slides = document.querySelectorAll(".testimonal-slider");
const sliderButtons = document.querySelectorAll(".slider-button");

function handleNavbarToggle() {
  const navbar = document.querySelector(".navbar-collapse");
  const header = document.querySelector(".header-container");
  const closeNavbar = document.querySelector(".navbar-close");

  header.addEventListener("click", function (e) {
    const navbarToggleBtn = e.target.closest(".navbar-toggler");

    if (navbarToggleBtn) {
      if (!navbar.classList.contains("navbar-open")) {
        navbar.classList.add("navbar-open");
        document.querySelector("body").style.overflow = "hidden";
      } else {
        return;
      }
    }
  });

  closeNavbar.addEventListener("click", function (e) {
    navbar.classList.remove("navbar-open");
    document.querySelector("body").style.overflow = "auto";
  });
}
handleNavbarToggle();

sliderButtons.forEach((button, index) => {
  button.addEventListener("click", function (e) {
    sliderButtons.forEach((btn) => {
      btn.classList.remove("active-slide");
    });

    if (!button.classList.contains("active-slide")) {
      checkValue(index, button);
    }
  });
});

function handleSlider(value) {
  slides.forEach((slider) => {
    slider.style.transform = `translateX(${value}%)`;
  });
}

function checkValue(index, button) {
  if (index == 0) {
    handleSlider("0");
    button.classList.add("active-slide");
  } else if (index == 1) {
    handleSlider("-101");
    button.classList.add("active-slide");
  } else if (index == 2) {
    handleSlider("-201");
    button.classList.add("active-slide");
  }
}

function handleActiveTab() {
  const navLink = document.querySelectorAll(".nav-link");

  let currentPage = window.location.pathname;

  if (currentPage === "/" || currentPage === "") {
    currentPage = "index.html";
  }

  navLink.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (linkPage === "/" && currentPage === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    link.addEventListener("click", function (e) {
      navLink.forEach((lnk) => lnk.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

handleActiveTab();
