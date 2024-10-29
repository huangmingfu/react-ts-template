import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { LazyLoad } from './lazy-load';

/** 动态导入modules的路由 */
const routes: RouteObject[] = [];
const modules = import.meta.glob('./modules/**.tsx', { eager: true }) as Record<
  string,
  Record<'default', RouteObject[]>
>;
for (const path in modules) {
  routes.push(modules[path].default[0]);
}

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
