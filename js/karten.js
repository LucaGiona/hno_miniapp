/* Karteikarten */
import { $, shuffle, el, clear } from './utils.js';
import { inCat, termLabel, fillCatSelect, fillDirSelect, resolveMode, trAnswer, colorize } from './catalog.js';
import { LANGS, getLang, getTr, langBadge } from './lang.js';
import { t } from './i18n.js';
import { box, setBox, isKnown } from './storage.js';

let K = null;

export function updateKInfo() {
  const cat = $('k-cat').value || 'ALL';
  const all = inCat(cat);
  const known = all.filter((e) => isKnown(e.id)).length;
  $('k-info').textContent = t('k_info', { k: known, n: all.length });
}

function kShowPart(p) {
  ['setup', 'run', 'done'].forEach((n) => { $('karten-' + n).hidden = n !== p; });
}

/* Zeichnet die aktuelle Karte (Vorder- oder Rückseite); auch nach einem Sprachwechsel aufrufbar */
function kRender() {
  const c = K.cards[K.i];
  const e = c.e, tr = getTr(e), lang = getLang();
  const mode = c.mode === 'tr' && !tr ? 'fwd' : c.mode;
  const text = $('card-text'), sub = $('card-sub');
  colorize($('karten-run'), e.kategorie);
  clear(sub);
  text.removeAttribute('lang');
  $('card').classList.toggle('back', K.flipped);
  if (!K.flipped) {
    if (mode === 'tr') {
      $('card-label').textContent = LANGS[lang];
      text.textContent = tr; text.lang = lang;
    } else {
      $('card-label').textContent = mode === 'rev' ? t('lbl_meaning') : termLabel(e);
      text.textContent = mode === 'rev' ? e.bedeutung : e.begriff;
    }
    sub.hidden = true;
    $('card-hint').textContent = t('flip_hint');
    $('k-actions').hidden = true;
  } else {
    if (mode === 'tr') {
      const a = trAnswer(e);
      $('card-label').textContent = t('lbl_de');
      text.textContent = a.main;
      sub.textContent = a.sub;
    } else {
      $('card-label').textContent = mode === 'rev' ? termLabel(e) : t('lbl_meaning');
      text.textContent = mode === 'rev' ? e.begriff : e.bedeutung;
      if (tr) {
        const s = el('span'); s.lang = lang;
        s.appendChild(langBadge()); s.appendChild(document.createTextNode(tr));
        sub.appendChild(s);
      }
    }
    sub.hidden = !sub.firstChild && !sub.textContent;
    $('card-hint').textContent = e.hinweis || '';
    $('k-actions').hidden = false;
  }
  $('k-pos').textContent = t('k_pos', { i: K.i + 1, n: K.cards.length });
  $('k-bar').style.width = (K.i / K.cards.length * 100) + '%';
}

function kNext() {
  if (K.i >= K.cards.length) { kFinish(); return; }
  K.flipped = false;
  kRender();
}

function kFlip() {
  if (!K || K.flipped) return;
  K.flipped = true;
  kRender();
}

function kAnswer(good) {
  const c = K.cards[K.i];
  setBox(c.e.id, good ? box(c.e.id) + 1 : 0);
  if (good) K.good++; else K.again.push(c.e);
  K.i++;
  kNext();
}

function kSummary() {
  $('k-summary').textContent = t('k_sum', { g: K.good, n: K.cards.length });
  const w = $('k-wrong');
  clear(w);
  if (K.again.length) {
    w.appendChild(el('p', 'muted small', t('q_review')));
    K.again.forEach((e) => {
      const d = el('div', 'wrong-item');
      d.appendChild(el('strong', null, e.begriff));
      d.appendChild(document.createTextNode(' – ' + e.bedeutung));
      const tr = getTr(e);
      if (tr) d.appendChild(el('div', 'muted small', tr));
      w.appendChild(d);
    });
  } else {
    w.appendChild(el('p', 'center', t('k_perfect')));
  }
}

function kFinish() {
  $('k-bar').style.width = '100%';
  kSummary();
  kShowPart('done');
}

/* Nach Sprachwechsel: laufende Karte bzw. Ergebnis neu beschriften */
export function refreshKarten() {
  if (!K) return;
  if (!$('karten-run').hidden && K.i < K.cards.length) kRender();
  else if (!$('karten-done').hidden) kSummary();
}

export function initKarten() {
  fillCatSelect($('k-cat'), 1);
  fillDirSelect($('k-dir'));
  $('k-cat').addEventListener('change', updateKInfo);
  $('k-start').addEventListener('click', () => {
    const cat = $('k-cat').value, dir = $('k-dir').value, mode = $('k-mode').value;
    let pool = inCat(cat);
    if (dir === 'tr') pool = pool.filter((e) => getTr(e));
    if (mode === 'open') pool = pool.filter((e) => !isKnown(e.id));
    if (!pool.length) {
      $('k-info').textContent = t('k_allknown');
      return;
    }
    pool = shuffle(pool).slice(0, 20);
    K = {
      cards: pool.map((e) => ({ e, mode: resolveMode(dir, e) })),
      i: 0, good: 0, again: [], flipped: false
    };
    kShowPart('run');
    kNext();
  });
  $('card').addEventListener('click', kFlip);
  $('k-know').addEventListener('click', () => kAnswer(true));
  $('k-again').addEventListener('click', () => kAnswer(false));
  $('k-stop').addEventListener('click', () => { kShowPart('setup'); updateKInfo(); });
  $('k-restart').addEventListener('click', () => { kShowPart('setup'); updateKInfo(); });
}
