// 或者叫 createNamespace
export function createDesign(scope: string) {
  return {
    prefixCls: scope, // 前缀示例：'pg'页面、'comp'组件、'pub'公共组件，如 'pg-home'
  };
}
