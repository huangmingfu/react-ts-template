import { lazy } from 'react';
import { Outlet } from 'react-router';

import { RouteObject } from '@/types/router';

import { LazyLoad } from '../utils/lazy-load';

export default [
  {
    path: '/guild',
    element: <Outlet />, // 没有元素，呈现空白
    children: [
      {
        path: '/guild/count',
        element: LazyLoad(lazy(() => import('@/views/guild/count'))),
        meta: {
          title: '计数标题'
        }
      },
      {
        path: '/guild/create',
        element: LazyLoad(lazy(() => import('@/views/guild/create')))
      }
    ]
  }
] as RouteObject[];
