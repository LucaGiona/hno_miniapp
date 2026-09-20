/* Glossar: Kategorie-Chips, Suche, Liste */
import { $, el, clear, norm, highlight } from './utils.js';
import { DATA, sortedCats, inCat, colorize } from './catalog.js';
import { isKnown } from './storage.js';
import { getLang, getTr, langBadge } from './lang.js';
import { t, catName } from './i18n.js';

let gCat = 'ALL';

function buildChips() {
  const wrap = $('chips-glossar');
  clear(wrap);
  ['ALL'].concat(sortedCats()).forEach((c) => {
    const b = el('button', 'chip', c === 'ALL' ? t('all_n', { n: DATA.length }) : catName(c) + ' (' + inCat(c).length + ')');
    b.type = 'button';
    if (c !== 'ALL') colorize(b, c);
    b.setAttribute('aria-pressed', c === gCat ? 'true' : 'false');
    b.addEventListener('click', () => { gCat = c; buildChips(); renderList(); });
    wrap.appendChild(b);
  });
}

export function renderList() {
  const q = $('q').value.trim();
  const tokens = q ? norm(q).split(/\s+/).filter(Boolean) : [];
  const rawTokens = q ? q.split(/\s+/).filter(Boolean) : [];
  let items = inCat(gCat).map((e) => ({ e, nt: norm(e.begriff), nd: norm(e.bedeutung), ntr: norm(getTr(e)) }));
  if (tokens.length) {
    items = items.filter((x) => tokens.every((w) => x.nt.includes(w) || x.nd.includes(w) || x.ntr.includes(w)));
    const t0 = tokens[0];
    items.forEach((x) => {
      x.score = x.nt === t0 ? 0 : x.nt.indexOf(t0) === 0 ? 1 : x.nt.indexOf(t0) > 0 ? 2 : 3;
    });
    items.sort((a, b) => a.score - b.score || a.e.begriff.localeCompare(b.e.begriff, 'de'));
  } else {
    items.sort((a, b) => a.e.begriff.localeCompare(b.e.begriff, 'de', { sensitivity: 'base' }));
  }
  $('count').textContent = items.length === 1 ? t('count_one') : t('count_many', { n: items.length });
  const list = $('list');
  clear(list);
  if (!items.length) { list.appendChild(el('p', 'empty', t('empty'))); return; }
  let lastLetter = '';
  const frag = document.createDocumentFragment();
  items.forEach((x) => {
    const e = x.e;
    if (!tokens.length) {
      const L = norm(e.begriff).charAt(0).toUpperCase();
      if (L !== lastLetter) { lastLetter = L; frag.appendChild(el('div', 'letter', L)); }
    }
    const row = el('div', 'entry');
    colorize(row, e.kategorie);
    const term = el('div', 't'); term.appendChild(highlight(e.begriff, rawTokens));
    const d = el('div', 'd'); d.appendChild(highlight(e.bedeutung, rawTokens));
    row.appendChild(term); row.appendChild(d);
    const trText = getTr(e);
    if (trText) {
      const r = el('div', 'tr'); r.lang = getLang();
      r.appendChild(langBadge()); r.appendChild(highlight(trText, rawTokens));
      row.appendChild(r);
    }
    const meta = el('div', 'meta');
    if (isKnown(e.id)) { const k = el('span', 'known'); k.title = t('learned'); meta.appendChild(k); }
    meta.appendChild(el('span', 'tag', catName(e.kategorie)));
    if (e.hinweis) {
      const f = el('span', 'flag', t('check')); f.title = e.hinweis;
      meta.appendChild(f);
      meta.appendChild(document.createTextNode(' ' + e.hinweis));
    }
    row.appendChild(meta);
    frag.appendChild(row);
  });
  list.appendChild(frag);
}

/* Nach Sprachwechsel: Filterbuttons und Liste neu beschriften */
export function refreshGlossar() {
  buildChips();
  renderList();
}

export function initGlossar() {
  let searchTimer;
  $('q').addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(renderList, 60); });
  buildChips();
  renderList();
}
