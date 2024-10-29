export function useDesign(scope: string) {
  return {
    prefixCls: scope, // 'pg'页面、'cmp'组件、'pub'公共组件
  };
}
