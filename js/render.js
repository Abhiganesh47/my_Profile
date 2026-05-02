//  render.js  —  Build DOM from portfolioData

const Renderer = (() => {

  const colorMap = {
    green:  "var(--green)",
    cyan:   "var(--cyan)",
    gold:   "#ffd700",
    purple: "var(--purple)"
  };

  //  helpers 
  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "className") node.className = v;
      else if (k === "innerHTML") node.innerHTML = v;
      else if (k === "style" && typeof v === "object")
        Object.assign(node.style, v);
      else node.setAttribute(k, v);
    });
    children.forEach(c => c && node.appendChild(
      typeof c === "string" ? document.createTextNode(c) : c
    ));
    return node;
  }

  function tag(name, cls, html) {
    const n = document.createElement(name);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  // Personal / Hero 
  function renderHero(p) {
    const nameEl = document.getElementById("hero-name");
    const tagEl  = document.getElementById("hero-available");
    const statsEl = document.getElementById("hero-stats");
    if (!p) return;

    if (nameEl) {
      const parts = p.name.split(" ");
      nameEl.innerHTML = `${parts.slice(0,-1).join(" ")}<br><span class="accent">${parts[parts.length-1]}.</span>`;
    }
    if (tagEl) tagEl.textContent = p.available ? "▶ Available for work" : "▶ Currently unavailable";
    if (statsEl) {
      statsEl.innerHTML = "";
      p.stats.forEach(s => {
        const div = tag("div", "stat");
        div.appendChild(tag("div", "stat-num", s.num.replace("+", `<span class="green">+</span>`)));
        div.appendChild(tag("div", "stat-label", s.label));
        statsEl.appendChild(div);
      });
    }
  }

  // About
  function renderAbout(about, personal) {
    const wrap = document.getElementById("about-text");
    if (!wrap || !about) return;
    wrap.innerHTML = "";
    about.paragraphs.forEach(p => {
      const para = tag("p", "", p);
      wrap.appendChild(para);
    });

    // Terminal JSON
    const term = document.getElementById("terminal-json");
    if (!term || !personal) return;
    term.innerHTML = `
      <div class="t-line"><span class="t-prompt">$ </span><span class="t-cmd">cat about.json</span></div>
      <div class="t-line t-out">{</div>
      <div class="t-line t-out">&nbsp;&nbsp;<span class="t-key">"name"</span>: <span class="t-str">"${personal.name}"</span>,</div>
      <div class="t-line t-out">&nbsp;&nbsp;<span class="t-key">"role"</span>: <span class="t-str">"${personal.title}"</span>,</div>
      <div class="t-line t-out">&nbsp;&nbsp;<span class="t-key">"location"</span>: <span class="t-str">"${personal.location}"</span>,</div>
      <div class="t-line t-out">&nbsp;&nbsp;<span class="t-key">"email"</span>: <span class="t-str">"${personal.email}"</span>,</div>
      <div class="t-line t-out">&nbsp;&nbsp;<span class="t-key">"open_to"</span>: [<span class="t-str">"full-time"</span>, <span class="t-str">"freelance"</span>],</div>
      <div class="t-line t-out">&nbsp;&nbsp;<span class="t-key">"status"</span>: <span class="t-str" style="color:var(--green);">"${personal.available ? 'available' : 'unavailable'}"</span></div>
      <div class="t-line t-out">}</div>
      <br>
      <div class="t-line"><span class="t-prompt">$ </span><span class="t-cmd">_</span></div>
    `;
  }

  // Education
  function renderEducation(education) {
    const wrap = document.getElementById("education-grid");
    if (!wrap || !education) return;
    wrap.innerHTML = "";
    education.forEach((edu, i) => {
      const card = tag("div", "edu-card reveal");
      card.innerHTML = `
        <div class="edu-icon">${edu.icon}</div>
        <div class="edu-body">
          <div class="edu-year">${edu.year}</div>
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-inst">${edu.institution}</div>
          <div class="edu-grade">${edu.grade}</div>
          <div class="edu-highlights">
            ${edu.highlights.map(h => `<span class="edu-tag">${h}</span>`).join("")}
          </div>
        </div>
      `;
      wrap.appendChild(card);
    });
  }

  // Skills 
  function renderSkills(skills) {
    const grid = document.getElementById("skills-grid");
    if (!grid || !skills) return;
    grid.innerHTML = "";
    skills.forEach(s => {
      const card = tag("div", "skill-card reveal");
      card.innerHTML = `
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-name">${s.category}</div>
        <div class="skill-tags">
          ${s.tags.map(t => `<span class="tag${t.active ? " active" : ""}">${t.name}</span>`).join("")}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderSkillBars(bars) {
    const wrap = document.getElementById("skill-bars");
    if (!wrap || !bars) return;
    wrap.innerHTML = "";
    bars.forEach(b => {
      const item = tag("div", "bar-item reveal");
      item.innerHTML = `
        <div class="bar-header">
          <span class="bar-label">${b.label}</span>
          <span class="bar-pct">${b.pct}%</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" data-width="${b.pct}" style="width:0"></div>
        </div>
      `;
      wrap.appendChild(item);
    });
  }

  // Projects
  function renderProjects(projects) {
    const grid = document.getElementById("projects-grid");
    if (!grid || !projects) return;
    grid.innerHTML = "";

    projects.forEach(p => {
      if (p.featured) {
        const card = tag("div", "project-card featured reveal");
        card.innerHTML = `
          <div class="featured-inner">
            <div>
              <div class="project-badge">⭐ Featured Project</div>
              <div class="project-title">${p.title}</div>
              <div class="project-desc">${p.desc}</div>
              <div class="project-stack">
                ${p.stack.map(s => `<span class="tag active">${s}</span>`).join("")}
              </div>
              <div class="project-links">
                <a href="${p.live}" class="project-link">↗ Live Demo</a>
                <a href="${p.github}" class="project-link">⌥ GitHub</a>
              </div>
            </div>
            <div class="project-visual">
              <div class="t-line" style="color:var(--muted);font-size:0.7rem;margin-bottom:0.75rem;">// system metrics</div>
              ${p.metrics.map(m => `
                <div class="t-line" style="margin-bottom:0.5rem;">
                  <span class="t-key">${m.key}</span>:
                  <span style="color:${colorMap[m.color] || "var(--text)"};">${m.val}</span>
                </div>
              `).join("")}
              <div style="height:1px;background:var(--border);margin:0.75rem 0;"></div>
              <div style="color:var(--green);font-size:0.7rem;">● all systems operational</div>
            </div>
          </div>
        `;
        grid.appendChild(card);
        return;
      }

      const card = tag("div", "project-card reveal");
      card.innerHTML = `
        <div class="project-num">// ${p.id}</div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-stack">
          ${p.stack.map(s => `<span class="tag active">${s}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${p.live}" class="project-link">↗ Live</a>
          <a href="${p.github}" class="project-link">⌥ GitHub</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Contact links
  function renderContact(personal) {
    const emailEl = document.getElementById("contact-email");
    const linksEl = document.getElementById("contact-links");
    if (!personal) return;
    if (emailEl) {
      emailEl.href = `mailto:${personal.email}`;
      emailEl.textContent = `${personal.email} →`;
    }
    if (linksEl) {
      const socials = [
        { label: "GitHub",     url: personal.github },
        { label: "LinkedIn",   url: personal.linkedin },
        { label: "Twitter / X",url: personal.twitter },
        { label: "Resume ↓",   url: personal.resume }
      ];
      linksEl.innerHTML = socials.map(s =>
        `<a href="${s.url}" class="contact-link" target="_blank" rel="noopener">${s.label}</a>`
      ).join("");
    }
  }

  // Footer
  function renderFooter(personal) {
    const el = document.getElementById("footer-name");
    if (el && personal) el.innerHTML = `designed &amp; built by <span>${personal.name}</span>`;
  }

  // Main
  function renderAll(data) {
    renderHero(data.personal);
    renderAbout(data.about, data.personal);
    renderEducation(data.education);
    renderSkills(data.skills);
    renderSkillBars(data.skillBars);
    renderProjects(data.projects);
    renderContact(data.personal);
    renderFooter(data.personal);
  }

  return { renderAll };
})();