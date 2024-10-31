import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import { LazyLoad } from '../utils/lazy-load';

export default [
  {
    path: '/guild',
    element: <Outlet />, // 没有元素，呈现空白
    children: [
      {
        path: '/guild/count',
        element: LazyLoad(lazy(() => import('@/views/guild/count')))
      },
      {
        path: '/guild/create',
        element: LazyLoad(lazy(() => import('@/views/guild/create')))
      }
    ]
  }
] as RouteObject[];
