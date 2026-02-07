'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { track } from '@databuddy/sdk';

const INTERNAL_TRAFFIC_KEY = 'internal-traffic';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const internalParam = searchParams.get('internal');
    if (internalParam === 'true' || internalParam === '1') {
      window.localStorage.setItem(INTERNAL_TRAFFIC_KEY, 'true');
      return;
    }

    if (window.localStorage.getItem(INTERNAL_TRAFFIC_KEY) === 'true') {
      return;
    }

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    track('screen_view', {
      screen_name: pathname,
      screen_class: 'Next.js',
      url,
    });
  }, [pathname, searchParams]);

  return null;
}
