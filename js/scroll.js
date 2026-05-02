//  scroll.js  —  Back-to-top, active nav, scroll progress bar

const ScrollManager = (() => {

  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      const show = window.scrollY > 400;
      btn.classList.toggle("visible", show);
    }, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const links    = document.querySelectorAll(".nav-links a");
    if (!links.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(a => a.classList.remove("active"));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add("active");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(s => io.observe(s));
  }

  function initProgressBar() {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;
    window.addEventListener("scroll", () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = ((window.scrollY / total) * 100).toFixed(2) + "%";
    }, { passive: true });
  }

  function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", e => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function init() {
    initBackToTop();
    initActiveNav();
    initProgressBar();
    initSmoothLinks();
  }

  return { init };
})();