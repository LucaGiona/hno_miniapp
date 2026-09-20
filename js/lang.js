/* Sprach-Schalter (DE / EN / FR): Zustand, Umschalter im Kopf, Hilfsfunktionen.
   DE = deutsche Oberfläche ohne Übersetzung; EN/FR = Oberfläche in dieser Sprache plus Übersetzung der Begriffe. */
import { $, el } from './utils.js';
import { getLangPref, setLangPref } from './storage.js';

export const LANGS = { en: 'English', fr: 'Français' };

let lang = 'de';

export function getLang() { return lang; }

/* Übersetzung eines Eintrags in der gewählten Sprache ('' bei DE oder wenn nicht vorhanden) */
export function getTr(e) {
  return lang !== 'de' && e[lang] ? e[lang] : '';
}

/* Kleines Sprach-Kürzel (EN/FR) als Badge */
export function langBadge() {
  return el('span', 'lang-badge', lang.toUpperCase());
}

export function initLang(onChange) {
  lang = getLangPref();
  const btns = Array.prototype.slice.call($('lang-switch').querySelectorAll('button'));
  const sync = () => btns.forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'));
  btns.forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    setLangPref(lang);
    sync();
    onChange(lang);
  }));
  sync();
}
