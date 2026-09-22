/* Tab-Navigation. onShow: { [view]: () => void } wird beim Wechsel aufgerufen. */
import { $ } from './utils.js';

const VIEWS = ['glossar', 'karten', 'quiz'];

export function initNav(onShow = {}) {
  const tabs = document.querySelectorAll('.tabs button');

  function show(view) {
    VIEWS.forEach((v) => { $('view-' + v).hidden = v !== view; });
    tabs.forEach((b) => {
      b.setAttribute('aria-selected', b.getAttribute('data-view') === view ? 'true' : 'false');
    });
    if (onShow[view]) onShow[view]();
    window.scrollTo(0, 0);
  }

  tabs.forEach((b) => {
    b.addEventListener('click', () => show(b.getAttribute('data-view')));
  });
}
