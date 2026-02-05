'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealIfVisible = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (inViewport) {
        el.classList.add('is-visible');
        return true;
      }
      return false;
    };

    elements.forEach((el) => {
      revealIfVisible(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    elements
      .filter((el) => !el.classList.contains('is-visible'))
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
