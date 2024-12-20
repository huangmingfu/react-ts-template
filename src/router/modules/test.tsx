import { lazy } from 'react';
import { Outlet } from 'react-router';

import { RouteObject } from '@/types/router';

import { LazyLoad } from '../utils/lazy-load';

export default [
  {
    path: '/test',
    element: <Outlet />, // 没有元素，呈现空白
    children: [
      {
        path: '/test/count',
        element: LazyLoad(lazy(() => import('@/views/test/count'))),
        meta: {
          title: '计数标题',
        },
      },
      {
        path: '/test/create',
        element: LazyLoad(lazy(() => import('@/views/test/create'))),
      },
      {
        path: '/test/auth-test',
        element: LazyLoad(lazy(() => import('@/views/test/auth-test'))),
      },
      {
        path: '/test/error-test',
        element: LazyLoad(lazy(() => import('@/views/test/error-test/throw-error-comp'))),
      },
    ],
  },
] as RouteObject[];
