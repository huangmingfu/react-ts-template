import { lazy } from 'react';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../error-boundary';
import { LazyLoad, loader, routes } from './utils';

const router: RouteObject[] = [
  {
    path: '/',
    loader: loader,
    /**
     * 可以在Root组件（自己新建），用 useLoaderData 接收 loader 返回的数据做一些操作
     * @see https://reactrouter.com/en/main/hooks/use-loader-data#useloaderdata
     */
    // element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" /> // 重定向
      },
      {
        path: '/home',
        element: LazyLoad(lazy(() => import('@/views/home')))
      },
      {
        path: '/login',
        element: LazyLoad(lazy(() => import('@/views/login')))
      },
      {
        path: '/404',
        element: LazyLoad(lazy(() => import('@/components/not-fount')))
      },
      ...routes // modules 路由
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" /> // 找不到页面
  }
];

export default createBrowserRouter(router, {
  /**
   * v7 新特性（未来标志）
   * @see https://reactrouter.com/en/main/upgrading/future
   * 如果不想加 v7_ 等启用标志代码，可将 "react-router-dom" 降级至 6.27.0 版本
   */
  future: {
    v7_fetcherPersist: true,
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});
