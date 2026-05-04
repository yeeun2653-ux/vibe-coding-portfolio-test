(function () {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.getElementById("primary-nav");
  const dropdown = document.querySelector(".nav-item--dropdown");
  const dropdownBtn = document.getElementById("work-with-me-btn");
  const submenu = document.getElementById("work-submenu");

  function closeMobileNav() {
    if (!header || !navToggle || !siteNav) return;
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function openMobileNav() {
    if (!header || !navToggle) return;
    header.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const open = header.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
          closeMobileNav();
        }
      });
    });
  }

  function setSubmenuOpen(open) {
    if (!dropdown || !dropdownBtn || !submenu) return;
    dropdown.classList.toggle("is-open", open);
    dropdownBtn.setAttribute("aria-expanded", open ? "true" : "false");
    submenu.hidden = !open;
  }

  if (dropdownBtn && submenu && dropdown) {
    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const willOpen = !dropdown.classList.contains("is-open");
      setSubmenuOpen(willOpen);
    });

    document.addEventListener("click", function () {
      setSubmenuOpen(false);
    });
  }

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeMobileNav();
    }
  });
})();
