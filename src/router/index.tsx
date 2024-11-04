import { lazy } from 'react';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import { LazyLoad, routes } from './utils';

const router: RouteObject[] = [
  {
    path: '/home',
    element: LazyLoad(lazy(() => import('@/views/home')))
  },
  {
    path: '/login',
    element: LazyLoad(lazy(() => import('@/views/login')))
  },
  ...routes, // modules 路由
  {
    path: '/',
    element: <Navigate to="/home" /> // 重定向
  },
  {
    path: '/404',
    element: LazyLoad(lazy(() => import('@/components/not-fount')))
  },
  {
    path: '*',
    element: <Navigate to="/404" /> // 找不到页面
  }
];

export default createBrowserRouter(router);
