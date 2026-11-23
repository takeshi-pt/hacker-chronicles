// All enhancements are optional; the site works without JavaScript.
for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copy);
    if (!source) return;
    const text = source.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'copied!';
      setTimeout(() => button.textContent = 'copy', 1600);
    } catch (_) {
      button.textContent = 'select text to copy';
    }
  });
}
for (const el of document.querySelectorAll('[data-year]')) {
  el.textContent = new Date().getFullYear();
}
