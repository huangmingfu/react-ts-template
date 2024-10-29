import { RouteObject } from 'react-router-dom';

export * from './lazy-load'

/**
 * 基于 src/router/routes/modules 文件结构动态生成路由
 */
export function getRoutesFromModules() {
  const menuModules: RouteObject[] = [];

  const modules = import.meta.glob('../modules/**/*.tsx', { eager: true }) as Record<
    string,
    Record<'default', RouteObject[]>
  >;
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    menuModules.push(...modList);
  });

  return menuModules;
}
