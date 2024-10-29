import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad, getRoutesFromModules } from './utils';

/** 动态导入 modules 的路由 */
const routes = getRoutesFromModules();

const router: RouteObject[] = [
  {
    path: '/home',
    element: LazyLoad(lazy(() => import('@/views/home')))
  },
  {
    path: '/404',
    element: LazyLoad(lazy(() => import('@/components/not-fount')))
  },
  ...routes,
  // 重定向
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];

export default createBrowserRouter(router);
