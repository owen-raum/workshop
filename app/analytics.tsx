'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { track } from '@databuddy/sdk';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    track('screen_view', {
      screen_name: pathname,
      screen_class: 'Next.js',
      url,
    });
  }, [pathname, searchParams]);

  return null;
}
