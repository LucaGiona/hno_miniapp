/* Quiz: ausschließlich redaktionell hinterlegte Fragen und Antworten. */
import { $, el, clear } from './utils.js';
import { colorize } from './catalog.js';
import { catName, t } from './i18n.js';
import { getLang } from './lang.js';
import { box, setBox } from './storage.js';
import { availableQuestions, createRound, validateBank } from './quiz-bank.js';
import { QUIZ_TRANSLATIONS } from './quiz-translations.js';

let Q = null;

function showPart(part) {
  ['setup', 'run', 'done'].forEach(name => { $('quiz-' + name).hidden = name !== part; });
}

/* Übersetzte Anzeige einer Frage; fehlt eine Übersetzung, wird auf Deutsch zurückgefallen. */
function localize(q, lang) {
  const tr = lang !== 'de' && QUIZ_TRANSLATIONS[q.id] && QUIZ_TRANSLATIONS[q.id][lang];
  return {
    question: (tr && tr.question) || q.question,
    correctAnswer: (tr && tr.correctAnswer) || q.correctAnswer,
    distractors: (tr && tr.distractors) || q.distractors,
    explanation: (tr && tr.explanation) || q.explanation
  };
}

/* q.order enthält 4 gemischte Slot-Indizes: 0 = richtige Antwort, 1..3 = distractors[0..2]. */
function optionTexts(loc) {
  return [loc.correctAnswer, ...loc.distractors];
}

function updateSetup() {
  const pool = availableQuestions();
  const select = $('q-cat'), previous = select.value;
  clear(select);
  const all = el('option', null, t('all_n', { n: pool.length }));
  all.value = 'ALL'; select.append(all);
  const categories = [...new Set(pool.map(q => q.category))].sort((a, b) => catName(a).localeCompare(catName(b)));
  for (const category of categories) {
    const option = el('option', null, `${catName(category)} (${pool.filter(q => q.category === category).length})`);
    option.value = category; select.append(option);
  }
  select.value = categories.includes(previous) ? previous : 'ALL';
  $('q-start').disabled = !pool.length;
}

function questionTexts() {
  const q = Q.qs[Q.i];
  const loc = localize(q, getLang());
  $('q-pos').textContent = t('q_pos', { i: Q.i + 1, n: Q.qs.length });
  $('q-prompt-label').textContent = catName(q.category);
  const explanation = $('q-explanation');
  explanation.textContent = q.res ? loc.explanation : '';
  explanation.hidden = !q.res;
  $('q-feedback').textContent = q.res ? t(q.res === 'ok' ? 'ok' : 'bad') : '';
  $('q-feedback').style.color = q.res === 'ok' ? 'var(--good)' : 'var(--bad)';
  $('q-next').textContent = t(Q.i === Q.qs.length - 1 ? 'q_result' : 'q_next');
}

function renderQuestion() {
  const q = Q.qs[Q.i], lang = getLang();
  const loc = localize(q, lang);
  const texts = optionTexts(loc);
  colorize($('quiz-run'), q.category);
  $('q-bar').style.width = `${Q.i / Q.qs.length * 100}%`;
  $('q-question').textContent = loc.question;
  $('q-question').lang = lang;
  $('q-next').hidden = true;
  questionTexts();
  const wrap = $('q-options');
  clear(wrap);
  wrap.lang = lang;
  q.order.forEach(slot => {
    const button = el('button', 'opt', texts[slot]);
    button.type = 'button';
    button.addEventListener('click', () => pick(button, slot));
    wrap.append(button);
  });
  Q.locked = false;
}

function pick(button, slot) {
  if (Q.locked) return;
  Q.locked = true;
  const q = Q.qs[Q.i], correct = slot === 0;
  q.chosen = slot;
  q.res = correct ? 'ok' : 'bad';
  const buttons = $('q-options').children;
  q.order.forEach((s, i) => {
    buttons[i].disabled = true;
    if (s === 0) buttons[i].classList.add('right');
  });
  if (correct) Q.score++;
  else { button.classList.add('wrong'); Q.wrong.push(q); }
  setBox(q.glossaryId, correct ? box(q.glossaryId) + 1 : 0);
  questionTexts();
  $('q-next').hidden = false;
  $('q-next').focus();
}

function renderResult() {
  $('q-score').textContent = `${Q.score} / ${Q.qs.length}`;
  const wrap = $('q-wrong'); clear(wrap);
  if (!Q.wrong.length) { wrap.append(el('p', 'center', t('q_allright'))); return; }
  wrap.append(el('p', 'muted small', t('q_review')));
  const lang = getLang();
  for (const q of Q.wrong) {
    const loc = localize(q, lang);
    const item = el('div', 'wrong-item'); item.lang = lang;
    item.append(el('strong', null, loc.question));
    item.append(el('p', null, loc.correctAnswer));
    item.append(el('p', 'small', loc.explanation));
    wrap.append(item);
  }
}

export function refreshQuiz() {
  updateSetup();
  if (!Q) return;
  if (!$('quiz-run').hidden) {
    const q = Q.qs[Q.i], lang = getLang();
    const loc = localize(q, lang);
    const texts = optionTexts(loc);
    $('q-question').textContent = loc.question;
    $('q-question').lang = lang;
    const wrap = $('q-options');
    wrap.lang = lang;
    q.order.forEach((slot, i) => { wrap.children[i].textContent = texts[slot]; });
    questionTexts();
  } else if (!$('quiz-done').hidden) renderResult();
}

export function initQuiz() {
  const bankErrors = validateBank();
  if (bankErrors.length) console.error('Quiz-Katalog prüfen:', bankErrors);
  updateSetup();
  $('q-start').addEventListener('click', () => {
    const pool = availableQuestions({ category: $('q-cat').value });
    const qs = createRound(pool, Number($('q-len').value));
    if (!qs.length) { updateSetup(); return; }
    Q = { qs, i: 0, score: 0, wrong: [], locked: false };
    showPart('run'); renderQuestion();
  });
  $('q-next').addEventListener('click', () => {
    if (!Q || !Q.locked || Q.i >= Q.qs.length) return;
    Q.i++;
    if (Q.i < Q.qs.length) renderQuestion();
    else { $('q-bar').style.width = '100%'; renderResult(); showPart('done'); }
  });
  $('q-restart').addEventListener('click', () => { Q = null; showPart('setup'); updateSetup(); });
}
