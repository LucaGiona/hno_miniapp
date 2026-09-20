/* Abgeleitete Sicht auf die Daten: Kategorien und Filter */
import { DATA } from './data.js';
import { clear, el } from './utils.js';
import { LANGS, getLang, getTr } from './lang.js';
import { t, catName } from './i18n.js';

export { DATA };

export const CATS = [];
DATA.forEach((e) => { if (!CATS.includes(e.kategorie)) CATS.push(e.kategorie); });

/* Kategorien alphabetisch nach dem angezeigten Namen der aktuellen Sprache */
export function sortedCats() {
  const loc = getLang();
  return CATS.slice().sort((a, b) => catName(a).localeCompare(catName(b), loc, { sensitivity: 'base' }));
}

export function inCat(cat) {
  return cat === 'ALL' ? DATA : DATA.filter((e) => e.kategorie === cat);
}

/* Gruppenfarben: [Farbton, Sättigung %, Helligkeit %].
   Neue Gruppen ohne Eintrag bekommen automatisch das neutrale Schiefergrau. */
const COLORS = {
  'Ohr & Gleichgewicht': [208, 38, 45],
  'Untersuchung': [240, 28, 55],
  'Hals, Kehlkopf & Speiseröhre': [285, 24, 50],
  'Operationen': [335, 30, 50],
  'Mund & Rachen': [6, 38, 50],
  'Gabe & Katheter': [24, 45, 43],
  'Personal & Organisation': [40, 55, 36],
  'Sonstiges': [78, 32, 36],
  'Nase & Nasennebenhöhlen': [145, 28, 38],
  'Diagnostik & Bildgebung': [176, 36, 36],
  'Allgemeine Begriffe': [210, 10, 45]
};
const NEUTRAL = [210, 10, 45];

export function colorize(elm, cat) {
  const c = COLORS[cat] || NEUTRAL;
  elm.classList.add('cat');
  elm.style.setProperty('--h', c[0]);
  elm.style.setProperty('--s', c[1]);
  elm.style.setProperty('--l', c[2]);
}

export function termLabel(e) {
  return e.typ === 'kuerzel' ? t('lbl_kuerzel') : t('lbl_fach');
}

/* Kategorie-Auswahl; behält die gewählte Kategorie beim Neuaufbau (z. B. nach Sprachwechsel) */
export function fillCatSelect(sel, minCount) {
  const prev = sel.value;
  clear(sel);
  const o = el('option', null, t('all_n', { n: DATA.length }));
  o.value = 'ALL';
  sel.appendChild(o);
  sortedCats().forEach((c) => {
    const n = inCat(c).length;
    if (n < minCount) return;
    const op = el('option', null, catName(c) + ' (' + n + ')');
    op.value = c;
    sel.appendChild(op);
  });
  if (prev && Array.prototype.some.call(sel.options, (x) => x.value === prev)) sel.value = prev;
}

/* Richtungs-Auswahl für Karteikarten und Quiz; „Übersetzung → Deutsch“ nur bei EN/FR */
export function fillDirSelect(sel) {
  const prev = sel.value;
  clear(sel);
  const opts = [['fwd', t('dir_fwd')], ['rev', t('dir_rev')]];
  const l = getLang();
  if (l !== 'de') opts.push(['tr', t('dir_tr', { lang: LANGS[l] })]);
  opts.push(['mix', t('dir_mix')]);
  opts.forEach((o) => { const op = el('option', null, o[1]); op.value = o[0]; sel.appendChild(op); });
  sel.value = opts.some((o) => o[0] === prev) ? prev : 'fwd';
}

/* Konkrete Richtung für eine Karte/Frage: fwd | rev | tr */
export function resolveMode(dir, e) {
  const on = !!getTr(e);
  if (dir === 'mix') {
    const m = on ? ['fwd', 'rev', 'tr'] : ['fwd', 'rev'];
    return m[Math.floor(Math.random() * m.length)];
  }
  if (dir === 'tr' && !on) return 'fwd';
  return dir;
}

/* Deutsche Lösung zu einer Übersetzung: bei Kürzeln die Bedeutung (die Übersetzung meint sie), sonst der Fachbegriff */
export function trAnswer(e) {
  return e.typ === 'kuerzel'
    ? { field: 'bedeutung', main: e.bedeutung, sub: t('sub_kuerzel', { k: e.begriff }) }
    : { field: 'begriff', main: e.begriff, sub: e.bedeutung };
}
