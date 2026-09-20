/* Fortschritt / Info-Ansicht. onReset: wird nach dem Zurücksetzen aufgerufen (z. B. Glossar neu zeichnen). */
import { $, el, clear } from './utils.js';
import { sortedCats, inCat, colorize } from './catalog.js';
import { isKnown, resetProgress } from './storage.js';
import { t, catName } from './i18n.js';

export function renderStats() {
  const wrap = $('stats');
  clear(wrap);
  ['ALL'].concat(sortedCats()).forEach((c) => {
    const all = inCat(c), k = all.filter((e) => isKnown(e.id)).length;
    const s = el('div', 'stat');
    if (c !== 'ALL') colorize(s, c);
    const h = el('div', 'head');
    h.appendChild(el('span', null, c === 'ALL' ? t('total') : catName(c)));
    h.appendChild(el('span', null, k + ' / ' + all.length));
    const bar = el('div', 'bar'), i = el('i');
    i.style.width = (all.length ? k / all.length * 100 : 0) + '%';
    bar.appendChild(i); s.appendChild(h); s.appendChild(bar); wrap.appendChild(s);
  });
}

export function initStats(onReset) {
  $('reset').addEventListener('click', () => {
    if (window.confirm(t('reset_confirm'))) {
      resetProgress();
      renderStats();
      if (onReset) onReset();
    }
  });
}
