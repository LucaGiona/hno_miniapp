/* Kopfzeilenhöhe messen und als --top-h bereitstellen, damit das sticky Suchfeld
   im Glossar exakt darunter andockt – auch wenn der Titel (z. B. auf schmalen
   Bildschirmen) auf zwei Zeilen umbricht. */
function safeAreaTop() {
  const probe = document.createElement('div');
  probe.style.cssText = 'position:fixed;top:0;left:0;height:env(safe-area-inset-top);width:0;visibility:hidden;pointer-events:none';
  document.body.appendChild(probe);
  const h = probe.getBoundingClientRect().height;
  probe.remove();
  return h;
}

export function initHeaderHeight() {
  const header = document.querySelector('.top');
  if (!header) return;

  let raf = null;
  const update = () => {
    const total = header.getBoundingClientRect().height;
    const content = Math.max(0, total - safeAreaTop());
    document.documentElement.style.setProperty('--top-h', content + 'px');
  };
  const schedule = () => { if (raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };

  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(header);
  window.addEventListener('resize', schedule);
  window.addEventListener('orientationchange', schedule);
  schedule();
}
