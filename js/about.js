/* Info-Dialog "Über die App", erreichbar über den Info-Button oben in der Kopfzeile. */
import { $ } from './utils.js';
import { t } from './i18n.js';

export function initAbout() {
  const btn = $('info-btn');
  const dialog = $('about-dialog');
  const closeBtn = $('about-close');
  if (!btn || !dialog) return;

  btn.addEventListener('click', () => {
    dialog.showModal();
    // Modal soll oben aufgehen: sonst fokussiert der Browser den ersten Link im
    // Dialog (den Teilen-Link weiter unten) und scrollt automatisch dorthin.
    dialog.scrollTop = 0;
    const heading = $('about-dialog-h');
    if (heading) heading.focus({ preventScroll: true });
  });
  if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

  const shareBtn = $('about-share');
  const shareUrl = 'https://lucagiona.github.io/hno_miniapp/';
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try { await navigator.share({ title: document.title, url: shareUrl }); return; } catch (e) { /* abgebrochen: nichts weiter tun */ return; }
      }
      try {
        await navigator.clipboard.writeText(shareUrl);
        const original = shareBtn.textContent;
        shareBtn.textContent = t('about_share_copied');
        setTimeout(() => { shareBtn.textContent = original; }, 1600);
      } catch (e) { /* Zwischenablage nicht verfügbar: Link steht im Dialog zum Antippen/Kopieren bereit */ }
    });
  }
}
