const revealSelector = '[data-reveal]';

function initScrollReveal() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
  if (elements.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  elements.forEach((element) => observer.observe(element));
}

document.addEventListener('astro:page-load', initScrollReveal);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal, { once: true });
} else {
  initScrollReveal();
}
