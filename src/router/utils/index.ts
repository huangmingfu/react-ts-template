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
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routes.push(...modList);
  });
  return routes;
}

/**
 * 使用 loader 作路由守卫
 * @see https://reactrouter.com/en/main/route/loader
 */
export function loader({ request }: LoaderFunctionArgs) {
  const pathname = getPathName(request.url);
  // 获取当前路由配置
  const route = searchRoute(pathname, routes);
  // 设置标题
  document.title = route.meta?.title ?? import.meta.env.VITE_APP_TITLE;
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

/**
 * @description 递归查询对应的路由
 * @param path 当前访问地址
 * @param routes 路由列表
 * @returns RouteObject
 */
export function searchRoute(path: string, routes: RouteObject[] = []) {
  let result = {};
  for (const item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children as RouteObject[]);
      if (Object.keys(res).length) result = res;
    }
  }
  return result as RouteObject;
}
