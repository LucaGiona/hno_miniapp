/* Online/Offline-Anzeige und Service-Worker-Registrierung */
import { $ } from './utils.js';

export function initPwa() {
  const net = () => { $('netstate').hidden = navigator.onLine; };
  window.addEventListener('online', net);
  window.addEventListener('offline', net);
  net();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    // Module werden verzögert ausgeführt: 'load' kann schon gefeuert haben
    const register = () => navigator.serviceWorker.register('sw.js').catch(() => { /* ohne Offline-Cache weiter */ });
    if (document.readyState === 'complete') register();
    else window.addEventListener('load', register);
  }
}
