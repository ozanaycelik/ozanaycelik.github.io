(function () {
  "use strict";

  var S = window.SITE;
  var LANGS = ["tr", "en", "de"];
  var root = document.documentElement;
  var lang = LANGS.indexOf(root.lang) > -1 ? root.lang : "tr";

  var MONTHS = {
    tr: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    de: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  };

  var ICONS = {
    erp: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 17.5h7M17.5 14v7"/>',
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
    web: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8M12 18v4M2 9h20"/>',
    team: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M22 21a7 7 0 0 0-4-6.3"/>'
  };

  // ---------- yardımcılar ----------
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    return v[lang] != null ? v[lang] : v.tr;
  }
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, S.ui);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function ym(s) {
    if (!s) return t(S.ui.labels.present);
    var p = s.split("-");
    return MONTHS[lang][parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // ---------- render ----------
  function renderStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(get(el.getAttribute("data-i18n")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = t(get(el.getAttribute("data-i18n-aria")));
      el.setAttribute("aria-label", v);
      el.setAttribute("title", v);
    });
    document.querySelectorAll('[data-bind="location"]').forEach(function (el) {
      el.textContent = t(S.person.location);
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function renderStats() {
    $("stats").innerHTML = S.ui.stats.map(function (s) {
      return '<li><strong>' + esc(s.value) + '</strong><span>' + esc(t(s.label)) + '</span></li>';
    }).join("");
  }

  function renderAbout() {
    $("aboutText").innerHTML = t(S.about).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }

  function renderSkills() {
    $("skillsGrid").innerHTML = S.skills.map(function (g) {
      return '<article class="skill reveal">' +
        '<div class="skill__icon"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[g.icon] + '</svg></div>' +
        '<h3>' + esc(t(g.title)) + '</h3>' +
        '<p>' + esc(t(g.note)) + '</p>' +
        '<ul class="chips">' + g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + '</ul>' +
        '</article>';
    }).join("");
    var items = S.integrations.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
    $("integrations").innerHTML = items;
  }

  function renderTimeline() {
    $("timeline").innerHTML = S.experience.map(function (e, i) {
      var current = !e.period.to;
      return '<li class="tl reveal' + (current ? " tl--current" : "") + '">' +
        '<div class="tl__date">' + esc(ym(e.period.from)) + ' — ' + esc(ym(e.period.to)) + '</div>' +
        '<div class="tl__body">' +
          '<h3>' + esc(t(e.title)) + '</h3>' +
          '<p class="tl__co">' + (e.link ? '<a href="' + esc(e.link) + '" target="_blank" rel="noopener">' + esc(e.company) + '</a>' : esc(e.company)) +
            (e.place ? ' · ' + esc(e.place) : '') + '</p>' +
          '<ul>' + t(e.bullets).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + '</ul>' +
        '</div></li>';
    }).join("");
  }


  function renderProjects() {
    $("projectsGrid").innerHTML = S.projects.map(function (p) {
      return '<article class="proj reveal"><h3>' + esc(p.name) + '</h3><p>' + esc(t(p.tag)) + '</p>' +
        '<ul class="tags">' + p.stack.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + '</ul></article>';
    }).join("");
    $("reposGrid").innerHTML = S.repos.map(function (r) {
      return '<a class="repo reveal" href="' + esc(r.url) + '" target="_blank" rel="noopener">' +
        '<div class="repo__top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M8 4v12"/></svg><strong>' + esc(r.name) + '</strong></div>' +
        '<p>' + esc(t(r.desc)) + '</p>' +
        '<span class="repo__lang"><i class="lang-' + esc(r.lang.toLowerCase().replace("#", "s")) + '"></i>' + esc(r.lang) + '</span></a>';
    }).join("");
  }

  function renderEducation() {
    $("eduList").innerHTML = S.education.map(function (e) {
      return '<li class="reveal"><span class="list__meta">' + esc(e.years) + '</span><strong>' + esc(t(e.degree)) + '</strong><span>' + esc(t(e.school)) + '</span></li>';
    }).join("");
    $("certList").innerHTML = S.certificates.map(function (c) {
      return '<li class="reveal"><span class="list__meta">' + esc(t(c.issuer)) + (c.year ? ' · ' + esc(c.year) : '') + '</span><strong>' + esc(t(c.name)) + '</strong></li>';
    }).join("");
    $("langList").innerHTML = S.languages.map(function (l) {
      return '<li><div><strong>' + esc(t(l.name)) + '</strong><span>' + esc(t(l.level)) + '</span></div>' +
        '<div class="bar" role="presentation"><i style="width:' + l.value + '%"></i></div></li>';
    }).join("");
  }

  function renderContact() {
    var p = S.person, L = S.ui.labels;
    var rows = [
      { icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
        label: t(L.email), value: p.email, href: "mailto:" + p.email, copy: p.email },
      { icon: '<path d="M12 21s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
        label: t(L.location), value: t(p.location), href: "https://www.google.com/maps/search/?api=1&query=Pendik%2C%20%C4%B0stanbul" },
      { icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-6.9A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.5 6.4 6.9a3.4 3.4 0 0 0-.9 2.6V22"/>',
        label: "GitHub", value: "github.com/ozanaycelik", href: p.github },
      { icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
        label: "LinkedIn", value: "linkedin.com/in/ozanay-çelik", href: p.linkedin }
    ];
    $("contactList").innerHTML = rows.map(function (r) {
      var ext = /^https?:/.test(r.href) ? ' target="_blank" rel="noopener"' : '';
      return '<li><a class="contact__item" href="' + esc(r.href) + '"' + ext + '>' +
        '<span class="contact__icon"><svg viewBox="0 0 24 24" aria-hidden="true">' + r.icon + '</svg></span>' +
        '<span><small>' + esc(r.label) + '</small><strong>' + esc(r.value) + '</strong></span></a>' +
        (r.copy ? '<button type="button" class="copy" data-copy="' + esc(r.copy) + '">' + esc(t(L.copy)) + '</button>' : '') +
        '</li>';
    }).join("");
  }

  function renderAll() {
    root.lang = lang;
    renderStatic();
    renderStats();
    renderAbout();
    renderSkills();
    renderTimeline();
    renderProjects();
    renderEducation();
    renderContact();
    observeReveal();
  }

  // ---------- etkileşim ----------
  var io = "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;

  function observeReveal() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("is-in");
    });
  }

  document.addEventListener("click", function (e) {
    var lb = e.target.closest("[data-lang]");
    if (lb) {
      lang = lb.getAttribute("data-lang");
      store("lang", lang);
      renderAll();
      return;
    }
    var cp = e.target.closest("[data-copy]");
    if (cp && navigator.clipboard) {
      navigator.clipboard.writeText(cp.getAttribute("data-copy")).then(function () {
        cp.textContent = t(S.ui.labels.copied);
        cp.classList.add("is-done");
        setTimeout(function () { cp.textContent = t(S.ui.labels.copy); cp.classList.remove("is-done"); }, 1600);
      });
    }
  });

  $("themeBtn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store("theme", next);
  });

  var nav = $("nav"), menuBtn = $("menuBtn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.focus(); }
  });

  $("printBtn").addEventListener("click", function () { window.print(); });

  // aktif menü bağlantısı
  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
  }

  var topbar = document.querySelector(".topbar");
  window.addEventListener("scroll", function () { topbar.classList.toggle("is-scrolled", window.scrollY > 8); }, { passive: true });

  $("year").textContent = new Date().getFullYear();
  renderAll();
})();
