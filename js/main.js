const navbar = document.querySelector(".navbar");

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuNav = document.querySelector(".mobile-menu-nav");
const menuOverlay = document.querySelector(".menu-overlay");
const closeButton = document.querySelector(".mobile-menu-close");

/* ==========================================
   Navbar al hacer scroll
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* ==========================================
   Clonar menú de escritorio
========================================== */

const desktopMenu = document.querySelector(".nav-links");

const clonedMenu = desktopMenu.cloneNode(true);

clonedMenu.classList.remove("nav-links");
clonedMenu.classList.add("mobile-menu-links");

mobileMenuNav.appendChild(clonedMenu);

/* ==========================================
   Abrir / cerrar menú
========================================== */

function openMenu() {

    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.classList.add("active");

}

function closeMenu() {

    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

    document.body.style.overflow = "";

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.classList.remove("active");

}

menuToggle.addEventListener("click", openMenu);

closeButton.addEventListener("click", closeMenu);

menuOverlay.addEventListener("click", closeMenu);

/* ==========================================
   Cerrar al pulsar un enlace
========================================== */

mobileMenuNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMenu);

});

/* ==========================================
   Cerrar con Escape
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMenu();
    }

});