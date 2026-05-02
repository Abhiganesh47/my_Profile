//  main.js  —  Entry point: wires all modules together

document.addEventListener("DOMContentLoaded", () => {

  // 1. Render all content from data
  Renderer.renderAll(portfolioData);

  // 2. Init theme toggle (reads localStorage / system preference)
  ThemeManager.init();

  // 3. Init scroll features (back-to-top, active nav, progress bar)
  ScrollManager.init();

  // 4. Init animations (reveal, typing, skill bars, counters, mobile nav)
  AnimationManager.init(portfolioData.personal.typingPhrases);

  console.log("%c🚀 Portfolio loaded", "color:#00ff88;font-weight:bold;font-size:14px;");
});