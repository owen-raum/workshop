'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (!elements.length) return;

    // Reset animations on route change
    elements.forEach((el) => el.classList.remove('is-visible'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // Small delay to allow CSS transition reset
    const timeout = setTimeout(() => {
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
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
