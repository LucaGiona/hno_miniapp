/* Fester Fragenkatalog: keine Antworten aus dem Glossar ableiten oder ergänzen. */
import { QUIZ_QUESTIONS } from './quiz-questions.js';
import { DATA } from './data.js';

export const normalizeAnswer = text => String(text).normalize('NFKC').toLocaleLowerCase('de').replace(/\s+/g, ' ').trim();

export function validateBank(bank = QUIZ_QUESTIONS, glossary = DATA) {
  const errors = [], ids = new Set(), references = new Set();
  const entries = new Map(glossary.map(e => [e.id, e]));
  for (const q of bank) {
    if (!q || typeof q !== 'object') { errors.push('Ungültiger Fragensatz'); continue; }
    if (!q.id || ids.has(q.id)) errors.push(`Doppelte/fehlende Frage-ID: ${q.id}`);
    ids.add(q.id);
    const entry = entries.get(q.glossaryId);
    if (!entry) errors.push(`${q.id}: Glossareintrag fehlt`);
    if (references.has(q.glossaryId)) errors.push(`${q.id}: Mehrere Fragen für denselben Glossareintrag`);
    references.add(q.glossaryId);
    if (entry && (q.category !== entry.kategorie || q.term !== entry.begriff)) errors.push(`${q.id}: Begriff/Kategorie weicht vom Glossar ab`);
    for (const key of ['question', 'correctAnswer', 'explanation']) {
      if (typeof q[key] !== 'string' || !q[key].trim()) errors.push(`${q.id}: ${key} fehlt`);
    }
    if (!Array.isArray(q.distractors) || q.distractors.length !== 3 || q.distractors.some(a => typeof a !== 'string' || !a.trim())) errors.push(`${q.id}: Genau drei ausformulierte Ablenker nötig`);
    else if (new Set([q.correctAnswer, ...q.distractors].map(normalizeAnswer)).size !== 4) errors.push(`${q.id}: Antworten sind nicht unterschiedlich`);
  }
  for (const entry of glossary) if (!references.has(entry.id)) errors.push(`${entry.id}: Kein Fragensatz vorhanden`);
  return errors;
}

export function availableQuestions({ category = 'ALL' } = {}, bank = QUIZ_QUESTIONS) {
  return bank.filter(q => category === 'ALL' || q.category === category);
}

function shuffle(list, random) {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function createRound(pool, length, random = Math.random) {
  if (!Number.isInteger(length) || length < 1) return [];
  return shuffle(pool, random).slice(0, length).map(q => ({
    ...q,
    order: shuffle([0, 1, 2, 3], random),
    res: null,
    chosen: null
  }));
}
