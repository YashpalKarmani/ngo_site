// script.js - sidebar toggle and accessibility helpers
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");

  if (!hamburger || !nav) return;

  function openNav() {
    nav.classList.add("show");
    hamburger.setAttribute("aria-expanded", "true");
    // trap focus could be added here later
  }
  function closeNav() {
    nav.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    const isOpen = nav.classList.contains("show");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // close nav when link clicked (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 900 && nav.classList.contains("show")) closeNav();
    });
  });

  // close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("show")) closeNav();
  });

  // ensure nav closed on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && nav.classList.contains("show")) closeNav();
  });
});
