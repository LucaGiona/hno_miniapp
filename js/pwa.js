/* Online/Offline-Anzeige, Service-Worker-Registrierung und Update-Hinweis */
import { $ } from './utils.js';

export function initPwa() {
  const net = () => { $('netstate').hidden = navigator.onLine; };
  window.addEventListener('online', net);
  window.addEventListener('offline', net);
  net();

  const banner = $('update-banner');
  if (banner) {
    const reloadBtn = $('update-reload');
    if (reloadBtn) reloadBtn.addEventListener('click', () => location.reload());
  }

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    // War die Seite schon von einem Service Worker kontrolliert? Nur dann ist ein
    // späterer Kontrollwechsel ein echtes Update und kein Erstinstallieren.
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hadController && banner) banner.hidden = false;
    });
    // Module werden verzögert ausgeführt: 'load' kann schon gefeuert haben
    const register = () => navigator.serviceWorker.register('sw.js').catch(() => { /* ohne Offline-Cache weiter */ });
    if (document.readyState === 'complete') register();
    else window.addEventListener('load', register);
  }
}
