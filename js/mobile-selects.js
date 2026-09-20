/* Mobile Auswahl mit umbrechenden Texten; das native Select bleibt Datenquelle. */
export function initMobileSelects() {
  document.querySelectorAll('#karten-setup select, #quiz-setup select').forEach((select) => {
    const label = document.querySelector(`label[for="${select.id}"]`);
    if (!label) return;
    label.id = `${select.id}-label`;
    const details = document.createElement('details');
    details.className = 'mobile-select';
    const summary = document.createElement('summary');
    const selected = document.createElement('span');
    selected.id = `${select.id}-selected`;
    summary.setAttribute('aria-labelledby', `${label.id} ${selected.id}`);
    summary.append(selected);
    const options = document.createElement('div');
    options.className = 'mobile-select-options';
    details.append(summary, options);
    select.classList.add('native-select');
    select.after(details);

    function sync() {
      selected.textContent = select.selectedOptions[0]?.textContent || '';
      options.replaceChildren();
      Array.from(select.options).forEach((option) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = option.textContent;
        button.disabled = option.disabled;
        button.setAttribute('aria-pressed', String(option.selected));
        button.addEventListener('click', () => {
          select.value = option.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          details.open = false;
          summary.focus();
        });
        options.append(button);
      });
    }
    select.addEventListener('change', sync);
    new MutationObserver(sync).observe(select, { childList: true, subtree: true, characterData: true, attributes: true });
    details.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { details.open = false; summary.focus(); }
    });
    details.addEventListener('toggle', () => {
      if (details.open) document.querySelectorAll('.mobile-select').forEach((other) => {
        if (other !== details) other.open = false;
      });
    });
    label.addEventListener('click', (event) => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        event.preventDefault();
        summary.focus();
        details.open = !details.open;
      }
    });
    sync();
  });
}
