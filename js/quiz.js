/* Quiz (Multiple Choice) */
import { $, el, clear, shuffle } from './utils.js';
import { DATA, inCat, fillCatSelect, fillDirSelect, resolveMode, trAnswer, colorize } from './catalog.js';
import { getLang, getTr, langBadge } from './lang.js';
import { t } from './i18n.js';
import { box, setBox } from './storage.js';

let Q = null;

function qShowPart(p) {
  ['setup', 'run', 'done'].forEach((n) => { $('quiz-' + n).hidden = n !== p; });
}

function makeQuestion(e, mode, poolAll) {
  const tr = mode === 'tr';
  const field = tr ? trAnswer(e).field : mode === 'rev' ? 'begriff' : 'bedeutung';
  const correct = e[field];
  const base = poolAll.filter((x) => x.id !== e.id && (!tr || x.typ === e.typ));
  const sameCat = base.filter((x) => x.kategorie === e.kategorie);
  const sameTyp = base.filter((x) => x.typ === e.typ && x.kategorie !== e.kategorie);
  const cand = shuffle(sameCat).concat(shuffle(sameTyp));
  const opts = [correct];
  for (let i = 0; i < cand.length && opts.length < 4; i++) {
    if (!opts.includes(cand[i][field])) opts.push(cand[i][field]);
  }
  return {
    e, mode, correct, options: shuffle(opts), lang: getLang(), res: null,
    prompt: tr ? getTr(e) : mode === 'rev' ? e.bedeutung : e.begriff
  };
}

/* Alle sprachabhängigen Texte der aktuellen Frage (auch nach einem Sprachwechsel aufrufbar) */
function qTexts() {
  const q = Q.qs[Q.i];
  $('q-pos').textContent = t('q_pos', { i: Q.i + 1, n: Q.qs.length });
  $('q-prompt-label').textContent = q.mode === 'tr' ? t('q_tr')
    : q.mode === 'rev' ? t('q_rev')
    : t(q.e.typ === 'kuerzel' ? 'q_what_k' : 'q_what_f');
  const fb = $('q-feedback'), box2 = $('q-tr');
  clear(box2);
  if (q.res) {
    fb.textContent = t(q.res === 'ok' ? 'ok' : 'bad');
    fb.style.color = q.res === 'ok' ? 'var(--good)' : 'var(--bad)';
    if (q.mode === 'tr') {
      box2.appendChild(document.createTextNode(q.e.begriff + ' – ' + q.e.bedeutung));
    } else if (getTr(q.e)) {
      const s = el('span'); s.lang = getLang();
      s.appendChild(langBadge()); s.appendChild(document.createTextNode(getTr(q.e)));
      box2.appendChild(s);
    }
    $('q-next').textContent = Q.i === Q.qs.length - 1 ? t('q_result') : t('q_next');
  } else {
    fb.textContent = '';
  }
  box2.hidden = !box2.firstChild;
}

function qRender() {
  const q = Q.qs[Q.i];
  colorize($('quiz-run'), q.e.kategorie);
  $('q-bar').style.width = (Q.i / Q.qs.length * 100) + '%';
  $('q-question').textContent = q.prompt;
  if (q.mode === 'tr') $('q-question').lang = q.lang; else $('q-question').removeAttribute('lang');
  $('q-next').hidden = true;
  qTexts();
  const wrap = $('q-options');
  clear(wrap);
  q.options.forEach((o) => {
    const b = el('button', 'opt', o);
    b.type = 'button';
    b.addEventListener('click', () => qPick(b, o));
    wrap.appendChild(b);
  });
  Q.locked = false;
}

function qPick(btn, val) {
  if (Q.locked) return;
  Q.locked = true;
  const q = Q.qs[Q.i], ok = val === q.correct;
  Array.prototype.forEach.call($('q-options').children, (b) => {
    b.disabled = true;
    if (b.textContent === q.correct) b.classList.add('right');
  });
  if (ok) {
    Q.score++; setBox(q.e.id, box(q.e.id) + 1);
    q.res = 'ok';
  } else {
    btn.classList.add('wrong'); Q.wrong.push(q); setBox(q.e.id, 0);
    q.res = 'bad';
  }
  qTexts();
  $('q-next').hidden = false;
  $('q-next').focus();
}

function qDone() {
  $('q-score').textContent = Q.score + ' / ' + Q.qs.length;
  const w = $('q-wrong');
  clear(w);
  if (Q.wrong.length) {
    w.appendChild(el('p', 'muted small', t('q_review')));
    Q.wrong.forEach((q) => {
      const d = el('div', 'wrong-item');
      d.appendChild(el('strong', null, q.e.begriff));
      d.appendChild(document.createTextNode(' – ' + q.e.bedeutung));
      if (getTr(q.e)) d.appendChild(el('div', 'muted small', getTr(q.e)));
      w.appendChild(d);
    });
  } else {
    w.appendChild(el('p', 'center', t('q_allright')));
  }
}

function qFinish() {
  $('q-bar').style.width = '100%';
  qDone();
  qShowPart('done');
}

/* Nach Sprachwechsel: laufende Frage bzw. Ergebnis neu beschriften */
export function refreshQuiz() {
  if (!Q) return;
  if (!$('quiz-run').hidden) qTexts();
  else if (!$('quiz-done').hidden) qDone();
}

export function initQuiz() {
  fillCatSelect($('q-cat'), 4);
  fillDirSelect($('q-dir'));
  $('q-next').addEventListener('click', () => {
    Q.i++;
    if (Q.i >= Q.qs.length) qFinish(); else qRender();
  });
  $('q-start').addEventListener('click', () => {
    const cat = $('q-cat').value, dir = $('q-dir').value, len = parseInt($('q-len').value, 10);
    const pool = inCat(cat);
    if (pool.length < 4) return;
    const picked = shuffle(pool).slice(0, Math.min(len, pool.length));
    Q = {
      qs: picked.map((e) => makeQuestion(e, resolveMode(dir, e), DATA)),
      i: 0, score: 0, wrong: [], locked: false
    };
    qShowPart('run');
    qRender();
  });
  $('q-restart').addEventListener('click', () => qShowPart('setup'));
}
