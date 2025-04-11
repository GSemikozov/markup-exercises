export function initCollapsibles() {
  document.querySelectorAll('.js-collapsed').forEach((details) => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('.collapsed__content');

    if (!summary || !content) return;

    const contentId =
      content.id || `collapsed-content-${Math.random().toString(36).substr(2, 9)}`;
    content.id = contentId;
    summary.setAttribute('aria-controls', contentId);

    if (details.open) {
      content.hidden = false;
      content.style.height = `${content.scrollHeight}px`;
      summary.setAttribute('aria-expanded', 'true');
    } else {
      summary.setAttribute('aria-expanded', 'false');
    }

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = details.hasAttribute('open');

      if (isOpen) {
        content.style.height = `${content.scrollHeight}px`;
        requestAnimationFrame(() => {
          content.style.height = '0px';
        });

        content.addEventListener(
          'transitionend',
          () => {
            content.hidden = true;
            details.removeAttribute('open');
            summary.setAttribute('aria-expanded', 'false');
          },
          { once: true }
        );
      } else {
        details.setAttribute('open', '');
        content.hidden = false;
        const height = content.scrollHeight;
        content.style.height = '0px';

        requestAnimationFrame(() => {
          content.style.height = `${height}px`;
        });

        content.addEventListener(
          'transitionend',
          () => {
            content.style.height = '';
            summary.setAttribute('aria-expanded', 'true');
          },
          { once: true }
        );
      }
    });
  });
}
