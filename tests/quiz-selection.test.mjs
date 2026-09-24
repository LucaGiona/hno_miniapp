import assert from 'node:assert/strict';
import { DATA } from '../js/data.js';
import { QUIZ_DISTRACTORS } from '../js/quiz-distractors.js';
import { buildQuestion, answerKey, localDraftPreview } from '../js/quiz-selection.js';

const find = id => DATA.find(e => e.id === id);
const counts = {};
for (const e of DATA) counts[e.kategorie] = (counts[e.kategorie] || 0) + 1;
assert.ok(Object.values(counts).every(n => n >= 4));
const positions = new Set();
for (let round = 0; round < 20; round++) {
  for (const entry of DATA) {
    for (const mode of ['fwd', 'rev', 'tr']) {
      const q = buildQuestion(entry, mode, DATA);
      assert.ok(q, `${entry.id}/${mode}`);
      assert.equal(q.options.length, 4);
      assert.equal(new Set(q.options.map(answerKey)).size, 4);
      assert.equal(q.options.filter(o => o === q.correct).length, 1);
      assert.equal(q.draft, false);
      positions.add(q.options.indexOf(q.correct));
    }
  }
}
assert.equal(positions.size, 4);
const t = buildQuestion(find('k061'), 'fwd', DATA);
assert.ok(t.options.every(o => /^t/i.test(o)));
const preview = buildQuestion(find('k061'), 'fwd', DATA, { allowDrafts: true });
assert.deepEqual(new Set(preview.options), new Set(['Temperatur', 'Trinkmenge', 'Tagesgewicht', 'Therapiedauer']));
for (const id of Object.keys(QUIZ_DISTRACTORS)) {
  assert.ok(find(id));
  const q = buildQuestion(find(id), 'fwd', DATA, { allowDrafts: true });
  assert.ok(q.draft && q.explanation);
  assert.equal(q.options.length, 4);
  assert.equal(q.correct, QUIZ_DISTRACTORS[id].correct);
  assert.equal(buildQuestion(find(id), 'rev', DATA, { allowDrafts: true }).draft, false);
}
assert.equal(localDraftPreview({hostname:'lucagiona.github.io'}), false);
assert.equal(localDraftPreview({hostname:'localhost'}), true);
assert.equal(localDraftPreview({hostname:'127.0.0.1'}), true);

const e = (id,begriff,bedeutung,kategorie='A') => ({ id,begriff,bedeutung,kategorie,typ:'fachbegriff' });
const fixture = [e('1','Alpha','Definition'),e('2','Alias','Definition'),e('3','Definition','Definition lang'),e('4','Beta','Zwei'),e('5','Gamma','Drei'),e('6','Delta','Vier'),e('7','Extern','Fünf','B')];
const q = buildQuestion(fixture[0], 'fwd', fixture);
assert.deepEqual(new Set(q.options),new Set(['Definition','Zwei','Drei','Vier']));
assert.equal(buildQuestion(fixture[0], 'fwd', fixture.slice(0,4)), null);
const fallback = buildQuestion(fixture[0], 'fwd', fixture.filter(x=>x.id!=='6'));
assert.ok(fallback.options.includes('Fünf'));
const duplicates = [e('1','A','Beispiel'), e('2','B',' BEISPIEL. '), e('3','C','Zwei'),e('4','D','Drei')];
assert.equal(buildQuestion(duplicates[0], 'fwd', duplicates),null);
const approved = buildQuestion(find('k061'),'fwd',DATA,{curated:{k061:{...QUIZ_DISTRACTORS.k061,status:'approved'}}});
assert.equal(approved.draft,false);
assert.ok(approved.options.includes('Therapiedauer'));
console.log(`Bestanden: ${DATA.length} Einträge × 3 Richtungen × 20 Runden; Kategorie-Fallback, Synonyme, Entwurfsgrenze, T-Falle und Freigabe.`);
