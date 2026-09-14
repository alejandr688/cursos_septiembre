/* Preferencia visual local: se aplica antes de cargar los estilos. */
(() => {
  'use strict';
  const key = 'aprende-avanza.appearance';
  const options = ['system', 'light', 'dark', 'forest', 'sand'];
  const labels = { system: 'Automático', light: 'Claro', dark: 'Noche', forest: 'Bosque', sand: 'Arena' };
  const colors = { light: '#f7f8fc', dark: '#0c1423', forest: '#101c19', sand: '#faf5ec' };
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';
  let storageAvailable = true;
  try {
    const saved = localStorage.getItem(key);
    if (options.includes(saved)) preference = saved;
  } catch (_) { storageAvailable = false; }

  function apply() {
    const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    root.dataset.appearance = resolved;
    root.dataset.appearancePreference = preference;
    root.style.colorScheme = resolved === 'dark' || resolved === 'forest' ? 'dark' : 'light';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = colors[resolved];
    return resolved;
  }
  apply();

  function syncControls(announce = false) {
    const resolved = apply();
    const trigger = document.getElementById('appearance-toggle');
    if (!trigger) return;
    const description = preference === 'system' ? `Automático · ${labels[resolved]}` : labels[preference];
    trigger.setAttribute('aria-label', `Cambiar apariencia. Tema actual: ${description}`);
    trigger.title = `Cambiar apariencia: ${description}`;
    document.getElementById('appearance-current').textContent = labels[preference];
    document.querySelectorAll('[data-appearance-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.appearanceChoice === preference));
    });
    document.getElementById('appearance-system-description').textContent = `Sigue a tu dispositivo. Ahora: ${labels[media.matches ? 'dark' : 'light']}.`;
    document.getElementById('appearance-storage-note').hidden = storageAvailable;
    if (announce) document.getElementById('appearance-status').textContent = `Tema ${labels[resolved]} aplicado${preference === 'system' ? ' automáticamente' : ''}.`;
  }

  function init() {
    const trigger = document.getElementById('appearance-toggle');
    const dialog = document.getElementById('appearance-modal');
    if (!trigger || !dialog) return;
    syncControls();
    trigger.addEventListener('click', () => {
      document.querySelectorAll('dialog[open]').forEach(other => { if (other !== dialog) other.close(); });
      const menu = document.getElementById('mobile-nav');
      if (menu) menu.hidden = true;
      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle) { menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Abrir menú'); }
      dialog.showModal();
      document.body.classList.add('modal-open');
      trigger.setAttribute('aria-expanded', 'true');
      dialog.scrollTop = 0;
      dialog.querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
    });
    dialog.querySelectorAll('[data-close-appearance]').forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.querySelectorAll('[data-appearance-choice]').forEach(button => {
      button.addEventListener('click', () => {
        const chosen = button.dataset.appearanceChoice;
        if (!options.includes(chosen)) return;
        preference = chosen;
        try { localStorage.setItem(key, preference); storageAvailable = true; }
        catch (_) { storageAvailable = false; }
        syncControls(true);
        dialog.close();
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
    dialog.addEventListener('close', () => {
      trigger.setAttribute('aria-expanded', 'false');
      if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
    });
  }

  function systemChanged() { if (preference === 'system') syncControls(); else {
    const description = document.getElementById('appearance-system-description');
    if (description) description.textContent = `Sigue a tu dispositivo. Ahora: ${labels[media.matches ? 'dark' : 'light']}.`;
  } }
  if (media.addEventListener) media.addEventListener('change', systemChanged);
  else if (media.addListener) media.addListener(systemChanged);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = options.includes(event.newValue) ? event.newValue : 'system';
    syncControls();
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
