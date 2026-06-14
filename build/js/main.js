const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    // this toggle-btn class only appears inside of our js. it's nowhere found in the index.html. tailwind needs to see our js files as well.
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
