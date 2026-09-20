/* Allgemeine Hilfsfunktionen (DOM, Text, Zufall) */

export const $ = (id) => document.getElementById(id);

export function norm(s) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');
}

export function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

export function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

export function clear(n) {
  while (n.firstChild) n.removeChild(n.firstChild);
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlight(text, tokens) {
  const frag = document.createDocumentFragment();
  if (!tokens.length) { frag.appendChild(document.createTextNode(text)); return frag; }
  const re = new RegExp('(' + tokens.map(escRe).join('|') + ')', 'gi');
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m[0] === '') { re.lastIndex++; continue; }
    if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
    frag.appendChild(el('mark', null, m[0]));
    last = m.index + m[0].length;
  }
  if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
  return frag;
}
