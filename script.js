// ========== TRADUÇÃO MANUAL (PT / EN / ES / IT) ==========
(function () {
  const langButtons = document.querySelectorAll('.lang-switch button');
  const langs = ['pt', 'en', 'es', 'it'];

  function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
      const value = el.getAttribute('data-' + lang);
      if (value) {
        // innerHTML em vez de textContent — permite <span>, <br/>, <strong> nos data-*
        el.innerHTML = value;
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

  try {
    const saved = localStorage.getItem('lang');
    if (saved && langs.indexOf(saved) !== -1) setLanguage(saved);
  } catch (e) {}
})();

// ========== ANO NO FOOTER ==========
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// ========== SMOOTH SCROLL (links internos) ==========
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
