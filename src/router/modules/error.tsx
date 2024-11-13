import { lazy } from 'react';

import { RouteObject } from '@/types/router';

import { LazyLoad } from '../utils/lazy-load';

export default {
  path: '/error-test',
  element: LazyLoad(lazy(() => import('@/views/error-test/throw-error-comp')))
} as RouteObject;
