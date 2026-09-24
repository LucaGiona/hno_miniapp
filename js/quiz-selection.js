/* Reine Auswahl-Logik: keine DOM-Abhängigkeit, gezielt testbar. */
import { QUIZ_DISTRACTORS } from './quiz-distractors.js';

export function answerKey(text) {
  return String(text || '').normalize('NFKC').toLocaleLowerCase('de').replace(/[.,;:!?]/g, '').replace(/\s+/g, ' ').trim();
}
const initial = (text) => answerKey(text).match(/\p{L}/u)?.[0] || '';
function shuffled(list, random) {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Verknüpft identische Begriffe/Bedeutungen sowie Kürzel → ausgeschriebenen Begriff.
// Verhindert z. B. TE und Tonsillektomie als konkurrierende Lösungen derselben Frage.
function concepts(pool) {
  const parent = new Map();
  function root(key) {
    if (!parent.has(key)) parent.set(key, key);
    if (parent.get(key) !== key) parent.set(key, root(parent.get(key)));
    return parent.get(key);
  }
  for (const entry of pool) {
    const a = root(answerKey(entry.begriff));
    const b = root(answerKey(entry.bedeutung));
    parent.set(a, b);
    for (const alias of entry.quizAliases || []) parent.set(root(answerKey(alias)), b);
  }
  return (text) => root(answerKey(text));
}

export function buildQuestion(entry, mode, pool, { allowDrafts = false, random = Math.random, curated = QUIZ_DISTRACTORS } = {}) {
  const field = mode === 'rev' || (mode === 'tr' && entry.typ !== 'kuerzel') ? 'begriff' : 'bedeutung';
  const draft = curated[entry.id];
  const custom = draft && draft.mode === mode && (draft.status === 'approved' || (allowDrafts && draft.status === 'draft')) ? draft : null;
  const correct = custom?.correct || entry[field];
  const concept = concepts(pool);
  const excluded = new Set([concept(entry.begriff), concept(entry.bedeutung), concept(correct)]);
  const seen = new Set([answerKey(correct)]);
  const seenConcepts = new Set(excluded);
  const wrong = [];
  function add(text) {
    const key = answerKey(text), group = concept(text);
    if (!key || seen.has(key) || seenConcepts.has(group)) return;
    seen.add(key); seenConcepts.add(group); wrong.push(text);
  }
  if (custom) shuffled(custom.distractors, random).forEach(add);
  const letter = initial(correct);
  const useInitial = entry.typ === 'kuerzel' && mode !== 'rev' && initial(entry.begriff) === letter;
  const candidates = shuffled(pool.filter(x => x.id !== entry.id && (!['rev', 'tr'].includes(mode) || x.typ === entry.typ)), random);
  function rank(candidate) {
    // Bei Kürzeln zuerst die Buchstaben-Abkürzung als Lösungshinweis entschärfen.
    const singleLetter = answerKey(entry.begriff).replace(/[^\p{L}]/gu, '').length === 1;
    const initialPenalty = useInitial && initial(candidate[field]) !== letter ? (singleLetter ? 100 : 5) : 0;
    const categoryPenalty = candidate.kategorie === entry.kategorie ? 0 : 20;
    const typePenalty = candidate.typ === entry.typ ? 0 : 5;
    const lengthPenalty = Math.min(4, Math.abs(Math.log((candidate[field].length + 1) / (correct.length + 1))));
    return initialPenalty + categoryPenalty + typePenalty + lengthPenalty;
  }
  candidates.sort((a, b) => rank(a) - rank(b));
  for (const candidate of candidates) {
    if (wrong.length >= 3) break;
    add(candidate[field]);
  }
  if (wrong.length < 3) return null;
  return { e: entry, mode, correct, options: shuffled([correct, ...wrong.slice(0, 3)], random), explanation: custom?.explanation || '', draft: custom?.status === 'draft', res: null };
}

export function localDraftPreview(location) {
  return ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
}
