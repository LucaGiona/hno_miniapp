/* Lernfortschritt (localStorage) – Leitner-artige Boxen 0..3 pro Eintrag */

const KEY = 'hno-progress-v1';
let progress = {};

export function load() {
  try { progress = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { progress = {}; }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch (e) { /* Speicher gesperrt: App läuft trotzdem */ }
}

export function box(id) {
  return (progress[id] && progress[id].box) || 0;
}

export function setBox(id, b) {
  progress[id] = { box: Math.max(0, Math.min(3, b)) };
  save();
}

export function isKnown(id) {
  return box(id) >= 2;
}

export function resetProgress() {
  progress = {};
  save();
}

/* Sprache (Oberfläche + Übersetzung): 'de' | 'en' | 'fr' */
const LANG_KEY = 'hno-lang-v1';

export function getLangPref() {
  try { const v = localStorage.getItem(LANG_KEY); return v === 'en' || v === 'fr' ? v : 'de'; } catch (e) { return 'de'; }
}

export function setLangPref(v) {
  try { localStorage.setItem(LANG_KEY, v); } catch (e) { /* egal */ }
}
