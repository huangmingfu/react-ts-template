import { RouteObject } from 'react-router-dom';

export * from './lazy-load';

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
