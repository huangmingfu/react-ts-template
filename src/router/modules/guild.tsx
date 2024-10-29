import { Outlet, RouteObject } from 'react-router-dom';
import { LazyLoad } from '../utils/lazy-load';
import { lazy } from 'react';

export default [
  {
    path: '/guild',
    element: <Outlet />, // 没有元素，呈现空白
    children: [
      {
        path: '/guild/create',
        element: LazyLoad(lazy(() => import('@/views/guild/create')))
      }
    ]
  }
] as RouteObject[];
