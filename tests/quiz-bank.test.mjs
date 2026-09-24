import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { QUIZ_QUESTIONS as bank } from '../js/quiz-questions.js';
import { DATA } from '../js/data.js';
import { validateBank, availableQuestions, createRound } from '../js/quiz-bank.js';

assert.equal(bank.length, 160);
assert.deepEqual(validateBank(), []);
assert.deepEqual(new Set(bank.map(q => q.glossaryId)), new Set(DATA.map(e => e.id)));
assert.equal(availableQuestions().length, 160);
for (const category of new Set(DATA.map(e => e.kategorie))) {
  const pool = availableQuestions({ category });
  assert.ok(pool.length > 0);
  assert.ok(pool.every(q => q.category === category));
  assert.equal(createRound(pool, 999).length, pool.length);
}
const original = JSON.stringify(bank);
const positions = new Set();
let seed = 13;
const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
for (let run = 0; run < 30; run++) {
  const round = createRound(bank, 160, random);
  assert.equal(new Set(round.map(q => q.id)).size, 160);
  for (const q of round) {
    assert.equal(q.order.length, 4);
    assert.deepEqual(new Set(q.order), new Set([0, 1, 2, 3]));
    positions.add(q.order.indexOf(0));
  }
}
assert.equal(positions.size, 4);
assert.equal(JSON.stringify(bank), original);
assert.equal(createRound(bank, 0).length, 0);
assert.equal(createRound(bank, NaN).length, 0);
assert.equal(createRound(bank, 5).length, 5);
assert.equal(createRound([], 5).length, 0);
assert.ok(validateBank([{ ...bank[0], distractors: [bank[0].correctAnswer, 'X', 'Y'] }, ...bank.slice(1)]).some(e => e.includes('unterschiedlich')));
assert.ok(validateBank(bank.slice(1)).some(e => e.includes('Kein Fragensatz')));
assert.ok(validateBank([...bank, bank[0]]).some(e => e.includes('Doppelte')));
const kolo = bank.find(q => q.glossaryId === 'k052');
assert.ok(![kolo.correctAnswer, ...kolo.distractors].some(a => /koloskopie/i.test(a)));
assert.ok(bank.find(q => q.glossaryId === 'k060').correctAnswer.includes('oder'));
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
assert.ok(!html.includes('id="q-dir"'));
assert.ok(html.includes('id="k-dir"'));
const sw = readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
for (const asset of sw.split('const ASSETS = [')[1].split('];')[0].matchAll(/'([^']+)'/g)) {
  assert.ok(existsSync(new URL('../' + asset[1], import.meta.url)), asset[1]);
}
assert.ok(!sw.includes('quiz-selection.js') && !sw.includes('quiz-distractors.js'));
console.log('Bestanden: 160 feste Fragensätze, eindeutige Antworten, Kategorien, Zufallspositionen, keine Inhaltsmutation, keine Kolo-Wortanfangsfalle und vollständiger Offline-Cache.');
