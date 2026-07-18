/* 890 Cruikshank Ridge — interactions */
(function () {
  "use strict";

  function track(eventName, properties) {
    if (!window.posthog || typeof window.posthog.capture !== "function") return;
    window.posthog.capture(eventName, properties || {});
  }

  /* ---- Sticky nav shading ---- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      track("mobile_menu_toggled", { open: links.classList.contains("open") });
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      var href = link.getAttribute("href") || "";
      var text = (link.textContent || "").trim();
      if (href.indexOf("tel:") === 0) {
        track("phone_link_clicked", { label: text, href: href });
      } else if (href.indexOf(".pdf") !== -1) {
        track("feature_sheet_clicked", { label: text, href: href });
      } else if (href.charAt(0) === "#") {
        track("section_link_clicked", { label: text, href: href });
      }
    });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Lightbox gallery ---- */
  var items = Array.prototype.slice.call(document.querySelectorAll("#gallery-grid .gitem img"));
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var current = 0;

  function open(i) {
    current = i;
    lbImg.src = items[i].getAttribute("data-full") || items[i].src;
    lbImg.alt = items[i].alt;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    track("gallery_photo_opened", {
      index: i + 1,
      image: items[i].getAttribute("data-full") || items[i].getAttribute("src")
    });
  }
  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
  function step(d) {
    current = (current + d + items.length) % items.length;
    lbImg.src = items[current].getAttribute("data-full") || items[current].src;
    lbImg.alt = items[current].alt;
    track("gallery_photo_navigated", {
      direction: d > 0 ? "next" : "previous",
      index: current + 1,
      image: items[current].getAttribute("data-full") || items[current].getAttribute("src")
    });
  }

  items.forEach(function (img, i) {
    img.parentElement.addEventListener("click", function () { open(i); });
  });
  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
  document.getElementById("lbNext").addEventListener("click", function (e) { e.stopPropagation(); step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  /* ---- Footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
