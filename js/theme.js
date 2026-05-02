//  theme.js  —  Dark / Light theme toggle

const ThemeManager = (() => {
  const STORAGE_KEY = "portfolio-theme";
  const btn = () => document.getElementById("themeBtn");
  const root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const b = btn();
    if (!b) return;
    b.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    b.innerHTML = theme === "dark"
      ? `<span class="theme-icon">☀</span><span class="theme-label">Light</span>`
      : `<span class="theme-icon">◑</span><span class="theme-label">Dark</span>`;
    b.classList.toggle("is-light", theme === "light");
  }

  function toggle() {
    const current = root.getAttribute("data-theme") || "dark";
    apply(current === "dark" ? "light" : "dark");
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    apply(saved || preferred);
    const b = btn();
    if (b) b.addEventListener("click", toggle);
  }

  return { init, toggle };
})();