import { LoaderFunctionArgs } from 'react-router-dom';

import { RouteObject } from '@/types/router';

export * from './lazy-load';
export * from './route-guard';

/** 路由列表 */
export const routes = getRoutesFromModules();

/**
 * 基于 router/modules 文件导出的内容动态生成路由
 */
export function getRoutesFromModules() {
  const routes: RouteObject[] = [];

  /** 路由白名单 */
  const whiteList = ['/login', '/404', '/guild'];
  /** 是否要精确控制白名单（loader加在父级路由，所有子级路由都会经过父的loader），设置为false可以减少loader的添加和递归 */
  const isExactControlWhiteList = false;

  const modules = import.meta.glob('../modules/**/*.tsx', { eager: true }) as Record<
    string,
    Record<'default', RouteObject[]>
  >;
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routes.push(...modList);
  });

  if (!isExactControlWhiteList) {
    routes.forEach((item) => {
      if (!whiteList.includes(item.path || '')) {
        item.loader = loader;
      }
    });
    return routes;
  } else {
    return addLoaderToRoutes(routes, whiteList);
  }
}

/**
 * 使用 loader 作路由守卫
 * @see https://reactrouter.com/en/main/route/loader
 */
export function loader({ request }: LoaderFunctionArgs) {
  // 获取当前路由配置
  const route = getCurrentRoute(request.url);
  // 设置标题
  document.title = route.meta?.title || import.meta.env.VITE_APP_TITLE;
  // 权限校验
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
    return false;
  }
  return true;
}

/**
 * 获取当前路由配置
 */
export const getCurrentRoute = (url: string) => {
  const pathname = getPathName(url);
  searchRoute(pathname, routes);
  return searchRoute(pathname, routes);
};

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
export function searchRoute(path: string, routes: RouteObject[] = []): RouteObject {
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

/**
 * @description 递归给路由配置添加 loader
 * @returns RouteObject
 */
export function addLoaderToRoutes(routes: RouteObject[], whiteList: string[]): RouteObject[] {
  return routes.map((route) => {
    if (!whiteList.includes(route.path || '')) {
      route.loader = loader;
    }

    if (route.children && route.children.length > 0) {
      route.children = addLoaderToRoutes(route.children as RouteObject[], whiteList);
    }

    return route;
  });
}
