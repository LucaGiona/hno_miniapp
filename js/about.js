/* Info-Dialog "Über die App", erreichbar über den Info-Button oben in der Kopfzeile. */
import { $ } from './utils.js';

export function initAbout() {
  const btn = $('info-btn');
  const dialog = $('about-dialog');
  const closeBtn = $('about-close');
  if (!btn || !dialog) return;

  btn.addEventListener('click', () => dialog.showModal());
  if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
}
