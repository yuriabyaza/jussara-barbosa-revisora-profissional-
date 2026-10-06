// ========== TRADUÇÃO MANUAL ==========
(function () {
  const langButtons = document.querySelectorAll('.lang-switch button');
  const defaultLang = 'pt';

  function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
      const value = el.getAttribute('data-' + lang);
      if (value) {
        el.textContent = value;
      }
    });
    langButtons.forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Carrega preferência salva
  try {
    const saved = localStorage.getItem('lang');
    if (saved && ['pt', 'en', 'es', 'it'].indexOf(saved) !== -1) {
      setLanguage(saved);
    }
  } catch (e) {}
})();

// ========== MENU MOBILE ==========
(function () {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); });
  });
})();

// ========== ANO NO FOOTER ==========
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();