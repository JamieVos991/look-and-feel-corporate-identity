document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const closeButton = document.getElementById("close");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuBg = document.querySelector(".menu-bg");
    const body = document.body;
  
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      menuBg.classList.add("active");
      body.classList.add("no-scroll");
    });
  
    closeButton.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBg.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  
    menuBg.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBg.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
  