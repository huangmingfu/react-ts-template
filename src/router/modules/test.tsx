import { lazy } from 'react';

import { LazyLoad } from '../utils/lazy-load';

export default {
  path: '/auth-test',
  element: LazyLoad(lazy(() => import('@/views/auth-test')))
};
