import { LoaderFunctionArgs } from 'react-router';

import { RouteObject } from '@/types/router';

export * from './lazy-load';

/** 路由列表 */
export const routes = getRoutesFromModules();

/** 路由白名单 */
export const WHITE_LIST = new Set([
  '/',
  '/login',
  '/home',
  '/404',
  '/test/create',
  '/test/count',
  '/test/error-test',
]);

/**
 * 基于 router/modules 文件导出的内容动态生成路由
 */
export function getRoutesFromModules() {
  const routes: RouteObject[] = [];

  const modules = import.meta.glob('../modules/**/*.tsx', { eager: true }) as Record<
    string,
    Record<'default', RouteObject[]>
  >;
  const addConfigurationToRoute = (r: RouteObject) => {
    r.loader = (options: LoaderFunctionArgs) => {
      // 设置标题
      document.title = r.meta?.title ?? import.meta.env.VITE_APP_TITLE;
      return loader(options);
    };
    if (r.children) {
      r.children = r.children.map((child) => addConfigurationToRoute(child));
    }
    return r;
  };
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    // 为每个路由添加 loader 并递归处理子路由
    const processedRoutes = modList.map((route) => {
      return addConfigurationToRoute(route);
    });
    routes.push(...processedRoutes);
  });
  return routes;
}

/**
 * 使用 loader 作路由守卫
 * @see https://reactrouter.com/start/data/route-object#loader
 */
export function loader({ request }: LoaderFunctionArgs) {
  const pathname = getPathName(request.url);
  // 权限校验
  const token = localStorage.getItem('token');
  // 未登录且不在白名单中，跳转到登录页
  if (!token && !WHITE_LIST.has(pathname)) {
    window.location.replace(`/login?callback=${encodeURIComponent(window.location.href)}`);
    return false;
  }
  return true;
}

/**
 * 从给定的 URL 中获取 pathname
 */
export function getPathName(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname;
  } catch {
    return window.location.pathname;
  }
}
