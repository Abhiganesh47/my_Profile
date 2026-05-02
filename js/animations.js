//  animations.js  —  Reveal, typing, skill bars, counters
const AnimationManager = (() => {

  //  Scroll Reveal 
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    const io  = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        io.unobserve(e.target);
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
  }

  //  Skill Bars
  function initSkillBars() {
    const bars = document.querySelectorAll(".bar-fill");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.width = e.target.dataset.width + "%";
        io.unobserve(e.target);
      });
    }, { threshold: 0.3 });
    bars.forEach(b => io.observe(b));
  }

  //  Typing Effect
  function initTyping(phrases) {
    const el = document.getElementById("typing-text");
    if (!el || !phrases?.length) return;
    let pi = 0, ci = 0, deleting = false;
    function step() {
      const phrase = phrases[pi];
      el.textContent = phrase.slice(0, deleting ? --ci : ++ci);
      if (!deleting && ci === phrase.length) {
        deleting = true;
        return setTimeout(step, 1800);
      }
      if (deleting && ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
      setTimeout(step, deleting ? 38 : 78);
    }
    step();
  }

  //  Counter Animation
  function initCounters() {
    const els = document.querySelectorAll(".stat-num[data-target]");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const target = parseInt(e.target.dataset.target, 10);
        const suffix = e.target.dataset.suffix || "";
        let count = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          count = Math.min(count + step, target);
          e.target.textContent = count + suffix;
          if (count >= target) clearInterval(timer);
        }, 35);
        io.unobserve(e.target);
      });
    }, { threshold: 0.5 });
    els.forEach(el => io.observe(el));
  }

  //  Mobile Nav hamburger (mobile) ───────────────────────────────
  function initMobileNav() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    if (!hamburger || !mobileMenu) return;
    hamburger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open);
      hamburger.innerHTML = open ? "✕" : "☰";
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.innerHTML = "☰";
      });
    });
  }

  function init(phrases) {
    initReveal();
    initSkillBars();
    initTyping(phrases);
    initCounters();
    initMobileNav();
  }

  return { init };
})();