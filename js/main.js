import { initMobileSelects } from './mobile-selects.js';
/* Einstiegspunkt: verdrahtet die Module */
import { $ } from './utils.js';
import { load } from './storage.js';
import { initLang } from './lang.js';
import { applyStatic } from './i18n.js';
import { fillCatSelect, fillDirSelect } from './catalog.js';
import { initNav } from './nav.js';
import { initGlossar, refreshGlossar } from './glossar.js';
import { initKarten, updateKInfo, refreshKarten } from './karten.js';
import { initQuiz, refreshQuiz } from './quiz.js';
import { initHeaderHeight } from './header.js';
import { initPwa } from './pwa.js';
import { initAbout } from './about.js';

const VERSION = '0.3.45';

/* Alles sprachabhängige neu beschriften (Start und Sprachwechsel) */
function relabel() {
  applyStatic({ v: VERSION });
  fillCatSelect($('k-cat'), 1);
  fillCatSelect($('q-cat'), 4);
  fillDirSelect($('k-dir'));
  fillDirSelect($('q-dir'));
  refreshGlossar();
  updateKInfo();
  refreshKarten();
  refreshQuiz();
}

load();
initLang(relabel);
initNav({ karten: updateKInfo });
initGlossar();
initKarten();
initQuiz();
initPwa();
initAbout();
initHeaderHeight();
relabel();

initMobileSelects();
